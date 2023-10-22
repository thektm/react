import {
  mobile,
  backend,
  creator,
  web,
  javascript,
typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  kotlin,
  react,
  full,
  django,
  carrent,
  jobit,
  tripguide,

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer" ,
    ptitle : "طراحی وب" ,
    icon: web,
  },
  {
    title: "Mobile Developer ",
    ptitle : "طراحی اپلیکیشن موبایل" ,
    icon: mobile,
  },
  {
    title: "Backend Developer",
        ptitle : "طراحی سرور و بک-اند" ,
    icon: backend,
  },
  {
    title: "Content Creator",
        ptitle : "تولید محتوا برای بالا بردن SEO" ,
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: django,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },


  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer",

    icon: kotlin,
    iconBg: "#383E56",
    date: "March 2019 - Now ",
    points: [
      "Developing and maintaining applications using Kotlin and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Developer",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Now ",
    points: [
      "Experienced web developer with a strong background in ReactJS, adept at developing dynamic and interactive websites. Proven track record of collaborating effectively within teams to deliver high-quality projects.",
      "Skilled in front-end development, implementing responsive designs, and ensuring optimal user experience.",
      "Passionate about creating seamless user interfaces and enhancing website functionality. Solid understanding of JavaScript, HTML, and CSS, combined with excellent problem-solving skills.",
      "Seeking new challenges to apply expertise in ReactJS and contribute to the success of future projects.",
    ],
  },
  {
    title: "Back-end Developer",
    icon: django,
    iconBg: "#383E56",
    date: "Jan 2021 - Now",
    points: [
      "web developer with hands-on experience in Python Django framework, specializing in building websites and servers with RESTful APIs.",
      "Proficient in collaborating effectively within cross-functional teams to deliver robust and scalable solutions. Expertise in developing back-end systems, integrating third-party services, and implementing security measures.",
      "Strong understanding of database management and optimizing server performance. Passionate about delivering seamless user experiences and ensuring high-quality code. Eager to leverage Python Django skills to contribute to projects and drive success."
    ],
  },
  {
    title: "Full stack Developer",

    icon: full,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Now",
    points: [
      "I'm a seasoned full-stack developer with expertise in Kotlin, Python, JavaScript, and popular frameworks." ,
      " I have years of experience building apps, websites, and web apps, and have honed my skills in creating robust, scalable, and maintainable solutions." ,
      " I'm well-versed in Agile methodologies and have worked extensively with teams and stakeholders to deliver high-quality products." ,
      " I'm passionate about staying up-to-date with the latest technologies and bringing value to any organization I join."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
