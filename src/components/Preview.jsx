export default function Preview({
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certificates,
    exams,
    language,
    other
}) {
    
    const skillList = skills
        .split("\n")
        .map((skill) => skill.trim())
        .filter(Boolean);
    
    const otherList = other
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
    
    const filledEducation = education
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry }) =>
            Object.entries(entry).some(([key, value]) => key !== "id" && value)
        )
        .sort(({ entry: first }, { entry: second }) => {
            if (!first.schoolEndDate) return second.schoolEndDate ? 1 : 0;
            if (!second.schoolEndDate) return -1;
            return second.schoolEndDate.localeCompare(first.schoolEndDate);
        });
    const filledExperience = experience
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry }) =>
            Object.entries(entry).some(([key, value]) => key !== "id" && value)
        )
        .sort(({ entry: first }, { entry: second }) => {
            if (!first.jobEndDate) return second.jobEndDate ? -1 : 0;
            if (!second.jobEndDate) return 1;
            return second.jobEndDate.localeCompare(first.jobEndDate);
        });

    return (
        <section className="cv-preview">
            <h2>Live Preview</h2>

            {/* Static content for now */}
            <div className="cv-page" lang="en">
                <header className="cv-header">
                    <h1>{personalInfo.fullName || "John Doe"}</h1>
                    <h2>{personalInfo.title || "Architect"}</h2>

                    <p>{personalInfo.email || "john.doe@example.com"}</p>
                    <p>{personalInfo.phone || "+1 555 010 2040"}</p>
                    <p>{personalInfo.location || "Portland, Oregon"}</p>
                    <p>{personalInfo.linkedin || "linkedin.com/in/examplejohndoe"}</p>
                    <p>{personalInfo.website || "portfolio.example.com"}</p>
                    
                </header>

                <section className="cv-section">
                    <h3>About</h3>
                    <p>
                        {personalInfo.about || "Creative and detail-oriented architect with an interest in sustainable design, urban spaces, and functional architecture. Experienced in developing design concepts and preparing architectural drawings."}
                    </p>
                </section>

                <section className="cv-section">
                    <h3>Education</h3>
                    {filledEducation.length > 0 ? (
                        filledEducation.map(({ entry }) => (
                            <div key={entry.id}>
                                <h4>{entry.school}</h4>
                                {entry.degree && <p>{entry.degree}</p>}
                                {entry.fieldOfStudy && <p>{entry.fieldOfStudy}</p>}
                                {entry.schoolLocation && <p>{entry.schoolLocation}</p>}
                                {(entry.schoolStartDate || entry.schoolEndDate) && (
                                    <p>
                                        {entry.schoolStartDate || "Start date not set"} –{" "}
                                        {entry.schoolEndDate || "Present"}
                                    </p>
                                )}
                                {entry.schoolDescription && (
                                    <p>{entry.schoolDescription}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <div>
                            <h4>Example University</h4>
                            <p>Master of Architecture</p>
                            <p>2022 – 2024</p>
                        </div>
                    )}
                </section>

                <section className="cv-section">
                    <h3>Experience</h3>
                    {filledExperience.length > 0 ? (
                        filledExperience.map(({ entry }) => (
                            <div key={entry.id}>
                                <h4>{entry.company}</h4>
                                {(entry.position || entry.jobStartDate || entry.jobEndDate) && (
                                    <p>
                                        {entry.position}
                                        {entry.position && (entry.jobStartDate || entry.jobEndDate) && " | "}
                                        {entry.jobStartDate || "Start date not set"}
                                        {" – "}
                                        {entry.jobEndDate || "Present"}
                                    </p>
                                )}
                                {entry.jobLocation && <p>{entry.jobLocation}</p>}
                                {entry.jobDescription && <p>{entry.jobDescription}</p>}
                            </div>
                        ))
                    ) : (
                        <div>
                            <h4>Junior Architect</h4>
                            <p>Example Architecture Studio | 2024 – Present</p>
                            <p>
                                Developed architectural concepts, prepared technical drawings, and collaborated with senior architects on residential projects.
                            </p>
                        </div>
                    )}
                </section>

                <section className="cv-section">
                    <h3>Skills</h3>
                    <ul>
                        {(skillList.length > 0
                            ? skillList
                            : [
                                "AutoCAD",
                                "Revit",
                                "SketchUp",
                                "Rhino",
                                "Adobe Photoshop",
                                "3D Modeling",
                                "Technical Drawing",
                            ]
                        ).map((skill, index) => (
                            <li key={`${skill}-${index}`}>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className="cv-section">
                    <h3>Projects</h3>
                    <div>
                        <h4>{projects.projectName || "Sustainable Community Center"}</h4>
                        {projects.projectLink && <p>{projects.projectLink}</p>}
                        <p>
                            {projects.projectDescription ||
                                "Developed a conceptual design for a community center focused on natural lighting, energy efficiency, and public accessibility."}
                        </p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Certificates</h3>
                    <div>
                        <h4>{certificates.certificateName || "Building Information Modeling"}</h4>
                        <p>
                            {certificates.issuingOrganization || "Example Design Academy"}
                            {" | "}
                            {certificates.certificateDate || "2023"}
                        </p>
                        {certificates.certificateLink && (
                            <p>{certificates.certificateLink}</p>
                        )}
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Exams</h3>
                    <div>
                        <h4>{exams.examName || "IELTS"}</h4>
                        <p>
                            {exams.examScore || "8.0"}
                            {" | "}
                            {exams.examDate || "2024"}
                        </p>
                        <p>{exams.examDetails || "Overall band score"}</p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Languages</h3>
                    <p>
                        {language.language || "English"}
                        {" — "}
                        {language.languageLevel || "Native"}
                    </p>
                </section>

                <section className="cv-section">
                    <h3>Other Information</h3>
                    <ul>
                        {(otherList.length > 0
                            ? otherList
                            : [
                                "Architectural photography",
                                "Urban sketching",
                                "Volunteering",
                                "Sustainable design research",
                            ]
                        ).map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}
