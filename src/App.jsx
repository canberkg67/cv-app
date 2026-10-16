import './components/styles/app.css'
import './components/styles/layout.css'
import Header from './components/layout/Header'
import CtaArrow from './components/svg/CtaArrow'
import Form from './components/layout/Form'
import Footer from './components/layout/Footer'
import Preview from './components/layout/Preview'
import useCvData from './hooks/useCvData'

export default function App() {
  const {
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
  } = useCvData()

  return (
    <>
      <Header />

      <CtaArrow />

      <main className="cv-layout">
        <Form
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfoChange}
          onProfilePhotoChange={handleProfilePhotoChange}

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
          onAddProject={handleAddProject}
          onRemoveProject={handleRemoveProject}

          certificates={certificates}
          onCertificatesChange={handleCertificatesChange}
          onAddCertificate={handleAddCertificate}
          onRemoveCertificate={handleRemoveCertificate}

          exams={exams}
          onExamsChange={handleExamsChange}
          onAddExam={handleAddExam}
          onRemoveExam={handleRemoveExam}

          language={language}
          onLanguageChange={handleLanguageChange}
          onAddLanguage={handleAddLanguage}
          onRemoveLanguage={handleRemoveLanguage}

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

      <Footer />
    </>
  )
}
