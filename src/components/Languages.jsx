export default function Languages({ language, onLanguageChange }) {
    return (
        <section className="form-languages">
            <h2>Languages</h2>
            <div>
                <label htmlFor="language">Language</label>
                <input
                    type="text"
                    id="language"
                    name="language"
                    value={language.language}
                    onChange={onLanguageChange}
                />
            </div>

            <div>
                <label htmlFor="languageLevel">Proficiency Level</label>
                <select
                    id="languageLevel"
                    name="languageLevel"
                    value={language.languageLevel}
                    onChange={onLanguageChange}
                >
                    <option value="" disabled>
                        Select a level
                    </option>
                    <option value="Native">Native</option>
                    <option value="A1">A1 - Beginner</option>
                    <option value="A2">A2 - Elementary</option>
                    <option value="B1">B1 - Intermediate</option>
                    <option value="B2">B2 - Upper Intermediate</option>
                    <option value="C1">C1 - Advanced</option>
                    <option value="C2">C2 - Proficient</option>
                </select>
            </div>
        </section>
    );
}