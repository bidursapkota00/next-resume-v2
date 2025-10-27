// types.ts
export interface Name {
  firstName: string;
  lastName: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Summary {
  heading: string;
  text: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
  description: string;
}

export interface Job {
  title: string;
  location: string;
  company: string;
  responsibilities: string[];
  dates: string;
}

export interface WorkExperience {
  heading: string;
  jobs: Job[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
}

export interface Projects {
  heading: string;
  projects: Project[];
}
export interface AcademicProject {
  title: string;
  location: string;
  description: string;
}

export interface AcademicProjects {
  heading: string;
  projects: AcademicProject[];
}

export interface Reference {
  title: string;
  abbr: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
}

export interface References {
  heading: string;
  list: Reference[];
}

export interface Skill {
  name: string;
  items: string;
}

export interface Skills {
  heading: string;
  categories: Skill[];
}

export interface Award {
  year: string;
  description: string;
  location: string | null;
}

export interface AwardList {
  title: string;
  awards: Award[];
}

export interface HonorsAndAwards {
  heading: string;
  sections: AwardList[];
}

export interface Training {
  description: string;
  date: string;
}

export interface Trainings {
  heading: string;
  list: Training[];
}
export interface ResumeData {
  name: Name;
  title: string;
  contact: Contact;
  quote: string;
  summary: Summary;
  education: Education[];
  workExperience: WorkExperience;
  projects: Projects;
  academicProjects: AcademicProjects;
  references: References;
  skills: Skills;
  honorsAndAwards: HonorsAndAwards;
  trainings: Trainings;
}
