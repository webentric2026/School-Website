import React, { useRef, useState } from "react";

/**
 * Props:
 *   title           — Main heading text
 *   subtitle        — Supporting paragraph text
 *   backgroundImage — URL string for the hero background image
 *   breadcrumb      — Breadcrumb string (e.g. "Home / Academics / Curriculum")
 *   buttonText      — CTA button label
 *   buttonLink      — CTA button href
 */

const Hero = ({
    title = "Academic Excellence",
    subtitle = "Discover a rigorous and inspiring curriculum designed to challenge young minds and prepare them for future leadership in a global society.",
    backgroundImage = "https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=80",
    breadcrumb = "",
    buttonText = "Apply Now",
    buttonLink = "#",
}) => {
    const heroRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
        setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <section
            ref={heroRef}
            aria-label="Hero Section"
            className="relative w-full overflow-hidden"
            style={{ height: "clamp(320px, 60vh, 640px)" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* ── Background Image with Parallax Zoom ── */}
            <div
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: isHovered
                        ? `scale(1.06) translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
                        : "scale(1.03)",
                    transition: isHovered
                        ? "transform 0.1s ease-out"
                        : "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "transform",
                }}
            />

            {/* ── Multi-layer Overlay System ── */}
            {/* Base deep gradient — bottom-heavy for text readability */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(10,18,45,0.88) 0%, rgba(10,18,45,0.72) 50%, rgba(10,18,45,0.35) 100%)",
                }}
            />
            {/* Blue/Indigo tonal overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(17,34,85,0.55) 0%, rgba(30,58,138,0.30) 50%, transparent 100%)",
                }}
            />
            {/* Side vignette */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,10,30,0.65) 100%)",
                }}
            />
            {/* Bottom fade for clean content exit */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                    background:
                        "linear-gradient(to top, rgba(5,10,30,0.60) 0%, transparent 100%)",
                }}
            />

            {/* ── Blurred Decorative Orb — Subtle Depth ── */}
            <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                    top: "10%",
                    right: "8%",
                    width: "clamp(180px, 22vw, 340px)",
                    height: "clamp(180px, 22vw, 340px)",
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.10) 50%, transparent 75%)",
                    filter: "blur(48px)",
                    borderRadius: "50%",
                    transform: isHovered
                        ? `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`
                        : "translate(0,0)",
                    transition: "transform 0.3s ease-out",
                }}
            />
            {/* Secondary smaller orb */}
            <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                    bottom: "15%",
                    left: "30%",
                    width: "clamp(80px, 10vw, 160px)",
                    height: "clamp(80px, 10vw, 160px)",
                    background:
                        "radial-gradient(circle, rgba(165,180,252,0.14) 0%, transparent 70%)",
                    filter: "blur(32px)",
                    borderRadius: "50%",
                }}
            />

            {/* ── Main Content ── */}
            <div className="relative h-full flex items-center">
                {/* Responsive container */}
                <div
                    className="w-full px-6 sm:px-10 md:px-16 lg:px-24"
                    style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}
                >
                    {/* Glassmorphism Content Card */}
                    <div
                        className="relative"
                        style={{
                            maxWidth: "clamp(300px, 62%, 660px)",
                        }}
                    >
                        {/* Glass background */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                                backdropFilter: "blur(2px)",
                                WebkitBackdropFilter: "blur(2px)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                boxShadow:
                                    "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                            }}
                        />

                        <div className="relative p-7 sm:p-9 md:p-10">
                            {/* ── Breadcrumb ── */}
                            <nav aria-label="Breadcrumb" className="mb-4">
                                <p
                                    className="text-xs sm:text-sm font-medium tracking-widest uppercase"
                                    style={{
                                        color: "rgba(165, 185, 255, 0.85)",
                                        letterSpacing: "0.12em",
                                        textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                                    }}
                                >
                                    {/* Decorative line accent */}
                                    <span
                                        aria-hidden="true"
                                        className="inline-block mr-3 align-middle"
                                        style={{
                                            width: "28px",
                                            height: "1.5px",
                                            background:
                                                "linear-gradient(to right, rgba(147,197,253,0.9), rgba(165,180,252,0.5))",
                                            verticalAlign: "middle",
                                            display: "inline-block",
                                        }}
                                    />
                                    {breadcrumb}
                                </p>
                            </nav>

                            {/* ── Main Heading ── */}
                            <h1
                                className="font-bold leading-tight mb-4 sm:mb-5"
                                style={{
                                    fontFamily: "'Playfair Display', 'Georgia', serif",
                                    fontSize: "clamp(1.75rem, 3vw + 1rem, 3.5rem)",
                                    color: "#ffffff",
                                    lineHeight: "1.12",
                                    textShadow:
                                        "0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.6)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {title}
                            </h1>

                            {/* ── Subtitle ── */}
                            <p
                                className="mb-7 sm:mb-8"
                                style={{
                                    fontFamily: "'Inter', 'DM Sans', sans-serif",
                                    fontSize: "clamp(0.875rem, 0.8rem + 0.5vw, 1.0625rem)",
                                    color: "rgba(210, 220, 255, 0.88)",
                                    lineHeight: "1.65",
                                    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                                    maxWidth: "52ch",
                                }}
                            >
                                {subtitle}
                            </p>

                            {/* ── CTA Button ── */}
                            <a
                                href={buttonLink}
                                className="group inline-flex items-center gap-2.5 font-semibold rounded-xs transition-all duration-300 focus-visible:outline-none"
                                style={{
                                    fontFamily: "'Inter', 'DM Sans', sans-serif",
                                    fontSize: "clamp(0.8125rem, 0.75rem + 0.3vw, 0.9375rem)",
                                    letterSpacing: "0.03em",
                                    padding: "clamp(10px, 1.2vw, 14px) clamp(22px, 2.4vw, 32px)",
                                    background:
                                        "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                                    color: "#1a0a00",
                                    boxShadow:
                                        "0 4px 20px rgba(245,158,11,0.35), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                                    border: "none",
                                    textDecoration: "none",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
                                    e.currentTarget.style.boxShadow =
                                        "0 6px 28px rgba(245,158,11,0.5), 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)";
                                    e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 20px rgba(245,158,11,0.35), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)";
                                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.outline =
                                        "2px solid rgba(251,191,36,0.9)";
                                    e.currentTarget.style.outlineOffset = "3px";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.outline = "none";
                                }}
                                aria-label={`${buttonText} — ${title}`}
                            >
                                {buttonText}
                                {/* Arrow Icon */}
                                <svg
                                    aria-hidden="true"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path
                                        d="M3 8H13M9 4L13 8L9 12"
                                        stroke="currentColor"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;