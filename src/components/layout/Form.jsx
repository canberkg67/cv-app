import "../styles/form.css";
import Education from "../form/Education";
import PersonalInfo from "../form/PersonalInfo";
import Experience from "../form/Experience";
import Skills from "../form/Skills";
import Projects from "../form/Projects";
import Certificates from "../form/Certificates";
import Exams from "../form/Exams";
import Languages from "../form/Languages";
import Other from "../form/Other";

export default function Form({
    personalInfo,
    onPersonalInfoChange,
    onProfilePhotoChange,
    education,
    onEducationChange,
    onAddEducation,
    onRemoveEducation,
    experience,
    onExperienceChange,
    onAddExperience,
    onRemoveExperience,
    skills,
    onSkillsChange,
    projects,
    onProjectsChange,
    onAddProject,
    onRemoveProject,
    certificates,
    onCertificatesChange,
    onAddCertificate,
    onRemoveCertificate,
    exams,
    onExamsChange,
    onAddExam,
    onRemoveExam,
    language,
    onLanguageChange,
    onAddLanguage,
    onRemoveLanguage,
    other,
    onOtherChange
}) {
    return (
        <section className="cv-form">
            <PersonalInfo 
            personalInfo={personalInfo}
            onPersonalInfoChange={onPersonalInfoChange}
            onProfilePhotoChange={onProfilePhotoChange}
            />
            <Education
            education={education}
            onEducationChange={onEducationChange}
            onAddEducation={onAddEducation}
            onRemoveEducation={onRemoveEducation}
            />
            <Experience
            experience={experience}
            onExperienceChange={onExperienceChange}
            onAddExperience={onAddExperience}
            onRemoveExperience={onRemoveExperience}
            />
            <Skills
            skills={skills}
            onSkillsChange={onSkillsChange}
            />
            <Projects
            projects={projects}
            onProjectsChange={onProjectsChange}
            onAddProject={onAddProject}
            onRemoveProject={onRemoveProject}
            />
            <Certificates
            certificates={certificates}
            onCertificatesChange={onCertificatesChange}
            onAddCertificate={onAddCertificate}
            onRemoveCertificate={onRemoveCertificate}
            />
            <Exams
            exams={exams}
            onExamsChange={onExamsChange}
            onAddExam={onAddExam}
            onRemoveExam={onRemoveExam}
            />
            <Languages
            language={language}
            onLanguageChange={onLanguageChange}
            onAddLanguage={onAddLanguage}
            onRemoveLanguage={onRemoveLanguage}
            />
            <Other
            other={other}
            onOtherChange={onOtherChange}
            />
        </section>
    );
}