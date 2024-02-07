import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    /*  badge: {
      color: 'info',
      text: 'NEW',
    }, */
  },
  {
    name: 'Administration',
    url: '/administration',
    iconComponent: { name: 'cilBuilding' },
    children: [
      {
        name: 'Access Settings',
        url: '/administration/access-settings',
      },
      {
        name: 'Marksheet Settings',
        url: '/administration/marksheet-settings',
      },
      {
        name: 'Users',
        url: '/administration/users',
      },
      {
        name: 'Web Portal',
        url: '/administration/web-portal',
      },
      {
        name: 'Certificates',
        url: '/administration/certificates',
      },
      {
        name: 'Documents',
        url: '/administration/documents',
      },
    ],
  },

  {
    name: 'A/C Payables',
    url: '/ac-payables',
    iconComponent: { name: 'cilCreditCard' },
    children: [
      {
        name: 'Expenses',
        url: '/ac-payables/expenses',
      },
      {
        name: 'Suppliers',
        url: '/ac-payables/suppliers',
      },
      {
        name: 'Categories',
        url: '/ac-payables/categories',
      },
    ],
  },

  {
    name: 'A/C Receivables',
    url: '/ac-receivables',
    iconComponent: { name: 'cilBank' },
    children: [
      {
        name: 'Invoices',
        url: '/ac-receivables/invoices',
      },
      {
        name: 'Collections',
        url: '/ac-receivables/collections',
      },
      {
        name: 'Fee Groups',
        url: '/ac-receivables/fee-groups',
      },
      {
        name: 'Bank Accounts',
        url: '/ac-receivables/bank-accounts',
      },
      {
        name: 'Transactions',
        url: '/ac-receivables/transactions',
      },
      {
        name: 'Settings',
        url: '/ac-receivables/settings',
      },
    ],
  },

  {
    name: 'Admissions',
    url: '/admissions',
    iconComponent: { name: 'cilPeople' },
  },

  {
    name: 'Attendance',
    url: '/attendance',
    iconComponent: { name: 'cilTask' },
    children: [
      {
        name: 'Students',
        url: '/attendance/students',
      },
      {
        name: 'Staff',
        url: '/attendance/staff',
      },
      {
        name: 'Leaves',
        url: '/attendance/leaves',
      },
      {
        name: 'Shifts',
        url: '/attendance/shifts',
      },
      {
        name: 'Settings',
        url: '/attendance/settings',
      },
    ],
  },

  /*  {
    name: 'People',
    title: true,
  }, */

  {
    name: 'People',
    url: '/people',
    iconComponent: { name: 'cibMyspace' },
    children: [
      {
        name: 'Student',
        url: '/people/student',
      },
      {
        name: 'Teacher',
        url: '/people/teacher',
      },
      {
        name: 'Parents',
        url: '/people/parents',
      },
      {
        name: 'Others',
        url: '/people/others',
      },
      {
        name: 'Alumni',
        url: '/people/alumni',
      },
      {
        name: 'Visitors',
        url: '/people/visitors',
      },
    ],
  },
  {
    name: 'Hostels',
    url: '/hostels',
    iconComponent: { name: 'cilBraille' },
    children: [
      {
        name: 'Hostels Component',
        url: '/hostels/hostelsComponent',
      },
      {
        name: 'Fee Categories',
        url: '/hostels/feecategories',
      },
      {
        name: 'Rooms',
        url: '/hostels/rooms',
      },
      {
        name: 'Residents',
        url: '/hostels/residents',
      },
      {
        name: 'Attendance',
        url: '/hostels/attendance',
      },
    ],
  },
  {
    name: 'Calendar',
    url: '/calendar',
    iconComponent: { name: 'cilCalendar' },
    children: [
      {
        name: 'Calendar',
        url: '/calendar/calendarComponent',
      },
      {
        name: 'Diary',
        url: '/calendar/diary',
      },
      {
        name: 'Events',
        url: '/calendar/events',
      },
      {
        name: 'Notices',
        url: '/calendar/notices',
      },
    ],
  },
  {
    name: 'Classes',
    url: '/classes',
    iconComponent: { name: 'cibReadme' },
    children: [
      {
        name: 'Classes',
        url: '/classes/classesComponent',
      },
      {
        name: 'Courses',
        url: '/classes/courses',
      },
      {
        name: 'Departments',
        url: '/classes/departments',
      },
      {
        name: 'Sections',
        url: '/classes/sections',
      },
      {
        name: 'Subjects',
        url: '/classes/subjects',
      },
      {
        name: 'Teacher Subject',
        url: '/classes/teachersubject',
      },
      {
        name: 'Timetable',
        url: '/classes/timetable',
      },
    ],
  },
  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cilCommentBubble' },
    children: [
      {
        name: 'Group Chat',
        url: '/messages/groupchat',
      },
      {
        name: 'Message Settings',
        url: '/messages/messagesettings',
      },
      {
        name: 'Mobile sms',
        url: '/messages/mobilesms',
      },
      {
        name: 'SMS',
        url: '/messages/sms',
      },
    ],
  },
  {
    name: 'E-learning',
    url: '/e-learning',
    iconComponent: { name: 'cilPen' },
    children: [
      {
        name: 'Admit Card',
        url: '/e-learning/admitcard',
      },
      {
        name: 'E-Books & Videos',
        url: '/e-learning/ebooks',
      },
      {
        name: 'Homework',
        url: '/e-learning/homework',
      },
      {
        name: 'Lesson Plans',
        url: '/e-learning/lessonplans',
      },
      {
        name: 'Test Paper',
        url: '/e-learning/testpaper',
      },
      {
        name: 'Online Exams',
        url: '/e-learning/onlineexams',
      },
      {
        name: 'Questions Bank',
        url: '/e-learning/questionsbank',
      },
      {
        name: 'Syllabus',
        url: '/e-learning/syllabus',
      },
      {
        name: 'Marksheet Settings',
        url: '/e-learning/marksheetsettings',
      },
      {
        name: 'Marksheet',
        url: '/e-learning/marksheet',
      },
      {
        name: 'Live Classes',
        url: '/e-learning/liveclasses',
      },
    ],
  },
  {
    name: 'Program',
    url: '/program',
    iconComponent: { name: 'cibGitter' },
  },
  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cibDeezer' },
    children: [
      {
        name: 'Email Reports',
        url: '/reports/emailreports',
      },
      {
        name: 'Graphs',
        url: '/reports/graphs',
      },
      {
        name: 'Reports Component',
        url: '/reports/reportscomponent',
      },
    ],
  },
  {
    name: 'Library',
    url: '/library',
    iconComponent: { name: 'cilBook' },
    children: [
      {
        name: 'Books',
        url: '/library/books',
      },
      {
        name: 'Issue',
        url: '/library/issue',
      },
      {
        name: 'Waiting List',
        url: '/library/waitinglist',
      },
      {
        name: 'Settings',
        url: '/library/settings',
      },
    ],
  },
  {
    name: 'Inventory',
    url: '/inventory',
    iconComponent: { name: 'cibHackhands' },
    children: [
      {
        name: 'Items',
        url: '/inventory/items',
      },
      {
        name: 'Items Groups',
        url: '/inventory/item-group',
      },
      {
        name: 'Categories',
        url: '/inventory/category',
      },
      {
        name: 'Locations',
        url: '/inventory/location',
      },
      {
        name: 'Transactions',
        url: '/inventory/transaction',
      },
    ],
  },
  {
    name: 'Transportation',
    url: '/transportation',
    iconComponent: { name: 'cilBusAlt' },
    children: [
      {
        name: 'Vehicles',
        url: '/transportation/vehicles',
        iconComponent: { name: '' },
      },
      {
        name: 'Routes',
        url: '/transportation/routes',
        iconComponent: { name: '' },
      },
      {
        name: 'Route Zones',
        url: '/transportation/route_zones',
        iconComponent: { name: '' },
      },
      {
        name: 'Stop Points',
        url: '/transportation/stop-points',
        iconComponent: { name: '' },
      },
      {
        name: 'Route Zone Costs',
        url: '/transportation/route-zone-costs',
        iconComponent: { name: '' },
      },
      {
        name: 'Student Route',
        url: '/transportation/student-route',
        iconComponent: { name: '' },
      },
    ],
  },
  {
    name: 'Newsletters',
    url: '/newsletters',
    iconComponent: { name: 'cilNewspaper' },
  },
  {
    name: 'Batch Programs',
    url: '/batch-programs',
    iconComponent: { name: 'cilSpreadsheet' },
  },
  {
    name: 'Photo Gallery',
    url: '/photo-gallery',
    iconComponent: { name: 'cilImage' },
  },

  {
    name: 'Help Center',
    url: '/help-center',
    iconComponent: { name: 'cilSettings' },
    children: [
      {
        name: 'Inquiries',
        url: '/help-center/inquiries',
      },
      {
        name: 'Issues',
        url: '/help-center/issues',
      },
      {
        name: 'Issues-Track',
        url: '/help-center/issues-track',
      },
      {
        name: 'Support Calls',
        url: '/help-center/support-calls',
      },
    ],
  },

  {
    name: 'Jobs',
    url: '/jobs',
    iconComponent: { name: 'cilBriefcase' },
  },
  {
    name: 'Releases',
    url: '/releases',
    iconComponent: { name: 'cilFile' },
  },
  {
    name: 'Subscriptions',
    url: '/subscriptions',
    iconComponent: { name: 'cilFile' },
    children: [
      {
        name: 'Subscriptions',
        url: '/subscriptions/subscriptions',
      },
      {
        name: 'Invoice',
        url: '/subscriptions/invoice',
      },
    ],
  },
];
