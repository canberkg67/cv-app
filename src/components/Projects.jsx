export default function Projects({
    projects,
    onProjectsChange,
    onAddProject,
    onRemoveProject
}) {
    return (
        <section className="form-projects">
            <h2>Projects</h2>
            {projects.map((entry, index) => (
                <div className="project-entry" key={entry.id}>
                    <h3>Project {index + 1}</h3>
                    <div>
                        <label htmlFor={`projectName-${entry.id}`}>Project Name</label>
                        <input
                            type="text"
                            id={`projectName-${entry.id}`}
                            name="projectName"
                            value={entry.projectName}
                            onChange={(event) => onProjectsChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`projectLink-${entry.id}`}>Project Link</label>
                        <input
                            type="url"
                            id={`projectLink-${entry.id}`}
                            name="projectLink"
                            value={entry.projectLink}
                            onChange={(event) => onProjectsChange(entry.id, event)}
                        />
                    </div>

                    <div>
                        <label htmlFor={`projectDescription-${entry.id}`}>
                            Description
                        </label>
                        <textarea
                            id={`projectDescription-${entry.id}`}
                            name="projectDescription"
                            rows="4"
                            value={entry.projectDescription}
                            onChange={(event) => onProjectsChange(entry.id, event)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemoveProject(entry.id)}
                        aria-label={`Remove project ${index + 1}`}
                    >
                        Remove Project
                    </button>
                </div>
            ))}
            <button type="button" onClick={onAddProject}>
                Add Project
            </button>
        </section>
    );
}