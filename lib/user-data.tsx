import { Facebook, Linkedin, Github, GraduationCap, BookOpen, Briefcase, Award } from "lucide-react"

export const userData = {
  name: "Kelash Kumar",
  email: "kelash.raisal@gmail.com",
  phone: "+92 3081825757",
  address: "House 57/58 Gulshan e Zahoor Jacob Lines Area, Karachi Sindh",
  profession: "Full-Stack Developer (MERN & NodeJs)",
  profile_image: "/assets/profile-pic.png",
  about_image: "/assets/about_image.jpg",
  
  about: `Full-Stack Developer with expertise in developing production-grade web applications using the MERN stack and Next.js. Proven experience building CRM systems, SaaS platforms, and real-time dashboards for business operations.

Focused on writing clean, maintainable code with emphasis on performance optimization and scalable system architecture. Proficient in integrating third-party APIs like GoHighLevel and implementing complex backend logic with Node.js and SQL/NoSQL databases.

Languages: Sindhi (Native), Urdu (Fluent), English (Professional)`,

  social: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kelash-kumar-47245a255/",
      icons: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Kelash-kumar",
      icons: <Github className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/kelash.raisal/",
      icons: <Facebook className="w-6 h-6" />,
    },
  ],

  // Technical Skills
  skills: [
    { name: "React.js / Next.js", percentage: "90", color: "#61dbfb" },
    { name: "Node.js / Express.js", percentage: "85", color: "#68a063" },
    { name: "TypeScript", percentage: "80", color: "#3178C6" },
    { name: "MySQL / PostgreSQL", percentage: "80", color: "#4479A1" },
    { name: "MongoDB", percentage: "85", color: "#4db33d" },
    { name: "Sequelize / Prisma / Knex.js", percentage: "75", color: "#0C344B" },
    { name: "Socket.IO", percentage: "80", color: "#010101" },
    { name: "Redux Toolkit", percentage: "80", color: "#764abc" },
    { name: "TailwindCSS / Shadcn UI", percentage: "90", color: "#38B2AC" },
    { name: "Framer Motion / GSAP", percentage: "75", color: "#FF0055" },
    { name: "AWS EC2", percentage: "65", color: "#FF9900" },
    { name: "Git / GitHub", percentage: "90", color: "#f34f29" },
    { name: "REST APIs / JWT", percentage: "85", color: "#000000" },
    { name: "Google Analytics (GA4)", percentage: "70", color: "#F9AB00" },
  ],

  // Professional Experience & Education
  resumeData: [
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      year: "Feb 2024 - Present",
      title: "Full-Stack Developer | MERN",
      company: "NetworkAlgo Business Solutions",
      desc: "Developed a multi-tenant CRM and Property Management System for vacation rental and B2B marketing businesses. Designed location-based access control, lead management, support workflows, and booking systems for multi-property resource allocation. Built real-time sales and performance dashboards using React and Highcharts to track lead conversion and team metrics. Integrated third-party APIs including GoHighLevel for automated contact synchronization, appointment scheduling, and marketing workflows. Improved application performance using Next.js optimizations such as lazy loading and dynamic imports. Implemented background jobs and cron tasks for token refresh, data synchronization, and scheduled processing. Developed reusable UI components and integrated GA4 and Google Tag Manager for user behavior and analytics tracking.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize", "Highcharts", "GoHighLevel API", "Next.js", "GA4"],
    },
    {
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "Nov 2021 - 2025",
      title: "B.E. Software Engineering",
      company: "Mehran University of Engineering & Technology, Jamshoro",
      desc: "Bachelor of Engineering in Software Engineering with focus on web development, database systems, and software architecture. GPA: 3.4/4.0",
    },
    {
      type: "education",
      icon: <Award className="w-6 h-6" />,
      year: "2022 - 2025",
      title: "Certifications & Awards",
      desc: "AWS Cloud Technical Essentials – Amazon Web Services (Coursera, 2025). Hacktoberfest Participant – AWS Cloud Club MUET (2024). Technplay 2023 Competitor – Mehran UET Software Engineering Dept (2023). JavaScript Frontend to Backend – Microsoft Learn Student Ambassador Event (2022).",
    },
  ],

  // Services
  services: [
    {
      title: "SaaS & CRM Development",
      description: "Building multi-tenant architecture and property management systems with location-based access control, lead management, and automated background tasks (Cron Jobs).",
      image: "https://placehold.co/400x300/3b82f6/ffffff?text=SaaS+Development",
    },
    {
      title: "Real-Time Dashboards",
      description: "Developing interactive dashboards using React Highcharts and Socket.IO for sub-second data updates and live market/sales tracking with WebSocket communication.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=Real-Time+Dashboards",
    },
    {
      title: "Full-Stack Web Apps",
      description: "End-to-end development using MERN and Next.js. Expertise in SEO optimization, GA4 integration, and relational database design with MySQL/PostgreSQL.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Web+Development",
    },
  ],

  // Key Projects with placeholder images
  projects: [
    {
      id: 1,
      title: "CRM & Property Management System",
      category: "Reactjs",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=CRM+System",
      desc: "Developed a multi-tenant CRM and Property Management System for vacation rental businesses with location-based access control. Built real-time sales dashboards using React Highcharts to track lead conversion and team performance metrics. Integrated GoHighLevel API for automated contact synchronization and appointment scheduling. Implemented a booking system to manage resource allocation and availability across multiple properties. Configured cron jobs for automated token refresh and background data processing tasks.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "Oct 2024 - Nov 2025",
    },
    {
      id: 2,
      title: "IntelliShare.ai — B2B Marketing Platform",
      category: "Nodejs",
      image: "https://placehold.co/600x400/10b981/ffffff?text=IntelliShare.ai",
      desc: "Built a B2B marketing platform for the timeshare industry using Next.js and React, focusing on performance and scalability. Optimized application performance through lazy loading and dynamic imports, improving page load times. Developed a reusable component library to ensure long-term maintainability and consistent UI patterns. Integrated Google Analytics 4 (GA4) and Google Tag Manager (GTM) for detailed user behavior tracking.",
      technologies: ["Next.js", "React", "Node.js", "MySQL", "Socket.IO"],
      year: "Jun 2024 - Aug 2024",
    },
    {
      id: 3,
      title: "Real-Time Stock Analysis Tool (NSE)",
      category: "Reactjs",
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Stock+Analysis",
      desc: "Developed real-time dashboard for tracking NSE option chain data with live market updates. Implemented WebSocket communication using Socket.IO for sub-second data refresh rates. Built automated cron jobs to fetch market data during trading hours (9:15 AM - 3:30 PM IST). Added market sentiment indicators, FII/DII activity tracking, and automated data cleanup routines to manage storage efficiently.",
      technologies: ["React", "Node.js", "MySQL", "Socket.IO"],
      year: "Oct 2025 - Nov 2025",
    },
    {
      id: 4,
      title: "Community Family Tree Management System",
      category: "Nodejs",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Family+Tree",
      desc: "Developed genealogy platform with interactive family tree visualization and navigation. Designed relational database schema using Closure Table pattern to efficiently handle hierarchical data structures. Implemented role-based access control, multi-community separation, and comprehensive audit logging. Structured application following MVC architecture for improved maintainability and code organization.",
      technologies: ["React", "Node.js", "Sequelize", "MySQL"],
      year: "Jan 2024 - Sep 2024",
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      category: "Reactjs",
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Portfolio",
      desc: "Designed and developed responsive portfolio website with JSON-based content management system. All content is managed through a single JSON file, making updates simple without modifying UI code. Optimized for mobile responsiveness and fast loading times across all devices. Deployed on Vercel with continuous integration for seamless updates.",
      technologies: ["React", "TailwindCSS", "Vercel"],
      year: "Mar 2023",
    },
  ],

  // Stats
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "4" },
  ],
}