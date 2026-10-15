export default function Preview() {
    return (
        <section className="cv-preview">
            <h2>Live Preview</h2>

            {/* Static content for now */}
            <div className="cv-page" lang="en">
                <header className="cv-header">
                    <h1>John Doe</h1>
                    <h2>Architect</h2>

                    <p>john.doe@example.com | +1 555 010 2040</p>
                    <p>Portland, Oregon | portfolio.example.com</p>
                </header>

                <section className="cv-section">
                    <h3>About</h3>
                    <p>
                        Creative and detail-oriented architect with an
                        interest in sustainable design, urban spaces,
                        and functional architecture. Experienced in
                        developing design concepts and preparing
                        architectural drawings.
                    </p>
                </section>

                <section className="cv-section">
                    <h3>Education</h3>
                    <div>
                        <h4>Example University</h4>
                        <p>Master of Architecture</p>
                        <p>2022 – 2024</p>
                    </div>
                    <div>
                        <h4>Example Institute of Design</h4>
                        <p>Bachelor of Architecture</p>
                        <p>2018 – 2022</p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Experience</h3>
                    <div>
                        <h4>Junior Architect</h4>
                        <p>Example Architecture Studio | 2024 – Present</p>
                        <p>
                            Developed architectural concepts, prepared
                            technical drawings, and collaborated with
                            senior architects on residential projects.
                        </p>
                    </div>
                    <div>
                        <h4>Architecture Intern</h4>
                        <p>Example Design Office | Summer 2021</p>
                        <p>
                            Assisted with 3D modeling, site analysis,
                            and presentation materials for design reviews.
                        </p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Skills</h3>
                    <p>
                        AutoCAD, Revit, SketchUp, Rhino, Adobe Photoshop,
                        3D Modeling, Technical Drawing
                    </p>
                </section>

                <section className="cv-section">
                    <h3>Languages</h3>
                    <p>English — Native</p>
                    <p>Spanish — B1 Intermediate</p>
                </section>

                <section className="cv-section">
                    <h3>Projects</h3>
                    <div>
                        <h4>Sustainable Community Center</h4>
                        <p>
                            Developed a conceptual design for a
                            community center focused on natural lighting,
                            energy efficiency, and public accessibility.
                        </p>
                    </div>
                    <div>
                        <h4>Urban Housing Study</h4>
                        <p>
                            Created site studies and preliminary 3D models
                            exploring compact residential design.
                        </p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Certificates</h3>
                    <div>
                        <h4>Building Information Modeling</h4>
                        <p>Example Design Academy | 2023</p>
                    </div>
                </section>

                <section className="cv-section">
                    <h3>Other Information</h3>
                    <p>
                        Architectural photography, urban sketching,
                        volunteering, and sustainable design research.
                    </p>
                </section>
            </div>
        </section>
    );
}
