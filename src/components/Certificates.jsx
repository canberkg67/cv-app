export default function Certificates() {
    return (
        <section className="form-certificates">
            <h2>Certificates</h2>
            <div>
                <label htmlFor="certificateName">Certificate Name</label>
                <input
                    type="text"
                    id="certificateName"
                    name="certificateName"
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
                />
            </div>

            <div>
                <label htmlFor="certificateDate">Date</label>
                <input
                    type="month"
                    id="certificateDate"
                    name="certificateDate"
                />
            </div>

            <div>
                <label htmlFor="certificateLink">Certificate Link</label>
                <input
                    type="url"
                    id="certificateLink"
                    name="certificateLink"
                />
            </div>
        </section>
    );
}