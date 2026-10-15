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
    onEducationChange
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
            />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Exams />
            <Languages />
            <Other />
        </section>
    );
}