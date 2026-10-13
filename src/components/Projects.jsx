export default function Projects() {
    return (
        <section className="form-projects">
            <h2>Projects</h2>
            <div>
                <label htmlFor="projectName">Project Name</label>
                <input
                    type="text"
                    id="projectName"
                    name="projectName"
                />
            </div>

            <div>
                <label htmlFor="projectLink">Project Link</label>
                <input
                    type="url"
                    id="projectLink"
                    name="projectLink"
                />
            </div>

            <div>
                <label htmlFor="projectDescription">
                    Description
                </label>
                <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows="4"
                />
            </div>
        </section>
    );
}