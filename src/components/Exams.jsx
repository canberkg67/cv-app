export default function Exams() {
    return (
        <section className="cv-exams">
            <h2>Exams</h2>

            <div className="form-field">
                <label htmlFor="examName">Exam Name</label>
                <input
                    type="text"
                    id="examName"
                    name="examName"
                    placeholder="e.g. IELTS, TOEFL"
                />
            </div>

            <div className="form-field">
                <label htmlFor="examScore">Score</label>
                <input
                    type="text"
                    id="examScore"
                    name="examScore"
                />
            </div>

            <div className="form-field">
                <label htmlFor="examDate">Date</label>
                <input
                    type="month"
                    id="examDate"
                    name="examDate"
                />
            </div>

            <div className="form-field">
                <label htmlFor="examDetails">Additional Details</label>
                <textarea
                    id="examDetails"
                    name="examDetails"
                    rows="3"
                    placeholder="You can add any additional details about the exam here."
                />
            </div>
        </section>
        )
}