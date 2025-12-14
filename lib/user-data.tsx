import { Facebook, Linkedin, Github, GraduationCap, BookOpen } from "lucide-react"

export const userData = {
  name: "Kelash Kumar",
  email: "kelash.raisal@gmail.com",
  phone: "+92 3491100042",
  address: "Jamshoro, Sindh, Pakistan",
  profession: " Junior Full-Stack Developer | MERN Stack",
  profile_image: "/assets/profile-pic.png",
  about: `My name is Kelash Kumar, and I am a dedicated software engineering student hailing from Umerkot, Sindh. I am currently pursuing my education at Mehran University of Engineering and Technology. With a fervent passion for technology, I have diligently acquired a comprehensive skill set in web development and am eager to apply my knowledge to real-world projects.

I am a self-taught developer, I am currently working as a freelancer and looking for a full-time job as a MERN Stack Developer. I am a team player and I love working with people. I am a fast learner and I am always looking for ways to improve my skills.

I have expertise in React, Node, Express, MongoDB, HTML, CSS, Bootstrap, Framer-motion, JavaScript, JSON, Git, GitHub, firebase and more, considering them indispensable life skills for my chosen career path. Applying my knowledge, I have successfully undertaken and completed several projects, showcasing my proficiency in these technologies.

My experience extends to working with RESTful APIs, a crucial aspect of modern web development. My aim is to deepen my understanding of Modern web dev. to further enhance my capabilities and inch closer to achieving my career goal.

I am enthusiastic about leveraging my acquired skills and knowledge to contribute meaningfully to the field of web development and am committed to staying abreast of industry trends and advancements.`,
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

  skills: [
    { name: "HTML", percentage: "95", color: "#f16529" },
    { name: "CSS", percentage: "90", color: "#2965f1" },
    { name: "TailwindCSS", percentage: "70", color: "#563d7c" },
    { name: "JavaScript", percentage: "80", color: "#f0db4f" },
    { name: "React", percentage: "80", color: "#61dbfb" },
    { name: "Node.js", percentage: "70", color: "#68a063" },
    { name: "Express", percentage: "75", color: "#ffef00" },
    { name: "MongoDB", percentage: "70", color: "#4db33d" },
    { name: "Git", percentage: "60", color: "#f34f29" },
    { name: "GitHub", percentage: "60", color: "#211f1f" },
    { name: "Framer Motion", percentage: "70", color: "#ff00ff" },
    { name: "Firebase", percentage: "60", color: "#f5820b" },
  ],

  resumeData: [
    {
      type: "education",
      icon: <BookOpen className="w-6 h-6" />,
      year: "2021-present",
      title: "Software Engineering",
      desc: "Currently studying in 3rd year at Mehran University of Engineering and Technology. Along with my studies, I am also working as a freelancer.",
    },
    {
      type: "education",
      icon: <BookOpen className="w-6 h-6" />,
      year: "2019-2020",
      title: "Intermediate",
      desc: "I have done my intermediate in 2021 from BFPS School System Umerkot. I was interested in computer science from the beginning.",
    },
    {
      type: "education",
      icon: <BookOpen className="w-6 h-6" />,
      year: "2023",
      title: "Basic Computer Courses",
      desc: "Along with my studies, I have also done many computer courses like MS Office and basic computer courses. I have also done many online courses from Coursera and YouTube and also from other platforms.",
    },
    {
      type: "experience",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2021",
      title: "Web Developer",
      desc: "I can create a responsive website using HTML, CSS, JavaScript and Responsive Frameworks like TailwindCSS, Bootstrap.",
    },
    {
      type: "experience",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2022",
      title: "React Developer",
      desc: "I can build a single page application using React.js, TailwindCSS, Framer Motion library. I have done many projects in React.js.",
    },
    {
      type: "experience",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2023",
      title: "MERN Developer",
      desc: "By continuously learning and practicing, I have become a MERN Stack Developer. I have done many projects in MERN Stack, using React.js, Node.js, Express.js, MongoDB, TailwindCSS, Framer Motion.",
    },
  ],

  services: [
    {
      title: "Frontend Development",
      description:
        "I have experience in Frontend Development. I have done many projects in Frontend Development and implement responsive design principles to ensure optimal viewing and interaction across various devices and screen sizes. Design intuitive and visually appealing user interfaces, focusing on creating positive user experiences.",
      image: "/assets/fsd.avif",
    },
    {
      title: "Backend Development",
      description:
        "Develop server-side applications using Node.js and the Express.js framework. Design and implement RESTful APIs to facilitate communication between frontend and backend components. Utilize server-side scripting to execute code on the server, handling tasks such as data processing, authentication, and business logic.",
      image: "/assets/wd.avif",
    },
    {
      title: "Database Design and Management",
      description:
        "Utilize MongoDB for efficient and flexible data storage. Design and implement database schemas to meet application requirements. Optimize database queries for improved application performance.",
      image: "/assets/wd.avif",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Docs App (Dynamic)",
      category: "Reactjs",
      image: "/assets/Docs-App-react.png",
      desc: "This is a dynamic website. In this website, you can add your data and delete your data. This website is made with React.js, TailwindCSS.",
    },
    {
      id: 2,
      title: "Blog Website",
      category: "Nodejs",
      image: "/assets/Blog-website-login_singup.png",
      desc: "This is a blog website. In this website, you can add your blog and delete your blog. This website is made with Node.js, Express.js, MongoDB, TailwindCSS. User authentication is added using JWT token and bcryptjs",
    },
    {
      id: 3,
      title: "Pinterest Clone",
      category: "Creative",
      image: "/assets/Pinterest_SingUp page.png",
      desc: "This is a Pinterest website clone. This website is made with HTML, CSS, JavaScript, and MongoDB as a database. In this website, you can create posts and delete posts. User authentication is added using Express.js, Passport.js, and bcryptjs.",
    },
    {
      id: 4,
      title: "Product Designer Portfolio",
      category: "Design",
      image: "/assets/produc_designer.png",
      desc: "This is a Product Designer website. This website is made with HTML, CSS, GSAP animation and Locomotive Scroll library",
    },
    {
      id: 5,
      title: "React Website",
      category: "Reactjs",
      image: "/assets/react-website.png",
      desc: "This is a React Website. This website is made with React.js, TailwindCSS, and Framer Motion library",
    },
    {
      id: 6,
      title: "Contact App",
      category: "Nodejs",
      image: "/assets/Contact_app.png",
      desc: "This is a Contact App. In this website, you can add your contact and delete your contact. This website is made with Node.js, Express.js, MongoDB, TailwindCSS.",
    },
  ],

  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "12+" },
    { label: "Certifications", value: "5+" },
  ],
}
