export default function PersonalInfo() {
    return (
        <section className="personal-info">
            <h2>Personal Information</h2>

            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                />
            </div>

            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                />
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                />
            </div>

            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                />
            </div>

            <div>
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                />
            </div>

            <div>
                <label htmlFor="website">Website</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                />
            </div>

            <div>
                <label htmlFor="about">About</label>
                <textarea
                    id="about"
                    name="about"
                    rows="4"
                ></textarea>
            </div>

            <div>
                <label htmlFor="profilePhoto">Profile Photo</label>
                <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
                    accept="image/*"
                />
            </div>
        </section>
    );
}