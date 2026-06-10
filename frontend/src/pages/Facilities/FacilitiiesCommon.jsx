import React, { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   FacilityShowcase — fully prop-driven, zero hardcoded content

   Props
   ─────────────────────────────────────────────────────────────
   sectionLabel  string           e.g. "World-Class Facilities"
   title         string           heading (plain part)
   titleAccent   string           heading (accent/colored part)
   description   string           paragraph below heading
   slides        Slide[]          image carousel items
   stat          StatObject       floating card data
   features      Feature[]        right-side feature cards
   ctaLabel      string           CTA button text
   ctaHref       string           CTA button URL
   accentColor   string           Tailwind color key (default "indigo")
   autoPlay      boolean          auto-advance slides (default true)
   autoPlayMs    number           interval in ms (default 4000)

   Slide   = { image: string, alt: string, caption?: string }
   Stat    = { icon: ReactNode, value: string, label: string, description: string }
   Feature = { icon: ReactNode, title: string, description: string }
═══════════════════════════════════════════════════════════════ */

/* ── Slide Nav Button ───────────────────────────────────────── */
function SlideNavBtn({ direction, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
            className="
        w-9 h-9 flex items-center justify-center
        bg-white/90 backdrop-blur-sm
        border border-white/60
           shadow-md
        text-slate-600 hover:text-indigo-700
        hover:bg-white hover:shadow-lg
        disabled:opacity-40 disabled:cursor-not-allowed
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
      "
        >
            {direction === "prev" ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.75"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.75"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </button>
    );
}

/* ── Feature Card ───────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div
            className="
      group p-4   
      bg-white border border-gray-100
      shadow-[0_1px_6px_rgba(20,40,100,0.06)]
      hover:shadow-[0_4px_20px_rgba(20,40,100,0.11)]
      hover:-translate-y-0.5
      transition-all duration-300
    "
        >
            <div
                className="
        w-9 h-9 mb-3
        bg-indigo-50 text-indigo-600
        border border-indigo-100
        flex items-center justify-center
        group-hover:bg-indigo-600 group-hover:text-white
        group-hover:border-indigo-600
        transition-all duration-250
      "
            >
                <Icon className="w-5 h-5" />
            </div>

            <p
                className="
        text-[0.8375rem] font-bold text-[#0f1f4a]
        leading-snug mb-1
        group-hover:text-indigo-700 transition-colors duration-200
      "
            >
                {title}
            </p>

            <p className="text-[0.775rem] text-slate-500 leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    );
}
/* ── Floating Stat Card ─────────────────────────────────────── */
function StatCard({ icon: Icon, value, label, description }) {
    return (
        <div
            className="
      absolute bottom-16 left-4 sm:bottom-14 sm:left-4 z-20
      w-[210px] sm:w-[230px]
      bg-white/92 backdrop-blur-md
      shadow-[0_8px_32px_rgba(20,40,100,0.15)]
      border border-white/80
      p-4
    "
        >
            <div className="flex items-center gap-2.5 mb-2">
                <div
                    className="
          w-8 h-8 shrink-0
          bg-amber-50 border border-amber-100
          flex items-center justify-center text-amber-600
        "
                >
                    <Icon className="w-4 h-4" />
                </div>

                <div>
                    <p className="text-[1.3rem] font-bold text-[#0f1f4a] leading-none tracking-tight">
                        {value}
                    </p>

                    <p className="text-[0.58rem] font-bold tracking-[0.10em] uppercase text-slate-400 mt-0.5">
                        {label}
                    </p>
                </div>
            </div>

            <div className="h-[1.5px] bg-gradient-to-r from-indigo-200 to-transparent mb-2" />

            <p className="text-[0.74rem] text-slate-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function FacilitiesCommon({
    sectionLabel = "World-Class Facilities",
    title = "Digital Library &",
    titleAccent = "Resource Center",
    description = "Empowering students through unlimited discovery. Our state-of-the-art facility blends traditional archives with cutting-edge digital resources, creating an environment optimized for deep focus and collaborative research.",
    slides = [],
    stat = null,
    features = [],
    ctaLabel = "Explore Facility",
    ctaHref = "#",
    autoPlay = true,
    autoPlayMs = 4000,
}) {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);
    const [ctaHover, setCtaHover] = useState(false);
    const total = slides.length;

    /* Transition helper */
    const goTo = useCallback((idx) => {
        if (idx === active || fading) return;
        setFading(true);
        setTimeout(() => {
            setActive(idx);
            setFading(false);
        }, 220);
    }, [active, fading]);

    const prev = useCallback(() => goTo((active - 1 + total) % total), [goTo, active, total]);
    const next = useCallback(() => goTo((active + 1) % total), [goTo, active, total]);

    /* Auto-play */
    useEffect(() => {
        if (!autoPlay || total < 2) return;
        const id = setInterval(next, autoPlayMs);
        return () => clearInterval(id);
    }, [autoPlay, autoPlayMs, next, total]);

    if (!slides.length) return null;

    return (
        <section
            className="
        relative overflow-hidden
        bg-gradient-to-br from-[#f7f8fc] via-white to-[#eef1fb]
        py-16 md:py-24 px-4 sm:px-8
      "
            aria-label={sectionLabel}
        >
            {/* Decorative blur orbs */}
            <div aria-hidden="true"
                className="absolute -top-24 -right-24 w-[480px] h-[480px] pointer-events-none opacity-20"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)", filter: "blur(60px)" }}
            />
            <div aria-hidden="true"
                className="absolute -bottom-16 -left-16 w-[340px] h-[340px] pointer-events-none opacity-15"
                style={{ background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 70%)", filter: "blur(52px)" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* ══════════ LEFT — Slideshow ══════════ */}
                <div className="relative flex flex-col gap-4">

                    {/* Dot grid top-right */}
                    <div aria-hidden="true"
                        className="absolute -top-2 right-2 w-20 h-20 pointer-events-none opacity-35 z-0"
                        style={{
                            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.4) 1.5px, transparent 1.5px)",
                            backgroundSize: "10px 10px",
                        }}
                    />

                    {/* Main slide frame */}
                    <div className="relative z-10 w-full    overflow-hidden shadow-[0_8px_40px_rgba(20,40,100,0.14)] border border-white/70 bg-white p-2">
                        {/* Caption bar */}
                        <div className="flex items-center justify-between px-3 py-1.5 mb-1.5">
                            <span className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-slate-400">
                                {slides[active]?.caption || sectionLabel}
                            </span>
                            <span className="text-[0.62rem] font-bold tracking-widest text-slate-300">
                                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Image wrapper */}
                        <div className="relative    overflow-hidden">
                            <img
                                key={active}
                                src={slides[active]?.image}
                                alt={slides[active]?.alt || `Slide ${active + 1}`}
                                loading="lazy"
                                decoding="async"
                                className={`
                  w-full object-cover h-[280px] sm:h-[340px] lg:h-[380px]
                  transition-opacity duration-220
                  ${fading ? "opacity-0" : "opacity-100"}
                `}
                            />
                            {/* Subtle vignette */}
                            <div aria-hidden="true" className="absolute inset-0    pointer-events-none"
                                style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,25,60,0.18) 100%)" }} />

                            {/* Prev / Next — centered vertically */}
                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <SlideNavBtn direction="prev" onClick={prev} />
                            </div>
                            <div className="absolute inset-y-0 right-3 flex items-center">
                                <SlideNavBtn direction="next" onClick={next} />
                            </div>

                            {/* Dot indicators */}
                            {total > 1 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goTo(i)}
                                            aria-label={`Go to slide ${i + 1}`}
                                            className={`
                           transition-all duration-300
                        ${i === active
                                                    ? "w-5 h-1.5 bg-white"
                                                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"}
                      `}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Floating stat card — inside the frame for proper clipping */}
                        {stat && (
                            <StatCard
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                                description={stat.description}
                            />
                        )}
                    </div>

                    {/* Thumbnails */}
                    {total > 1 && (
                        <div className="flex gap-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-0.5 px-0.5">
                            {slides.map((slide, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`View slide ${i + 1}`}
                                    className={`
                    shrink-0 w-20 h-14    overflow-hidden
                    border-2 transition-all duration-250
                    ${i === active
                                            ? "border-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]"
                                            : "border-transparent opacity-60 hover:opacity-90 hover:border-gray-300"}
                  `}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.alt || `Thumb ${i + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ══════════ RIGHT — Content ══════════ */}
                <div className="flex flex-col">

                    {/* Section label */}
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-7 h-[2.5px]    bg-gradient-to-r from-amber-400 to-amber-300" />
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-amber-500">
                            {sectionLabel}
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-bold tracking-tight leading-[1.1] text-[clamp(1.75rem,3vw+0.75rem,3rem)] mb-5">
                        <span className="text-[#0f1f4a]">{title} </span>
                        <span className="text-indigo-600">{titleAccent}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 text-[clamp(0.875rem,0.9rem+0.1vw,1rem)] leading-[1.78] mb-8 max-w-lg">
                        {description}
                    </p>

                    {/* Features grid */}
                    {features.length > 0 && (
                        <div className={`
              grid gap-3 mb-9
              ${features.length === 1 ? "grid-cols-1" : ""}
              ${features.length === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
              ${features.length >= 3 ? "grid-cols-1 sm:grid-cols-2" : ""}
            `}>
                            {features.map((feat, i) => (
                                <FeatureCard
                                    key={i}
                                    icon={feat.icon}
                                    title={feat.title}
                                    description={feat.description}
                                />
                            ))}
                        </div>
                    )}

                    {/* CTA */}

                </div>

            </div>
        </section>
    );
}