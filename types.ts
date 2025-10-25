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
  location: string;
  description: string;
}

export interface AcademicProjects {
  heading: string;
  projects: Project[];
}

export interface Reference {
  title: string;
  organizationTag: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
}

export interface References {
  heading: string;
  items: Reference[];
}

export interface ResumeData {
  name: Name;
  title: string;
  contact: Contact;
  quote: string;
  summary: Summary;
  education: Education[];
  workExperience: WorkExperience;
  academicProjects: AcademicProjects;
  references: References;
}
