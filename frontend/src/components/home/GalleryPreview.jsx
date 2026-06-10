import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Gallery Data ── */
const GALLERY = [
    {
        id: 1,
        label: "Annual Day",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80&fit=crop",
        size: "featured",   // spans 2 rows, 1 col
    },
    {
        id: 2,
        label: "Science Fair",
        image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&q=80&fit=crop",
        size: "medium",
    },
    {
        id: 3,
        label: "Sports Meet",
        image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=800&q=80&fit=crop",
        size: "medium",
    },
    {
        id: 4,
        label: "Campus Life",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80&fit=crop",
        size: "small",
    },
    {
        id: 5,
        label: "Cultural Event",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80&fit=crop",
        size: "small",
    },
    {
        id: 6,
        label: "Art Exhibition",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80&fit=crop",
        size: "small",
    },
];

const MOBILE_IMG_H = 260;

/* ── AOS map per position ── */
const CARD_AOS = [
    { animation: "fade-right", delay: 0 },   // featured
    { animation: "fade-down", delay: 80 },   // medium 1
    { animation: "fade-down", delay: 160 },   // medium 2
    { animation: "fade-up", delay: 80 },   // small 1
    { animation: "fade-up", delay: 160 },   // small 2
    { animation: "fade-up", delay: 240 },   // small 3
];

/* ── Desktop gallery image tile ── */
function GalleryTile({ item, height, aosAnimation, aosDelay }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden cursor-pointer"
            data-aos={aosAnimation}
            data-aos-duration="700"
            data-aos-delay={aosDelay}
            style={{ height, borderRadius: 0 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transform: hovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
            />

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: hovered
                        ? "linear-gradient(to top, rgba(20,18,18,0.80) 0%, rgba(20,18,18,0.30) 60%, rgba(20,18,18,0.08) 100%)"
                        : "linear-gradient(to top, rgba(20,18,18,0.45) 0%, rgba(20,18,18,0.05) 60%, transparent 100%)",
                    transition: "background 0.4s ease",
                }}
                aria-hidden="true"
            />

            {/* Bottom label reveal */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ padding: "12px 14px" }}
            >
                {/* Label — always slightly visible, stronger on hover */}
                <div className="flex items-center justify-between">
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#fff",
                            opacity: hovered ? 1 : 0.75,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        {item.label}
                    </span>

                    {/* Arrow — hover only */}
                    <div
                        style={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: "#F2AB58",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: hovered ? 1 : 0,
                            transform: hovered ? "scale(1)" : "scale(0.7)",
                            transition: "opacity 0.28s ease, transform 0.28s ease",
                        }}
                    >
                        <ArrowRight size={12} strokeWidth={2.5} color="#1a1818" />
                    </div>
                </div>

                {/* Thin accent line — hover only */}
                <div
                    style={{
                        height: "2px",
                        backgroundColor: "#F2AB58",
                        marginTop: "6px",
                        transformOrigin: "left",
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                />
            </div>
        </div>
    );
}

/* ── Mobile slider card ── */
function MobileGalleryCard({ item }) {
    return (
        <div style={{ width: "100%", flexShrink: 0, borderRadius: 0 }}>
            {/* Image */}
            <div
                style={{
                    height: `${MOBILE_IMG_H}px`,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, rgba(20,18,18,0.60) 0%, transparent 55%)",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Label strip */}
            <div
                style={{
                    backgroundColor: "#2C2A2A",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "3px solid #F2AB58",
                }}
            >
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#fff",
                    }}
                >
                    {item.label}
                </span>
                <span
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.65rem",
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.04em",
                    }}
                >
                    St. Andrews Academy
                </span>
            </div>
        </div>
    );
}

