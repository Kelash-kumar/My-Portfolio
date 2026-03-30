import { Facebook, Linkedin, Github, GraduationCap, BookOpen, Briefcase, Award } from "lucide-react"

export const userData = {
  name: "Kelash Kumar",
  email: "kelash.raisal@gmail.com",
  phone: "+92 308 182 5757",
  address: "Gulshan e Zahoor Jacob Lines Area, Karachi, Sindh",
  profession: "Full Stack Developer | NodeJS",
  profile_image: "/assets/profile-pic.png",
  about_image: "/assets/about_image.jpg",

  about: `Full Stack Developer with 2+ years of production experience building enterprise CRM systems, SaaS platforms, and real-time dashboards. Delivered a multi-tenant CRM serving 3+ resort properties, integrated GoHighLevel to automate lead workflows, and improved Core Web Vitals on a high-traffic marketing platform.

Skilled at writing clean, maintainable code with a strong focus on performance optimisation and scalable architecture. Proficient in integrating third-party APIs and implementing complex backend logic with Node.js and SQL/NoSQL databases.`,

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
    { name: "React.js / Next.js",          percentage: "90", color: "#61dbfb" },
    { name: "Node.js / Express.js",         percentage: "85", color: "#68a063" },
    { name: "TypeScript",                   percentage: "80", color: "#3178C6" },
    { name: "MySQL / PostgreSQL",           percentage: "80", color: "#4479A1" },
    { name: "MongoDB",                      percentage: "85", color: "#4db33d" },
    { name: "Sequelize / Prisma / Knex.js", percentage: "75", color: "#0C344B" },
    { name: "Socket.IO",                    percentage: "80", color: "#010101" },
    { name: "Redux Toolkit",                percentage: "80", color: "#764abc" },
    { name: "TailwindCSS / Shadcn UI",      percentage: "90", color: "#38B2AC" },
    { name: "Framer Motion / GSAP",         percentage: "75", color: "#FF0055" },
    { name: "AWS EC2",                      percentage: "65", color: "#FF9900" },
    { name: "Git / GitHub",                 percentage: "90", color: "#f34f29" },
    { name: "REST APIs / JWT",              percentage: "85", color: "#000000" },
    { name: "Google Analytics (GA4)",       percentage: "70", color: "#F9AB00" },
    { name: "Laravel / PHP",                percentage: "45", color: "#FF2D20" },
    { name: "Python",                       percentage: "40", color: "#3776AB" },
  ],

  // Professional Experience & Education
  resumeData: [
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      year: "Feb 2024 – Present",
      title: "Full Stack Developer | MERN",
      company: "NetworkAlgo Business Solutions (Remote)",
      desc: "Architected and delivered a multi-tenant CRM platform with location-based access control, lead management, and booking workflows across 3+ resort properties. Built real-time sales dashboards using React and Highcharts, reducing manual reporting time by ~60%. Integrated GoHighLevel API to automate contact sync, appointment scheduling, and marketing workflows. Improved Core Web Vitals using Next.js lazy loading and dynamic imports. Implemented background jobs and cron tasks ensuring 24/7 system reliability. Developed 50+ reusable UI components and integrated GA4 + Google Tag Manager for user behaviour analytics. Designed a support ticket system with granular RBAC and bulk permission management for 100+ enterprise users.",
      technologies: ["TypeScript","React", "Next.js", "Node.js", "MySQL", "Sequelize", "Highcharts", "GoHighLevel API", "GA4"],
    },
    {
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "Nov 2021 – 2025 (expected)",
      title: "B.E. Software Engineering",
      company: "Mehran University of Engineering & Technology, Jamshoro",
      desc: "Bachelor of Engineering in Software Engineering with focus on web development, database systems, and software architecture. GPA: 3.4 / 4.0",
    },
    {
      type: "education",
      icon: <Award className="w-6 h-6" />,
      year: "2022 – 2025",
      title: "Certifications & Activities",
      desc: "AWS Cloud Technical Essentials – Amazon Web Services via Coursera (2025). Hacktoberfest Participant – AWS Cloud Club MUET (2024). Technplay 2023 Competitor – Mehran UET Software Engineering Dept (2023). JavaScript Frontend to Backend – Microsoft Learn Student Ambassador Event (2022).",
    },
  ],

  // Services
  services: [
    {
      title: "SaaS & CRM Development",
      description:
        "Building multi-tenant CRM systems and property management platforms with location-based access control, lead management, RBAC, and automated background tasks (Cron Jobs).",
      image: "https://placehold.co/400x300/3b82f6/ffffff?text=SaaS+Development",
    },
    {
      title: "Real-Time Dashboards",
      description:
        "Developing interactive dashboards using React, Highcharts, and Socket.IO for sub-second live updates | from sales KPIs to NSE option chain tracking with WebSocket communication.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=Real-Time+Dashboards",
    },
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end development using MERN and Next.js | from database schema design and REST APIs to polished, performant frontends with GA4 integration and Core Web Vitals optimisation.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Web+Development",
    },
  ],

  // Key Projects
  projects: [
    {
      id: 1,
      title: "StayShare | CRM & Sales Platform",
      category: "Reactjs",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=StayShare+CRM",
      desc: "Designed a Booking Reservation System with custom interactive calendars and real-time availability management for multi-location resort services. Integrated Analyze360 Data Enrichment and GoHighLevel APIs providing AI-driven lead personas and lifestyle profiling to improve conversion rates. Built automated Sales Reporting and Financial Tools enabling one-click PDF/Excel report generation and fiscal performance dashboards. Implemented granular RBAC with bulk permission management and a support ticket system, supporting 100+ users across multiple roles.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize", "Material UI", "TailwindCSS", "Highcharts"],
      year: "Oct 2024 – Present",
    },
    {
      id: 2,
      title: "Intellishare.ai | Marketing & Training Platform",
      category: "Nodejs",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Intellishare.ai",
      desc: "Built a high-performance marketing and training platform for the timeshare industry using Next.js and React. Achieved measurable improvements in Core Web Vitals through progressive video loading, dynamic asset preloading, and skeleton screens. Developed AI-powered role-play training modules to help sales teams increase VPG (Value Per Guest) and improve customer retention.",
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "TailwindCSS"],
      year: "Jun 2024 – Aug 2024",
    },
    {
      id: 3,
      title: "Real-Time Stock Analysis Tool (NSE)",
      category: "Reactjs",
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Stock+Analysis",
      desc: "Built a live NSE option chain dashboard with sub-second data refresh using Socket.IO WebSockets. Implemented automated market-hours cron jobs (9:15 AM – 3:30 PM IST) for fetching and caching live market data. Added FII/DII activity tracking, market sentiment indicators, and automated data cleanup routines to manage storage efficiently.",
      technologies: ["React", "Node.js", "MySQL", "Socket.IO"],
      year: "Oct 2025 – Nov 2025",
    },
    {
      id: 4,
      title: "Community Family Tree Management System",
      category: "Nodejs",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Family+Tree",
      desc: "Built a genealogy platform with interactive family tree visualisation using the Closure Table pattern for hierarchical relational data. Implemented multi-community separation, RBAC, and comprehensive audit logging following MVC architecture for long-term maintainability.",
      technologies: ["React", "Node.js", "Sequelize", "MySQL"],
      year: "Jan 2024 – Sep 2024",
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      category: "Reactjs",
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Portfolio",
      desc: "Designed and deployed a responsive portfolio website with a JSON-based content management system, allowing all content updates without touching UI code. Optimised for mobile responsiveness and fast loading across all devices. Deployed on Vercel with continuous integration.",
      technologies: ["React", "TailwindCSS", "Vercel"],
      year: "Mar 2023",
    },
  ],

  // Stats
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies",       value: "15+" },
    { label: "Certifications",     value: "4"   },
  ],
}