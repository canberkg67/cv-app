import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

export default function Form() {
    return (
        <section className="cv-form">
            <PersonalInfo />
            <Education />
        </section>
    );
}