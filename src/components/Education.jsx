export default function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <div>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                />
            </div>

            <div>
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    id="degree"
                    name="degree"
                />
            </div>

            <div>
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                />
            </div>

            <div>
                <label htmlFor="schoolLocation">Location</label>
                <input
                    type="text"
                    id="schoolLocation"
                    name="schoolLocation"
                />
            </div>

            <div>
                <label htmlFor="schoolStartDate">Start Date</label>
                <input
                    type="month"
                    id="schoolStartDate"
                    name="schoolStartDate"
                />
            </div>

            <div>
                <label htmlFor="schoolEndDate">End Date</label>
                <input
                    type="month"
                    id="schoolEndDate"
                    name="schoolEndDate"
                />
            </div>

            <div>
                <label htmlFor="schoolDescription">Description</label>
                <textarea
                    id="schoolDescription"
                    name="schoolDescription"
                    rows="4"
                />
            </div>
        </section>
    );
}