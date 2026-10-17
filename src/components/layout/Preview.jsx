import { useState } from "react";
import { translations } from "../../translation";
import "../styles/preview.css";

function hasValue(value) {
    return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
}

function hasEntryContent(entry) {
    return Object.entries(entry).some(([key, value]) =>
        key !== "id" && hasValue(value)
    );
}

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
    const [previewLanguage, setPreviewLanguage] = useState("en");
    const [template, setTemplate] = useState("classic");
    const previewTranslations = translations[previewLanguage].preview;
    const skillList = skills.split("\n").map(skill => skill.trim()).filter(Boolean);
    const otherList = other.split("\n").map(item => item.trim()).filter(Boolean);
    const filledEducation = education
        .filter(hasEntryContent)
        .sort((first, second) => {
            if (!hasValue(first.schoolEndDate)) return hasValue(second.schoolEndDate) ? 1 : 0;
            if (!hasValue(second.schoolEndDate)) return -1;
            return second.schoolEndDate.localeCompare(first.schoolEndDate);
        });
    const filledExperience = experience
        .filter(hasEntryContent)
        .sort((first, second) => {
            if (!hasValue(first.jobEndDate)) return hasValue(second.jobEndDate) ? -1 : 0;
            if (!hasValue(second.jobEndDate)) return 1;
            return second.jobEndDate.localeCompare(first.jobEndDate);
        });
    const filledProjects = projects.filter(hasEntryContent);
    const filledCertificates = certificates.filter(hasEntryContent);
    const filledExams = exams.filter(hasEntryContent);
    const filledLanguages = language.filter(hasEntryContent);
    const hasPersonalInfo = Object.values(personalInfo).some(hasValue);

    return (
        <section className="cv-preview" id="cv-preview">
            <h2>Live Preview</h2>
            <div className="preview-language-switch" role="group" aria-label="CV language">
                <button
                    type="button"
                    aria-pressed={previewLanguage === "en"}
                    onClick={() => setPreviewLanguage("en")}
                >
                    English
                </button>
                <button
                    type="button"
                    aria-pressed={previewLanguage === "tr"}
                    onClick={() => setPreviewLanguage("tr")}
                >
                    Türkçe
                </button>
            </div>
            <div className="preview-template">
                <label htmlFor="preview-template">{previewTranslations.templateLabel}</label>
                <select
                    id="preview-template"
                    value={template}
                    onChange={event => setTemplate(event.target.value)}
                >
                    <option value="classic">{previewTranslations.classicTemplate}</option>
                    <option value="modern">{previewTranslations.modernTemplate}</option>
                </select>
            </div>
            <div className={`cv-page cv-page--${template}`} lang={previewLanguage}>
                {hasPersonalInfo && (
                    <header className="cv-header">
                        {personalInfo.profilePhoto && (
                            <img
                                className="cv-profile-photo"
                                src={personalInfo.profilePhoto}
                                alt="Profile"
                            />
                        )}
                        <div className="cv-header-content">
                            {hasValue(personalInfo.fullName) && <h1>{personalInfo.fullName}</h1>}
                            {hasValue(personalInfo.title) && <h2>{personalInfo.title}</h2>}
                            <div className="cv-contact-details">
                                {["email", "phone", "location", "linkedin", "website"].map(field =>
                                    hasValue(personalInfo[field]) && (
                                        <p key={field}>{personalInfo[field]}</p>
                                    )
                                )}
                            </div>
                        </div>
                    </header>
                )}

                {hasValue(personalInfo.about) && (
                    <section className="cv-section">
                        <h3>{previewTranslations.about}</h3>
                        <p>{personalInfo.about}</p>
                    </section>
                )}

                {filledEducation.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.education}</h3>
                        {filledEducation.map(entry => (
                            <div key={entry.id}>
                                {hasValue(entry.school) && <h4>{entry.school}</h4>}
                                {hasValue(entry.degree) && <p>{entry.degree}</p>}
                                {hasValue(entry.fieldOfStudy) && <p>{entry.fieldOfStudy}</p>}
                                {hasValue(entry.schoolLocation) && <p>{entry.schoolLocation}</p>}
                                {(hasValue(entry.schoolStartDate) || hasValue(entry.schoolEndDate)) && (
                                    <p>
                                        {entry.schoolStartDate}
                                        {entry.schoolStartDate && entry.schoolEndDate && " – "}
                                        {entry.schoolEndDate}
                                    </p>
                                )}
                                {hasValue(entry.schoolDescription) && <p>{entry.schoolDescription}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {filledExperience.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.experience}</h3>
                        {filledExperience.map(entry => (
                            <div key={entry.id}>
                                {hasValue(entry.company) && <h4>{entry.company}</h4>}
                                {(hasValue(entry.position) || hasValue(entry.jobStartDate) || hasValue(entry.jobEndDate)) && (
                                    <p>
                                        {entry.position}
                                        {entry.position && (entry.jobStartDate || entry.jobEndDate) && " | "}
                                        {entry.jobStartDate}
                                        {entry.jobStartDate && entry.jobEndDate && " – "}
                                        {entry.jobEndDate}
                                    </p>
                                )}
                                {hasValue(entry.jobLocation) && <p>{entry.jobLocation}</p>}
                                {hasValue(entry.jobDescription) && <p>{entry.jobDescription}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {skillList.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.skills}</h3>
                        <ul>
                            {skillList.map((skill, index) => (
                                <li key={`${skill}-${index}`}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {filledProjects.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.projects}</h3>
                        {filledProjects.map(entry => (
                            <div key={entry.id}>
                                {hasValue(entry.projectName) && <h4>{entry.projectName}</h4>}
                                {hasValue(entry.projectLink) && <p>{entry.projectLink}</p>}
                                {hasValue(entry.projectDescription) && <p>{entry.projectDescription}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {filledCertificates.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.certificates}</h3>
                        {filledCertificates.map(entry => (
                            <div key={entry.id}>
                                {hasValue(entry.certificateName) && <h4>{entry.certificateName}</h4>}
                                {(hasValue(entry.issuingOrganization) || hasValue(entry.certificateDate)) && (
                                    <p>
                                        {entry.issuingOrganization}
                                        {entry.issuingOrganization && entry.certificateDate && " | "}
                                        {entry.certificateDate}
                                    </p>
                                )}
                                {hasValue(entry.certificateLink) && <p>{entry.certificateLink}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {filledExams.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.exams}</h3>
                        {filledExams.map(entry => (
                            <div key={entry.id}>
                                {hasValue(entry.examName) && <h4>{entry.examName}</h4>}
                                {(hasValue(entry.examScore) || hasValue(entry.examDate)) && (
                                    <p>
                                        {entry.examScore}
                                        {entry.examScore && entry.examDate && " | "}
                                        {entry.examDate}
                                    </p>
                                )}
                                {hasValue(entry.examDetails) && <p>{entry.examDetails}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {filledLanguages.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.languages}</h3>
                        {filledLanguages.map(entry => (
                            <p key={entry.id}>
                                {entry.language}
                                {entry.language && entry.languageLevel && " — "}
                                {entry.languageLevel}
                            </p>
                        ))}
                    </section>
                )}

                {otherList.length > 0 && (
                    <section className="cv-section">
                        <h3>{previewTranslations.otherInformation}</h3>
                        <ul>
                            {otherList.map((item, index) => (
                                <li key={`${item}-${index}`}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </section>
    );
}
