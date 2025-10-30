
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}