/* ════ MAIN SECTION ════ */
export default function GalleryPreview() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(null);

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
        const t = setInterval(
            () => setMobileIndex((p) => (p + 1) % GALLERY.length),
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
                ? goTo((mobileIndex + 1) % GALLERY.length)
                : goTo((mobileIndex - 1 + GALLERY.length) % GALLERY.length);
        }
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
                    padding: "clamp(3rem, 6vw, 5.5rem) 0",
                    fontFamily: "'Poppins', sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* ── Subtle background shape ── */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        top: "-80px",
                        right: "-100px",
                        width: "380px",
                        height: "380px",
                        backgroundColor: "rgba(92,120,201,0.04)",
                        transform: "rotate(22deg)",
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
                                Campus Moments
                            </span>
                            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#5C78C9" }} />
                        </div>

                        <h2
                            data-aos="fade-up"
                            data-aos-duration="750"
                            data-aos-delay="80"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.6rem, 3vw, 2.35rem)",
                                fontWeight: 700,
                                color: "#2C2A2A",
                                lineHeight: 1.2,
                                marginBottom: "0.9rem",
                            }}
                        >
                            Capturing Moments of Learning,<br className="hidden md:block" /> Growth & Celebration
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="160"
                            style={{
                                fontSize: "clamp(0.84rem, 1.1vw, 0.94rem)",
                                color: "#6b6967",
                                maxWidth: "56ch",
                                margin: "0 auto",
                                lineHeight: 1.78,
                            }}
                        >
                            Explore glimpses of academic excellence, student activities, cultural
                            celebrations, sports events, and vibrant campus life.
                        </p>
                    </div>

                    {/* ════ DESKTOP GRID (md+) ════ */}
                    {/*
                        Grid layout:
                        Col 1 (wide): featured image spans rows 1+2
                        Col 2: medium top + small bottom-left + small bottom-right
                        Col 3: medium top + small bottom
                    */}
                    <div
                        className="hidden md:grid"
                        style={{
                            gridTemplateColumns: "1.6fr 1fr 1fr",
                            gridTemplateRows: "260px 260px",
                            gap: "6px",
                        }}
                    >
                        {/* Featured — row 1+2, col 1 */}
                        <div style={{ gridRow: "1 / 3", gridColumn: "1 / 2" }}>
                            <GalleryTile
                                item={GALLERY[0]}
                                height="100%"
                                aosAnimation={CARD_AOS[0].animation}
                                aosDelay={CARD_AOS[0].delay}
                            />
                        </div>

                        {/* Medium top-center — row 1, col 2 */}
                        <div style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}>
                            <GalleryTile
                                item={GALLERY[1]}
                                height="100%"
                                aosAnimation={CARD_AOS[1].animation}
                                aosDelay={CARD_AOS[1].delay}
                            />
                        </div>

                        {/* Medium top-right — row 1, col 3 */}
                        <div style={{ gridRow: "1 / 2", gridColumn: "3 / 4" }}>
                            <GalleryTile
                                item={GALLERY[2]}
                                height="100%"
                                aosAnimation={CARD_AOS[2].animation}
                                aosDelay={CARD_AOS[2].delay}
                            />
                        </div>

                        {/* Small bottom — row 2, col 2 */}
                        <div style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}>
                            <GalleryTile
                                item={GALLERY[3]}
                                height="100%"
                                aosAnimation={CARD_AOS[3].animation}
                                aosDelay={CARD_AOS[3].delay}
                            />
                        </div>

                        {/* Small bottom-right splits into 2: use nested grid */}
                        <div
                            style={{
                                gridRow: "2 / 3",
                                gridColumn: "3 / 4",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "6px",
                            }}
                        >
                            <GalleryTile
                                item={GALLERY[4]}
                                height="100%"
                                aosAnimation={CARD_AOS[4].animation}
                                aosDelay={CARD_AOS[4].delay}
                            />
                            <GalleryTile
                                item={GALLERY[5]}
                                height="100%"
                                aosAnimation={CARD_AOS[5].animation}
                                aosDelay={CARD_AOS[5].delay}
                            />
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
                                    width: `${GALLERY.length * 100}%`,
                                    transform: `translateX(-${(mobileIndex * 100) / GALLERY.length}%)`,
                                    transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                {GALLERY.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            width: `${100 / GALLERY.length}%`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <MobileGalleryCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div
                            className="flex items-center justify-center gap-2"
                            style={{ marginTop: "14px" }}
                        >
                            {GALLERY.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to image ${i + 1}`}
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
                            href="/gallery"
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
                            View Full Gallery
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}