import { useState, useEffect, useRef } from "react";
import { ArrowRight, Star, FlaskConical, Trophy, Mic2, Heart, Palette, Shield } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ACTIVITIES = [
    {
        id: 1,
        icon: Star,
        label: "Featured",
        title: "Annual Function – Tarang",
        description:
            "A grand celebration of talent, culture, and unity showcasing our students' dedication to the performing arts.",
        image:
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=900&q=80&fit=crop",
    },
    {
        id: 2,
        icon: FlaskConical,
        label: "STEM",
        title: "Science Exhibition",
        description:
            "Fostering scientific inquiry and innovative thinking through student-led experiments and model showcases.",
        image:
            "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=900&q=80&fit=crop",
    },
    {
        id: 3,
        icon: Trophy,
        label: "Athletics",
        title: "Sports Day",
        description:
            "Building physical fitness, teamwork, and resilience through competitive track, field, and team events.",
        image:
            "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=900&q=80&fit=crop",
    },
    {
        id: 4,
        icon: Heart,
        label: "Wellness",
        title: "Yoga Sessions",
        description:
            "Nurturing mental clarity and holistic well-being through structured daily mindfulness and yoga practice.",
        image:
            "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=80&fit=crop",
    },
    {
        id: 5,
        icon: Mic2,
        label: "Leadership",
        title: "Debate Competition",
        description:
            "Developing critical thinking and articulate leadership through structured inter-house debate tournaments.",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80&fit=crop",
    },
    {
        id: 6,
        icon: Palette,
        label: "Creative Arts",
        title: "Art & Craft Fest",
        description:
            "Unleashing creative potential through painting, sculpture, and mixed-media workshops led by expert mentors.",
        image:
            "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=900&q=80&fit=crop",
    },
];

const DESKTOP_FEATURED_H = 506;
const DESKTOP_CARD_H = 250;
const MOBILE_IMG_H = 220;

const CARD_AOS = [
    { animation: "fade-right", delay: 0 },
    { animation: "fade-down", delay: 80 },
    { animation: "fade-down", delay: 160 },
    { animation: "fade-up", delay: 80 },
    { animation: "fade-up", delay: 160 },
    { animation: "fade-up", delay: 240 },
];

/* ── Desktop Card ── */
function DesktopCard({ activity, featured, aosAnimation, aosDelay }) {
    const [hovered, setHovered] = useState(false);
    const Icon = activity.icon;

    return (
        <div
            className="relative overflow-hidden cursor-pointer w-full"
            data-aos={aosAnimation}
            data-aos-duration="700"
            data-aos-delay={aosDelay}
            style={{
                height: featured ? `${DESKTOP_FEATURED_H}px` : `${DESKTOP_CARD_H}px`,
                borderRadius: 0,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(${activity.image})`,
                    transform: hovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                aria-hidden="true"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: hovered
                        ? "linear-gradient(to top, rgba(20,18,18,0.88) 0%, rgba(20,18,18,0.50) 55%, rgba(20,18,18,0.18) 100%)"
                        : "linear-gradient(to top, rgba(20,18,18,0.72) 0%, rgba(20,18,18,0.20) 55%, rgba(20,18,18,0.05) 100%)",
                    transition: "background 0.4s ease",
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ padding: "16px 18px" }}
            >

                {/* Icon + Title — always visible */}
                <div className="flex items-center gap-2">
                    <Icon
                        size={14}
                        strokeWidth={2}
                        style={{ color: "#F2AB58", flexShrink: 0 }}
                    />
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: featured ? "1.05rem" : "0.9rem",
                            color: "#fff",
                            lineHeight: 1.3,
                        }}
                    >
                        {activity.title}
                    </span>
                </div>

                {/* Description — hover reveal only */}
                <div
                    style={{
                        overflow: "hidden",
                        maxHeight: hovered ? "100px" : "0px",
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? "translateY(0)" : "translateY(8px)",
                        transition:
                            "max-height 0.4s ease, opacity 0.35s ease, transform 0.35s ease",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.76rem",
                            color: "rgba(220,218,215,0.9)",
                            lineHeight: 1.65,
                            marginTop: "6px",
                        }}
                    >
                        {activity.description}
                    </p>
                    <div
                        className="flex items-center gap-1"
                        style={{ marginTop: "6px" }}
                    >
                        <span
                            style={{
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: "#F2AB58",
                                fontFamily: "'Poppins', sans-serif",
                                letterSpacing: "0.04em",
                            }}
                        >
                            Learn more
                        </span>
                        <ArrowRight
                            size={10}
                            strokeWidth={2.5}
                            style={{ color: "#F2AB58" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Mobile Slider Card ── */
function MobileCard({ activity }) {
    const Icon = activity.icon;
    return (
        <div style={{ width: "100%", flexShrink: 0, borderRadius: 0 }}>
            {/* Fixed height image */}
            <div
                style={{
                    height: `${MOBILE_IMG_H}px`,
                    backgroundImage: `url(${activity.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(20,18,18,0.55) 0%, transparent 60%)",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Text — always visible on mobile */}
            <div
                style={{
                    backgroundColor: "#ffffff",
                    padding: "14px 16px 18px",
                    borderTop: "3px solid #5C78C9",
                }}
            >
                <div
                    className="flex items-center gap-2"
                    style={{ marginBottom: "6px" }}
                >
                    <Icon
                        size={14}
                        strokeWidth={2}
                        style={{ color: "#F2AB58", flexShrink: 0 }}
                    />
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#2C2A2A",
                        }}
                    >
                        {activity.title}
                    </span>
                </div>
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.8rem",
                        color: "#555250",
                        lineHeight: 1.7,
                    }}
                >
                    {activity.description}
                </p>
            </div>
        </div>
    );
}

