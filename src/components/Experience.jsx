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
                <div className="experience-entry" key={entry.id}>
                    <h3>Experience {index + 1}</h3>
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

                    <button
                        type="button"
                        onClick={() => onRemoveExperience(entry.id)}
                        aria-label={`Remove experience ${index + 1}`}
                    >
                        Remove Experience
                    </button>
                </div>
            ))}
            <button type="button" onClick={onAddExperience}>
                Add Experience
            </button>
        </section>
    );
}