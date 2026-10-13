export default function Experience() {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                />
            </div>

            <div>
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                />
            </div>

            <div>
                <label htmlFor="jobLocation">Location</label>
                <input
                    type="text"
                    id="jobLocation"
                    name="jobLocation"
                />
            </div>

            <div>
                <label htmlFor="jobStartDate">Start Date</label>
                <input
                    type="month"
                    id="jobStartDate"
                    name="jobStartDate"
                />
            </div>

            <div>
                <label htmlFor="jobEndDate">End Date</label>
                <input
                    type="month"
                    id="jobEndDate"
                    name="jobEndDate"
                />
            </div>

            <div>
                <label htmlFor="jobDescription">Description</label>
                <textarea
                    id="jobDescription"
                    name="jobDescription"
                    rows="4"
                />
            </div>
        </section>
    );
}