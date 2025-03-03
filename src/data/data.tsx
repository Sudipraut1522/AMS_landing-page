import {
  Users,
  Briefcase,
  CalendarCheck,
  CreditCard,
  Code,
  MessageSquare,
  ListChecks,
  BarChart3,
  HelpCircle,
  FileText,
  DollarSign,
  UserPlus,
  BarChart,
  Heart,
  BookOpen,
  ShieldCheck,
  PieChart,
} from "lucide-react";

export const WallOfLoveData = [
  {
    name: "John Doe",
    description: "This platform has completely transformed our HR process!",
    position: "CEO, TechCorp",
    rating: "https://via.placeholder.com/100x20?text=★★★★★",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    description: "Seamless and efficient. I highly recommend it.",
    position: "HR Manager, InnovateX",
    rating: "https://via.placeholder.com/100x20?text=★★★★☆",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    description: "Seamless and efficient. I highly recommend it.",
    position: "HR Manager, InnovateX",
    rating: "https://via.placeholder.com/100x20?text=★★★★☆",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    description: "Seamless and efficient. I highly recommend it.",
    position: "HR Manager, InnovateX",
    rating: "https://via.placeholder.com/100x20?text=★★★★☆",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    description: "Seamless and efficient. I highly recommend it.",
    position: "HR Manager, InnovateX",
    rating: "https://via.placeholder.com/100x20?text=★★★★☆",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alex Johnson",
    description: "The user interface is incredibly intuitive.",
    position: "COO, WebWorks",
    rating: "https://via.placeholder.com/100x20?text=★★★★★",
    image: "https://via.placeholder.com/150",
  },
];

export const hrManagementData = {
  title: "HR MANAGEMENT SIMPLIFIED",
  description:
    "Adapt to new realities, work faster and smarter. Determine a defined future of work for your organization with a strong, flexible, global HR solution.",
  list: [
    "Easy access to documents and information.",
    "An employee database that scales.",
    "Smart HR workflows.",
    "Automation of HR processes.",
  ],
  image:
    "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/HM-3-1-2048x1497.webp",
};

export const payRollManagement = {
  title: "PAYROLL MANAGEMENT",
  description:
    "Simplify the complex processes of payroll with RapidHR, a powerful, secure, accurate, automated, and 100% compliant system! RapidHR provides quicker processing, precise payouts, and helps businesses prevent financial and legal repercussions from non-compliance while ensuring employees are paid accurately and on time.",
  list: [
    "Quickly determine payroll calculations and deductions",
    "Generate accurate Payslips",
    "Using payroll management to plan future costs",
    "Secure Data and Privacy",
  ],
  image:
    "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/payroll-mgmt.webp",
};

export const performanceManagement = {
  title: "PERFORMANCE MANAGEMENT",
  description:
    "Regular performance management with RapidHR encourages your employees to aim for excellence. Then, your organization is set up for success and growth.",
  list: [
    "360 Performance reviews and templates",
    "Management By Objectives",
    "Self-Evaluation Tools",
    "Performance reports",
  ],
  image:
    "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Performance-mgmt.webp",
};

export const recruitmentManagement = {
  title: "Recruitment Management",
  description:
    "Accomplish the high-volume process of sourcing, tracking, and recruiting the best talent that is aligned with your business – on a single, comprehensive, centralized platform.",
  list: [
    "Efficient & Flexible Hiring",
    "Digital Offer Process Management",
    "Tracking & Analytics",
    "Letters & Mail Merge",
  ],
  image:
    "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Recruitment-mgmt.webp",
};

