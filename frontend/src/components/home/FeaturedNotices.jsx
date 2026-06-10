import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Data ── */
const NOTICES = [
    {
        id: 1,
        category: "Urgent",
        categoryColor: "#F2AB58",
        categoryBg: "rgba(242,171,88,0.12)",
        day: "15",
        month: "OCT 24",
        title: "Admissions Open 2026",
        description:
            "The application portal for the 2026 academic year is now officially open. Parents are advised to submit applications before the early deadline.",
        featured: true,
    },
    {
        id: 2,
        category: "Academic",
        categoryColor: "#5C78C9",
        categoryBg: "rgba(92,120,201,0.10)",
        day: "12",
        month: "OCT 24",
        title: "Mid-Term Examination Schedule",
        description:
            "Detailed timetable for the upcoming mid-term examinations for classes VI through XII has been released.",
        featured: false,
    },
    {
        id: 3,
        category: "General",
        categoryColor: "#6b6967",
        categoryBg: "rgba(107,105,103,0.10)",
        day: "08",
        month: "OCT 24",
        title: "Winter Uniform Guidelines",
        description:
            "Updated guidelines for the mandatory winter uniform change effective from November 1st.",
        featured: false,
    },
    {
        id: 4,
        category: "Academic",
        categoryColor: "#5C78C9",
        categoryBg: "rgba(92,120,201,0.10)",
        day: "05",
        month: "OCT 24",
        title: "Parent–Teacher Meeting",
        description:
            "The bi-annual PTM is scheduled for next Saturday. Parents are requested to book their slots via the school portal.",
        featured: false,
    },
    {
        id: 5,
        category: "Urgent",
        categoryColor: "#F2AB58",
        categoryBg: "rgba(242,171,88,0.12)",
        day: "02",
        month: "OCT 24",
        title: "Transport Route Disruption",
        description:
            "Important notice regarding temporary route changes for buses covering the Northern sectors.",
        featured: false,
    },
];

const UPDATES = [
    {
        id: 1,
        date: "20 Oct 2024",
        title: "Mid-Term Exams Begin",
        sub: "Classes VI–XII",
        color: "#F2AB58",
    },
    {
        id: 2,
        date: "31 Oct 2024",
        title: "Admission Deadline",
        sub: "Early application phase ends",
        color: "#5C78C9",
    },
    {
        id: 3,
        date: "04 Nov 2024",
        title: "Diwali Break Begins",
        sub: "School remains closed till 08 Nov",
        color: "#5C78C9",
    },
    {
        id: 4,
        date: "15 Nov 2024",
        title: "Annual Sports Meet",
        sub: "Main Stadium, 08:00 AM",
        color: "#5C78C9",
    },
];

/* ── Small category badge ── */
function CategoryBadge({ label, color, bg }) {
    return (
        <span
            style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color,
                backgroundColor: bg,
                padding: "3px 8px",
                borderRadius: 0,
                border: `1px solid ${color}33`,
                display: "inline-block",
                lineHeight: 1.6,
            }}
        >
            {label}
        </span>
    );
}

/* ── Featured notice card (top, full width) ── */
function FeaturedCard({ notice }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#fff",
                borderLeft: "4px solid #5C78C9",
                borderRadius: 0,
                padding: "20px 22px",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                boxShadow: hovered
                    ? "0 6px 24px rgba(44,42,42,0.11)"
                    : "0 2px 8px rgba(44,42,42,0.06)",
                transition: "box-shadow 0.28s ease, transform 0.25s ease",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
                cursor: "pointer",
            }}
        >
            {/* Date block */}
            <div
                style={{
                    flexShrink: 0,
                    width: "54px",
                    backgroundColor: "#5C78C9",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 6px",
                }}
            >
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1,
                    }}
                >
                    {notice.day}
                </span>
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.82)",
                        letterSpacing: "0.06em",
                        marginTop: "4px",
                        textTransform: "uppercase",
                    }}
                >
                    {notice.month}
                </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <div style={{ marginBottom: "8px" }}>
                    <CategoryBadge
                        label={notice.category}
                        color={notice.categoryColor}
                        bg={notice.categoryBg}
                    />
                </div>
                <h3
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#2C2A2A",
                        lineHeight: 1.3,
                        marginBottom: "8px",
                    }}
                >
                    {notice.title}
                </h3>
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.8rem",
                        color: "#5a5856",
                        lineHeight: 1.72,
                    }}
                >
                    {notice.description}
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        marginTop: "10px",
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? "translateX(0)" : "translateX(-5px)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "#F2AB58",
                            letterSpacing: "0.04em",
                        }}
                    >
                        Read notice
                    </span>
                    <ArrowRight size={11} strokeWidth={2.5} style={{ color: "#F2AB58" }} />
                </div>
            </div>
        </div>
    );
}

