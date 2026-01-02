import { Facebook, Linkedin, Github, GraduationCap, BookOpen, Briefcase } from "lucide-react"

export const userData = {
  name: "Kelash Kumar", // 
  email: "kelash.raisal@gmail.com", // [cite: 2]
  phone: "+92 3491100042", // [cite: 2] (Primary from CV)
  address: "R-57/58 First Floor Jacob Lines Area, Karachi Sindh", // [cite: 2]
  profession: "Full-Stack Developer (MERN & Next.js)", // [cite: 2]
  profile_image: "/assets/profile-pic.png",
  about_image: "/assets/about_image.jpg",
  
  // Updated based on Professional Summary [cite: 4, 5, 6, 7] and Languages [cite: 58]
  about: `I am a Full-Stack Developer with expertise in developing production-grade web applications using the MERN stack and Next.js. I have proven experience building CRM systems, SaaS platforms, and real-time dashboards for business operations.

  My focus is on writing clean, maintainable code with an emphasis on performance optimization and scalable system architecture. I am proficient in integrating third-party APIs like GoHighLevel and implementing complex backend logic with Node.js and SQL/NoSQL databases.

  In addition to my technical skills, I am a native Sindhi speaker, fluent in Urdu, and possess professional proficiency in English.`,

  social: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kelash-kumar-47245a255/", // Retained existing link
      icons: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Kelash-kumar", // Retained existing link
      icons: <Github className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/kelash.raisal/",
      icons: <Facebook className="w-6 h-6" />,
    },
  ],

  // Updated based on Technical Skills section [cite: 9, 10, 11]
  skills: [
    { name: "React.js / Next.js", percentage: "90", color: "#61dbfb" },
    { name: "Node.js / Express", percentage: "85", color: "#68a063" },
    { name: "TypeScript", percentage: "80", color: "#3178C6" },
    { name: "MySQL / PostgreSQL", percentage: "75", color: "#4479A1" },
    { name: "MongoDB", percentage: "85", color: "#4db33d" },
    { name: "Sequelize / Prisma", percentage: "70", color: "#0C344B" },
    { name: "Socket.IO", percentage: "75", color: "#010101" }, // Added from CV [cite: 9]
    { name: "Redux Toolkit", percentage: "80", color: "#764abc" }, // Added from CV [cite: 9]
    { name: "TailwindCSS", percentage: "90", color: "#38B2AC" },
    { name: "AWS EC2", percentage: "60", color: "#FF9900" }, // Added from CV [cite: 11]
    { name: "Git / GitHub", percentage: "85", color: "#f34f29" },
    { name: "Shadcn UI / GSAP", percentage: "70", color: "#000000" }, // Added from CV [cite: 9]
  ],

  // Updated based on Professional Experience [cite: 13-25] and Education [cite: 26-29]
  resumeData: [
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      year: "Oct 2024 - Nov 2025",
      title: "Full-Stack Developer | NetworkAlgo Business Solutions",
      desc: "Developed a multi-tenant CRM and Property Management System. Built real-time sales dashboards using React Highcharts and integrated GoHighLevel API for automated contact synchronization. Implemented booking systems and cron jobs for background processing.",
    },
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      year: "Jun 2024 - Aug 2024",
      title: "Full-Stack Developer | IntelliShare.ai",
      desc: "Built a B2B marketing platform for the timeshare industry using Next.js. Optimized application performance via lazy loading and developed a reusable component library. Integrated GA4 and GTM for user tracking.",
    },
    {
      type: "education",
      icon: <BookOpen className="w-6 h-6" />,
      year: "Expected: 2025",
      title: "B.E. Software Engineering",
      desc: "Mehran University of Engineering & Technology, Jamshoro. GPA: 3.4/4.0.",
    },
    {
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2023 - 2025",
      title: "Certifications & Awards",
      desc: "AWS Cloud Technical Essentials (Coursera), Hacktoberfest Participant (2024), Technplay Competitor (2023), Microsoft Learn Student Ambassador Event (2022).",
    },
  ],

  // Refined based on specific experience highlights
  services: [
    {
      title: "SaaS & CRM Development",
      description:
        "Building multi-tenant architecture and property management systems with location-based access control and automated background tasks (Cron Jobs).", // [cite: 16, 20]
      image: "/assets/fsd.avif",
    },
    {
      title: "Real-Time Dashboards",
      description:
        "Developing interactive dashboards using React Highcharts and Socket.IO for sub-second data updates and live market/sales tracking.", // [cite: 17, 35]
      image: "/assets/wd.avif",
    },
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end development using MERN and Next.js. Expertise in SEO optimization, GA4 integration, and relational database design (MySQL/PostgreSQL).", // [cite: 5, 25]
      image: "/assets/wd.avif",
    },
  ],

  // Updated based on Key Projects [cite: 30-51]
  projects: [
    {
      id: 1,
      title: "Real-Time Stock Analysis Tool (NSE)",
      category: "React / Node.js / Socket.IO",
      image: "/assets/Docs-App-react.png", // Placeholder
      desc: "A real-time dashboard tracking NSE option chain data with sub-second updates using WebSocket. Features automated cron jobs for market data fetching and sentiment indicators.", // [cite: 31-37]
    },
    {
      id: 2,
      title: "Community Family Tree System",
      category: "React / Node.js / Sequelize",
      image: "/assets/react-website.png", // Placeholder
      desc: "Genealogy platform with interactive visualization. Designed relational schema using Closure Table pattern for hierarchical data and implemented role-based access control.", // [cite: 38-44]
    },
    {
      id: 3,
      title: "Property Management CRM",
      category: "React / Highcharts",
      image: "/assets/Contact_app.png", // Placeholder
      desc: "Multi-tenant CRM for vacation rentals. Features real-time sales tracking, GoHighLevel API integration for appointments, and resource allocation booking systems.", // [cite: 16-19]
    },
    {
      id: 4,
      title: "IntelliShare B2B Platform",
      category: "Next.js / TypeScript",
      image: "/assets/Blog-website-login_singup.png", // Placeholder
      desc: "B2B marketing platform optimized for performance with lazy loading. Includes a reusable component library and detailed user behavior tracking via Google Analytics 4.", // [cite: 21-25]
    },
    {
      id: 5,
      title: "Personal Portfolio",
      category: "React / Tailwind / Vercel",
      image: "/assets/react-website.png", // Placeholder
      desc: "Responsive portfolio with a JSON-based content management system. Optimized for mobile responsiveness and deployed on Vercel with CI/CD.", // [cite: 45-51]
    },
  ],

  // Updated stats
  stats: [
    { label: "Years Experience", value: "2+" }, // Implied from 2023 Portfolio start + 2024/25 Jobs
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "4" }, // [cite: 53-56]
  ],
}