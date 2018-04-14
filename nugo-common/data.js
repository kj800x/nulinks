const nugo_data = [
  {
    "keywords": ["myneu", "mynortheastern", "m"],
    "title": "MyNortheastern",
    "target": "https://myneu.neu.edu/",
    "tuning": 1
  },
  {
    "keywords": ["graduation-clearance"],
    "title": "Graduation Clearance Contract",
    "target": "https://northeastern.secure.force.com/public/apex/ITSGCCStudentEntry"
  },
  {
    "keywords": ["advising-calendar", "advising-appointments", "career-counselor-appointments", "drc-appointments"],
    "title": "Advising Appointments",
    "target": "https://prod-web.neu.edu/wasapp/public/calendar/booking/app/secure/main.action",
    "description": "Set appointments with your advisors"
  },
  {
    "keywords": ["blackboard", "bb"],
    "title": "Northeastern Blackboard",
    "target": "https://northeastern.blackboard.com/"
  },
  {
    "keywords": ["register"],
    "title": "Class Registration",
    "target": "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/registration"
  },
  {
    "keywords": ["big-interview"],
    "title": "Big Interview",
    "target": "https://neu.biginterview.com/"
  },
  {
    "keywords": ["nucareers", "coop", "co-op", "nucarreers"],
    "title": "NUCareers",
    "target": "https://nucareers.northeastern.edu/Shibboleth.sso/Login?target=https://nucareers.northeastern.edu/secure/neuLogin.htm?action=login"
  },
  {
    "keywords": ["commencement-apply"],
    "title": "Apply to Graduate",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskgrad.p_disp_gradapp"
  },
  {
    "keywords": ["commencement-apply-view"],
    "title": "View Application to Graduate",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskgrad.p_view_gradapp"
  },
  {
    "keywords": ["dining", "nu-dining"],
    "title": "NU Dining",
    "target": "https://nudining.com/"
  },
  {
    "keywords": ["dining-hours"],
    "title": "NU Dining Hours",
    "target": "https://nudining.com/hours"
  },
  {
    "keywords": ["work-request"],
    "title": "Facilities Online Work Request",
    "target": "https://workrequest.neu.edu/FAWorkRequestForm.aspx"
  },
  {
    "keywords": ["laundry", "laundryview"],
    "title": "LaundryView",
    "target": "http://www.laundryview.com/"
  },
  {
    "keywords": ["bookstore"],
    "title": "NU Bookstore",
    "target": "http://northeastern.bncollege.com/"
  },
  {
    "keywords": ["map"],
    "title": "Campus Map",
    "target": "https://www.northeastern.edu/campusmap/"
  },
  {
    "keywords": ["nusso"],
    "title": "NU Space Scheduling Online",
    "target": "https://nuevents.neu.edu/"
  },
  {
    "keywords": ["org", "orgsync"],
    "title": "OrgSync",
    "target": "https://orgsync.com/sso_redirect/northeastern-university/"
  },
  {
    "keywords": ["service-time-logs"],
    "title": "Service Time Logs",
    "target": "https://prod-web.neu.edu/wasapp/CommunityEngagement/"
  },
  {
    "keywords": ["drc", "drc-services"],
    "title": "DRC Services",
    "target": "https://northeastern.secure.force.com/public/apex/ITSDRCMainEntry"
  },
  {
    "keywords": ["lynda"],
    "title": "Lynda.com Training",
    "target": "http://lynda.neu.edu/"
  },
  {
    "keywords": ["kb", "knowledge", "knowledge-base"],
    "title": "Knowledge Base",
    "target": "https://northeastern.service-now.com/sp/"
  },
  {
    "keywords": ["study-abroad-apply"],
    "title": "Global Experiences | Apply to Study Abroad",
    "target": "https://prod-web.neu.edu/wasapp/oisp/app/secure/s/main.action"
  },
  {
    "keywords": ["study-abroad-courses"],
    "title": "Global Experiences | Study Abroad Course Selection",
    "target": "https://northeastern.secure.force.com/public/apex/ITSGEOCourseApprovalEntry"
  },
  {
    "keywords": ["co-op-connections", "coop-connections"],
    "title": "Co-op Connections",
    "target": "http://www.northeastern.edu/coopconnections/"
  },
  {
    "keywords": ["housing-share"],
    "title": "Co-op Housing Share",
    "target": "https://aptsearch.northeastern.edu/"
  },
  {
    "keywords": ["ride-share"],
    "title": "Co-op Ride Share",
    "target": "https://prod-web.neu.edu/wasapp/RideShare/secure/index.jsp"
  },
  {
    "keywords": ["card-balance"],
    "title": "Husky Card Account Balances",
    "target": "https://prod-web.neu.edu/wasapp/HuskyCard/CurrentBalance/secure/retrieve/main.do"
  },
  {
    "keywords": ["card-transactions", "card-transact"],
    "title": "Husky Card Account Transactions",
    "target": "https://prod-web.neu.edu/wasapp/ISF/cardTxns.do"
  },
  {
    "keywords": ["card-preferences"],
    "title": "Husky Card Preferences",
    "target": "https://huskycardcenter.neu.edu/student/welcome.php"
  },
  {
    "keywords": ["profiler", "card-profiler", "meal-profiler"],
    "title": "Profiler Meal Plan Services",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_ppinfo"
  },
  {
    "keywords": ["meal", "card-standard-meal", "standard-meal", "meal-standard"],
    "title": "Standard Meal Plan Services",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_selmp"
  },
  {
    "keywords": ["snell", "library"],
    "title": "Snell Library",
    "target": "http://library.northeastern.edu/"
  },
  {
    "keywords": ["snell-hours", "library-hours"],
    "title": "Snell Library Hours",
    "target": "http://library.northeastern.edu/about/visitors/hours"
  },
  {
    "keywords": ["law-library"],
    "title": "School of Law Library",
    "target": "http://www.northeastern.edu/law/library/"
  },
  {
    "keywords": ["ill", "interlibrary-loan"],
    "title": "Interlibrary Loan",
    "target": "http://library.northeastern.edu/services/borrow-renew/request-from-other-libraries"
  },
  {
    "keywords": ["cite"],
    "title": "Citation guides",
    "target": "http://subjectguides.lib.neu.edu/Citations"
  },
  {
    "keywords": ["article-database", "research", "research-database", "database"],
    "title": "Article and Research Databases",
    "target": "http://library.northeastern.edu/find/resources/a-to-z-index"
  },
  {
    "keywords": ["onesearch", "scholar-onesearch"],
    "title": "Scholar OneSearch",
    "target": "http://library.northeastern.edu/myaccount"
  },
  {
    "keywords": ["ferpa", "waive-ferpa", "parent-access", "guardian-access"],
    "title": "Parent/Guardian Access to My Info",
    "target": "https://prod-web.neu.edu/wasapp/ppmanageaccountLR/secure/initialize.do"
  },
  {
    "keywords": ["ferpa-status"],
    "title": "FERPA Status",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=NEUFERPA.p_display_ferpa"
  },
  {
    "keywords": ["parking", "parking-apply", "guardian-access"],
    "title": "Apply for Parking",
    "target": "https://prod-web.neu.edu/wasapp/nuparking/SignupAuth.do"
  },
  {
    "keywords": ["parking-non-resident"],
    "title": "Non Resident Sticker",
    "target": "https://prod-web.neu.edu/wasapp/NonResDecalLR/secure/main.action"
  },
  {
    "keywords": ["change-address"],
    "title": "Change of Address",
    "target": "https://prod-web.neu.edu/wasapp/UpdateContactInfoLR/contactInfo"
  },
  {
    "keywords": ["catalog"],
    "title": "Course Catalog",
    "target": "https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg"
  },
  {
    "keywords": ["register", "course-register"],
    "title": "Course Registration",
    "target": "https://nubanner.neu.edu/StudentRegistrationSsb"
  },
  {
    "keywords": ["ice", "emergency-contact"],
    "title": "Emergency Contact Information",
    "target": "https://prod-web.neu.edu/wasapp/EmergencyContactLR"
  },
  {
    "keywords": ["enrollment-verify"],
    "title": "Enrollment/Degree Verification Request",
    "target": "https://prod-web.neu.edu/wasapp/EnrollmentVerification"
  },
  {
    "keywords": ["i-am-here","iamhere","soy-aqui"],
    "title": "I Am Here",
    "target": "https://prod-web.neu.edu/wasapp/bn/iah/secure/iah/main.do"
  },
  {
    "keywords": ["mypaws", "paws", "degree", "degree-audit"],
    "title": "My Degree Audit",
    "target": "https://prod-web.neu.edu/wasapp/DARSStudent/RequestAuditServlet"
  },
  {
    "keywords": ["grades", "my-grades"],
    "title": "My Grades",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskogrd.P_ViewTermGrde"
  },
  {
    "keywords": ["schedule", "my-schedule"],
    "title": "My Schedule",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskfshd.P_CrseSchdDetl"
  },
  {
    "keywords": ["transcript", "my-transcript"],
    "title": "My Transcript",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskotrn.P_ViewTermTran"
  },
  {
    "keywords": ["registrar-forms", "leave-of-absense", "petition-to-reduce-load", "university-withdrawal", "late-course-registration"],
    "title": "Registrar Forms",
    "target": "https://northeastern.secure.force.com/public/apex/ITSASCMainEntry"
  },
  {
    "keywords": ["schedule-of-classes"],
    "title": "Schedule of Classes",
    "target": "https://wl11gp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched"
  },
  {
    "keywords": ["registrar"],
    "title": "Registrar Self-Service",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu"
  },
  {
    "keywords": ["withdrawal", "withdrawal-request"],
    "title": "University Withdrawal Request",
    "target": "https://northeastern.secure.force.com/public/apex/ITSASCUWEntry"
  },
  {
    "keywords": ["remoteapp"],
    "title": "Connect to RemoteApp",
    "target": "https://remoteapp.nunet.neu.edu/RDWeb/Pages/en-US/login.aspx"
  },
  {
    "keywords": ["housing", "housing-online"],
    "title": "Housing Online",
    "target": "https://neuidmsso.neu.edu/rmsmercury"
  },
  {
    "keywords": ["mailbox", "mailbox-info"],
    "title": "On-Campus Mailbox Information",
    "target": "https://neuresmail.sclintra.com/addressforwarding"
  },
  {
    "keywords": ["direct-deposit"],
    "title": "Direct Deposit Form",
    "target": "https://neuforms3.neu.edu/lfserver/DirectDeposit.xfm"
  },
  {
    "keywords": ["nupay", "pay", "payment", "cashnet"],
    "title": "Make a Payment with NUPay",
    "target": "https://prod-web.neu.edu/wasapp/cashnet/sso/secure/s/main.action"
  },
  {
    "keywords": ["international-pay", "international-payment"],
    "title": "Make an International Payment",
    "target": "https://prod-web.neu.edu/wasapp/ipayments/secure/main.action"
  },
  {
    "keywords": ["financial-aid", "financial-aid-status", "finaid"],
    "title": "My Financial Aid Status",
    "target": "https://www.pfw.neu.edu/netpartnerstudent"
  },
  {
    "keywords": ["scholarship"],
    "title": "Scholarship Application",
    "target": "https://nextgensso.com/sp/startSSO.ping?PartnerIdpId=https://neuidmsso.neu.edu/idp/shibboleth&TargetResource=https://northeastern.scholarships.ngwebsolutions.com/scholarx_studentportal.aspx"
  },
  {
    "keywords": ["sfs"],
    "title": "Student Account, Payment and E-bill Information",
    "target": "https://prod-web.neu.edu/wasapp/StudentFinancialServices/"
  },
  {
    "keywords": ["refund", "refund-request"],
    "title": "Student Refund Request",
    "target": "https://neuforms3.neu.edu/lfserver/nuloform/studentrefund"
  },
  {
    "keywords": ["waive-nushp", "nushp", "waive-health-plan"],
    "title": "Waive NUSHP (Health Plan)",
    "target": "https://prod-web.neu.edu/wasapp/bn/HealthWaiver/initial.do"
  },
  {
    "keywords": ["student-employment", "workstudy", "workstudy-timesheets"],
    "title": "Student Employment (workstudy, timesheets)",
    "target": "https://studentemployment.neu.edu/JobXHome.aspx"
  },
  {
    "keywords": ["student-employee-self-service", "student-employment-taxes", "workstudy-taxes", "w2", "w-2", "benefits", "pay-information"],
    "title": "Student Employee Self-Service",
    "target": "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=twbkwbis.P_GenMenu?name=pmenu.P_MainMnu"
  },
  {
    "keywords": ["voter-registration"],
    "title": "TurboVote Voter Registration",
    "target": "https://neu.turbovote.org/"
  },
  {
    "keywords": ["policies"],
    "title": "Northeastern Policies",
    "target": "http://www.northeastern.edu/policies/"
  },
  {
    "keywords": ["travel-plans"],
    "title": "My Travel Plans",
    "target": "https://secure.worldcue.com/UserManagement/plannerLogin/redirect.htm?username=neuplanner"
  },
  {
    "keywords": ["cauldron", "yearbook"],
    "title": "NU Cauldron Yearbook",
    "target": "https://www.northeastern.edu/cauldron/"
  },
  {
    "keywords": ["trace", "mytrace"],
    "title": "myTRACE - Teacher Rating and Course Evaluation",
    "target": "https://www.applyweb.com/eval/shibboleth/neu/36892"
  },
  {
    "keywords": ["writing", "writing-center"],
    "title": "NU Writing Center",
    "target": "http://www.northeastern.edu/writingcenter/"
  },
  {
    "keywords": ["software", "software-downloads"],
    "title": "Software Downloads",
    "target": "https://prod-web.neu.edu/wasapp/SoftwareDistribution/secure/index.jsp"
  },
  {
    "keywords": ["tutoring"],
    "title": "Tutoring",
    "target": "https://northeastern.secure.force.com/public/apex/ITSTutorEntry"
  },
  {
    "keywords": ["classrooms", "view-classrooms"],
    "title": "View the Classrooms",
    "target": "https://classroom.neu.edu/Shibboleth.sso/Login"
  },
  {
    "keywords": ["mytickets", "my-tickets"],
    "title": "myTickets",
    "target": "https://mytickets.northeastern.edu/Shibboleth.sso/Login?target=https%3A%2F%2Fmytickets%2Enortheastern%2Eedu%2FOnline%2Fdefault%2Easp&entityID=https://neuidmsso.neu.edu/idp/shibboleth"
  },
  {
    "keywords": ["myhealth", "uhcs", "my-health"],
    "title": "myHealth Center (UHCS)",
    "target": "https://neuportal.eclinicalweb.com/neu/jsp/100mp/login.jsp"
  },
  {
    "keywords": ["uhcs-site"],
    "title": "UHCS Website",
    "target": "https://www.northeastern.edu/uhcs/"
  },
  {
    "keywords": ["mail", "husky-mail", "gmail"],
    "title": "Husky Mail",
    "target": "http://mail.google.com/a/husky.neu.edu"
  },
  {
    "keywords": ["resmail", "resmail-hours"],
    "title": "Resmail",
    "target": "http://www.northeastern.edu/mailservices/ResMail/ResMail.html"
  }
];

if (typeof __CHROME_EXTENSION__ !== "undefined") {
  exports = {};
}
exports.nugo_data = nugo_data;
exports.default = nugo_data;