/* ── Small notice card ── */
function SmallCard({ notice }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#fff",
                borderRadius: 0,
                borderTop: `2px solid ${hovered ? notice.categoryColor : "transparent"}`,
                padding: "14px 16px 16px",
                boxShadow: hovered
                    ? "0 6px 20px rgba(44,42,42,0.10)"
                    : "0 1px 6px rgba(44,42,42,0.06)",
                transition: "box-shadow 0.28s ease, transform 0.25s ease, border-color 0.25s ease",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
            }}
        >
            {/* Top row: category + date */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                }}
            >
                <CategoryBadge
                    label={notice.category}
                    color={notice.categoryColor}
                    bg={notice.categoryBg}
                />
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        color: "#8a8785",
                        letterSpacing: "0.03em",
                        whiteSpace: "nowrap",
                    }}
                >
                    {notice.day} {notice.month}
                </span>
            </div>

            {/* Title */}
            <h4
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#2C2A2A",
                    lineHeight: 1.3,
                }}
            >
                {notice.title}
            </h4>

            {/* Description — clipped */}
            <p
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.76rem",
                    color: "#6b6967",
                    lineHeight: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {notice.description}
            </p>
        </div>
    );
}

/* ── Mobile slider card (always-visible text) ── */
function MobileNoticeCard({ notice }) {
    return (
        <div
            style={{
                width: "100%",
                flexShrink: 0,
                backgroundColor: "#fff",
                borderRadius: 0,
                borderLeft: `4px solid ${notice.categoryColor}`,
                padding: "18px 18px 20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                }}
            >
                <CategoryBadge
                    label={notice.category}
                    color={notice.categoryColor}
                    bg={notice.categoryBg}
                />
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        color: "#8a8785",
                    }}
                >
                    {notice.day} {notice.month}
                </span>
            </div>
            <h3
                style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#2C2A2A",
                    lineHeight: 1.3,
                    marginBottom: "8px",
                }}
            >
                {notice.title}
            </h3>
            <p
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.8rem",
                    color: "#5a5856",
                    lineHeight: 1.72,
                }}
            >
                {notice.description}
            </p>
        </div>
    );
}

/* ── Important Updates dark panel ── */
function UpdatesPanel() {
    return (
        <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            style={{
                backgroundColor: "#2C2A2A",
                borderRadius: 0,
                padding: "26px 24px 28px",
                height: "100%",
            }}
        >
            {/* Panel heading */}
            <div style={{ marginBottom: "22px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "3px",
                        backgroundColor: "#F2AB58",
                        marginBottom: "12px",
                    }}
                />
                <h3
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.25,
                    }}
                >
                    Important Updates
                </h3>
            </div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
                {/* Vertical line */}
                <div
                    style={{
                        position: "absolute",
                        left: "5px",
                        top: "6px",
                        bottom: "6px",
                        width: "1px",
                        backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {UPDATES.map((item, i) => (
                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                gap: "16px",
                                alignItems: "flex-start",
                                paddingBottom: i < UPDATES.length - 1 ? "20px" : "0",
                                position: "relative",
                            }}
                        >
                            {/* Square dot indicator */}
                            <div
                                style={{
                                    flexShrink: 0,
                                    width: "11px",
                                    height: "11px",
                                    backgroundColor: item.color,
                                    marginTop: "4px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />

                            {/* Item content */}
                            <div style={{ flex: 1 }}>
                                <span
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.62rem",
                                        fontWeight: 600,
                                        color: item.color,
                                        letterSpacing: "0.05em",
                                        display: "block",
                                        marginBottom: "3px",
                                    }}
                                >
                                    {item.date}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.87rem",
                                        fontWeight: 700,
                                        color: "#fff",
                                        lineHeight: 1.3,
                                        display: "block",
                                        marginBottom: "2px",
                                    }}
                                >
                                    {item.title}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.72rem",
                                        color: "rgba(200,198,195,0.78)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {item.sub}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Panel CTA */}
            <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <a
                    href="/notices"
                    className="inline-flex items-center gap-1"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#F2AB58",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                    }}
                >
                    View academic calendar
                    <ChevronRight size={13} strokeWidth={2.5} />
                </a>
            </div>
        </div>
    );
}

