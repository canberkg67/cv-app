import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Exams from "./Exams";
import Languages from "./Languages";
import Other from "./Other";

export default function Form({ personalInfo, onPersonalInfoChange }) {
    return (
        <section className="cv-form">
            <PersonalInfo 
            personalInfo={personalInfo}
            onPersonalInfoChange={onPersonalInfoChange}
            />
            <Education />
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