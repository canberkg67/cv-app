export default function CtaArrow() {
    return (
        <svg
            className="cta-arrow"
            viewBox="0 0 1000 150"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="cta-arrow-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#334155" />
                </linearGradient>
            </defs>
            <path
                className="cta-arrow-shadow"
                d="M 565 128 C 557 91, 577 63, 624 59 C 681 54, 729 65, 775 65"
            />
            <path
                className="cta-arrow-line"
                d="M 565 128 C 557 91, 577 63, 624 59 C 681 54, 729 65, 773 65"
            />
            <path
                className="cta-arrow-head"
                d="M 764 55 Q 771 62 780 65 Q 771 68 764 75 L 768 66 Z"
            />
            <circle className="cta-arrow-start" cx="565" cy="128" r="4" />
        </svg>
    );
}
