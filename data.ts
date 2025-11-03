import { type ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: {
    firstName: "Bidur",
    lastName: "Sapkota",
  },
  title: "Lecturer",
  contact: {
    address: "Chunikhel - Lalitpur, Nepal",
    phone: "(+977) 9865711881",
    email: "bidursapkota00@gmail.com",
    linkedin: "https://www.linkedin.com/in/bidur-sapkota-b204142a8/",
    github: "https://github.com/bidursapkota00",
    portfolio: "https://www.bidursapkota.com.np/",
  },
  quote: '"Be the change that you want to see in the world."',
  summary: {
    heading: "Summary",
    text: "Electronics, Communication and Information Engineering graduate with two and half years of teaching experience and expertise in web and mobile app development, embedded systems, and full-stack solutions. Currently working as a Lecturer at Asian College of Higher Studies, with proven skills in academic instruction and student mentorship. Former Web Developer at Dallotech, where I delivered dynamic, responsive websites using Next.js, GSAP, and API integrations.",
  },
  education: [
    {
      degree: "SEE",
      institution: "Hindu vidhya-peeth Nepal",
      year: "2015 - 2016",
      location: "Thali, Kathmandu",
      description: "Acquired GPA: 3.8",
    },
    {
      degree: "INTERMEDIATE IN SCIENCE",
      institution: "Advanced H.S.S",
      year: "2016 - 2018",
      location: "Kumaripati, Lalitpur",
      description: "Acquired GPA: 3.61",
    },
    {
      degree: "BEI",
      institution: "National College of Engineering",
      year: "2018 - 2023",
      location: "Talchhikhel, Lalitpur",
      description: "Acquired Percentage: 77.38 %",
    },
  ],
  workExperience: {
    heading: "Work Experience",
    jobs: [
      {
        title: "Lecturer",
        location: "Ekantakuna, Lalitpur",
        company: "Asian College of Higher Studies",
        responsibilities: [
          "Preparing and delivering lectures, tutorials, workshops, and seminars.",
          "Collaborating with other academics to improve teaching methods and knowledge base.",
          "Setting and grading assignments, tests, and exams.",
          "Supervising students on their projects.",
          "Providing support to students and other colleagues.",
          "Staying current by reading widely and producing published work in the field.",
        ],
        dates: "Sep 2023 to Current",
      },
      {
        title: "Teaching Assistant",
        location: "Talchhikhel, Lalitpur",
        company: "National College of Engineering",
        responsibilities: [
          "Delivering lab lectures and tutorials",
          "Setting and grading assignments, tests, and exams.",
          "Providing support to students and other colleagues.",
        ],
        dates: "May 2025 to Current",
      },
      {
        title: "Web Development Trainer",
        location: "Ekantakuna, Lalitpur",
        company: "Asian College of Higher Studies",
        responsibilities: [
          "Preparing codes for HTML, CSS, Js, Ts, React, Node, Express, Database",
          "Fostering project based learning",
          "Staying current by reading widely and producing published work in the field.",
        ],
        dates: "Sep 2023 to Current",
      },
      {
        title: "Web Developer",
        location: "Khumaltar, Lalitpur",
        company: "Dallotech pvt. ltd.",
        responsibilities: [
          "Develop full stack websites with Nextjs",
          "Worked on projects like Pdf generation, Webflow, Landing Pages, Online job Application",
          "GSAP Animations, FullStack Development",
          "Convert figma design to code",
          "API Integration",
        ],
        dates: "Oct 2021 to Jun 2022",
      },
    ],
  },
  projects: {
    heading: "Projects",
    projects: [
      {
        title: "Online Job App",
        description:
          "Developed the complete frontend for an online job application platform, implementing user-friendly forms for job posting and applying, and seamlessly integrating APIs with the backend for smooth data communication",
        url: "https://www.evereuser.co.uk/",
      },
      {
        title: "Dallotech",
        description:
          "Developed a fully dynamic full-stack company landing page for Dallotech, delivering a modern, responsive, and visually engaging web presence.",
        url: "https://dallotech.com/",
      },
      // {
      //   title: "UrbanSpace",
      //   description:
      //     "Developed an animated and visually appealing hotel landing page using GSAP for smooth, interactive motion effects, enhancing user engagement and overall experience.",
      //   url: "https://urbanspace.com.np/",
      // },
    ],
  },
  academicProjects: {
    heading: "Academic Project Work",
    projects: [
      {
        title: "E-commerce",
        location: "National College of Engineering",
        description:
          "Designed and developed a full-stack web application featuring secure payment gateway integration and an intelligent product recommendation system to enhance user experience. Implemented end-to-end functionality including product management, order tracking, and user authentication.",
      },
      {
        title: "Smart Water Meter System",
        location: "National College of Engineering",
        description:
          "Developed an intelligent water management solution enabling real-time monitoring of household drinking water consumption. The system features a web-based admin dashboard for water providers to manage and analyze usage data, while users can track their consumption and make payments through a dedicated mobile application. Designed and implemented both the hardware sensing module and IoT integration for automated data collection and efficient water resource management.",
      },
    ],
  },
  skills: {
    heading: "Skills",
    categories: [
      {
        name: "Operating System",
        items: "Ubuntu, Windows",
      },
      {
        name: "Microsoft Office Package",
        items: "MS Word, MS PowerPoint, MS Excel, MS Access",
      },
      {
        name: "Programming",
        items:
          "JavaScript, TypeScript, Python, C, C++, PHP, Java, Dart, Embedded programming in ESP8266 microcontroller, HTML, CSS",
      },
      {
        name: "Library & Framework",
        items:
          "React.js, Next.js, Node.js, Express.js, Nest.js, React Native, FastAPI, Django, Flutter, Wordpress",
      },
      {
        name: "Cloud",
        items: "GCP, AWS",
      },
      {
        name: "Database",
        items: "MS-SQL, MySQL, MongoDB, PostgreSQL",
      },
      {
        name: "Graphic Designing",
        items: "Photoshop, Figma",
      },
      {
        name: "IDE",
        items: "Visual Studio Code, Jupyter Notebook",
      },
      {
        name: "Languages",
        items: "Nepali, English",
      },
    ],
  },
  honorsAndAwards: {
    heading: "Honors & Awards",
    sections: [
      {
        title: "National College of Engineering",
        awards: [
          {
            year: "2018 - 2023",
            description: "<strong>Full Scholarship</strong>",
            location: null,
          },
          {
            year: "2023",
            description:
              "<strong>First Prize</strong>, Hardware Model Exibition ",
            location: null,
          },
        ],
      },
      {
        title: "Sports",
        awards: [
          {
            year: "2015",
            description: "<strong>First Prize</strong>, Table Tennis",
            location: "Hindu vidhya-peeth Nepal",
          },
          {
            year: "2018",
            description:
              "<strong>First Prize</strong>, First Year Only Table Tennis",
            location: "National College of Engineering",
          },
          {
            year: "2025",
            description: "<strong>Second Prize</strong>, Table Tennis",
            location: "Asian College of Higher Studies",
          },
        ],
      },
    ],
  },
  trainings: {
    heading: "Trainings",
    list: [
      {
        description:
          "1 year course on <strong>“Programming in C”</strong>, Advance Academy",
        date: "2007-2008",
      },
      {
        description:
          "20 hours of training on <strong>“Cisco Certified Network Administrator”</strong>, National College of Engineering",
        date: "June 2013",
      },
    ],
  },
  references: {
    heading: "References",
    list: [
      {
        name: "Pranaya Nakarmi",
        title: "Academic Coordinator",
        organization: "Asian College of Higher Studies",
        phone: "(+977) 9841205966",
        email: "pranayanakarmi@gmail.com",
        abbr: "ACHS",
      },
      {
        name: "Subash Panday",
        title: "Sr. Lecturer / Coordinator",
        organization: "National College of Engineering",
        phone: "(+977) 9851115662",
        email: "kavrelysubash@gmail.com",
        abbr: "NCE",
      },
      {
        name: "Anup Pokhrel",
        title: "Co-Founder / QA Engineer",
        organization: "DalloTech Pvt. Ltd.",
        phone: "(+977) 9847481555",
        email: "leo22.anup@gmail.com",
        abbr: "DalloTech",
      },
    ],
  },
};
