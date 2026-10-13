import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Languages from "./Languages";
import Other from "./Other";

export default function Form() {
    return (
        <section className="cv-form">
            <PersonalInfo />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Languages />
            <Other />
        </section>
    );
}