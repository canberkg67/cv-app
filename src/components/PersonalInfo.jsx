export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
    return (
        <section className="personal-info">
            <h2>Personal Information</h2>

            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={personalInfo.title}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={personalInfo.location}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={personalInfo.linkedin}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="website">Website</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={personalInfo.website}
                    onChange={onPersonalInfoChange}
                />
            </div>

            <div>
                <label htmlFor="about">About</label>
                <textarea
                    id="about"
                    name="about"
                    rows="4"
                    value={personalInfo.about}
                    onChange={onPersonalInfoChange}
                ></textarea>
            </div>

            <div>
                <label htmlFor="profilePhoto">Profile Photo</label>
                <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={onPersonalInfoChange}
                />
            </div>
        </section>
    );
}