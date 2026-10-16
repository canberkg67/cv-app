export default function Certificates({
    certificates,
    onCertificatesChange,
    onAddCertificate,
    onRemoveCertificate
}) {
    return (
        <section className="form-certificates">
            <h2>Certificates</h2>
            {certificates.map((entry, index) => (
                <div className="form-entry-group" key={entry.id}>
                    <div className="certificate-entry">
                    <h3>Certificate {certificates.length - index}</h3>
                    <fieldset disabled={index !== 0}>
                    <div>
                        <label htmlFor={`certificateName-${entry.id}`}>Certificate Name</label>
                        <input
                            type="text"
                            id={`certificateName-${entry.id}`}
                            name="certificateName"
                            value={entry.certificateName}
                            onChange={(event) => onCertificatesChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`issuingOrganization-${entry.id}`}>
                            Issuing Organization
                        </label>
                        <input
                            type="text"
                            id={`issuingOrganization-${entry.id}`}
                            name="issuingOrganization"
                            value={entry.issuingOrganization}
                            onChange={(event) => onCertificatesChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`certificateDate-${entry.id}`}>Date</label>
                        <input
                            type="month"
                            id={`certificateDate-${entry.id}`}
                            name="certificateDate"
                            value={entry.certificateDate}
                            onChange={(event) => onCertificatesChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`certificateLink-${entry.id}`}>Certificate Link</label>
                        <input
                            type="url"
                            id={`certificateLink-${entry.id}`}
                            name="certificateLink"
                            value={entry.certificateLink}
                            onChange={(event) => onCertificatesChange(entry.id, event)}
                        />
                    </div>
                    </fieldset>
                    {index === 0 && (
                        <button type="button" onClick={onAddCertificate}>
                            Add Certificate
                        </button>
                    )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemoveCertificate(entry.id)}
                        aria-label={`Remove certificate ${certificates.length - index}`}
                    >
                        Remove Certificate {certificates.length - index}
                    </button>
                </div>
            ))}
            {certificates.length === 0 && (
                <button type="button" onClick={onAddCertificate}>
                    Add Certificate
                </button>
            )}
        </section>
    );
}