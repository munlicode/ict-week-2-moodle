/**
 * AITU Mock Authentication & Session Manager for Astro Application
 * Handles mock login, OpenID animated sign-in, session expiration, and remember me duration.
 */
(function () {
  const SESSION_KEY = 'aitu_mock_session';
  const LOGIN_PAGE = '/login';
  const DEFAULT_HOME = '/';

  window.MockAuth = {
    // Get current active session if not expired
    getSession: function () {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const session = JSON.parse(raw);
        if (!session || !session.expiresAt) return null;
        if (Date.now() >= session.expiresAt) {
          this.clearSession();
          return null;
        }
        return session;
      } catch (e) {
        return null;
      }
    },

    // Save session with custom remember hours
    setSession: function (username, hours) {
      const numHours = parseFloat(hours) || 2;
      const now = Date.now();
      const expiresAt = now + (numHours * 60 * 60 * 1000);
      const session = {
        username: username || 'aitu_student',
        name: 'AITU Student',
        email: 'aitu_student@astanait.edu.kz',
        loginTime: now,
        expiresAt: expiresAt,
        rememberHours: numHours
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    },

    clearSession: function () {
      localStorage.removeItem(SESSION_KEY);
    },

    logout: function () {
      this.clearSession();
      window.location.href = LOGIN_PAGE + '?msg=logged_out';
    },

    // Enforce authentication on protected pages
    requireAuth: function () {
      const session = this.getSession();
      const currentPath = decodeURIComponent(window.location.pathname);
      const isLoginPage = currentPath.endsWith('/login') || currentPath.endsWith('/login/') || currentPath.includes('login');

      if (!session && !isLoginPage) {
        window.location.href = LOGIN_PAGE + '?reason=session_expired';
        return false;
      }

      if (session && !isLoginPage) {
        const remainingTime = session.expiresAt - Date.now();
        if (remainingTime > 0) {
          setTimeout(() => {
            alert('Your session has expired. Redirecting to login page...');
            window.location.href = LOGIN_PAGE + '?reason=session_expired';
          }, remainingTime);
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            this.bindLogoutLinks();
            this.renderSessionBadge(session);
          });
        } else {
          this.bindLogoutLinks();
          this.renderSessionBadge(session);
        }
      }

      return true;
    },

    // Redirect logged-in users away from the login page
    redirectIfAuthenticated: function () {
      const session = this.getSession();
      if (session) {
        window.location.href = DEFAULT_HOME;
      }
    },

    // Rebind logout links across pages
    bindLogoutLinks: function () {
      const logoutLinks = document.querySelectorAll('a[href*="logout"], a.logout-link, #logout-btn');
      logoutLinks.forEach(link => {
        link.removeAttribute('href');
        link.style.cursor = 'pointer';
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.logout();
        });
      });
    },

    // Floating live session badge on protected pages
    renderSessionBadge: function (session) {
      if (!session) return;
      if (document.getElementById('session-timer-badge')) return;

      const userNavElements = document.querySelectorAll('.usertext, .user-name, .userbutton .usertext');
      userNavElements.forEach(el => {
        el.textContent = session.name + ' (' + session.username + ')';
      });

      const badge = document.createElement('div');
      badge.id = 'session-timer-badge';
      badge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
        background: rgba(15, 23, 42, 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 40px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 13px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        border: 1px solid rgba(255,255,255,0.18);
        display: flex;
        align-items: center;
        gap: 12px;
        transition: all 0.3s ease;
      `;

      const updateTimer = () => {
        const remaining = session.expiresAt - Date.now();
        if (remaining <= 0) {
          badge.innerHTML = '<span style="color:#f87171; font-weight:600;">Session Expired</span>';
          setTimeout(() => {
            window.location.href = LOGIN_PAGE + '?reason=session_expired';
          }, 800);
          return;
        }

        const hrs = Math.floor(remaining / (1000 * 60 * 60));
        const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((remaining % (1000 * 60)) / 1000);

        let timeStr = '';
        if (hrs > 0) timeStr += hrs + 'h ';
        timeStr += mins + 'm ' + secs + 's';

        badge.innerHTML = `
          <span style="display:inline-block; width:8px; height:8px; background:#4ade80; border-radius:50%; box-shadow:0 0 10px #4ade80;"></span>
          <span>Logged in: <strong style="color:#f3f4f6;">${session.username}</strong></span>
          <span style="opacity:0.3;">|</span>
          <span style="color:#93c5fd; font-family: monospace; font-size: 13px;">${timeStr} left</span>
          <button id="badge-logout-btn" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; cursor: pointer; padding: 3px 10px; border-radius: 20px; font-weight: 600; font-size: 12px; transition: all 0.2s ease;">Logout</button>
        `;

        const logoutBtn = badge.querySelector('#badge-logout-btn');
        if (logoutBtn) {
          logoutBtn.onmouseover = () => { logoutBtn.style.background = '#ef4444'; logoutBtn.style.color = '#fff'; };
          logoutBtn.onmouseout = () => { logoutBtn.style.background = 'rgba(239, 68, 68, 0.2)'; logoutBtn.style.color = '#fca5a5'; };
          logoutBtn.onclick = (e) => {
            e.preventDefault();
            this.logout();
          };
        }
      };

      updateTimer();
      setInterval(updateTimer, 1000);
      document.body.appendChild(badge);
    },

    // Trigger mock OpenID animated authentication overlay
    triggerOpenIDLogin: function (hours) {
      const rememberHours = parseFloat(hours) || 24;

      const overlay = document.createElement('div');
      overlay.id = 'openid-modal-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      overlay.innerHTML = `
        <div style="background: #ffffff; width: 90%; max-width: 440px; border-radius: 20px; padding: 36px 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35); text-align: center; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, #0078d4, #50e6ff, #0078d4); background-size: 200% 100%; animation: shimmer 2s linear infinite;"></div>
          
          <div style="margin-bottom: 20px; position: relative; display: inline-block;">
            <div style="width: 72px; height: 72px; background: #e0f2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <svg width="40" height="40" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
            </div>
            <div class="openid-spinner" style="position: absolute; top: -6px; left: -6px; width: 84px; height: 84px; border: 3px solid transparent; border-top-color: #0078d4; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          </div>

          <h3 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0;">OpenID Connect Authentication</h3>
          <p id="openid-status-text" style="font-size: 14px; color: #64748b; margin: 0 0 24px 0; min-height: 20px;">Connecting to Astana IT University SSO...</p>

          <div style="background: #f1f5f9; border-radius: 12px; height: 10px; width: 100%; overflow: hidden; margin-bottom: 16px;">
            <div id="openid-progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #0078d4, #3b82f6); border-radius: 12px; transition: width 0.4s ease;"></div>
          </div>

          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; color: #475569;">
            <span style="font-weight: 600;">Account:</span>
            <span style="background: #e2e8f0; padding: 2px 8px; border-radius: 6px; font-family: monospace;">aitu_student@astanait.edu.kz</span>
          </div>
        </div>

        <style>
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        </style>
      `;

      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
      });

      const progressBar = overlay.querySelector('#openid-progress-bar');
      const statusText = overlay.querySelector('#openid-status-text');

      const steps = [
        { progress: '25%', text: 'Establishing SSL Handshake with OpenID Provider...', delay: 300 },
        { progress: '60%', text: 'Authenticating credentials for aitu_student...', delay: 800 },
        { progress: '90%', text: 'OAuth Token Issued! Setting up user session...', delay: 1300 },
        { progress: '100%', text: 'Success! Redirecting to dashboard...', delay: 1700 }
      ];

      steps.forEach(step => {
        setTimeout(() => {
          if (progressBar) progressBar.style.width = step.progress;
          if (statusText) statusText.textContent = step.text;
        }, step.delay);
      });

      setTimeout(() => {
        this.setSession('aitu_student', rememberHours);
        window.location.href = DEFAULT_HOME;
      }, 2000);
    }
  };
})();
