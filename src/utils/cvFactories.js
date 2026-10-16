export function createEmptyEducation(id) {
  return {
    id,
    school: '',
    degree: '',
    fieldOfStudy: '',
    schoolLocation: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolDescription: ''
  }
}

export function createEmptyExperience(id) {
  return {
    id,
    company: '',
    position: '',
    jobLocation: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: ''
  }
}

export function createEmptyProject(id) {
  return {
    id,
    projectName: '',
    projectLink: '',
    projectDescription: ''
  }
}

export function createEmptyCertificate(id) {
  return {
    id,
    certificateName: '',
    issuingOrganization: '',
    certificateDate: '',
    certificateLink: ''
  }
}

export function createEmptyExam(id) {
  return {
    id,
    examName: '',
    examScore: '',
    examDate: '',
    examDetails: ''
  }
}

export function createEmptyLanguage(id) {
  return {
    id,
    language: '',
    languageLevel: ''
  }
}
