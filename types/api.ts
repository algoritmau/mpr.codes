interface ContactChannel {
  id: string
  name: string
  href: string
}

interface EducationTitle {
  id: string
  title: string
  institution: string
  overview: string
}

interface JobExperience {
  id: string
  role: string
  company: string
  description: string
}

interface Skill {
  id: string
  category: string
  skills: string
  description: string
}

export interface ContactRoster {
  data: ContactChannel[]
}

export interface EducationHistory {
  data: EducationTitle[]
}

export interface JobHistory {
  data: JobExperience[]
}

export interface Skillset {
  data: Skill[]
}

export type Slug = 'contact' | 'educationHistory' | 'jobHistory' | 'skillset'
