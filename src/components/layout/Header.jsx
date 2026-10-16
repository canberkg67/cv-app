import "../styles/header.css";
import PrivIcon from "../svg/PrivIcon";

export default function Header() {
    return (
        <header className="app-header">
            <div className="header-brand">
                <img src="/notebook.svg" alt="Logo" />
                <div className="header-content">
                    <h1>Build Your CV</h1>
                    <p>Create a professional CV by filling out the form below and get your CV in PDF format.</p>
                    <p className="privacy-note">
                        <PrivIcon /> Privacy: Your data stays in your browser; it isn't sent to a remote database-server.
                    </p>
                </div>
            </div>
            <button type="button" onClick={() => window.print()}>
                Download CV as PDF
            </button>
        </header>
    );
}