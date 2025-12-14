import { Facebook, Linkedin, Github, GraduationCap, BookOpen, Briefcase } from "lucide-react"

export const userData = {
  name: "Kelash Kumar",
  email: "kelash.raisal@gmail.com",
  phone: "+92 3491100042",
  address: "Karachi, Sindh, Pakistan",
  profession: "Junior Full-Stack Developer | MERN Stack",
  profile_image: "/assets/profile-pic.png",
  about: `I'm a full-stack web developer with more than a year of experience building scalable applications with the MERN stack. I work with React, Node, Express, TypeScript, and Next.js to create clean user interfaces and dependable backend systems.

I've developed REST APIs, worked with MySQL and MongoDB, and deployed projects on AWS EC2. I am committed to improving my craft and have been expanding my skills in DevOps, especially Docker and Jenkins.

I have strong technical proficiency in Frontend (React.js, Next.js, TailwindCSS) and Backend (Node.js, Express.js, Prisma/Sequelize ORM). Fluent in Sindhi, Urdu, and English, I am eager to apply my skills in a challenging environment.`,
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
      name: "Facebook", // Link retained from previous data as it was not in CV but likely correct
      link: "https://www.facebook.com/kelash.raisal/",
      icons: <Facebook className="w-6 h-6" />,
    },
  ],

  skills: [
    { name: "React.js", percentage: "90", color: "#61dbfb" },
    { name: "Next.js", percentage: "85", color: "#000000" },
    { name: "Node.js", percentage: "80", color: "#68a063" },
    { name: "Express.js", percentage: "80", color: "#ffef00" },
    { name: "TypeScript", percentage: "75", color: "#3178C6" },
    { name: "MongoDB", percentage: "85", color: "#4db33d" },
    { name: "MySQL", percentage: "75", color: "#4479A1" },
    { name: "PostgreSQL", percentage: "70", color: "#336791" },
    { name: "TailwindCSS", percentage: "90", color: "#38B2AC" },
    { name: "Prisma/Sequelize", percentage: "70", color: "#0C344B" },
    { name: "Docker", percentage: "50", color: "#2496ED" },
    { name: "Git/GitHub", percentage: "85", color: "#f34f29" },
  ],

  resumeData: [
    {
      type: "education",
      icon: <BookOpen className="w-6 h-6" />,
      year: "2023 - Present", // Implied from "Expected Graduation"
      title: "B.E in Software Engineering",
      desc: "Mehran University of Engineering & Technology, Jamshoro. GPA: 3.4/4.0. Active member of GDSC & SES Society.",
    },
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />, // Changed icon to Briefcase for better semantics
      year: "Recent",
      title: "Full-Stack Developer | IntelliShare.ai",
      desc: "Developed an AI-assisted web platform for London Resort using Next.js. Implemented server-side rendering (SSR), optimized SEO, and built reusable TypeScript components. Integrated AI-powered search and recommendation features.",
    },
    {
      type: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      year: "Previous",
      title: "Full-Stack Developer | Network Algo",
      desc: "Designed a lead management system using React.js, Node.js, and MySQL. Created dynamic dashboards with real-time analytics, RBAC (Role-Based Access Control), and export functionality. Established structured database schemas.",
    },
    {
      type: "experience",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2022",
      title: "Certifications & Awards",
      desc: "GitHub Expert MLSA Community, React.js Developer (DEVTOWN), Programming Competition Award (GDSC & SES Society).",
    },
  ],

  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "Building scalable applications using the MERN stack (MongoDB, Express, React, Node). I utilize Next.js for SSR and SEO optimization, ensuring fast page loads and seamless user experiences.",
      image: "/assets/fsd.avif",
    },
    {
      title: "Backend & API Development",
      description:
        "Developing robust RESTful APIs and dependable backend systems. Experience with Sequelize and Prisma ORMs for managing MySQL and PostgreSQL databases, along with JWT authentication.",
      image: "/assets/wd.avif",
    },
    {
      title: "Database Architecture",
      description:
        "Designing structured schemas for SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Implementation of complex relationships, aggregation pipelines, and optimization strategies.",
      image: "/assets/wd.avif",
    },
  ],

  projects: [
    {
      id: 1,
      title: "London Resort AI Platform",
      category: "Next.js",
      image: "/assets/Docs-App-react.png", // Placeholder: Recommend updating image path
      desc: "An AI-assisted platform featuring interactive resort exploration and booking flows. Built with Next.js, TypeScript, and Server Actions for seamless inquiry processing.",
    },
    {
      id: 2,
      title: "Lead Management Dashboard",
      category: "React/Node",
      image: "/assets/react-website.png", // Placeholder
      desc: "A comprehensive system with real-time analytics for lead performance. Features advanced filtering, RBAC, and data visualization using React, Node.js, and MySQL.",
    },
    {
      id: 3,
      title: "Job Portal Application",
      category: "MERN Stack",
      image: "/assets/Blog-website-login_singup.png", // Placeholder
      desc: "Full-stack portal with conditional authentication for students and admins. Implemented global error handling, Redux for state management, and complex MongoDB CRUD operations.",
    },
    {
      id: 4,
      title: "Full-Stack Blog Platform",
      category: "MERN Stack",
      image: "/assets/Blog-website-login_singup.png", // Placeholder
      desc: "Complete blogging platform with RESTful APIs. Features include efficient MongoDB data management, CORS handling, and a responsive React frontend.",
    },
    {
      id: 5,
      title: "Task Management App",
      category: "React/Express",
      image: "/assets/Contact_app.png", // Placeholder
      desc: "Integrated frontend with backend ensuring seamless client-server communication. Focus on API development and smooth database operations.",
    },
  ],

  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "4" },
  ],
}