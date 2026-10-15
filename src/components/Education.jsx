export default function Education({
    education,
    onEducationChange,
    onAddEducation,
    onRemoveEducation
}) {
    return (
        <section className="education">
            <h2>Education</h2>
            {education.map((entry, index) => (
                <div className="education-entry" key={entry.id}>
                    <h3>Education {index + 1}</h3>
                    <div>
                        <label htmlFor={`school-${entry.id}`}>School</label>
                        <input
                            type="text"
                            id={`school-${entry.id}`}
                            name="school"
                            value={entry.school}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`degree-${entry.id}`}>Degree</label>
                        <input
                            type="text"
                            id={`degree-${entry.id}`}
                            name="degree"
                            value={entry.degree}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`fieldOfStudy-${entry.id}`}>Field of Study</label>
                        <input
                            type="text"
                            id={`fieldOfStudy-${entry.id}`}
                            name="fieldOfStudy"
                            value={entry.fieldOfStudy}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`schoolLocation-${entry.id}`}>Location</label>
                        <input
                            type="text"
                            id={`schoolLocation-${entry.id}`}
                            name="schoolLocation"
                            value={entry.schoolLocation}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`schoolStartDate-${entry.id}`}>Start Date</label>
                        <input
                            type="month"
                            id={`schoolStartDate-${entry.id}`}
                            name="schoolStartDate"
                            value={entry.schoolStartDate}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`schoolEndDate-${entry.id}`}>End Date</label>
                        <input
                            type="month"
                            id={`schoolEndDate-${entry.id}`}
                            name="schoolEndDate"
                            value={entry.schoolEndDate}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`schoolDescription-${entry.id}`}>Description</label>
                        <textarea
                            id={`schoolDescription-${entry.id}`}
                            name="schoolDescription"
                            rows="4"
                            value={entry.schoolDescription}
                            onChange={(event) => onEducationChange(entry.id, event)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemoveEducation(entry.id)}
                        aria-label={`Remove education ${index + 1}`}
                    >
                        Remove Education
                    </button>
                </div>
            ))}
            <button type="button" onClick={onAddEducation}>
                Add Education
            </button>
        </section>
    );
}