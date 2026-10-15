import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'

function createEmptyEducation(id) {
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

function createEmptyExperience(id) {
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
  
  const [education, setEducation] = useState([createEmptyEducation(1)])
  
  const [experience, setExperience] = useState([createEmptyExperience(1)])

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

  const [language, setLanguage] = useState({
    language: '',
    languageLevel: ''
  })

  const [other, setOther] = useState('')

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  }

  function handleEducationChange(id, event) {
    const { name, value } = event.target;
    setEducation(prevEducation => prevEducation.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddEducation() {
    setEducation(prevEducation => {
      const nextId = Math.max(0, ...prevEducation.map(entry => entry.id)) + 1;
      return [...prevEducation, createEmptyEducation(nextId)];
    });
  }

  function handleRemoveEducation(id) {
    setEducation(prevEducation =>
      prevEducation.filter(entry => entry.id !== id)
    );
  }

  function handleExperienceChange(id, event) {
    const { name, value } = event.target;
    setExperience(prevExperience => prevExperience.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddExperience() {
    setExperience(prevExperience => {
      const nextId = Math.max(0, ...prevExperience.map(entry => entry.id)) + 1;
      return [...prevExperience, createEmptyExperience(nextId)];
    });
  }

  function handleRemoveExperience(id) {
    setExperience(prevExperience =>
      prevExperience.filter(entry => entry.id !== id)
    );
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

  function handleLanguageChange(event) {
    const { name, value } = event.target;
    setLanguage(prevLanguage => ({
      ...prevLanguage,
      [name]: value
    }));
  }

  function handleOtherChange(event) {
    setOther(event.target.value);
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
          onAddEducation={handleAddEducation}
          onRemoveEducation={handleRemoveEducation}
          experience={experience}
          onExperienceChange={handleExperienceChange}
          onAddExperience={handleAddExperience}
          onRemoveExperience={handleRemoveExperience}
          skills={skills}
          onSkillsChange={handleSkillsChange}
          projects={projects}
          onProjectsChange={handleProjectsChange}
          certificates={certificates}
          onCertificatesChange={handleCertificatesChange}
          exams={exams}
          onExamsChange={handleExamsChange}
          language={language}
          onLanguageChange={handleLanguageChange}
          other={other}
          onOtherChange={handleOtherChange}
        />
        <Preview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
          certificates={certificates}
          exams={exams}
          language={language}
          other={other}
        />
      </main>
    </>
  )
}
