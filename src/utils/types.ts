export interface Project {
  title: string;
  description: string;
  github?: string;
  link?: string;
  technologies: string[];
  image: string;
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  link: string;
  logo: string;
}

export interface Internship {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
}

export interface SocialPlatform {
  name: string;
  url: string;
  icon: JSX.Element;
}