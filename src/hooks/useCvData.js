import { useEffect, useRef, useState } from 'react'

import {
  createEmptyCertificate,
  createEmptyEducation,
  createEmptyExam,
  createEmptyExperience,
  createEmptyLanguage,
  createEmptyProject
} from '../utils/cvFactories'

export default function useCvData() {
  const profilePhotoUrl = useRef(null)
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
  const [projects, setProjects] = useState([createEmptyProject(1)])
  const [certificates, setCertificates] = useState([createEmptyCertificate(1)])
  const [exams, setExams] = useState([createEmptyExam(1)])
  const [language, setLanguage] = useState([createEmptyLanguage(1)])
  const [other, setOther] = useState('')

  useEffect(() => () => {
    if (profilePhotoUrl.current) {
      URL.revokeObjectURL(profilePhotoUrl.current)
    }
  }, [])

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  }

  function handleProfilePhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const nextPhotoUrl = URL.createObjectURL(file);
    if (profilePhotoUrl.current) {
      URL.revokeObjectURL(profilePhotoUrl.current);
    }
    profilePhotoUrl.current = nextPhotoUrl;

    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      profilePhoto: nextPhotoUrl
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
      return [createEmptyEducation(nextId), ...prevEducation];
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
      return [createEmptyExperience(nextId), ...prevExperience];
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

  function handleProjectsChange(id, event) {
    const { name, value } = event.target;
    setProjects(prevProjects => prevProjects.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddProject() {
    setProjects(prevProjects => {
      const nextId = Math.max(0, ...prevProjects.map(entry => entry.id)) + 1;
      return [createEmptyProject(nextId), ...prevProjects];
    });
  }

  function handleRemoveProject(id) {
    setProjects(prevProjects =>
      prevProjects.filter(entry => entry.id !== id)
    );
  }

  function handleCertificatesChange(id, event) {
    const { name, value } = event.target;
    setCertificates(prevCertificates => prevCertificates.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddCertificate() {
    setCertificates(prevCertificates => {
      const nextId = Math.max(0, ...prevCertificates.map(entry => entry.id)) + 1;
      return [createEmptyCertificate(nextId), ...prevCertificates];
    });
  }

  function handleRemoveCertificate(id) {
    setCertificates(prevCertificates =>
      prevCertificates.filter(entry => entry.id !== id)
    );
  }

  function handleExamsChange(id, event) {
    const { name, value } = event.target;
    setExams(prevExams => prevExams.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddExam() {
    setExams(prevExams => {
      const nextId = Math.max(0, ...prevExams.map(entry => entry.id)) + 1;
      return [createEmptyExam(nextId), ...prevExams];
    });
  }

  function handleRemoveExam(id) {
    setExams(prevExams =>
      prevExams.filter(entry => entry.id !== id)
    );
  }

  function handleLanguageChange(id, event) {
    const { name, value } = event.target;
    setLanguage(prevLanguage => prevLanguage.map(entry =>
      entry.id === id ? { ...entry, [name]: value } : entry
    ));
  }

  function handleAddLanguage() {
    setLanguage(prevLanguage => {
      const nextId = Math.max(0, ...prevLanguage.map(entry => entry.id)) + 1;
      return [createEmptyLanguage(nextId), ...prevLanguage];
    });
  }

  function handleRemoveLanguage(id) {
    setLanguage(prevLanguage =>
      prevLanguage.filter(entry => entry.id !== id)
    );
  }

  function handleOtherChange(event) {
    setOther(event.target.value);
  }

  return {
    personalInfo,
    handlePersonalInfoChange,
    handleProfilePhotoChange,
    education,
    handleEducationChange,
    handleAddEducation,
    handleRemoveEducation,
    experience,
    handleExperienceChange,
    handleAddExperience,
    handleRemoveExperience,
    skills,
    handleSkillsChange,
    projects,
    handleProjectsChange,
    handleAddProject,
    handleRemoveProject,
    certificates,
    handleCertificatesChange,
    handleAddCertificate,
    handleRemoveCertificate,
    exams,
    handleExamsChange,
    handleAddExam,
    handleRemoveExam,
    language,
    handleLanguageChange,
    handleAddLanguage,
    handleRemoveLanguage,
    other,
    handleOtherChange
  }
}
