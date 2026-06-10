import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES, STATS } from "../../data/data.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    /* Init AOS once */
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 0,
        });
    }, []);

    /* Refresh AOS on slide change so elements re-animate */
    useEffect(() => {
        AOS.refresh();
    }, [current]);

    const goTo = useCallback(
        (index) => {
            if (fading) return;
            setFading(true);
            setTimeout(() => {
                setCurrent(index);
                setFading(false);
            }, 400);
        },
        [fading]
    );

    const goNext = useCallback(() => {
        goTo((current + 1) % SLIDES.length);
    }, [current, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + SLIDES.length) % SLIDES.length);
    }, [current, goTo]);

    /* Auto-slide every 5.5 seconds */
    useEffect(() => {
        if (isPaused) return;
        const timer = setTimeout(goNext, 5500);
        return () => clearTimeout(timer);
    }, [current, isPaused, goNext]);

    const slide = SLIDES[current];

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ height: "90vh", minHeight: "560px" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* ── Background Images (cross-fade) ── */}
            {SLIDES.map((s, i) => (
                <div
                    key={s.id}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                    style={{
                        backgroundImage: `url(${s.image})`,
                        opacity: i === current ? 1 : 0,
                        zIndex: 0,
                    }}
                    aria-hidden="true"
                />
            ))}

            {/* ── Dark Overlay ── */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to right, rgba(20,18,18,0.82) 0%, rgba(20,18,18,0.55) 55%, rgba(20,18,18,0.25) 100%)",
                }}
                aria-hidden="true"
            />

            {/* ── Content Layer ── */}
            <div className="relative z-20 h-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center">
                <div className="w-full flex items-center justify-between gap-8">

                    {/* ── LEFT CONTENT ── */}
                    <div
                        className="w-full lg:w-[52%] xl:w-[48%] flex flex-col justify-center"
                        style={{
                            opacity: fading ? 0 : 1,
                            transform: fading ? "translateY(10px)" : "translateY(0)",
                            transition: "opacity 0.4s ease, transform 0.4s ease",
                        }}
                    >
                        {/* Slide Label */}
                        <div
                            className="flex items-center gap-2 mb-4"
                            data-aos="fade-right"
                            data-aos-delay="0"
                            data-aos-duration="600"
                        >
                            <span
                                className="block w-8 h-[2px]"
                                style={{ backgroundColor: "#F2AB58" }}
                            />
                            <span
                                className="text-xs font-semibold uppercase tracking-widest"
                                style={{ color: "#F2AB58" }}
                            >
                                {slide.label}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="font-extrabold text-white leading-[1.12] mb-5"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="750"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
                                maxWidth: "16ch",
                            }}
                        >
                            {slide.heading}
                        </h1>

                        {/* Description */}
                        <p
                            className="mb-8 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="750"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                                color: "rgba(220,220,220,0.88)",
                                maxWidth: "46ch",
                            }}
                        >
                            {slide.description}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-wrap gap-3"
                            data-aos="fade-up"
                            data-aos-delay="320"
                            data-aos-duration="700"
                        >
                            <a
                                href="/admissions"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-colors duration-200"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    backgroundColor: "#F2AB58",
                                    color: "#1a1818",
                                    borderRadius: 0,
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#d9934a")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#F2AB58")
                                }
                            >
                                Apply for Admission
                            </a>
                            <a
                                href="/campus"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-colors duration-200"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    border: "2px solid rgba(255,255,255,0.7)",
                                    borderRadius: 0,
                                    backgroundColor: "transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                                }}
                            >
                                Explore Campus
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT STAT CARDS (desktop only) ── */}
                    {/* <div
                        className="hidden lg:flex flex-col gap-3 items-end mr-4 xl:mr-8"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="800"
                    >
                        {STATS.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className="flex items-center gap-3 px-4 py-3"
                                data-aos="fade-left"
                                data-aos-delay={440 + idx * 100}
                                data-aos-duration="700"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.10)",
                                    border: "1px solid rgba(255,255,255,0.16)",
                                    backdropFilter: "blur(6px)",
                                    minWidth: "196px",
                                }}
                            >
                                <div
                                    className="flex items-center justify-center w-9 h-9 shrink-0"
                                    style={{ backgroundColor: stat.color }}
                                >
                                    <stat.icon size={18} color="#fff" strokeWidth={2} />
                                </div>
                                <div>
                                    <div
                                        className="font-extrabold text-white leading-none"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "1.25rem",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className="text-xs mt-0.5"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "rgba(210,210,210,0.85)",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* ── Bottom Controls Bar ── */}
            <div
                className="absolute bottom-0 left-0 right-0 z-30"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
            >
                <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pb-6 flex items-end justify-between">

                    {/* Slide Dots */}
                    <div className="flex items-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className="transition-all duration-300"
                                style={{
                                    width: i === current ? "28px" : "8px",
                                    height: "3px",
                                    borderRadius: 0,
                                    backgroundColor:
                                        i === current
                                            ? "#F2AB58"
                                            : "rgba(255,255,255,0.4)",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={goPrev}
                            aria-label="Previous slide"
                            className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
                            style={{
                                border: "1px solid rgba(255,255,255,0.35)",
                                backgroundColor: "transparent",
                                color: "rgba(255,255,255,0.75)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                            }}
                        >
                            <ChevronLeft size={18} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={goNext}
                            aria-label="Next slide"
                            className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
                            style={{
                                border: "1px solid rgba(255,255,255,0.35)",
                                backgroundColor: "transparent",
                                color: "rgba(255,255,255,0.75)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                            }}
                        >
                            <ChevronRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Poppins font load */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
            `}</style>
        </section>
    );
}