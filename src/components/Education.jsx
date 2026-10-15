export default function Education({ education, onEducationChange }) {
    return (
        <section className="education">
            <h2>Education</h2>
            <div>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                    value={education.school}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={education.degree}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={education.fieldOfStudy}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="schoolLocation">Location</label>
                <input
                    type="text"
                    id="schoolLocation"
                    name="schoolLocation"
                    value={education.schoolLocation}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="schoolStartDate">Start Date</label>
                <input
                    type="month"
                    id="schoolStartDate"
                    name="schoolStartDate"
                    value={education.schoolStartDate}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="schoolEndDate">End Date</label>
                <input
                    type="month"
                    id="schoolEndDate"
                    name="schoolEndDate"
                    value={education.schoolEndDate}
                    onChange={onEducationChange}
                />
            </div>

            <div>
                <label htmlFor="schoolDescription">Description</label>
                <textarea
                    id="schoolDescription"
                    name="schoolDescription"
                    rows="4"
                    value={education.schoolDescription}
                    onChange={onEducationChange}
                />
            </div>
        </section>
    );
}