/* ════ MAIN SECTION ════ */
export default function Activities() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(null);
    const autoTimer = useRef(null);

    /* Init AOS */
    useEffect(() => {
        AOS.init({
            duration: 700,
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
        autoTimer.current = setInterval(() => {
            goTo((prev) => (prev + 1) % ACTIVITIES.length);
        }, 4500);
        return () => clearInterval(autoTimer.current);
    }, [isMobile, isPaused]);

    const goTo = (indexOrUpdater) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setMobileIndex(indexOrUpdater);
        setTimeout(() => setIsAnimating(false), 420);
    };

    const goNext = () => goTo((prev) => (prev + 1) % ACTIVITIES.length);
    const goPrev = () => goTo((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) delta > 0 ? goNext() : goPrev();
        touchStartX.current = null;
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
            `}</style>

            <section
                style={{
                    backgroundColor: "#E7E5E5",
                    padding: "clamp(3rem, 6vw, 5rem) 0",
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
                            data-aos-delay="0"
                            className="flex items-center justify-center gap-2"
                            style={{ marginBottom: "12px" }}
                        >
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                            <span
                                style={{
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "#5C78C9",
                                }}
                            >
                                Beyond Academics
                            </span>
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-duration="750"
                            data-aos-delay="80"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                                fontWeight: 700,
                                color: "#2C2A2A",
                                lineHeight: 1.22,
                                marginBottom: "0.9rem",
                            }}
                        >
                            Encouraging Creativity,<br className="hidden md:block" /> Leadership & Holistic Growth
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="160"
                            style={{
                                fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                                color: "#6b6967",
                                maxWidth: "56ch",
                                margin: "0 auto",
                                lineHeight: 1.75,
                            }}
                        >
                            Our students actively participate in cultural, academic, athletic, and
                            leadership activities that nurture confidence, teamwork, discipline,
                            and innovation.
                        </p>
                    </div>

                    {/* ════ DESKTOP GRID (md+) ════ */}
                    <div
                        className="hidden md:grid"
                        style={{
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "6px",
                        }}
                    >
                        {/* Featured card — spans 2 rows */}
                        <div style={{ gridRow: "1 / 3" }}>
                            <DesktopCard
                                activity={ACTIVITIES[0]}
                                featured={true}
                                aosAnimation={CARD_AOS[0].animation}
                                aosDelay={CARD_AOS[0].delay}
                            />
                        </div>
                        {/* Cards 2–5 */}
                        {ACTIVITIES.slice(1, 5).map((a, i) => (
                            <DesktopCard
                                key={a.id}
                                activity={a}
                                featured={false}
                                aosAnimation={CARD_AOS[i + 1].animation}
                                aosDelay={CARD_AOS[i + 1].delay}
                            />
                        ))}
                        {/* Card 6 */}
                        <DesktopCard
                            activity={ACTIVITIES[5]}
                            featured={false}
                            aosAnimation={CARD_AOS[5].animation}
                            aosDelay={CARD_AOS[5].delay}
                        />
                    </div>

                    {/* ════ MOBILE SLIDER (< md) ════ */}
                    <div
                        className="md:hidden"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
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
                                    width: `${ACTIVITIES.length * 100}%`,
                                    transform: `translateX(-${(mobileIndex * 100) / ACTIVITIES.length}%)`,
                                    transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                {ACTIVITIES.map((a) => (
                                    <div
                                        key={a.id}
                                        style={{
                                            width: `${100 / ACTIVITIES.length}%`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <MobileCard activity={a} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div
                            className="flex items-center justify-center gap-2"
                            style={{ marginTop: "16px" }}
                        >
                            {ACTIVITIES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
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
                        style={{ marginTop: "2.6rem" }}
                    >
                        <a
                            href="/activities"
                            className="inline-flex items-center gap-2 transition-colors duration-200"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                border: "2px solid #F2AB58",
                                backgroundColor: "#F2AB58",
                                color: "#2C2A2A",
                                padding: "10px 24px",
                                borderRadius: 0,
                                textDecoration: "none",
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
                            Explore All Activities
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}