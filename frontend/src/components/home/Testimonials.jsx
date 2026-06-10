import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { images } from "../../data/images";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Data ── */
const TESTIMONIALS = [
    {
        id: 1,
        image: images.pp_1,
        quote:
            "The transition to St. Andrews Academy has been the best decision for our daughter. The balance between academic rigor and personality development is truly unique.",
        name: "Mrs. Mukesh Sharma",
        role: "Parent of Grade 10 Student",
        roleColor: "#5C78C9",
        featured: true,
    },
    {
        id: 2,
        image: images.pp_2,
        quote:
            "The faculty doesn't just teach subjects; they mentor us. I've found my voice here through debate and leadership programs.",
        name: "Rahul Verma",
        role: "Senior Secondary Student",
        roleColor: "#5C78C9",
        featured: false,
    },
    {
        id: 3,
        image: images.pp_3,
        quote:
            "Transparency and administrative excellence define this school. We feel heard and involved in our child's growth every step of the way.",
        name: "Mr. Vikram Goel",
        role: "Parent Representative",
        roleColor: "#F2AB58",
        featured: false,
    },
    {
        id: 4,
        image: images.pp_4,
        quote:
            "St. Andrews shaped my character alongside my academics. The support I received here prepared me for college and life beyond.",
        name: "Priya Nair",
        role: "Alumni, Batch of 2023",
        roleColor: "#5C78C9",
        featured: false,
    },
];

const FEATURED = TESTIMONIALS.find((t) => t.featured);
const SIDE = TESTIMONIALS.filter((t) => !t.featured).slice(0, 2);
const MOBILE_IMG_H = 260;

/* ── Large quote mark SVG ── */
function QuoteMark({ size = 64, color = "rgba(92,120,201,0.10)" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            style={{ display: "block" }}
        >
            <text
                x="0"
                y="56"
                fontSize="80"
                fontFamily="Georgia, serif"
                fill={color}
                fontWeight="700"
            >
                "
            </text>
        </svg>
    );
}

/* ── Side small testimonial card ── */
function SideCard({ item }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#fff",
                borderRadius: 0,
                borderLeft: `3px solid ${hovered ? item.roleColor : "transparent"}`,
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "18px 18px 20px",
                boxShadow: hovered
                    ? "0 8px 24px rgba(44,42,42,0.11)"
                    : "0 2px 8px rgba(44,42,42,0.06)",
                transition: "box-shadow 0.3s ease, transform 0.25s ease, border-color 0.25s ease",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
                cursor: "pointer",
                flex: 1,
            }}
        >
            {/* Image */}
            <div
                style={{
                    flexShrink: 0,
                    width: "70px",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: 0,
                }}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={80}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                        transform: hovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                />
            </div>

            {/* Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                {/* Tiny quote mark */}
                <span
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.6rem",
                        color: item.roleColor,
                        lineHeight: 0.8,
                        display: "block",
                        marginBottom: "2px",
                    }}
                >
                    "
                </span>
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.8rem",
                        color: "#3e3c3a",
                        lineHeight: 1.72,
                        fontStyle: "normal",
                    }}
                >
                    {item.quote}
                </p>
                <div style={{ marginTop: "4px" }}>
                    <div
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: item.roleColor,
                        }}
                    >
                        {item.name}
                    </div>
                    <div
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.62rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#8a8785",
                            marginTop: "2px",
                        }}
                    >
                        {item.role}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Mobile slider card ── */
function MobileCard({ item }) {
    return (
        <div
            style={{
                width: "100%",
                flexShrink: 0,
                backgroundColor: "#fff",
                borderRadius: 0,
                borderTop: `3px solid ${item.roleColor}`,
            }}
        >
            {/* Image */}
            <div
                style={{
                    height: `${MOBILE_IMG_H}px`,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={MOBILE_IMG_H}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, rgba(20,18,18,0.38) 0%, transparent 55%)",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Text */}
            <div style={{ padding: "18px 18px 22px" }}>
                <span
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "2rem",
                        color: item.roleColor,
                        lineHeight: 0.8,
                        display: "block",
                        marginBottom: "8px",
                    }}
                >
                    "
                </span>
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.88rem",
                        color: "#3e3c3a",
                        lineHeight: 1.78,
                        fontStyle: "italic",
                        marginBottom: "14px",
                    }}
                >
                    {item.quote}
                </p>
                <div
                    style={{
                        width: "28px",
                        height: "2px",
                        backgroundColor: item.roleColor,
                        marginBottom: "10px",
                    }}
                />
                <div
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: item.roleColor,
                    }}
                >
                    {item.name}
                </div>
                <div
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#8a8785",
                        marginTop: "3px",
                    }}
                >
                    {item.role}
                </div>
            </div>
        </div>
    );
}

