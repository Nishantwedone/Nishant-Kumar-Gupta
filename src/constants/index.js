import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    python,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    upflairs,
    bootstrap,
    postmanapi,
    chakara,
    railcorp,
    rejouice,
    titagarh_logo,
    ochi,
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
      title: "Web Developer",
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
      title: "Problem Solver",
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
      name: "git",
      icon: git,
    },

    {
      name: "Postman Api",
      icon: postmanapi,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Chakara UI",
      icon: chakara,
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
      name: "python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Titagarh Summer Intern",
      company_name: "Titagarh Rail Ltmd.",
      icon: titagarh_logo,
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Completed intensive coursework on Node.js, focusing on Express and Node modules.",
        "Developed RESTful APIs, utilizing best practices for database integration and data management.",
        "Gained practical experience with async/await to handle asynchronous operations efficiently.",
        "Worked on projects that involved building and managing databases within a Node.js environment.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Upflairs Technologies",
      icon: upflairs,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
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
    name: "Ochi",
    description:
      "Ochi is a modern animated website with the use of framer motion and GSAP animations. This have a smooth scrolling effect and the pointer effect also.",
    tags: [
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "Animations",
        color: "green-text-gradient",
      },
    ],
    image: ochi,
    source_code_link: "https://github.com/Nishantwedone/ochi",
    live_link:'https://ochi-green.vercel.app',
  },
    {
      name: "Rail Corp Lmtd.",
      description:
        "Rail corp is a ecommerce site for the railway related materials. In that Admin Dashboard is availabe, also the add to cart function. Admin can also create and manage the products.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Admin Dashboard",
          color: "pink-text-gradient",
        },
        {
          name: "Add to cart",
          color: "green-text-gradient",
        },
        {
          name: "Bcrypt",
          color: "blue-text-gradient",
        },
      ],
      image: railcorp,
      source_code_link: "https://github.com/Nishantwedone/RailCorp",
      live_link:'https://rail-corp.vercel.app',
    },
    {
      name: "Rejouice",
      description:
        "Rejouice is clone project. It is made using html,css,js and with amazing modern animated effects, gsap and also it have smooth scrolling effect.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Aniamtions with GSAP",
          color: "blue-text-gradient",
        },
      ],
      image: rejouice,
      source_code_link: "https://github.com/Nishantwedone/Rejouice-Clone",
      live_link:'https://rejouice-clone-kappa.vercel.app/',
    },
    
  ];

  const progress = [
    {
      name:'HTML',
      number:'90%'
    },
    {
      name:'CSS',
      number:'90%'
    },
    {
      name:'JavaScript',
      number:'80%'
    },
    {
      name:'ReactJS',
      number:'80%'
    },
    {
      name:'Nextjs14',
      number:'80%'
    },
    {
      name:'Typescript',
      number:'60%'
    },
    {
      name:'Postman API',
      number:'70%'
    },
    {
      name:'Tailwind Css',
      number:'80%'
    },
    {
      name:'Bootstrap',
      number:'90%'
    },
    {
      name:'Chakara UI',
      number:'90%'
    }
    ,
    {
      name:'Shadcn',
      number:'80%'
    },
    {
      name:'Appwrite',
      number:'80%'
    },
    {
      name:'mysql',
      number:'70%'
    },
    
    {
      name:'Twilio',
      number:'60%'
    },
    {
      name:'Git/Github',
      number:'80%'
    },
    {
      name:'NodeJs',
      number:'70%'
    },
    {
      name:'ExpressJs',
      number:'70%'
    },
    {
      name:'MongoDB',
      number:'80%'
    },
    {
      name:'Python',
      number:'60%'
    },
    {
      name:'C++',
      number:'80%'
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects,progress };