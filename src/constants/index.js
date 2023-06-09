import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sql,
  PhotoShop,
  postgreSQL,
  sass,
  star,
  Jungle,
  Movie,
  Scheduler,
  SmartToDo,
  educate,
  Tweeter,
  Portfolio,
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
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "SQL",
    icon: sql,
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
    name: "PhotoShop",
    icon: PhotoShop,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Colbeh Persian Kitchen & Bar",
    icon: star,
    iconBg: "#383E56",
    date: "Jun 2021 - Feb 2022",
    points: [
      "Successfully designed and developed the front-end of a restaurant website, which included developing responsive layouts, implementing user interfaces, and ensuring optimal user experiencce.",
      "Collaborated remotely with a team of three freelancers to deliver a high-quality product that met the client's requirements and exceeded their expectations.",
      "Demonstrated proficiency in SQL by setting up the database for the restaurant website, writing optimized queries, and ensuring data accuracy and consistency.",
      "Conducted thorough testing and debugging to identify and fix issues, ensuring the website was free of errors and ran smoothly across all devices and browsers.",
      "Proactively communicated with the client to gather requirements, provide progress updates, and incorporate feedback into the development process.",
    ],
  },
  {
    title: "Web Designer - Front End Developer",
    company_name: "BeautyHome",
    icon: star,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Apr 2021",
    points: [
      "Developed and designed a visually appealing and user-friendly website using Figma, Photoshop, and front-end development tools such as Sass and EJS.",
      "Collaborated effectively with a team to ensure the website met the client's needs and expectations.",
      "Deployed the website, resulting in a significant increase in customer engagement and a 40% increase in business for the home interior design company.",
      "Continuously improved and maintained the website to ensure it met current industry standards and best practices.",
      "Demonstrated proficiency in HTML, SASS, and JavaScript, as well as experience with various front-end development tools and technologies.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Padir Gostar",
    source_code_link: "https://padirgostar.com/",
    icon: star,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2022",
    points: [
      "Used Figma and Photoshop for design and presentation to ensure clients' demands and requests.",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Coordinated with other web designers to manage projects using HTML, CSS, SASS and JavaScript.",
      "Created responsive, reusable and dynamic form components to make the user onboarding form.",
    ],
  },
  {
    title: "Computer Programming Instructor",
    company_name: "Karaj Azad University",
    icon: star,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - May 2021",
    points: [
      "Taught HTML and CSS coding language.",
      "Used lectures, demonstrations and discussions to instruct students individually and in small groups.",
      "Attended professional development technology courses to increase my knowledge base and learn new information.",
    ],
  },
];

const educations = [
  {
    title: "Full-Stack web Developer",
    company_name: "Lighthouse Labs",
    icon: educate,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Diploma"
    ],
  },
  {
    title: "Applied Web Developer",
    company_name: "British Columbia Institute of Technology (BCIT)",
    icon: educate,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Associate Degree"
    ],
  },
  {
    title: "Computer Science Engineering",
    company_name: "Iran, Azad University",
    icon: educate,
    iconBg: "#383E56",
    date: "Sep 1996 - Jun 2000",
    points: [
      "Bachelor's Degree"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a simple and beautiful web like our website, but Sina proved me wrong.",
    name: "Hamid Abbaspanah",
    designation: "CEO",
    company: "PadirGostar",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sina is a person who has a friendly demeanor and cares about his friends. He is also a good team player.",
    name: "Khin MoMo",
    designation: "Web Developer",
    company: "IBM",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Sina optimized our website, our traffic increased by 50%.He is a hardworking individual and his ideas are awesome!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Canteen",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Island",
    description:
      "An application that allows users to search and look up information about movies and also watch their trailers. The application includes pages, search functionality,Also the ability for users to upload their own videos and movies. To have access to the home page users have to login.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Unit_Test",
        color: "red-text-gradient",
      },
    ],
    image: Movie,
    source_code_link: "https://github.com/SinaSS77/Movie_Island",
  },
  {
    name: "Jungle",
    description:
      "A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.Admin Dashboard feature. Payment feature and Edit Card possibility.",
    tags: [
      {
        name: "Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby,Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "yellow-text-gradient",
      },
    ],
    image: Jungle,
    source_code_link: "https://github.com/SinaSS77/Jungle",
  },
  {
    name: "Scheduler",
    description:
      "Interview scheduler is a project that allows users to choose a day, a time, and an interviewer in order to book an appointment. Appointments can be easily edited and updated, or cancelled through the app by clicking the related icons. To produce this application We have used React. It is tested with Unit-Test, Jest, StoryBook and Cypress.",
    tags: [
      {
        name: "Node,Express",
        color: "blue-text-gradient",
      },
      {
        name: "React,CSS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "StoryBook",
        color: "red-text-gradient",
      },
    ],
    image: Scheduler,
    source_code_link: "https://github.com/SinaSS77/scheduler",
  },
  {
    name: "Smart To Do List",
    description:
      "This app allows users to input the name of an item and it categorizes it into one of five groups:To Watch, To Eat, To Read, To Buy, Other. Users will have the ability to add and delete items, as well as change an item's category.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Ejs,Sass",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "StoryBook",
        color: "red-text-gradient",
      },
    ],
    image: SmartToDo,
    source_code_link: "https://github.com/SinaSS77/SmartToDoList",
  },
  {
    name: "Tweeter",
    description:
      "Tweeter is a simple, single-page Twitter clone. Users can send and recieve a text with others.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Ejs,CSS",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: Tweeter,
    source_code_link: "https://github.com/SinaSS77/tweeter",
  },
  
  {
    name: "Portfolio",
    description:
      "Personal Portfolio",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Cypress",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/SinaSS77/Dark_React_Portfolio",
  },
];

export { services, technologies,educations, experiences, testimonials, projects };
