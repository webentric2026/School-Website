import React, { useState } from "react";

/* ═══════════════════════════════════════════════
   DEFAULT PROPS — override by passing your own
═══════════════════════════════════════════════ */
const DEFAULT_FEATURES = [
    {
        id: 1,
        label: "Interactive Learning",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L2 5v4c0 3.86 2.98 7.47 7 8.37C13.02 16.47 16 12.86 16 9V5L9 1Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 2,
        label: "Smart Classrooms",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1.5" y="3" width="15" height="10" rx="1.5"
                    stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 15h6M9 13v2" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 3,
        label: "Activity-Based Education",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L11.5 6.5L17 7.3l-4 3.9.94 5.5L9 14 5.06 16.7 6 11.2 2 7.3l5.5-.8L9 1.5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 4,
        label: "Safe Environment",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 9l2 2.5 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 5,
        label: "Experienced Teachers",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 16c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 6,
        label: "Creative Development",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15l3-3 7-7a2.12 2.12 0 00-3-3L3 9l-1 4 4-1Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M12 3l3 3" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" />
            </svg>
        ),
    },
];

/* ═══════════════════════════════════════════════
   FEATURE ITEM — internal, not exported
═══════════════════════════════════════════════ */
function FeatureItem({ icon, label }) {
    return (
        <div className="group flex items-start gap-3">
            <div
                className="
          shrink-0 w-9 h-9
          bg-indigo-50 text-indigo-600
          flex items-center justify-center
          border border-indigo-100
          group-hover:bg-indigo-600 group-hover:text-white
          group-hover:border-indigo-600
          transition-all duration-250
        "
            >
                {icon}
            </div>
            <p className="text-[0.8375rem] font-semibold text-slate-700 leading-snug pt-1.5 group-hover:text-indigo-700 transition-colors duration-200">
                {label}
            </p>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   PRIMARY COMPONENT — fully prop-based
   
   Props:
   ─────────────────────────────────────────────
   sectionLabel   string   "Facilities / Primary School"
   heading        string   Main bold heading text
   headingAccent  string   Indigo-colored part of heading
   description    string   Paragraph below heading
   mainImage      string   URL for the large image
   mainImageAlt   string   Alt text for main image
   secondaryImage string   URL for floating card's image
   secondaryImageAlt string Alt text for secondary image
   statValue      string   e.g. "15:1"
   statLabel      string   e.g. "Student-Teacher Ratio"
   pillLabel      string   e.g. "CBSE Affiliated"
   features       array    Array of { id, label, icon }
   ctaLabel       string   CTA button text
   ctaHref        string   CTA button URL
═══════════════════════════════════════════════ */
export default function AcademicsCommon({
    sectionLabel = "Facilities / Primary School",
    heading = "Nurturing Curious Minds in a World-Class",
    headingAccent = "in a World-Class",
    description = "Our primary school program blends academic rigor with a nurturing environment, focusing on holistic development through interactive learning and creative exploration.",
    mainImage = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    mainImageAlt = "Primary school classroom with students learning",
    secondaryImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    secondaryImageAlt = "Students engaged in activity",
    statValue = "15:1",
    statLabel = "Student-Teacher Ratio",
    pillLabel = "CBSE Affiliated",
    features = DEFAULT_FEATURES,
    ctaLabel = "Explore Primary Programs",
    ctaHref = "#",
}) {
    const [ctaHover, setCtaHover] = useState(false);

    /* Split heading — replace the accent substring with an indigo span */
    const headingParts = heading.split(headingAccent);

    return (
        <section
            className="
        relative overflow-hidden
        bg-gradient-to-br from-[#f8f7f4] via-white to-[#eef1fb]
        py-16 md:py-24
        px-4 sm:px-8
      "
            aria-labelledby="primary-heading"
        >
            {/* Background decorative orbs */}
            <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-[420px] h-[420px] pointer-events-none opacity-25"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
                    filter: "blur(48px)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-16 w-[320px] h-[320px] pointer-events-none opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)",
                    filter: "blur(48px)",
                }}
            />

            {/* Main grid */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* ══════════ LEFT — Image Composition ══════════ */}
                <div className="relative flex justify-center lg:justify-start">

                    {/* Dot grid decoration */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-4 w-24 h-24 pointer-events-none opacity-40 z-0"
                        style={{
                            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.35) 1.5px, transparent 1.5px)",
                            backgroundSize: "10px 10px",
                        }}
                    />

                    {/* Main image card */}
                    <div className="relative z-10 w-full max-w-[480px] overflow-hidden shadow-[0_8px_40px_rgba(20,40,100,0.13)] border border-white bg-white p-2.5">
                        <div className="overflow-hidden relative">
                            <img
                                src={mainImage}
                                alt={mainImageAlt}
                                loading="lazy"
                                decoding="async"
                                className="w-full object-cover h-[300px] sm:h-[360px] lg:h-[400px]"
                            />
                            {/* Vignette overlay */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(135deg, transparent 55%, rgba(15,31,74,0.14) 100%)",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    </div>

                    {/* ── Floating stat / secondary image card ── */}
                    <div className="absolute bottom-4 -left-2 sm:-left-4 z-20 w-[188px] sm:w-[200px] bg-white/90 backdrop-blur-md shadow-[0_6px_28px_rgba(20,40,100,0.14)] border border-white overflow-hidden">

                        {/* Stat row */}
                        <div className="flex items-center gap-2.5 px-4 pt-4 pb-2.5">
                            <div className="w-8 h-8 bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-indigo-600">
                                    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M1.5 13.5c0-2.49 2.01-4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                    <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M14.5 13.5c0-2.49-2.01-4.5-4.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                    <path d="M8 13.5a4.5 4.5 0 014.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[1.25rem] font-bold text-[#0f1f4a] leading-none tracking-tight">
                                    {statValue}
                                </p>
                                <p className="text-[0.58rem] font-bold tracking-[0.10em] uppercase text-slate-400 mt-0.5">
                                    {statLabel}
                                </p>
                            </div>
                        </div>

                        {/* Accent divider */}
                        <div className="mx-4 h-[1.5px] bg-gradient-to-r from-indigo-300 to-transparent mb-2" />

                        {/* Secondary image */}
                        <div className="px-3 pb-3">
                            <div className="overflow-hidden">
                                <img
                                    src={secondaryImage}
                                    alt={secondaryImageAlt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-[100px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pill badge — top left */}
                    <div className="absolute -top-3 left-4 z-20 inline-flex items-center gap-1.5 bg-white border border-indigo-100 shadow-[0_4px_16px_rgba(99,102,241,0.12)] px-3.5 py-1.5">
                        <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                        <span className="text-[0.68rem] font-bold tracking-wide text-slate-600 uppercase">
                            {pillLabel}
                        </span>
                    </div>

                </div>

                {/* ══════════ RIGHT — Content ══════════ */}
                <div className="flex flex-col gap-0">

                    {/* Section label */}
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                        <span className="text-[0.6875rem] font-bold tracking-[0.18em] uppercase text-amber-500">
                            {sectionLabel}
                        </span>
                    </div>

                    {/* Heading — accent part rendered in indigo */}
                    <h2
                        id="primary-heading"
                        className="font-bold text-[#0f1f4a] tracking-tight leading-[1.12] text-[clamp(1.75rem,3.5vw+0.5rem,2.875rem)] mb-5"
                    >
                        {headingParts[0]}
                        <span className="text-indigo-600">{headingAccent}</span>
                        {headingParts[1]}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 text-[clamp(0.875rem,0.9rem+0.15vw,1rem)] leading-[1.75] mb-8 max-w-lg">
                        {description}
                    </p>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
                        {features.map((f) => (
                            <FeatureItem key={f.id} icon={f.icon} label={f.label} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}