/* ════ MAIN SECTION ════ */
export default function FeaturedNotices() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(null);

    /* Init AOS */
    useEffect(() => {
        AOS.init({
            duration: 750,
            easing: "ease-out-cubic",
            once: true,
            offset: 60,
        });
    }, []);

    /* Detect mobile */
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    /* Auto-slide */
    useEffect(() => {
        if (!isMobile || isPaused) return;
        const t = setInterval(
            () => setMobileIndex((p) => (p + 1) % NOTICES.length),
            4500
        );
        return () => clearInterval(t);
    }, [isMobile, isPaused]);

    const goTo = (i) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setMobileIndex(i);
        setTimeout(() => setIsAnimating(false), 430);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            delta > 0
                ? goTo((mobileIndex + 1) % NOTICES.length)
                : goTo((mobileIndex - 1 + NOTICES.length) % NOTICES.length);
        }
        touchStartX.current = null;
    };

    const featured = NOTICES.find((n) => n.featured);
    const rest = NOTICES.filter((n) => !n.featured);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
            `}</style>

            <section
                style={{
                    backgroundColor: "#E7E5E5",
                    padding: "clamp(3rem, 6vw, 5.5rem) 0",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
                    }}
                >
                    {/* ── Section Header ── */}
                    <div className="text-center" style={{ marginBottom: "2.8rem" }}>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="600"
                            className="flex items-center justify-center gap-2"
                            style={{ marginBottom: "12px" }}
                        >
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                            <span
                                style={{
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "#5C78C9",
                                }}
                            >
                                Latest Updates
                            </span>
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-duration="750"
                            data-aos-delay="80"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.65rem, 3vw, 2.4rem)",
                                fontWeight: 700,
                                color: "#2C2A2A",
                                lineHeight: 1.2,
                                marginBottom: "0.9rem",
                            }}
                        >
                            Stay Updated with Important<br className="hidden md:block" /> School Announcements
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="160"
                            style={{
                                fontSize: "clamp(0.84rem, 1.1vw, 0.94rem)",
                                color: "#6b6967",
                                maxWidth: "58ch",
                                margin: "0 auto",
                                lineHeight: 1.78,
                            }}
                        >
                            Access the latest announcements, examination updates, event notifications,
                            holiday information, and important circulars from the school administration.
                        </p>
                    </div>

                    {/* ════ DESKTOP LAYOUT (md+) ════ */}
                    <div
                        className="hidden md:grid"
                        style={{
                            gridTemplateColumns: "1fr 260px",
                            gap: "20px",
                            alignItems: "start",
                        }}
                    >
                        {/* ── LEFT: Notices ── */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="0"
                            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                        >
                            {/* Featured card */}
                            {featured && <FeaturedCard notice={featured} />}

                            {/* 2×2 grid of smaller cards */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "12px",
                                }}
                            >
                                {rest.map((notice) => (
                                    <SmallCard key={notice.id} notice={notice} />
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: Updates panel ── */}
                        <UpdatesPanel />
                    </div>

                    {/* ════ MOBILE LAYOUT (< md) ════ */}
                    <div className="md:hidden">
                        {/* Slider */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            style={{ position: "relative", marginBottom: "20px" }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div
                                style={{ overflow: "hidden", width: "100%" }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: `${NOTICES.length * 100}%`,
                                        transform: `translateX(-${(mobileIndex * 100) / NOTICES.length}%)`,
                                        transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    }}
                                >
                                    {NOTICES.map((notice) => (
                                        <div
                                            key={notice.id}
                                            style={{
                                                width: `${100 / NOTICES.length}%`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <MobileNoticeCard notice={notice} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dots */}
                            <div
                                className="flex items-center justify-center gap-2"
                                style={{ marginTop: "14px" }}
                            >
                                {NOTICES.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        aria-label={`Go to notice ${i + 1}`}
                                        style={{
                                            width: i === mobileIndex ? "24px" : "7px",
                                            height: "3px",
                                            borderRadius: 0,
                                            backgroundColor:
                                                i === mobileIndex
                                                    ? "#F2AB58"
                                                    : "rgba(44,42,42,0.25)",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: 0,
                                            transition: "width 0.3s ease, background-color 0.3s ease",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Updates panel stacked below on mobile */}
                        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                            <UpdatesPanel />
                        </div>
                    </div>

                    {/* ── CTA ── */}
                    <div
                        className="flex justify-center"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                        style={{ marginTop: "2.8rem" }}
                    >
                        <a
                            href="/notices"
                            className="inline-flex items-center gap-2"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                backgroundColor: "#F2AB58",
                                color: "#2C2A2A",
                                padding: "11px 28px",
                                borderRadius: 0,
                                textDecoration: "none",
                                border: "2px solid #F2AB58",
                                transition: "background-color 0.2s ease, transform 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#d9934a";
                                e.currentTarget.style.borderColor = "#d9934a";
                                e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#F2AB58";
                                e.currentTarget.style.borderColor = "#F2AB58";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            View All Notices
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}