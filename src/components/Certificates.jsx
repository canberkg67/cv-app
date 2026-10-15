export default function Certificates({ certificates, onCertificatesChange }) {
    return (
        <section className="form-certificates">
            <h2>Certificates</h2>
            <div>
                <label htmlFor="certificateName">Certificate Name</label>
                <input
                    type="text"
                    id="certificateName"
                    name="certificateName"
                    value={certificates.certificateName}
                    onChange={onCertificatesChange}
                />
            </div>

            <div>
                <label htmlFor="issuingOrganization">
                    Issuing Organization
                </label>
                <input
                    type="text"
                    id="issuingOrganization"
                    name="issuingOrganization"
                    value={certificates.issuingOrganization}
                    onChange={onCertificatesChange}
                />
            </div>

            <div>
                <label htmlFor="certificateDate">Date</label>
                <input
                    type="month"
                    id="certificateDate"
                    name="certificateDate"
                    value={certificates.certificateDate}
                    onChange={onCertificatesChange}
                />
            </div>

            <div>
                <label htmlFor="certificateLink">Certificate Link</label>
                <input
                    type="url"
                    id="certificateLink"
                    name="certificateLink"
                    value={certificates.certificateLink}
                    onChange={onCertificatesChange}
                />
            </div>
        </section>
    );
}