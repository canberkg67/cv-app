import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    about: '',
    profilePhoto: null
})
  
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    schoolLocation: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolDescription: ''
  })
  
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    jobLocation: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: ''
  })

  const [skills, setSkills] = useState('')

  const [projects, setProjects] = useState({
    projectName: '',
    projectLink: '',
    projectDescription: ''
  })

  const [certificates, setCertificates] = useState({
    certificateName: '',
    issuingOrganization: '',
    certificateDate: '',
    certificateLink: ''
  })

  const [exams, setExams] = useState({
    examName: '',
    examScore: '',
    examDate: '',
    examDetails: ''
  })

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setEducation(prevEducation => ({
      ...prevEducation,
      [name]: value
    }));
  }

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    setExperience(prevExperience => ({
      ...prevExperience,
      [name]: value
    }));
  }

  function handleSkillsChange(event) {
    setSkills(event.target.value);
  }

  function handleProjectsChange(event) {
    const { name, value } = event.target;
    setProjects(prevProjects => ({
      ...prevProjects,
      [name]: value
    }));
  }

  function handleCertificatesChange(event) {
    const { name, value } = event.target;
    setCertificates(prevCertificates => ({
      ...prevCertificates,
      [name]: value
    }));
  }

  function handleExamsChange(event) {
    const { name, value } = event.target;
    setExams(prevExams => ({
      ...prevExams,
      [name]: value
    }));
  }

  return (
    <>
      <Header />
      <main className="cv-layout">
        <Form 
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfoChange}
          education={education}
          onEducationChange={handleEducationChange}
          experience={experience}
          onExperienceChange={handleExperienceChange}
          skills={skills}
          onSkillsChange={handleSkillsChange}
          projects={projects}
          onProjectsChange={handleProjectsChange}
          certificates={certificates}
          onCertificatesChange={handleCertificatesChange}
          exams={exams}
          onExamsChange={handleExamsChange}
        />
        <Preview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
          certificates={certificates}
          exams={exams}
        />
      </main>
    </>
  )
}