/* ════ MAIN SECTION ════ */
export default function Testimonials() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(null);

    /* Init AOS */
    useEffect(() => {
        AOS.init({
            duration: 800,
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
            () => setMobileIndex((p) => (p + 1) % TESTIMONIALS.length),
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
                ? goTo((mobileIndex + 1) % TESTIMONIALS.length)
                : goTo((mobileIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        }
        touchStartX.current = null;
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
            `}</style>

            <section
                style={{
                    backgroundColor: "#E7E5E5",
                    padding: "clamp(3rem, 6vw, 5.5rem) 0",
                    fontFamily: "'Poppins', sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* ── Subtle geometric background shapes ── */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-80px",
                        width: "420px",
                        height: "420px",
                        backgroundColor: "rgba(92,120,201,0.045)",
                        transform: "rotate(18deg)",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        bottom: "-40px",
                        left: "-60px",
                        width: "280px",
                        height: "280px",
                        backgroundColor: "rgba(242,171,88,0.05)",
                        transform: "rotate(-12deg)",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {/* ── Section Header (left-aligned on desktop) ── */}
                    <div style={{ marginBottom: "2.6rem" }}>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="flex items-center gap-2"
                            style={{ marginBottom: "12px" }}
                        >
                            <span
                                style={{
                                    display: "block",
                                    width: "24px",
                                    height: "2px",
                                    backgroundColor: "#5C78C9",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "#5C78C9",
                                }}
                            >
                                Parent Voices
                            </span>
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-duration="750"
                            data-aos-delay="80"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)",
                                fontWeight: 700,
                                color: "#2C2A2A",
                                lineHeight: 1.18,
                                marginBottom: "0.9rem",
                                maxWidth: "18ch",
                            }}
                        >
                            Trusted by Parents,<br /> Loved by Students
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="160"
                            style={{
                                fontSize: "clamp(0.84rem, 1.1vw, 0.94rem)",
                                color: "#6b6967",
                                maxWidth: "52ch",
                                lineHeight: 1.78,
                            }}
                        >
                            Hear from parents and students about their experiences, academic
                            journey, and personal growth within our learning environment.
                        </p>
                    </div>

                    {/* ════ DESKTOP LAYOUT (md+) ════ */}
                    <div
                        className="hidden md:grid"
                        style={{
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            alignItems: "stretch",
                        }}
                    >
                        {/* ── LEFT: Featured large card ── */}
                        {FEATURED && (
                            <div
                                data-aos="fade-right"
                                data-aos-duration="850"
                                data-aos-delay="0"
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 2px 12px rgba(44,42,42,0.07)",
                                }}
                            >
                                {/* Large image */}
                                <div
                                    style={{
                                        height: "clamp(240px, 30vw, 340px)",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src={FEATURED.image}
                                        alt={FEATURED.name}
                                        width={800}
                                        height={340}
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "top center",
                                            display: "block",
                                        }}
                                    />
                                </div>

                                {/* Quote content */}
                                <div
                                    style={{
                                        padding: "28px 28px 30px",
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        borderTop: "4px solid #F2AB58",
                                    }}
                                >
                                    {/* Large quote mark */}
                                    <div style={{ marginBottom: "4px", marginLeft: "-4px" }}>
                                        <QuoteMark size={56} color="rgba(92,120,201,0.10)" />
                                    </div>

                                    <blockquote
                                        style={{
                                            fontFamily: "'Playfair Display', Georgia, serif",
                                            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                                            fontStyle: "italic",
                                            fontWeight: 600,
                                            color: "#2C2A2A",
                                            lineHeight: 1.7,
                                            margin: 0,
                                            flex: 1,
                                        }}
                                    >
                                        "{FEATURED.quote}"
                                    </blockquote>

                                    <div style={{ marginTop: "20px" }}>
                                        <div
                                            style={{
                                                width: "32px",
                                                height: "2px",
                                                backgroundColor: "#F2AB58",
                                                marginBottom: "10px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: "0.95rem",
                                                fontWeight: 700,
                                                color: FEATURED.roleColor,
                                            }}
                                        >
                                            {FEATURED.name}
                                        </div>
                                        <div
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: "0.62rem",
                                                fontWeight: 600,
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                color: "#8a8785",
                                                marginTop: "3px",
                                            }}
                                        >
                                            {FEATURED.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── RIGHT: Two stacked side cards ── */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="850"
                            data-aos-delay="120"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                            }}
                        >
                            {SIDE.map((item) => (
                                <SideCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* ════ MOBILE SLIDER (< md) ════ */}
                    <div
                        className="md:hidden"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        style={{ position: "relative" }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Track */}
                        <div
                            style={{ overflow: "hidden", width: "100%" }}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: `${TESTIMONIALS.length * 100}%`,
                                    transform: `translateX(-${(mobileIndex * 100) / TESTIMONIALS.length}%)`,
                                    transition:
                                        "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                {TESTIMONIALS.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            width: `${100 / TESTIMONIALS.length}%`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <MobileCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div
                            className="flex items-center justify-center gap-2"
                            style={{ marginTop: "16px" }}
                        >
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
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
                                        transition:
                                            "width 0.3s ease, background-color 0.3s ease",
                                    }}
                                />
                            ))}
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
                            href="/testimonials"
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
                            Read More Testimonials
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}