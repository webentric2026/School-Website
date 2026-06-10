import { useState, useEffect, useRef } from "react";
import { ArrowRight, Trophy, Medal, BookOpen, Music, Star, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CAT_ICONS = {
    "Academic Toppers": BookOpen,
    "Sports Achievements": Trophy,
    "Olympiads": Star,
    "Cultural Activities": Music,
    "Competitions": Medal,
    "Board Results": Award,
};

const CATEGORIES = Object.keys(CAT_ICONS);

const ALL_ACHIEVEMENTS = [
    {
        id: 1, category: "Academic Toppers", year: "2023 – 2024", name: "Aarav Sharma",
        achievement: "National Science Olympiad Gold", color: "#5C78C9",
        description: "Secured top position nationally in the NSO, demonstrating exceptional analytical and scientific reasoning capabilities among peers.",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop&crop=top",
    },
    {
        id: 2, category: "Academic Toppers", year: "2023 – 2024", name: "Priya Patel",
        achievement: "CBSE State Topper", color: "#5C78C9",
        description: "Achieved an outstanding 99.4% in the Class 12 Board Examinations, setting a new benchmark for academic excellence in the state.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop&crop=top",
    },
    {
        id: 3, category: "Academic Toppers", year: "2023 – 2024", name: "Rohan Desai",
        achievement: "International Math Challenge", color: "#5C78C9",
        description: "Represented India at the International Mathematics Competition, securing a silver medal against participants from over 40 countries.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&fit=crop&crop=top",
    },
    {
        id: 4, category: "Sports Achievements", year: "2023 – 2024", name: "Kavya Menon",
        achievement: "State Athletics Champion", color: "#F2AB58",
        description: "Won gold in the 400m sprint at the State School Games, clocking a new personal best and school record of 56.2 seconds.",
        image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&q=80&fit=crop&crop=top",
    },
    {
        id: 5, category: "Sports Achievements", year: "2023 – 2024", name: "Arjun Nair",
        achievement: "National Cricket U-17 Selection", color: "#F2AB58",
        description: "Selected for the National Under-17 Cricket squad after outstanding performances across state-level tournaments.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80&fit=crop",
    },
    {
        id: 6, category: "Sports Achievements", year: "2023 – 2024", name: "Sneha Iyer",
        achievement: "Chess National Finalist", color: "#F2AB58",
        description: "Reached the national finals of the CBSE Chess Championship, defeating top-ranked players across 14 states.",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80&fit=crop",
    },
    {
        id: 7, category: "Olympiads", year: "2023 – 2024", name: "Vivaan Mehta",
        achievement: "International Physics Olympiad", color: "#5C78C9",
        description: "Qualified for the International Physics Olympiad team, representing India with a bronze medal at the global stage.",
        image: "https://images.unsplash.com/photo-1532094349884-543559138e5a?w=600&q=80&fit=crop",
    },
    {
        id: 8, category: "Olympiads", year: "2023 – 2024", name: "Ananya Krishnan",
        achievement: "Biology Olympiad Silver", color: "#5C78C9",
        description: "Achieved silver at the National Biology Olympiad, showcasing deep understanding of genetics and molecular biology.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80&fit=crop",
    },
    {
        id: 9, category: "Olympiads", year: "2023 – 2024", name: "Dev Sharma",
        achievement: "Junior Math Olympiad Gold", color: "#5C78C9",
        description: "Top scorer in the Junior Mathematics Olympiad across the entire western region, earning a full scholarship placement.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&fit=crop",
    },
    {
        id: 10, category: "Cultural Activities", year: "2023 – 2024", name: "Ishaan Kapoor",
        achievement: "National Debate Champion", color: "#F2AB58",
        description: "Won the All India Inter-School Debate Championship, representing school with distinction on national television.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80&fit=crop",
    },
    {
        id: 11, category: "Cultural Activities", year: "2023 – 2024", name: "Riya Verma",
        achievement: "Classical Dance Gold", color: "#F2AB58",
        description: "Awarded gold at the National School Cultural Festival for Bharatanatyam, receiving a standing ovation from judges.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop",
    },
    {
        id: 12, category: "Cultural Activities", year: "2023 – 2024", name: "Mihir Joshi",
        achievement: "Young Authors Award", color: "#F2AB58",
        description: "Published debut short story collection recognized by the National Book Trust and awarded the Young Authors Prize.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&fit=crop",
    },
    {
        id: 13, category: "Competitions", year: "2023 – 2024", name: "Tanvi Singh",
        achievement: "Robotics National Winner", color: "#5C78C9",
        description: "Led team to first place at the National Robotics Championship, designing an award-winning autonomous navigation bot.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop",
    },
    {
        id: 14, category: "Competitions", year: "2023 – 2024", name: "Karan Bose",
        achievement: "Model UN Best Delegate", color: "#5C78C9",
        description: "Awarded Best Delegate at Harvard Model United Nations India, recognized for diplomacy and policy expertise.",
        image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=600&q=80&fit=crop",
    },
    {
        id: 15, category: "Competitions", year: "2023 – 2024", name: "Pooja Nair",
        achievement: "STEM Innovation Prize", color: "#5C78C9",
        description: "Received the STEM Innovation Award for developing a low-cost water purification prototype for rural deployment.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop",
    },
    {
        id: 16, category: "Board Results", year: "2023 – 2024", name: "Neha Gupta",
        achievement: "100% in Mathematics", color: "#5C78C9",
        description: "Scored a perfect 100/100 in Class 12 CBSE Mathematics, one of only 38 students in India to achieve this feat.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80&fit=crop",
    },
    {
        id: 17, category: "Board Results", year: "2023 – 2024", name: "Raj Malhotra",
        achievement: "Commerce Stream Topper", color: "#5C78C9",
        description: "Achieved 98.6% in Commerce stream, highest in the district, earning recognition from the state education board.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&fit=crop",
    },
    {
        id: 18, category: "Board Results", year: "2023 – 2024", name: "Diya Pillai",
        achievement: "Humanities District Rank 1", color: "#5C78C9",
        description: "Topped the Humanities stream district-wide with 97.8%, excelling across History, Political Science, and English.",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80&fit=crop",
    },
];

const CARD_IMG_H = 260;

/* ── AOS delay per card index ── */
const CARD_DELAYS = [0, 120, 240];

/* ── Desktop Achievement Card ── */
function AchievementCard({ item, aosDelay }) {
    const [hovered, setHovered] = useState(false);
    const Icon = CAT_ICONS[item.category] || Trophy;

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={aosDelay}
            style={{
                backgroundColor: "#fff",
                borderRadius: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: hovered
                    ? "0 8px 28px rgba(44,42,42,0.13)"
                    : "0 2px 8px rgba(44,42,42,0.07)",
                transition: "box-shadow 0.3s ease",
                cursor: "pointer",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div style={{ height: `${CARD_IMG_H}px`, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <img
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={CARD_IMG_H}
                    loading="lazy"
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        objectPosition: "top center", display: "block",
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                />
                {/* Category badge */}
                <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    backgroundColor: item.color, padding: "5px 7px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <Icon size={13} color="#fff" strokeWidth={2} />
                </div>
                {/* Hover overlay */}
                <div
                    style={{
                        position: "absolute", inset: 0,
                        backgroundColor: "rgba(20,18,18,0.22)",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Text content */}
            <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: "#8a8785", letterSpacing: "0.04em", marginBottom: "6px", display: "block" }}>
                    {item.year}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#2C2A2A", lineHeight: 1.25, marginBottom: "4px" }}>
                    {item.name}
                </h3>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: item.color, marginBottom: "10px", display: "block" }}>
                    {item.achievement}
                </span>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", color: "#5a5856", lineHeight: 1.7, flex: 1 }}>
                    {item.description}
                </p>
                {/* Arrow reveal on hover */}
                <div style={{
                    display: "flex", alignItems: "center", gap: "5px", marginTop: "12px",
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 0.28s ease, transform 0.28s ease",
                }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#F2AB58", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.04em" }}>
                        Read more
                    </span>
                    <ArrowRight size={11} strokeWidth={2.5} style={{ color: "#F2AB58" }} />
                </div>
            </div>
        </div>
    );
}

/* ── Mobile Card ── */
function MobileCard({ item }) {
    const Icon = CAT_ICONS[item.category] || Trophy;
    return (
        <div style={{ width: "100%", flexShrink: 0, backgroundColor: "#fff", borderRadius: 0 }}>
            <div style={{ height: `${CARD_IMG_H}px`, position: "relative", overflow: "hidden" }}>
                <img
                    src={item.image} alt={item.name} width={600} height={CARD_IMG_H} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div style={{ position: "absolute", top: "12px", right: "12px", backgroundColor: item.color, padding: "5px 7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={13} color="#fff" strokeWidth={2} />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,18,18,0.45) 0%, transparent 55%)" }} aria-hidden="true" />
            </div>
            <div style={{ padding: "16px 18px 20px", borderTop: `3px solid ${item.color}` }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.68rem", fontWeight: 500, color: "#8a8785", letterSpacing: "0.04em", display: "block", marginBottom: "5px" }}>
                    {item.year}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#2C2A2A", lineHeight: 1.25, marginBottom: "4px" }}>
                    {item.name}
                </h3>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: item.color, marginBottom: "9px", display: "block" }}>
                    {item.achievement}
                </span>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", color: "#5a5856", lineHeight: 1.7 }}>
                    {item.description}
                </p>
            </div>
        </div>
    );
}

/* ════ MAIN SECTION ════ */
export default function Achievements() {
    const [activeCategory, setActiveCategory] = useState("Academic Toppers");
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cardKey, setCardKey] = useState(0); // forces AOS re-trigger on tab switch
    const touchStartX = useRef(null);
    const autoTimer = useRef(null);

    const filtered = ALL_ACHIEVEMENTS.filter((a) => a.category === activeCategory);
    const preview = filtered.slice(0, 3);

    /* Init AOS */
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: false,   // false so cards re-animate on category switch
            offset: 60,
        });
    }, []);

    /* Re-trigger AOS when category changes */
    useEffect(() => {
        setMobileIndex(0);
        setCardKey((k) => k + 1);
        setTimeout(() => AOS.refresh(), 50);
    }, [activeCategory]);

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
            setMobileIndex((prev) => (prev + 1) % preview.length);
        }, 4500);
        return () => clearInterval(autoTimer.current);
    }, [isMobile, isPaused, activeCategory, preview.length]);

    const goTo = (i) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setMobileIndex(i);
        setTimeout(() => setIsAnimating(false), 430);
    };

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            delta > 0
                ? goTo((mobileIndex + 1) % preview.length)
                : goTo((mobileIndex - 1 + preview.length) % preview.length);
        }
        touchStartX.current = null;
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
            `}</style>

            <section style={{ backgroundColor: "#E7E5E5", padding: "clamp(3rem, 6vw, 5.5rem) 0", fontFamily: "'Poppins', sans-serif" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>

                    {/* ── Section Header ── */}
                    <div className="text-center" style={{ marginBottom: "2.4rem" }}>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="600"
                            data-aos-delay="0"
                            className="flex items-center justify-center gap-2"
                            style={{ marginBottom: "12px" }}
                        >
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                            <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C78C9" }}>
                                Academic Excellence
                            </span>
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-duration="750"
                            data-aos-delay="80"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.65rem, 3vw, 2.4rem)", fontWeight: 700, color: "#2C2A2A", lineHeight: 1.2, marginBottom: "1rem" }}
                        >
                            Celebrating Excellence Across<br className="hidden md:block" /> Academics, Sports & Innovation
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="160"
                            style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", color: "#6b6967", maxWidth: "55ch", margin: "0 auto", lineHeight: 1.75 }}
                        >
                            At St. Andrews Academy, we nurture holistic growth, empowering our students to excel at
                            regional, national, and international levels. Our commitment to excellence shapes the
                            leaders of tomorrow.
                        </p>
                    </div>

                    {/* ── Category Filter Tabs ── */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="220"
                        className="flex flex-wrap justify-center"
                        style={{ gap: "8px", marginBottom: "2.6rem" }}
                    >
                        {CATEGORIES.map((cat) => {
                            const Icon = CAT_ICONS[cat];
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.78rem",
                                        fontWeight: isActive ? 600 : 500,
                                        padding: "7px 15px",
                                        borderRadius: 0,
                                        border: isActive ? "1.5px solid #5C78C9" : "1.5px solid #c8c6c3",
                                        backgroundColor: isActive ? "#5C78C9" : "#fff",
                                        color: isActive ? "#fff" : "#2C2A2A",
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = "#f0eeec";
                                            e.currentTarget.style.borderColor = "#5C78C9";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = "#fff";
                                            e.currentTarget.style.borderColor = "#c8c6c3";
                                        }
                                    }}
                                >
                                    <Icon size={13} strokeWidth={2} />
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    {/* ════ DESKTOP CARDS (md+) ════ */}
                    <div
                        key={`desktop-${cardKey}`}
                        className="hidden md:grid"
                        style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}
                    >
                        {preview.map((item, i) => (
                            <AchievementCard
                                key={item.id}
                                item={item}
                                aosDelay={CARD_DELAYS[i]}
                            />
                        ))}
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
                        <div style={{ overflow: "hidden", width: "100%" }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <div
                                style={{
                                    display: "flex",
                                    width: `${preview.length * 100}%`,
                                    transform: `translateX(-${(mobileIndex * 100) / preview.length}%)`,
                                    transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                {preview.map((item) => (
                                    <div key={item.id} style={{ width: `${100 / preview.length}%`, flexShrink: 0 }}>
                                        <MobileCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex items-center justify-center gap-2" style={{ marginTop: "16px" }}>
                            {preview.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    style={{
                                        width: i === mobileIndex ? "24px" : "7px",
                                        height: "3px",
                                        borderRadius: 0,
                                        backgroundColor: i === mobileIndex ? "#F2AB58" : "rgba(44,42,42,0.25)",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0,
                                        transition: "width 0.3s ease, background-color 0.3s ease",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── CTA Button ── */}
                    <div
                        className="flex justify-center"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                        style={{ marginTop: "2.8rem" }}
                    >
                        <a
                            href="/achievements"
                            className="inline-flex items-center gap-2"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                backgroundColor: "#F2AB58",
                                color: "#2C2A2A",
                                padding: "12px 28px",
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
                            View Full Achievements
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}