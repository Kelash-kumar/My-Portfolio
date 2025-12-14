// profile image
import profile_image from './assets/profile-pic.png';
// services images
import image1 from './assets/wd.avif';
import image2 from './assets/Msd.jpg';
import image3 from './assets/fsd.avif';

// projects images
import work1 from './assets/Docs-App-react.png';
import work2 from './assets/Blog-website-login_singup.png';
import work3 from './assets/Pinterest_SingUp page.png';
import work4 from './assets/produc_designer.png';
import work5 from './assets/react-website.png';
import work6 from './assets/Contact_app.png';
// icons
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa6';
import { MdOutlineClass } from 'react-icons/md';


const userDetails = {
  name: 'Kelash Kumar',
  email: 'kelash.raisal@gmail.com',
  phone: '+92 3491100042',
  address: 'Jasmhoro Sindh Pakistan',
  profession: 'Junior Full-Stack Developer | MERN Stack',
  profile_image: profile_image,
  about:`My name is Kelash Kumar, and I am a dedicated software engineering student hailing from Umerkot, Sindh. I am currently pursuing my education at Mehran University of Engineering and Technology. With a fervent passion for technology, I have diligently acquired a comprehensive skill set in web development and am eager to apply my knowledge to real-world projects.
          I am a self-taught developer, I am currently working as a freelancer and looking for a full-time job as a MERN Stack Developer. I am a team player and I love working with people. I am a fast learner and I am always looking for ways to improve my skills.
          I have expertise in React, Node, Express, MongoDB, HTML, CSS, Bootstrap, Framer-motion, JavaScript, JSON, Git, GitHub,firebase and more, considering them indispensable life skills for my chosen career path. Applying my knowledge, I have successfully undertaken and completed several projects, showcasing my proficiency in these technologies.
          My experience extends to working with RESTful APIs, a crucial aspect of modern web development.My  aim is to deepen my understanding of Modern web dev. to further enhance my capabilities and inch closer to achieving my career goal.
          I am enthusiastic about leveraging my acquired skills and knowledge to contribute meaningfully to the field of web development and am committed to staying abreast of industry trends and advancements.`,
  social: [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/kelash-kumar-47245a255/', icons: <CiLinkedin className="icon media_icon" /> },
    { name: 'GitHub', link: 'https://github.com/Kelash-kumar', icons: <FiGithub className="icon media_icon" /> },
    { name: 'Facebook', link: 'https://www.facebook.com/kelash.raisal/', icons: <CiFacebook className="icon media_icon" /> },
  ],
  
  skills: [
    { name: 'HTML', percentage: '95', color: '#f16529' },
    { name: 'CSS', percentage: '90', color: '#2965f1' },
    { name: 'TailwindCss', percentage: '70', color: '#563d7c' },
    { name: 'JavaScript', percentage: '80', color: '#f0db4f' },
    { name: 'React', percentage: '80', color: '#61dbfb' },
    { name: 'Node', percentage: '70', color: '#68a063' },
    { name: 'Express', percentage: '75', color: '#ffef00' },
    { name: 'MongoDB', percentage: '70', color: '#4db33d' },
    { name: 'Git', percentage: '60', color: '#f34f29' },
    { name: 'GitHub', percentage: '60', color: '#211f1f' },
    { name: 'Framer-motion', percentage: '70', color: '#ff00ff' },
    { name: 'Firebase', percentage: '60', color: '#f5820b' },
  ],
  resumeData: [
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2021-present',
      title: 'Software Engineering',
      desc: 'Currently studying in 3rd year at Mehran University of Engineering and Technology. along with my studies, I am also working as a freelancer.',
    },  
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2019-2020',
      title: 'Intermediate',
      desc:'I have done my intermediate in 2021 from BFPS School System Umerkot.I was interested in computer science from the beginning.',
    },
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2023',
      title: 'Basic Computer Courses',
      desc: 'Along with my studies, I have also done many computer courses like MS Office and basic computer courses.I have also done many online courses from coursera and Youtube and also from other platforms.',
    },
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2021',
      title: 'Web Developer',
      desc:'I can create a responsive website using HTML, CSS, JavaScript and Responsive Frameworks like tailwindcss, Bootstrap.'
    },
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2022',
      title: 'React Developer',
      desc:'I can build a single page application using Reactjs, Tailwindcss, framer-motion library. I have done many projects in Reactjs.'
    },
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2023',
      title: 'MERN Developer',
      desc:'By continuously learning and practicing, I have become a MERN Stack Developer. I have done many projects in MERN Stack, using Reactjs, Nodejs, Expressjs, MongoDB, Tailwindcss, framer-motion .'
     },
  ],
  services: [
   {title:'Frontend Development',description:'I have experience in Frontend Development. I have done many projects in Frontend Development and  Implements responsive design principles to ensure optimal viewing and interaction across various devices and screen sizes.Design intuitive and visually appealing user interfaces, focusing on creating positive user experiences.',image:image1},
   { title: 'Backend Development', description: 'Develop server-side applications using Node.js and the Express.js framework. Design and implement RESTful APIs to facilitate communication between frontend and backend components.Utilize server-side scripting to execute code on the server, handling tasks such as data processing, authentication, and business logic.', image: image2 },
   {title:'Database Design and Management',description:'Utilize MongoDB for efficient and flexible data storage. Design and implement database schemas to meet application requirements. Optimize database queries for improved application performance.',image:image3} 
  ],
  projects: [
    { id: 1, title: 'Docs App (Dynamic)', category: 'Reactjs', image: work1,desc:'This is a dynamic website. In this website, you can add your data and delete your data. This website is made with Reactjs, Tailwindcss.'},
    { id: 2, title: 'Blog Website ', category: 'Nodejs', image: work2 ,desc:'This is a blog website. In this website, you can add your blog and delete your blog. This website is made with Nodejs, Expressjs, MongoDB, Tailwindcss. and also user authentication is added in this website.using JWT token and bcryptjs'},
    { id: 3, title: 'Pinterest', category: 'Creative', image: work3 ,desc:'This is a Pinterest website clone. This website is made with html, css, javascript, and mongodb as a database.In this website, you create post and delete post. and also user authentication is added in this website.using expressjs,pasportjs, and bcryptjs every user can create his account and login to his account.'},
    { id: 4, title: 'Product Designer', category: 'Design', image: work4 ,desc:'This is a Product Designer website. This website is made with html, css, gsap animation and locomotive scroll library'},
    { id: 5, title: 'React Website', category: 'Reactjs', image: work5,desc:'This is a React Website. This website is made with Reactjs, Tailwindcss, and framer-motion library'},
    { id: 6, title: 'Contact App', category: 'Nodejs', image: work6 ,desc:'This is a Contact App. In this website, you can add your contact and delete your contact. This website is made with Nodejs, Expressjs, MongoDB, Tailwindcss.'},
  ],
};

export default userDetails;
