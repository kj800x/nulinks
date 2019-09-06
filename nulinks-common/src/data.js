const NULINKS_DATA = [
  {
    keywords: ["myneu", "mynortheastern"],
    title: "MyNortheastern",
    target: "https://myneu.neu.edu/",
    description: "The MyNortheastern Portal",
    usageFrequency: "DAILY"
  },
  {
    keywords: ["graduation-clearance"],
    title: "Graduation Clearance Contract",
    description: "The MyNortheastern Portal",
    target:
      "https://northeastern.secure.force.com/public/apex/ITSGCCStudentEntry",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["canvas", "cv"],
    title: "Canvas",
    description:
      "Experimental replacement for BlackBoard piloted in certain courses",
    target: "http://northeastern.instructure.com",
    usageFrequency: "DAILY"
  },
  {
    keywords: [
      "advising-calendar",
      "advising-appointments",
      "career-counselor-appointments",
      "drc-appointments"
    ],
    title: "Advising Appointments",
    target:
      "https://prod-web.neu.edu/wasapp/public/calendar/booking/app/secure/main.action",
    description:
      "Book an appointment with an advisor (co-op, academic, career, drc)",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["blackboard", "bb"],
    title: "Blackboard",
    target: "https://northeastern.blackboard.com/",
    description:
      "Gain access to course materials online, transfer files, and interact with your instructor and other students",
    usageFrequency: "DAILY"
  },
  {
    keywords: ["big-interview"],
    title: "Big Interview",
    target: "https://neu.biginterview.com/",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["nu-careers", "co-op-search", "nu-carreers", "jobs"],
    title: "NUCareers",
    target:
      "https://nucareers.northeastern.edu/Shibboleth.sso/Login?target=https://nucareers.northeastern.edu/secure/neuLogin.htm?action=login",
    description:
      "Northeastern University's database of career and cooperative education job opportunities",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["co-op", "reflect", "self-assessment"],
    title: "Co-op Self Assessment Site",
    target: "https://coopstatus.neu.edu/reflection/student/",
    description:
      "Northeastern University's student self assessment site for co-op",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["commencement-apply"],
    title: "Apply to Graduate",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskgrad.p_disp_gradapp",
    description:
      "Completion of this registration form is required if you are graduating in the current academic year",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["commencement-apply-view"],
    title: "View Application to Graduate",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskgrad.p_view_gradapp",
    description:
      "If you have completed your Apply to Graduate form, review it here",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["dining", "nu-dining"],
    title: "NU Dining",
    target: "https://nudining.com/",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["dining-hours", "hours", "curry", "curry-hours"],
    title: "NU Dining Hours",
    target: "https://nudining.com/hours",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["nupd", "police-site"],
    title: "NUPD Website",
    target: "https://www.northeastern.edu/nupd",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["emergency", "police", "fire", "medical", "help"],
    title: "Emergency? Call: 617-373-3333",
    description: "Emergency phone number for NEU Police/Fire/Medical",
    mobileTarget: "tel:+16173733333",
    target: "https://www.northeastern.edu/nupd/contact-information/",
    usageFrequency: "DAILY"
  },
  {
    keywords: ["police-log", "crime-log"],
    title: "NUPD Crime Log",
    target: "https://www.huntnewsnu.com/category/campus/crime-logs/",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["news", "huntington-news"],
    title: "The Huntington News",
    target: "https://www.huntnewsnu.com/",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["git", "github", "ccis-github", "khoury-github"],
    title: "Khoury College Github",
    target: "https://github.ccs.neu.edu/",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["calendar"],
    title: "Undergraduate Student Calendar",
    target:
      "https://registrar.northeastern.edu/app/uploads/2018-2019-GR-Expanded-Calendar-Grid.pdf",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["myccis", "ccis-profile-manager", "khoury-profile-manager"],
    title: "MyCCIS: Khoury Profile Manager",
    target: "https://my.ccs.neu.edu",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["work-request"],
    title: "Facilities Online Work Request",
    target: "https://workrequest.neu.edu/FAWorkRequestForm.aspx",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["laundry", "laundryview"],
    title: "LaundryView",
    target: "http://www.laundryview.com/",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["bookstore"],
    title: "NU Bookstore",
    target: "http://northeastern.bncollege.com/",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["map"],
    title: "Campus Map",
    target: "https://www.northeastern.edu/campusmap/",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["nusso"],
    title: "NU Space Scheduling Online",
    target: "https://nuevents.neu.edu/",
    description: "Your gateway to CSI & Snell Library reservations",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["org", "orgsync", "club"],
    title: "OrgSync",
    target: "https://orgsync.com/sso_redirect/northeastern-university/",
    description: "Your link to joining and leading student organizations",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["service-time-logs"],
    title: "Service Time Logs",
    target:
      "https://northeastern.secure.force.com/public/apex/ITSComEngMainEntry",
    description:
      "Time log entry for students involved in Civic Engagement Program (CEP)",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: [
      "software",
      "windows-software",
      "adobe-software",
      "microsoft-software",
      "vmware-software",
      "parallels-software"
    ],
    title: "On The Hub",
    target: "http://neu.onthehub.com/",
    description: "Free and Discounted Software for your computer",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["drc", "drc-services"],
    title: "DRC Services",
    target: "https://northeastern.secure.force.com/public/apex/ITSDRCMainEntry",
    description: "Approved Accommodation Request Forms",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["lynda"],
    title: "Lynda.com Training",
    target: "http://lynda.neu.edu/",
    description: "Access free online software training",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["study-abroad-apply"],
    title: "Global Experiences | Apply to Study Abroad",
    target: "https://prod-web.neu.edu/wasapp/oisp/app/secure/s/main.action",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["study-abroad-courses"],
    title: "Global Experiences | Study Abroad Course Selection",
    target:
      "https://northeastern.secure.force.com/public/apex/ITSGEOCourseApprovalEntry",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["coop-connections", "co-op-connections"],
    title: "Co-op Connections",
    target: "http://www.northeastern.edu/coopconnections/",
    description:
      "Your resource for housing and relocation services beyond Boston",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["housing-share", "coop-housing-share", "co-op-housing-share"],
    title: "Co-op Housing Share",
    target: "https://aptsearch.northeastern.edu/",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["ride-share", "coop-ride-share", "co-op-ride-share"],
    title: "Co-op Ride Share",
    target: "https://prod-web.neu.edu/wasapp/RideShare/secure/index.jsp",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["card-balance"],
    title: "Husky Card Account Balances",
    target:
      "https://prod-web.neu.edu/wasapp/HuskyCard/CurrentBalance/secure/retrieve/main.do",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["card-transactions", "card-transact"],
    title: "Husky Card Account Transactions",
    target: "https://prod-web.neu.edu/wasapp/ISF/cardTxns.do",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["card-preferences"],
    title: "Husky Card Preferences",
    target: "https://huskycardcenter.neu.edu/student/welcome.php",
    description: "Access WebCardCenter services",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["profiler", "card-profiler", "meal-profiler"],
    title: "Profiler Meal Plan Services",
    target: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_ppinfo",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["meal", "card-standard-meal", "standard-meal", "meal-standard"],
    title: "Standard Meal Plan Services",
    target: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_selmp",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["snell", "library", "snail"],
    title: "Snell Library",
    target: "http://library.northeastern.edu/",
    description: "Official site of Snell Library",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["snell-hours", "library-hours"],
    title: "Snell Library Hours",
    target: "http://library.northeastern.edu/about/visitors/hours",
    description:
      "Snell Library is generally open for study 24 hours a day, seven days a week, to current Northeastern students, faculty and staff. Use this link for up-to-date info.",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["law-library"],
    title: "School of Law Library",
    target: "http://www.northeastern.edu/law/library/",
    description: "Law Library services gateway",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["ill", "interlibrary-loan"],
    title: "Interlibrary Loan",
    target:
      "http://library.northeastern.edu/services/borrow-renew/request-from-other-libraries",
    description:
      "If you need an item that is unavailable at Northeastern, we will try to borrow it for you from another library",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["cite", "mla", "apa", "ieee"],
    title: "Citation guides",
    target: "http://subjectguides.lib.neu.edu/Citations",
    description:
      "A guide to frequently-used style guides and to research tools, and software, to help manage and auto-format your citations",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["article-database", "research", "research-database", "database"],
    title: "Article and Research Databases",
    target: "http://library.northeastern.edu/find/resources/a-to-z-index",
    description: "An A-Z list of our Electronic Resource Databases",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["onesearch", "scholar-onesearch"],
    title: "Scholar OneSearch",
    target: "http://library.northeastern.edu/myaccount",
    description:
      "One-stop searching for books and e-books, videos, articles, digital media, and more",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["parent-access", "guardian-access"],
    title: "Parent/Guardian Access to My Info",
    target:
      "https://prod-web.neu.edu/wasapp/ppmanageaccountLR/secure/initialize.do",
    description: "View and/or change permissions for parent/guardian accounts",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["ferpa-status"],
    title: "FERPA Status",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=NEUFERPA.p_display_ferpa",
    description:
      "View FERPA (Family Educational Rights and Privacy Act) guidelines and know your rights over your educational records and access to them",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["parking", "parking-apply", "guardian-access"],
    title: "Apply for Parking",
    target: "https://prod-web.neu.edu/wasapp/nuparking/SignupAuth.do",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["parking-non-resident"],
    title: "Non Resident Sticker",
    target: "https://prod-web.neu.edu/wasapp/NonResDecalLR/secure/main.action",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["change-address"],
    title: "Change of Address",
    target: "https://prod-web.neu.edu/wasapp/UpdateContactInfoLR/contactInfo",
    description: "View and update the address(es) on your student record",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["catalog"],
    title: "Course Catalog",
    target: "https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_dyn_ctlg",
    description: "View the list of courses offered at Northeastern",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["register", "course-register", "class-register"],
    title: "Course Registration",
    target: "https://nubanner.neu.edu/StudentRegistrationSsb",
    description: "Register for courses",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["ice", "emergency-contact"],
    title: "Emergency Contact Information",
    target: "https://prod-web.neu.edu/wasapp/EmergencyContactLR",
    description: "Update your emergency contact information",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["enrollment-verify"],
    title: "Enrollment/Degree Verification Request",
    target: "https://prod-web.neu.edu/wasapp/EnrollmentVerification",
    description:
      "Request either an official enrollment verification for a term(s), or a degree verification, both of which can be given to a third party",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["i-am-here", "estoy-aqui"],
    title: "I Am Here",
    target: "https://prod-web.neu.edu/wasapp/bn/iah/secure/iah/main.do",
    description:
      'Complete the "I Am Here" process to verify that you are attending classes',
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["mypaws", "paws", "degree", "degree-audit"],
    title: "My Degree Audit",
    target: "https://prod-web.neu.edu/wasapp/DARSStudent/RequestAuditServlet",
    description: "View your requirements and progress to degree",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["grades", "my-grades", "gpa"],
    title: "My Grades",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskogrd.P_ViewTermGrde",
    description: "View your grades for all completed Northeastern classes",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: [
      "schedule",
      "schedule",
      "class",
      "class",
      "class",
      "my-schedule"
    ],
    title: "My Schedule",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskfshd.P_CrseSchdDetl",
    description: "View your schedule of classes by term",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["searchneu", "searchnu", "search-classes"],
    title: "SearchNEU",
    target: "https://searchneu.com/",
    description:
      "Instantly search through all of NEU's classes. Search through classes, professors, sections, and subjects at Northeastern. Unofficial and run by students",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["transcript", "my-transcript"],
    title: "My Transcript",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskotrn.P_ViewTermTran",
    description:
      "View a copy of your academic transcript by level for all terms",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: [
      "registrar-forms",
      "leave-of-absense",
      "petition-to-reduce-load",
      "university-withdrawal",
      "late-course-registration"
    ],
    title: "Registrar Forms",
    target: "https://northeastern.secure.force.com/public/apex/ITSASCMainEntry",
    description:
      "Complete various registration-related actions such as University Withdrawal, Leave of Absence, or Petition to Reduce Load",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["food-trucks", "foodtrucks", "food-truck-schedule"],
    title: "Boston Food Trucks",
    target:
      "https://www.boston.gov/departments/small-business-development/city-boston-food-trucks-schedule",
    description:
      'Schedule for Boston\'s food trucks. The location next to Speare Hall is "Fenway-Kenmore" > "Opera Place (off Huntington Ave.)"',
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["schedule-of-classes"],
    title: "Schedule of Classes",
    target: "https://wl11gp.neu.edu/udcprod8/NEUCLSS.p_disp_dyn_sched",
    description: "Search the list of available class offerings by term",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["registrar", "registrar-self-service", "student-self-service"],
    title: "Registrar Self-Service",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu",
    description:
      "Complete actions related to registration, academic records (transcript), and your student account",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["withdrawal", "withdrawal-request"],
    title: "University Withdrawal Request",
    target: "https://northeastern.secure.force.com/public/apex/ITSASCUWEntry",
    description: "Submit a request to withdraw from Northeastern",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["remoteapp"],
    title: "Connect to RemoteApp",
    target: "https://remoteapp.nunet.neu.edu/RDWeb/Pages/en-US/login.aspx",
    description:
      "The client should be preinstalled for most Windows operating systems. Go to the RemoteApp main page for further information. RemoteApp is a service that allows members of the university community to access computer applications remotely. Support for RemoteApp is available by calling the ITS Service Desk at 617.373.4357 (xHELP)",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: [
      "it",
      "its",
      "resnet",
      "reznet",
      "service-now",
      "kb",
      "knowledgebase",
      "knowledge-base",
      "technology"
    ],
    title: "IT Service and Knowledge Base Portal",
    target: "https://northeastern.service-now.com/sp?id=index",
    description:
      "Manage your IT tickets and access Knowledge Base articles: find answers to your Northeastern technology questions 24x7",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["tv", "xfinity", "xfinity-on-campus", "cable"],
    title: "Access XFINITY On-Campus",
    target: "https://www.xfinityoncampus.com/home",
    description: "Watch TV from your computer if you live in on-campus housing",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: ["ethernet", "wired-device", "register-resnet"],
    title: "Register Resnet Wired Devices",
    target: "https://prod-web.neu.edu/wasapp/ResNetLogin/loginpage.html",
    description: "Gain internet access on ethernet/wired devices",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["housing", "housing-online"],
    title: "Housing Online",
    target: "https://neuidmsso.neu.edu/rmsmercury",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["mailbox", "mailbox-info"],
    title: "On-Campus Mailbox Information",
    target: "https://neuresmail.sclintra.com/addressforwarding",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["direct-deposit"],
    title: "Direct Deposit Form",
    target: "https://neuforms3.neu.edu/lfserver/DirectDeposit.xfm",
    description:
      "Establish or modify direct deposit for banking transactions such as refunds, payroll, and university reimbursements",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["nupay", "pay", "payment", "cashnet", "bills"],
    title: "Make a Payment with NUPay",
    target: "https://prod-web.neu.edu/wasapp/cashnet/sso/secure/s/main.action",
    description:
      "Pay tuition, pay a deposit, and other miscellaneous purchases",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["international-pay", "international-payment", "flywire"],
    title: "Make an International Payment",
    target: "https://prod-web.neu.edu/wasapp/ipayments/secure/main.action",
    description:
      "Utilize Flywire, the University’s official international payment processor to make payments to your student account",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: [
      "sfs-financial-aid",
      "financial-aid",
      "financial-aid-status",
      "finaid"
    ],
    title: "My Financial Aid Status",
    target: "https://www.pfw.neu.edu/netpartnerstudent",
    description: "View your financial aid status",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["scholarship"],
    title: "Scholarship Application",
    target:
      "https://nextgensso.com/sp/startSSO.ping?PartnerIdpId=https://neuidmsso.neu.edu/idp/shibboleth&TargetResource=https://northeastern.scholarships.ngwebsolutions.com/scholarx_studentportal.aspx",
    description: "Apply here for available scholarship opportunities",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["sfs", "1098-t", "tax-1098-t", "view-holds"],
    title: "Student Account, Payment and E-bill Information",
    target: "https://prod-web.neu.edu/wasapp/StudentFinancialServices/",
    description:
      "View your student account information, access your billing statements and make a payment",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["refund", "refund-request"],
    title: "Student Refund Request",
    target: "https://neuforms3.neu.edu/lfserver/nuloform/studentrefund",
    description:
      "Submit a request for a refund on an existing credit balance from your student account",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["waive-nushp", "nushp", "waive-health-plan"],
    title: "Waive NUSHP (Health Plan)",
    target: "https://www.gallagherstudent.com/northeastern",
    description:
      "Complete the NUSHP waiver form if you have comparable health insurance coverage with an alternative domestic provider",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: [
      "student-employment",
      "workstudy",
      "workstudy-jobs",
      "workstudy-timesheets",
      "timesheets"
    ],
    title: "Student Employment (workstudy, timesheets)",
    target: "https://studentemployment.neu.edu/JobXHome.aspx",
    description:
      "Fill out workstudy timesheets and search and apply for part-time student employment opportunities including Federal Work-Study positions",
    usageFrequency: "A FEW TIMES A WEEK"
  },
  {
    keywords: [
      "student-employee-self-service",
      "student-employment-taxes",
      "workstudy-taxes",
      "w-2",
      "w-4",
      "taxes",
      "benefits",
      "pay-information"
    ],
    title: "Student Employee Self-Service",
    target:
      "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=twbkwbis.P_GenMenu?name=pmenu.P_MainMnu",
    description:
      "Provides access to view pay statements for all pay periods beginning after 1/1/12. Also provides access to W-2 and W-4 information for changes beginning in calendar year 2012.",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["voter-registration"],
    title: "TurboVote Voter Registration",
    target: "https://neu.turbovote.org/",
    description:
      "Register to vote in upcoming elections! It takes less than two minutes to register",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["policies", "handbooks", "guidelines"],
    title: "Policies",
    target: "http://www.northeastern.edu/policies/",
    description:
      "University policies, handbooks, forms, guidelines and relevant resources are accessible through this website",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["travel-plans"],
    title: "My Travel Plans",
    target:
      "https://secure.worldcue.com/UserManagement/plannerLogin/redirect.htm?username=neuplanner",
    description:
      "Enter and track your itineraries for personal, study abroad, co-op, and other University travel",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["cauldron", "yearbook"],
    title: "NU Cauldron Yearbook",
    target: "https://www.northeastern.edu/cauldron/",
    description:
      "To get involved, purchase a yearbook, register for a senior portrait session, publicize your student group, advertise your local business, or find out more about the Cauldron Yearbook, check out www.cauldron.neu.edu! The Cauldron is committed to high quality annual yearbooks and has been proudly representing Northeastern University since 1922",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["trace", "mytrace"],
    title: "myTRACE - Teacher Rating and Course Evaluation",
    target: "https://www.applyweb.com/eval/shibboleth/neu/36892",
    description: "Access your complete course survey results online",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["writing-center"],
    title: "NU Writing Center",
    target: "http://www.northeastern.edu/writingcenter/",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["software", "software-downloads"],
    title: "Software Downloads",
    target:
      "https://prod-web.neu.edu/wasapp/SoftwareDistribution/secure/index.jsp",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["tutoring"],
    title: "Tutoring",
    target: "https://northeastern.secure.force.com/public/apex/ITSTutorEntry",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["classrooms", "view-classrooms"],
    title: "View the Classrooms",
    target: "https://classroom.neu.edu/Shibboleth.sso/Login",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["my-tickets"],
    title: "myTickets",
    target:
      "https://mytickets.northeastern.edu/Shibboleth.sso/Login?target=https%3A%2F%2Fmytickets%2Enortheastern%2Eedu%2FOnline%2Fdefault%2Easp&entityID=https://neuidmsso.neu.edu/idp/shibboleth",
    description: "Purchase tickets to athletic and student events here",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["uhcs", "my-health"],
    title: "myHealth Center (UHCS)",
    target: "https://neuportal.eclinicalweb.com/neu/jsp/100mp/login.jsp",
    description:
      "Complete/update health questionnaire, check upcoming appointments, and receive info from your clinician",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["uhcs-site"],
    title: "UHCS Website",
    target: "https://www.northeastern.edu/uhcs/",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: ["mail", "husky-mail", "gmail", "email"],
    title: "Husky Mail",
    target: "http://mail.google.com/a/husky.neu.edu",
    description: "Husky Mail is your University-provided email",
    usageFrequency: "DAILY"
  },
  {
    keywords: ["resmail", "resmail-hours"],
    title: "ResMail",
    target: "http://www.northeastern.edu/mailservices/ResMail/ResMail.html",
    description: "ResMail is the University Resident Mail Services",
    usageFrequency: "A FEW TIMES A SEMESTER"
  },
  {
    keywords: [
      "erezlife",
      "roommate-agreement",
      "ereslife",
      "ezrezlife",
      "ezreslife",
      "reslife",
      "rezlife"
    ],
    title: "eRezLife",
    target: "https://northeastern.erezlife.com",
    description: "Create roommate agreements, apply to be an RA",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["fafsa", "fasfa"],
    title: "FAFSA",
    target: "https://fafsa.ed.gov/",
    description: "Free Application for Federal Student Aid",
    usageFrequency: "ONCE A YEAR"
  },
  {
    keywords: ["aoun", "president"],
    title: "President Aoun",
    target: "https://twitter.com/presidentaoun",
    description: "Joseph E. Aoun",
    usageFrequency: "ONCE"
  },
  {
    keywords: ["nulinks", "extension", "nulinks-extension"],
    title: "NULinks",
    target:
      "https://chrome.google.com/webstore/detail/nulinks/gfbdcgkehhkgfehdilpmldkeihiojjak",
    description: "The NULinks chrome extension. Unofficial and run by students",
    usageFrequency: "ONCE"
  },
  {
    keywords: [
      "fp",
      "floor-plans",
      "floorplans",
      "housing-floor-plans",
      "housing-rooms"
    ],
    title: "Residential Building Floor Plans",
    target: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/",
    description:
      "Floor plans for Northeastern University Residential Buildings",
    usageFrequency: "ONCE A SEMESTER"
  },
  {
    keywords: ["pattern-of-attendance"],
    title: "Pattern of Attendance",
    target: "https://wl11gp.neu.edu/udcprod8/bzkspoa.P_SHOW_POA",
    description: "View your Pattern of Attendance",
    usageFrequency: "ONCE A YEAR"
  }
];

export default NULINKS_DATA;
