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
                <div className="form-entry-group" key={entry.id}>
                    <div className="project-entry">
                        <h3>Project {projects.length - index}</h3>
                        <div>
                            <label htmlFor={`projectName-${entry.id}`}>Project Name</label>
                            <input
                                type="text"
                                id={`projectName-${entry.id}`}
                                name="projectName"
                                value={entry.projectName}
                                readOnly={index !== 0}
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
                                readOnly={index !== 0}
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
                                readOnly={index !== 0}
                                onChange={(event) => onProjectsChange(entry.id, event)}
                            />
                        </div>
                        {index === 0 && (
                            <button type="button" onClick={onAddProject}>
                                Add Project
                            </button>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemoveProject(entry.id)}
                        aria-label={`Remove project ${projects.length - index}`}
                    >
                        Remove Project {projects.length - index}
                    </button>
                </div>
            ))}
            {projects.length === 0 && (
                <button type="button" onClick={onAddProject}>
                    Add Project
                </button>
            )}
        </section>
    );
}