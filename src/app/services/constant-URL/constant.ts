import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constant {
  baseURL = 'https://www.paatham.us/paatham-upstream/api/';
  login = 'login';
  register = 'register';
  ACPayable = {
    allExpense: 'expenses-api/listAll/1',
    createExpense: 'create',
    deleteExpenses: 'expenses-api/delete/1',
    fetchExpenses: 'expenses-api/fetch/3',
    editExpenses: 'expenses-api/edit/3',
    expenseAdvFunction: 'expenses-api/expenseAdvURL',
    getExpensesDetails: 'expenses-api/getexpensesdetails/1',
    collectAmount: 'expenses-api/collectAmount/1',
    exportExcelURL:
      'expenses-api/exportExcelURL/adv/ranju/22-11-2023/23-11-2023',
    exportPdfURL: 'expenses-api/exportPdfURL/adv/ranju/22-11-2023/23-11-2023',
    allCategories: 'expenses-cat-api/listAll/1',
    createCategory: 'expenses-cat-api/create',
    editCategory: 'expenses-cat-api/update/1',
    categoriesFetchData: 'expenses-cat-api/fetch/1',
    categoriesDeleteData: 'expenses-cat-api/delete/1',
    allSupplier: 'expense-supplier-api/listAll/1',
    deleteSupplier: 'expense-supplier-api/delete/1',
    createSupplier: 'expense-supplier-api/create/1',
    fetchSupplier: 'expense-supplier-api/edit/fetch/1',
    editSupplier: 'expense-supplier-api/edit/supplier/2',
  };
  Calendar = {
    /* Event */
    allEvent: 'event-api/listAll',
    createEvent: 'event-api/create',
    updateEvent: 'event-api/update/1',
    fetchEvent: 'event-api/fetch/2',
    deleteEvent: 'event-api/delete/2',
    /* Diary */
    allDiary: 'diary-api/diary/listAll',
    addDiary: 'diary-api/diary/addDiary',
    editDiary: 'diary-api/diary/editDiary',
    fetchDiary: 'diary-api/diary/fetchDiary/1',
    deleteDiary: 'diary-api/diary/delete/1',
    /* Notice */
    allNotice: 'newsboard-api/newsboard/listAll/2',
    searchNotice: 'newsboard-api/newsboard/search/Important Announcement/2',
    createNotice: 'newsboard-api/newsboard/create',
    updateNotice: 'newsboard-api/newsboard/edit/2',
    fetchNotice: 'newsboard-api/newsboard/fetch/2',
    deleteNotice: 'newsboard-api/newsboard/delete/2',
  };
  Library = {
    booklistitems: 'library-api/listAll',
    registerBooks: 'library-api/register',
    categorylistall: 'library-api/listAll_catg_data/1',
    issuelistitems: 'library-operation-api/listAll',
    waitinglistitems: 'library-book-wait-list-api/retrive_wait_list_details/1',
    settinglistitems: 'library-setting-api/library_issue_setting_list',
  };

  Inventory = {
    listItem: 'inventory-manage-api/inventory/listAll',
    createItems: '',

    listitemsGroup: 'inv-itemgrp-api/listAll',
    categorieslistall: 'inv-cat-api/listAll_category',
    subcategorieslist: 'inv-cat-api/listAll_Subcategory',
    locationListall: 'inv-location-api/listAll',
    transactionListAll:
      'inv-transaction-api/inventory/item_transaction/listAll',
    transactions: 'inv-transaction-api/inventory/item_transactions/fetch/1',
    transactionsView:
      'inv-transaction-api/inventory/item_transactions/view_details/1',
  };

  Jobs = {
    listitems: 'inv-itemgrp-api/listAll/1',
    categorieslistall: 'inv-cat-api/listAll_category/1',
    subcategorieslist: 'inv-cat-api/listAll_Subcategory/1',
    locationListall: 'inv-location-api/listAll',
  };

  Transportation = {
    getVehicles: 'transport-api/vehicles/listAll',
    getRoutes: 'transport-api/routes/tpt_routes_listAll',
    getRouteZones: 'transport-api/transports/tpt_routes_zones_listAll',
    getRouteZoneCosts: 'transport-api/transports/tpt_routes_zone_cost_listAll',
    getStopPoints: 'transport-api/transports/tpt_routes_points_listAll',
    getStudentRoutes: 'transport-api/studentrouteTransport/listAll/1',
  };
  newsLetters = {
    listNewsLetter: 'email-marketing-api/list-newsletters',
    list_templeates: 'email-marketing-api/list-templates/1',
    getTemplateDetails: 'email-marketing-api/get-template-details/1',
    saveTemplate: 'email-marketing-api/save-template',
  };
  Classes = {
    /* Courses */
    courseslistall: 'course-api/listAll',
    createcourses: 'course-api/create',

    /* All Boards */
    AllBoardsTypes: 'class-api/board_type',
    AllBoards: 'class-api/board/1',
    AllDepartments: 'class-api/course_department/',

    /* Department */
    deplistall: 'coursedep_listAll',
    createdepartments: 'coursedep_create',

    /* Classes */
    classeslistall: 'class-api/list/1',
    createclasses: 'class-api/create',
    updateClass: 'class-api/update',
    classStatusUpdate: 'statusUpdate/', // statusUpdate/id

    /* Section */
    sectionlistall: 'section-api/list',
    createsection: 'section-api/create',

    /* Subject */
    subjectslistall: 'subject-api/listAll/1',
    createsubject: 'subject-api/create',

    /* Timetable */
    timetablelistall: 'create-shedule-api/listSheduleList',
    createtimetable: 'create-shedule-api/addShedule',

    /* Teachersubject */
    teacherlistall: 'class-timetable-api/listteacherall/1',
  };

  Attendance = {
    // getAttendSettingList: 'pay-shifts-api/listAll',
    getAttendSettingList: 'attendance-setting-api/list',

    addStudentAttenList: 'student-attendance-api/save-student-attendance',
    getStudents: 'student-attendance-api/attendance-list',

    getStaffAttendance: 'staff-attendance-api/TodayStaffAttendance',
    saveStaffAttendance: 'staff-attendance-api/save-staff-attendance',
    addStaffAttendList: 'staff-attendance-api/staff-attendance-list',

    getLeaves: 'leave-api/leaveList',
    showApprovalMsg: 'show_approval_message',
    addApprovalMsg: 'leave-api/approval_message',
    addLeaveList: 'leave-api/leaveList',

    getShiftList: 'pay-shifts-api/listAll',
    getShiftById: 'pay-shifts-api/fetch',
    addShift: 'pay-shifts-api/add',
    editShiftById: 'pay-shifts-api/edit',
  };

  Hostel = {
    getAttendanceList: 'hostel_attendance-api/getTodayAttendance',

    getFeeCategoryList: 'hostel-cat-api/list/hostel_cat',

    getHostelCompsList: 'hostel-api/hostel/listAll',

    getResidenstList: 'hostel_residents-api/listAll/1/0',

    getRoomsList: 'hostel-room-api/room_list',
  };
  /* Program */
  programs = {
    allPrograms: 'programme-api/listAll',
  };

  /* Help center */
  helpCenter = {
    /* Inquiries */
    allInquiries: 'enquiry-api/listAll/1',
    addInquiries: 'enquiry-api/addEnquiry',
    editInquiries: 'enquiry-api/editEnquiry',
    fetchInquiries: 'enquiry-api/fetchEnquiry/1',
    deleteInquiries: 'enquiry-api/delete/1',
    addRemark: 'enquiry-api/addRemark',
    exportInquiries: 'enquiry-api/export/enquiry',
    /* Issues */
    allIssues: 'online-support-system-api/listAll/1',
    /* supportCalls */
    allSupportCall: 'visitor-enquiry-api/listAll/1',
    addSupportCall: 'visitor-enquiry-api/addSupport',
    editSupportCall: 'visitor-enquiry-api/editSupportCall',
    fetchSupportCall: 'visitor-enquiry-api/fetchSupportCall/1',
    deleteSupportCall: 'visitor-enquiry-api/delete/1',
    getContactPerson: 'visitor-enquiry-api/contact_persone',
    exportSupportCall: 'visitor-enquiry-api/export/enquiry',
    /* issuesTrack */
    allIssueTracker: 'online-support-system-api/listAll/track',
  };

  Administration = {
    getAllAccessSetting: 'global_setting-api/getBoardTypeofOrganization',
    getAllUsers: 'admins-api-v1/admins/listAll',
    getAllCertificates: 'certificate-setting-api/listAll',
    getAllDocuments: 'documents/listAll',

    getWebPortalNewsList: 'manage-school-api/news_list',
    getWebPortalEventList: 'manage-school-api/event_list',
    getWebPortalVideoList: 'manage-school-api/videos_list',
    getWebPortalPageContent: 'manage-school-api/getPageContent',
    getWebPortalPhotoList: 'manage-school-api/getPhoto',
  };

  /* Releases */
  releases = {
    allReleases: 'release-api/list-all/1',
  };

  subscribtions = {
    /* Subscriptions */
    listsubscription: 'subscription-controller-api/showSchool/2',

    /* Invoice */
    listinvoice: 'subscripton-invoice-api/list-all/1',
  };

  /* E-learning */
  elearning = {
    listadmitcard: 'exam-list-api/list/1',
    listebooks: 'ebooks-api/listAll/1',
    listhomework: 'assignment-api/list',
    listlessonplans: 'lesson-plan-api/listAll/1',
    listliveclasses: 'live-classes-api/list-live-classes',
    listtestpaper: 'test-paper-api/get-all-question/1',
    listquestionbank: 'question-bank-api/question-bank/list/1',
  };

  AdminDashboard = {
    ADashboard: 'dashboard-api/dashboard',
  };

  people = {
    studentsList: 'students-api/students/listAll',
    createStudents: 'students-api/students/add/create',

    teachersList: 'teachers-api/teachers/listAll',
    createTeachers: 'teacher-api/create',

    parentsList: 'parents-api/parents/listAll',
    createParents: 'ebooks-api/listAll/1',

    otherUsersList: 'user-api/users/listAll',
    createOtherUser: '',

    alumnisList: 'alumni-api/alumni/listAll',
    createAlumni: '',

    visitorsList: 'visitor-detail-api/listAll',
    createVisitor: '',
  };
}