export const menuItems = [
  {
    label: "HR Management",
    submenu: [
      {
        icon: <Users className="text-green-600 hover:text-blue-500" />,
        label: "Core HR",
        description:
          "Empowering organizations with seamless management of their human capital.",
      },
      {
        icon: <Briefcase className="text-yellow-600 hover:text-blue-500" />,
        label: "On Boarding",
        description: "Streamline job posting and approval workflows",
      },
      {
        icon: <CalendarCheck className="text-indigo-600 hover:text-blue-500" />,
        label: "Attendance Management",
        description: "Monitor and track employee attendance effectively.",
      },
      {
        icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
        label: "Payroll Management",
        description: "Automate salary calculations and payments.",
      },
      {
        icon: <CalendarCheck className="text-indigo-600 hover:text-blue-500" />,
        label: "Leave Management",
        description: "Manage employee leave requests efficiently.",
      },
      {
        icon: <Code className="text-purple-600 hover:text-blue-500" />,
        label: "Discord Bot",
        description: "Integrate automation for HR-related tasks via Discord.",
      },
      {
        icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
        label: "Communication Module",
        description: "Enhance internal communication and collaboration.",
      },
      {
        icon: <ListChecks className="text-teal-600 hover:text-blue-500" />,
        label: "Task Management",
        description: "Track and manage employee tasks and projects.",
      },
      {
        icon: <BarChart3 className="text-orange-600 hover:text-blue-500" />,
        label: "Performance",
        description: "Analyze and improve employee performance.",
      },
      {
        icon: <HelpCircle className="text-red-600 hover:text-blue-500" />,
        label: "Help and Support",
        description: "Access support and HR-related assistance.",
      },
    ],
  },
  {
    label: "Recruitment & Onboarding",
    submenu: [
      {
        icon: <Briefcase className="text-yellow-600 hover:text-blue-500" />,
        label: "Candidate Sourcing",
        description: "Manage and post job listings with ease.",
      },
      {
        icon: <Users className="text-green-600 hover:text-blue-500" />,
        label: "Job Requisition Management",
        description: "Filter and assess candidates efficiently.",
      },
      {
        icon: <CalendarCheck className="text-indigo-600 hover:text-blue-500" />,
        label: "Candidate Management",
        description: "Automate interview scheduling and notifications.",
      },
      {
        icon: <FileText className="text-gray-600 hover:text-blue-500" />,
        label: "Career Page",
        description: "Manage job applications and job postings.",
      },
      {
        icon: <FileText className="text-gray-600 hover:text-blue-500" />,
        label: "Pre-Boarding",
        description: "Assist new hires before they start work.",
      },
      {
        icon: <Code className="text-purple-600 hover:text-blue-500" />,
        label: "Integration",
        description: "Seamlessly integrate recruitment tools.",
      },
      {
        icon: <BarChart3 className="text-orange-600 hover:text-blue-500" />,
        label: "AI Recommendation",
        description: "Use AI for better candidate recommendations.",
      },
      {
        icon: <BarChart3 className="text-orange-600 hover:text-blue-500" />,
        label: "Report and Analytics",
        description: "Track hiring trends and performance metrics.",
      },
      {
        icon: <HelpCircle className="text-red-600 hover:text-blue-500" />,
        label: "Support and Assistance",
        description: "Get help with recruitment and onboarding.",
      },
    ],
  },
  {
    label: "Resources",
    submenu: [
      {
        icon: <FileText className="text-gray-600 hover:text-blue-500" />,
        label: "Downloads",
        description: "Access important HR documentation.",
      },
      {
        icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
        label: "Case Study",
        description: "Review company policies and guidelines.",
      },
    ],
  },
  {
    label: "Pricing",
    submenu: [
      {
        icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
        label: "Subscription Plans",
        description: "Choose a plan that fits your needs.",
      },
      {
        icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
        label: "Enterprise Solutions",
        description: "Custom pricing for large-scale businesses.",
      },
    ],
  },
  {
    label: "About",
    submenu: [
      {
        icon: <Users className="text-green-600 hover:text-blue-500" />,
        label: "Our Story",
        description: "Meet the people behind our success.",
      },
      {
        icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
        label: "Contact Us",
        description: "Learn about our goals and vision.",
      },
    ],
  },
];

export const TrustedBy = [
  {
    label: "Companies",
    value: "5+",
    image:
      "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/sec-house.svg",
  },
  {
    label: "Employees",
    value: "100+",
    image:
      " https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Frame-7.svg  ",
  },
  {
    label: "Features",
    value: "50+",
    image:
      "    https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Frame-8.svg",
  },
  {
    label: "Cities",
    value: "5+",
    image:
      "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Frame-10.svg",
  },
];
export const Feature = [
  {
    title: "Core HRMS",
    icon: <Users size={24} color="#4A90E2" />,
    color: "#E3F2FD", // Light Blue
    description:
      "Employee management, directory, workflows, self-service, document management",
  },
  {
    title: "Payroll Management",
    icon: <DollarSign size={24} color="#F5A623" />,
    color: "#FFF3E0", // Light Orange
    description:
      "Automate payroll processing, tax calculations, and compliance reporting",
  },
  {
    title: "Recruitment & Onboarding",
    icon: <UserPlus size={24} color="#7ED321" />,
    color: "#E8F5E9", // Light Green
    description:
      "Streamline hiring process, track applicants, and manage onboarding",
  },
  {
    title: "Performance Management",
    icon: <BarChart size={24} color="#D0021B" />,
    color: "#FFEBEE", // Light Red
    description: "Monitor employee performance, feedback, and goal tracking",
  },
  {
    title: "Attendance & Leave",
    icon: <CalendarCheck size={24} color="#BD10E0" />,
    color: "#F3E5F5", // Light Purple
    description:
      "Manage leave policies, track attendance, and automate approvals",
  },
  {
    title: "Employee Engagement",
    icon: <Heart size={24} color="#FF4081" />,
    color: "#FCE4EC", // Light Pink
    description: "Boost morale with surveys, rewards, and recognition programs",
  },
  {
    title: "Training & Development",
    icon: <BookOpen size={24} color="#00BCD4" />,
    color: "#E0F7FA", // Light Cyan
    description:
      "Upskill employees with training modules and progress tracking",
  },
  {
    title: "Compliance & Security",
    icon: <ShieldCheck size={24} color="#8B572A" />,
    color: "#FFF8E1", // Light Yellow
    description: "Ensure legal compliance and secure employee data management",
  },
  {
    title: "Analytics & Reports",
    icon: <PieChart size={24} color="#F8E71C" />,
    color: "#ECEFF1", // Light Gray
    description: "Gain insights with HR analytics and custom reports",
  },
];
