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
                <div className="certificate-entry" key={entry.id}>
                    <h3>Certificate {index + 1}</h3>
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

                    <button
                        type="button"
                        onClick={() => onRemoveCertificate(entry.id)}
                        aria-label={`Remove certificate ${index + 1}`}
                    >
                        Remove Certificate
                    </button>
                </div>
            ))}
            <button type="button" onClick={onAddCertificate}>
                Add Certificate
            </button>
        </section>
    );
}