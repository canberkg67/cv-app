export default function Experience({
    experience,
    onExperienceChange,
    onAddExperience,
    onRemoveExperience
}) {
    return (
        <section className="experience">
            <h2>Experience</h2>
            {experience.map((entry, index) => (
                <div className="form-entry-group" key={entry.id}>
                    <div className="experience-entry">
                    <h3>Experience {experience.length - index}</h3>
                    <fieldset disabled={index !== 0}>
                    <div>
                        <label htmlFor={`company-${entry.id}`}>Company</label>
                        <input
                            type="text"
                            id={`company-${entry.id}`}
                            name="company"
                            value={entry.company}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`position-${entry.id}`}>Position</label>
                        <input
                            type="text"
                            id={`position-${entry.id}`}
                            name="position"
                            value={entry.position}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`jobLocation-${entry.id}`}>Location</label>
                        <input
                            type="text"
                            id={`jobLocation-${entry.id}`}
                            name="jobLocation"
                            value={entry.jobLocation}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`jobStartDate-${entry.id}`}>Start Date</label>
                        <input
                            type="month"
                            id={`jobStartDate-${entry.id}`}
                            name="jobStartDate"
                            value={entry.jobStartDate}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`jobEndDate-${entry.id}`}>End Date</label>
                        <input
                            type="month"
                            id={`jobEndDate-${entry.id}`}
                            name="jobEndDate"
                            value={entry.jobEndDate}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`jobDescription-${entry.id}`}>Description</label>
                        <textarea
                            id={`jobDescription-${entry.id}`}
                            name="jobDescription"
                            rows="4"
                            value={entry.jobDescription}
                            onChange={(event) => onExperienceChange(entry.id, event)}
                        />
                    </div>
                    </fieldset>
                    {index === 0 && (
                        <button type="button" onClick={onAddExperience}>
                            Add Experience
                        </button>
                    )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemoveExperience(entry.id)}
                        aria-label={`Remove experience ${experience.length - index}`}
                    >
                        Remove Experience {experience.length - index}
                    </button>
                </div>
            ))}
            {experience.length === 0 && (
                <button type="button" onClick={onAddExperience}>
                    Add Experience
                </button>
            )}
        </section>
    );
}