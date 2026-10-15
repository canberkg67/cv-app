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

  return (
    <>
      <Header />
      <main className="cv-layout">
        <Form 
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfoChange}
          education={education}
          onEducationChange={handleEducationChange}
        />
        <Preview personalInfo={personalInfo} education={education} />
      </main>
    </>
  )
}
