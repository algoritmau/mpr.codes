import { ContactRoster, EducationHistory, JobHistory, Skillset } from '@/types'

import { contactRoster } from './contactRoster'
import { educationHistory } from './educationHistory'
import { jobHistory } from './jobHistory'
import { skillset } from './skillset'

interface PersonalData {
  contact: ContactRoster
  educationHistory: EducationHistory
  jobHistory: JobHistory
  skillset: Skillset
}

export const personalData: PersonalData = {
  contact: contactRoster,
  educationHistory: educationHistory,
  jobHistory: jobHistory,
  skillset: skillset
}
