export default function Skills({ skills, onSkillsChange }) {
    return (
        <section className="skills">
            <h2>Skills</h2>

            <div>
                <label htmlFor="skills">Skills</label>
                <textarea
                    id="skills"
                    name="skills"
                    rows="4"
                    value={skills}
                    onChange={onSkillsChange}
                    placeholder="Write your skills as a list by entering one per line."
                />
            </div>
        </section>
    );
}