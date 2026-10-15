import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Exams from "./Exams";
import Languages from "./Languages";
import Other from "./Other";

export default function Form({
    personalInfo,
    onPersonalInfoChange,
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
    certificates,
    onCertificatesChange,
    exams,
    onExamsChange,
    language,
    onLanguageChange,
    other,
    onOtherChange
}) {
    return (
        <section className="cv-form">
            <PersonalInfo 
            personalInfo={personalInfo}
            onPersonalInfoChange={onPersonalInfoChange}
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
            />
            <Certificates
            certificates={certificates}
            onCertificatesChange={onCertificatesChange}
            />
            <Exams
            exams={exams}
            onExamsChange={onExamsChange}
            />
            <Languages
            language={language}
            onLanguageChange={onLanguageChange}
            />
            <Other
            other={other}
            onOtherChange={onOtherChange}
            />
        </section>
    );
}