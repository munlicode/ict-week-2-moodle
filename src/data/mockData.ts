export interface Course {
  id: number;
  name: string;
  instructor: string;
}

export interface Announcement {
  id: string;
  discussionId: string;
  title: string;
  author: string;
  authorId: string;
  date: string;
  datetime: string;
  avatar: string;
  contentKaz: string;
  contentEng: string;
  repliesCount: number;
}

export interface DayFilter {
  label: string;
  filterName: string;
  from: string;
  to?: string;
  active?: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  courseName: string;
  dueDate: string;
  dueDateFormatted: string;
  dateGroup: string;
  time: string;
  overdue?: boolean;
  actionUrl: string;
  actionLabel?: string;
  activityType: "assignment" | "quiz";
  activityDetails: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  children?: NavigationItem[];
}

export interface QuickLinkItem {
  label: string;
  href: string;
  active?: boolean;
  children?: QuickLinkItem[];
}

export const navigationData: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      {
        label: "Dashboard",
        href: "/",
      },
      {
        label: "My courses",
        href: "/my-courses",
      },
      {
        label: "Site announcements",
        href: "/announcements",
      },
    ],
  },
];

export const quickLinksData: QuickLinkItem[] = [
  {
    label: "Attendance",
    href: "/attendance?sort=all",
  },
  {
    label: "Outlook",
    href: "https://outlook.cloud.microsoft/mail/",
  },
  {
    label: "Learn",
    href: "http://learn.astanait.edu.kz/",
  },
  {
    label: "Library",
    href: "https://library.astanait.edu.kz/MegaPro/Web/Search/Simple",
  },
  {
    label: "DU (du.astanait.edu.kz)",
    href: "https://du.astanait.edu.kz",
  },
  {
    label: "AITU Map",
    href: "https://yuujiso.github.io/aitumap/",
  },
];
export const timelineItems: TimelineItem[] = [
  {
    id: "84852",
    title: "Practice session week 4 (graded assignment 2)",
    courseName: "Sociology | Nurkanat Anel",
    dueDate: "2026-09-25T15:01:00+05:00",
    dueDateFormatted: "25 September 2026, 3:01 PM",
    dateGroup: "Friday, 25 September 2026",
    time: "15:01",
    overdue: true,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=84852",
    activityType: "assignment",
    activityDetails: "Assignment requires action",
  },
  {
    id: "82874",
    title: "Quiz 1",
    courseName: "Discrete Mathematics | Duisen Zhanerke",
    dueDate: "2026-09-28T00:00:00+05:00",
    dueDateFormatted: "28 September 2026, 12:00 AM",
    dateGroup: "Monday, 28 September 2026",
    time: "00:00",
    overdue: true,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=82874",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "83347",
    title: "Assignment 2 (upload your file) - CS-2602",
    courseName: "Information and Communication Technologies | Sembayev Talgat",
    dueDate: "2026-10-01T23:59:00+05:00",
    dueDateFormatted: "1 October 2026, 11:59 PM",
    dateGroup: "Thursday, 1 October 2026",
    time: "23:59",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=83347",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "86217",
    title: "Homework 3",
    courseName: "Discrete Mathematics | Duisen Zhanerke",
    dueDate: "2026-10-04T23:59:00+05:00",
    dueDateFormatted: "4 October 2026, 11:59 PM",
    dateGroup: "Sunday, 4 October 2026",
    time: "23:59",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=86217",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "87087",
    title: "Temporary learn1",
    courseName: "Information and Communication Technologies | Sembayev Talgat",
    dueDate: "2026-10-07T00:00:00+05:00",
    dueDateFormatted: "7 October 2026, 12:00 AM",
    dateGroup: "Wednesday, 7 October 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=87087",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "84623",
    title: "SIS 1. Cognitive Science and Decision Making",
    courseName: "Psychology | Belessova Nursulu",
    dueDate: "2026-10-08T00:00:00+05:00",
    dueDateFormatted: "8 October 2026, 12:00 AM",
    dateGroup: "Thursday, 8 October 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=84623",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "76207",
    title: "Midterm",
    courseName: "Information and Communication Technologies | Sembayev Talgat",
    dueDate: "2026-10-08T23:59:00+05:00",
    dueDateFormatted: "8 October 2026, 11:59 PM",
    dateGroup: "Thursday, 8 October 2026",
    time: "23:59",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=76207",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "87002",
    title: "Quiz 1",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    dueDate: "2026-10-10T16:00:00+05:00",
    dueDateFormatted: "10 October 2026, 4:00 PM",
    dateGroup: "Saturday, 10 October 2026",
    time: "16:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/quiz/view.php?id=87002",
    activityType: "quiz",
    activityDetails: "Quiz closes",
  },
  {
    id: "87245",
    title: "Practical exam",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    dueDate: "2026-10-10T16:20:00+05:00",
    dueDateFormatted: "10 October 2026, 4:20 PM",
    dateGroup: "Saturday, 10 October 2026",
    time: "16:20",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/quiz/view.php?id=87245",
    actionLabel: "Attempt quiz now",
    activityType: "quiz",
    activityDetails: "Quiz closes",
  },
  {
    id: "85255",
    title: "Assignment 4",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    dueDate: "2026-10-17T00:00:00+05:00",
    dueDateFormatted: "17 October 2026, 12:00 AM",
    dateGroup: "Saturday, 17 October 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=85255",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "87459",
    title: "Assignment 5",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    dueDate: "2026-10-29T00:00:00+05:00",
    dueDateFormatted: "29 October 2026, 12:00 AM",
    dateGroup: "Thursday, 29 October 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=87459",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "87461",
    title: "Assignment 6",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    dueDate: "2026-10-31T00:00:00+05:00",
    dueDateFormatted: "31 October 2026, 12:00 AM",
    dateGroup: "Saturday, 31 October 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=87461",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
  {
    id: "84627",
    title: "SIS 2. Introduction to Communication",
    courseName: "Psychology | Belessova Nursulu",
    dueDate: "2026-11-10T00:00:00+05:00",
    dueDateFormatted: "10 November 2026, 12:00 AM",
    dateGroup: "Tuesday, 10 November 2026",
    time: "00:00",
    overdue: false,
    actionUrl: "https://lms.astanait.edu.kz/mod/assign/view.php?id=84627",
    actionLabel: "Add submission",
    activityType: "assignment",
    activityDetails: "Assignment is due",
  },
];

export const myCourses: Course[] = [
  {
    id: 2590,
    name: "Discrete Mathematics",
    instructor: "Duisen Zhanerke",
  },
  {
    id: 2575,
    name: "Foreign Language 1 (B1)",
    instructor: "Seksenbayeva Assel",
  },
  {
    id: 2544,
    name: "Information and Communication Technologies",
    instructor: "Sembayev Talgat",
  },
  {
    id: 2565,
    name: "Introduction to Programming",
    instructor: "Kydyrbekova Aigerim",
  },
  {
    id: 2761,
    name: "Physical Education (Athletics)",
    instructor: "Abenov Maxat",
  },
  {
    id: 2589,
    name: "Psychology",
    instructor: "Belessova Nursulu",
  },
  {
    id: 2647,
    name: "Sociology",
    instructor: "Nurkanat Anel",
  },
];

export const dayFilters: DayFilter[] = [
  { label: "All", filterName: "all", from: "-14", active: true },
  { label: "Overdue", filterName: "overdue", from: "-14", to: "1" },
  { label: "Next 7 days", filterName: "next7days", from: "0", to: "7" },
  { label: "Next 30 days", filterName: "next30days", from: "0", to: "30" },
  { label: "Next 3 months", filterName: "next3months", from: "0", to: "90" },
  { label: "Next 6 months", filterName: "next6months", from: "0", to: "180" },
];

export const announcementsData: Announcement[] = [
  {
    id: "p13851",
    discussionId: "12755",
    title:
      "About temporary changes in the format of classes in connection with the Digital Bridge event",
    author: "Gulmira Khamzina",
    authorId: "7386",
    date: "Monday, 28 September 2026, 10:35 AM",
    datetime: "2026-09-28T10:35:58+05:00",
    avatar: "/avatar.svg",
    contentKaz:
      "<strong>2026 жылғы 1–3 қазан аралығында</strong> өтетін Digital Bridge халықаралық форумына байланысты <strong>Акт залында, Халықаралық көрме орталығында (ХКО) және Спорт залында</strong> жоспарланған сабақтар бекітілген кестеге сәйкес қашықтықтан (онлайн, Microsoft Teams платформасында) өтікізіледі.",
    contentEng:
      "Due to the Digital Bridge International Forum taking place from October 1 to October 3, 2026, classes scheduled in the Assembly Hall, the International Exhibition Center (IEC), and the Sports Hall will be conducted remotely (online via Microsoft Teams) according to the current timetable.<br /><br />Please note:<br />• This measure is effective strictly from October 1 to October 3, 2026.<br />• All other classes not listed in the schedule of transfers will take place in-person according to the regular timetable.",
    repliesCount: 0,
  },
  {
    id: "p13778",
    discussionId: "12683",
    title: "Final dates for retaking exams for the 2024-2025 academic year",
    author: "Gulmira Khamzina",
    authorId: "7386",
    date: "Thursday, 17 September 2026, 11:43 AM",
    datetime: "2026-09-17T11:43:03+05:00",
    avatar: "/avatar.svg",
    contentKaz:
      "<strong>2024-2025 оқу жылындағы академиялық қарыздарды жою (қайта тапсыру) 2026 жылдың 20 қыркүйегіне дейін</strong> жүргізілетінін хабарлаймыз.",
    contentEng:
      "Please be informed that <strong>retaking exams to clear academic debts for the 2024-2025 academic year will be conducted until September 20, 2026.</strong>",
    repliesCount: 0,
  },
];

export interface AttendanceItem {
  id: string;
  courseName: string;
  courseUrl: string;
  attendanceUrl: string;
  takenSessions: number;
  points: string;
  percentage: string;
}

export const attendanceData: AttendanceItem[] = [
  {
    id: "att-2590",
    courseName: "Discrete Mathematics | Duisen Zhanerke",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2590",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76528&studentid=20033&view=5",
    takenSessions: 9,
    points: "18 / 18",
    percentage: "100.0%",
  },
  {
    id: "att-2575",
    courseName: "Foreign Language 1 (B1) | Seksenbayeva Assel",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2575",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76423&studentid=20033&view=5",
    takenSessions: 17,
    points: "34 / 34",
    percentage: "100.0%",
  },
  {
    id: "att-2544",
    courseName: "Information and Communication Technologies | Sembayev Talgat",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2544",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76206&studentid=20033&view=5",
    takenSessions: 3,
    points: "6 / 6",
    percentage: "100.0%",
  },
  {
    id: "att-2565",
    courseName: "Introduction to Programming | Kydyrbekova Aigerim",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2565",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76353&studentid=20033&view=5",
    takenSessions: 8,
    points: "16 / 16",
    percentage: "100.0%",
  },
  {
    id: "att-2761",
    courseName: "Physical Education (Athletics) | Abenov Maxat",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2761",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=85021&studentid=20033&view=5",
    takenSessions: 6,
    points: "12 / 12",
    percentage: "100.0%",
  },
  {
    id: "att-2589",
    courseName: "Psychology | Belessova Nursulu",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2589",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76521&studentid=20033&view=5",
    takenSessions: 7,
    points: "14 / 14",
    percentage: "100.0%",
  },
  {
    id: "att-2647",
    courseName: "Sociology | Nurkanat Anel",
    courseUrl: "https://lms.astanait.edu.kz/course/view.php?id=2647",
    attendanceUrl:
      "https://lms.astanait.edu.kz/mod/attendance/view.php?id=76927&studentid=20033&view=5",
    takenSessions: 8,
    points: "16 / 16",
    percentage: "100.0%",
  },
];

