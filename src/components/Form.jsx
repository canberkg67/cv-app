import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";
import Other from "./Other";

export default function Form() {
    return (
        <section className="cv-form">
            <PersonalInfo />
            <Education />
            <Experience />
            <Skills />
            <Languages />
            <Other />
        </section>
    );
}