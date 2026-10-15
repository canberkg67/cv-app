export default function Experience({ experience, onExperienceChange }) {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={experience.company}
                    onChange={onExperienceChange}
                />
            </div>

            <div>
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    value={experience.position}
                    onChange={onExperienceChange}
                />
            </div>

            <div>
                <label htmlFor="jobLocation">Location</label>
                <input
                    type="text"
                    id="jobLocation"
                    name="jobLocation"
                    value={experience.jobLocation}
                    onChange={onExperienceChange}
                />
            </div>

            <div>
                <label htmlFor="jobStartDate">Start Date</label>
                <input
                    type="month"
                    id="jobStartDate"
                    name="jobStartDate"
                    value={experience.jobStartDate}
                    onChange={onExperienceChange}
                />
            </div>

            <div>
                <label htmlFor="jobEndDate">End Date</label>
                <input
                    type="month"
                    id="jobEndDate"
                    name="jobEndDate"
                    value={experience.jobEndDate}
                    onChange={onExperienceChange}
                />
            </div>

            <div>
                <label htmlFor="jobDescription">Description</label>
                <textarea
                    id="jobDescription"
                    name="jobDescription"
                    rows="4"
                    value={experience.jobDescription}
                    onChange={onExperienceChange}
                />
            </div>
        </section>
    );
}