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
  references: {
    heading: "References",
    items: [
      {
        title: "Professor, MIS Specialist",
        organizationTag: "ACHS",
        name: "Dr. Mahesh Man Maharjan",
        organization: "Asian College of Higher Studies",
        email: "maheshmanmaharjan@gmail.com",
        phone: "+977 9751027530",
      },
      {
        title: "Local Governance Expert",
        organizationTag: "PLGSP",
        name: "Saroj Shrestha",
        organization:
          "Provincial and Local Government Support Program\nMinistry of Federal Affairs and General Administration",
        email: "saroj.lgcdp@gmail.com",
        phone: "+977 9848257148",
      },
    ],
  },
};
