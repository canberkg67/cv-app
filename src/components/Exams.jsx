export default function Exams({ exams, onExamsChange }) {
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
                    value={exams.examName}
                    onChange={onExamsChange}
                />
            </div>

            <div className="form-field">
                <label htmlFor="examScore">Score</label>
                <input
                    type="text"
                    id="examScore"
                    name="examScore"
                    value={exams.examScore}
                    onChange={onExamsChange}
                />
            </div>

            <div className="form-field">
                <label htmlFor="examDate">Date</label>
                <input
                    type="month"
                    id="examDate"
                    name="examDate"
                    value={exams.examDate}
                    onChange={onExamsChange}
                />
            </div>

            <div className="form-field">
                <label htmlFor="examDetails">Additional Details</label>
                <textarea
                    id="examDetails"
                    name="examDetails"
                    rows="3"
                    placeholder="You can add any additional details about the exam here."
                    value={exams.examDetails}
                    onChange={onExamsChange}
                />
            </div>
        </section>
        )
}