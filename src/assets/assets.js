import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaDna, FaBrain, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkedAlt, FaNewspaper } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/bau_vth.png';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'User experience and beautiful design are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Bioinformatics Tool',
    icon: FaDna,
    description: 'Working with various bioinformatics tools and libraries to analyze biological data efficiently.',
    tags: ['Python', 'R', 'Biopython', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Django', 'Server']
  },
  {
  title: 'AI & ML Tool',
  icon: FaBrain,
  description: 'Building AI and ML models for data analysis, prediction, and automation.',
  tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MySQL','SQLight']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my workflow.',
    tags: ['Git & GitHub', 'Linux']
  }
];



export const projects = [
  {
    title: "BAU VTH",
    description: "Developed a full-stack web application using with Django with tailwind as the frontend.",
    image: projectImg1,
    tech: ["Python","Django", "tailwindcss", "SQL"],
    demo: "https://tamim6820.pythonanywhere.com/",
    code: "https://github.com/t-fahim/bau-vth",
  },
  {
    title: "Blog site",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Python","Django", "Bootstrap", "SQL"],
    demo: "https://tfahim.pythonanywhere.com/",
    code: "https://github.com/t-fahim/my-blog",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion",],
    demo: "#",
    code: "#",
  },
  {
    title: "RBGI",
    description: "Developed a full-stack web application using with PHP with tailwind as the frontend",
    image: projectImg5,
    tech: ["PHP", "tailwindcss", "Python", "MySql"],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Campus Ambassador",
    company: "NonAcademy",
    duration: "March 2025 – Present",
    description:
      "Promote NonAcademy programs on campus.\nActed as a liaison between students and the organization, providing feedback and insights.",
  },
  {
    role: "Organizing Secretary",
    company: "BADHAN, Ashraful Haque Hall Unit",
    duration: "January 2024 – January 2025",
    description:
      " Collected blood donations from students and coordinated supply to underprivileged patients.\nPrepared monthly and event-specific reports documenting donations, distribution, and activities.\nMaintained accurate records to ensure transparency and support organizational planning.",
  },
  {
    role: "Volunteer",
    company: "Green Voice, Bangladesh Agricultural University Unit",
    duration: "June 2023 – June 2023",
    description:
      "Collaborated with a team to execute large-scale environmental awareness programs on campus.\nCoordinated logistics, volunteers, and participants to ensure smooth execution of events.",
  }
];

export const education = [
  {
    institution : 'Bangladesh Agricultural University',
    duration : 'November 2022 – Present',
    degree : 'Bachelor of Science in Bioinformatics Engineering',
    address : 'Mymensingh - 2202, Bangladesh',
    description : "",
  },
  {
    institution : 'RAJUK Uttara Model College',
    duration : 'June 2019 – December 2021',
    degree : 'HSC, Science',
    address : 'Uttara, Dhaka',
    description : '',
  },
  {
    institution : 'Kashiani G.C. Pilot High School',
    duration : 'January 2017 – March 2019',
    degree : 'SSC, Science',
    address : 'Kashiani, Gopalganj',
    description : '',
  },
];

export const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/t-fahim/', 
      color: 'hover:bg-purple'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tamim-fahim/', 
      color: 'hover:bg-purple'
    },
  ];

export const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 't.a.fahim@outlook.com', 
      link: 'mailto:t.a.fahim@outlook.com', 
      description: 'Send me an email anytime'
    },
    {
      icon: FaNewspaper,
      title: 'Blog',
      value: null, 
      link: null, 
      description: 'Read my latest blog posts'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Location',
      value: 'Mymensingh, Bangladesh', 
      link: null,
      description: 'Available for remote work'
    }
  ];