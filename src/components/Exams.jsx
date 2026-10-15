export default function Exams({
    exams,
    onExamsChange,
    onAddExam,
    onRemoveExam
}) {
    return (
        <section className="cv-exams">
            <h2>Exams</h2>
            {exams.map((entry, index) => (
                <div className="exam-entry" key={entry.id}>
                    <h3>Exam {index + 1}</h3>
                    <div className="form-field">
                        <label htmlFor={`examName-${entry.id}`}>Exam Name</label>
                        <input
                            type="text"
                            id={`examName-${entry.id}`}
                            name="examName"
                            placeholder="e.g. IELTS, TOEFL"
                            value={entry.examName}
                            onChange={(event) => onExamsChange(entry.id, event)}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor={`examScore-${entry.id}`}>Score</label>
                        <input
                            type="text"
                            id={`examScore-${entry.id}`}
                            name="examScore"
                            value={entry.examScore}
                            onChange={(event) => onExamsChange(entry.id, event)}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor={`examDate-${entry.id}`}>Date</label>
                        <input
                            type="month"
                            id={`examDate-${entry.id}`}
                            name="examDate"
                            value={entry.examDate}
                            onChange={(event) => onExamsChange(entry.id, event)}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor={`examDetails-${entry.id}`}>Additional Details</label>
                        <textarea
                            id={`examDetails-${entry.id}`}
                            name="examDetails"
                            rows="3"
                            placeholder="You can add any additional details about the exam here."
                            value={entry.examDetails}
                            onChange={(event) => onExamsChange(entry.id, event)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemoveExam(entry.id)}
                        aria-label={`Remove exam ${index + 1}`}
                    >
                        Remove Exam
                    </button>
                </div>
            ))}
            <button type="button" onClick={onAddExam}>
                Add Exam
            </button>
        </section>
    )
}