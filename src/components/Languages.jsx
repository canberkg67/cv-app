export default function Languages({
    language,
    onLanguageChange,
    onAddLanguage,
    onRemoveLanguage
}) {
    return (
        <section className="form-languages">
            <h2>Languages</h2>
            {language.map((entry, index) => (
                <div className="form-entry-group" key={entry.id}>
                    <div className="language-entry">
                    <h3>Language {language.length - index}</h3>
                    <fieldset disabled={index !== 0}>
                    <div>
                        <label htmlFor={`language-${entry.id}`}>Language</label>
                        <input
                            type="text"
                            id={`language-${entry.id}`}
                            name="language"
                            value={entry.language}
                            onChange={(event) => onLanguageChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`languageLevel-${entry.id}`}>
                            Proficiency Level
                        </label>
                        <select
                            id={`languageLevel-${entry.id}`}
                            name="languageLevel"
                            value={entry.languageLevel}
                            onChange={(event) => onLanguageChange(entry.id, event)}
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
                    </fieldset>
                    {index === 0 && (
                        <button type="button" onClick={onAddLanguage}>
                            Add Language
                        </button>
                    )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemoveLanguage(entry.id)}
                        aria-label={`Remove language ${language.length - index}`}
                    >
                        Remove Language {language.length - index}
                    </button>
                </div>
            ))}
            {language.length === 0 && (
                <button type="button" onClick={onAddLanguage}>
                    Add Language
                </button>
            )}
        </section>
    );
}