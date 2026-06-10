import React, { useState } from "react";

const Explaination = ({
    sectionLabel = "About Our School",
    headingStart = "Empowering Future Leaders with a Legacy of",
    headingAccent = "Excellence.",
    headingEnd = "",
    paragraph1 = "Since 1985, St. Andrews Academy has stood as a beacon of academic rigor and character development. We believe in cultivating not just scholars, but well-rounded individuals prepared to navigate and shape an increasingly complex world.",
    paragraph2 = "Our approach marries traditional values of discipline and integrity with innovative, forward-thinking pedagogies. Here, every student is known, challenged, and supported to reach their highest potential in a premium, inclusive environment.",
    quote = "Education is not merely the transmission of knowledge, but the ignition of purpose. We build foundations that withstand the test of time.",
    quoteAuthor = "Dr. Arthur Sterling",
    quoteTitle = "Founding Principal",
    stat1Value = "1,200+",
    stat1Label = "Enrolled Students",
    stat2Value = "150+",
    stat2Label = "Expert Faculty",
    ctaText = "Explore Academics",
    ctaHref = "#",
    imageSrc = "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt = "Students studying in a bright modern classroom",
    yearsNumber = "38",
    yearsLabel = "Years of Excellence",
}) => {
    const [ctaHovered, setCtaHovered] = useState(false);

    return (
        <section
            aria-labelledby="school-intro-heading"
            className="
        [background-color:#f8f7f4]
        [background-image:linear-gradient(rgba(30,50,120,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(30,50,120,0.028)_1px,transparent_1px)]
        [background-size:48px_48px]
        py-[clamp(56px,7vw,112px)]
        px-[clamp(20px,5vw,80px)]
      "
        >
            <div className="mx-auto max-w-[1160px] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
                <div className="relative">
                    <div
                        className="
              absolute -top-[22px] -left-[20px] z-10
              flex flex-col gap-[2px] min-w-[130px]
              bg-white px-[22px] py-[16px]
              border border-[rgba(30,50,120,0.08)]
              shadow-[0_4px_6px_rgba(20,40,100,0.06),0_12px_28px_rgba(20,40,100,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]
            "
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <svg
                                aria-hidden="true"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 15C8.13401 15 5 11.866 5 8V3H19V8C19 11.866 15.866 15 12 15Z"
                                    stroke="#1e3a8a"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.5 21H15.5M12 15V21"
                                    stroke="#1e3a8a"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 5H2C2 5 2 10 5 11"
                                    stroke="#1e3a8a"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 5H22C22 5 22 10 19 11"
                                    stroke="#1e3a8a"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <span
                            className="font-serif font-bold text-[#1a2a5e] leading-none tracking-[-0.02em]"
                            style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                        >
                            {yearsNumber}
                        </span>

                        <span className="text-[0.6875rem] font-bold tracking-[0.11em] uppercase text-[#4a5580]">
                            {yearsLabel}
                        </span>

                        <div className="mt-2 w-8 h-[2px] rounded-xs bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
                    </div>

                    <div
                        className="
              relative mt-[18px]
               bg-[#e8e6e1]
              p-[clamp(10px,2vw,18px)]
              shadow-[0_2px_4px_rgba(20,40,100,0.05),0_8px_24px_rgba(20,40,100,0.09),0_24px_56px_rgba(20,40,100,0.08)]
            "
                    >
                        <div className=" overflow-hidden relative leading-[0] shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)]">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                width="700"
                                height="480"
                                loading="lazy"
                                decoding="async"
                                className="w-full object-cover block "
                                style={{ height: "clamp(220px, 35vw, 400px)" }}
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0  pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent 60%, rgba(20,30,70,0.18) 100%)",
                                }}
                            />
                        </div>
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute -bottom-[16px] -right-[16px] w-20 h-20 pointer-events-none z-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(30,58,138,0.25) 1.5px, transparent 1.5px)",
                            backgroundSize: "12px 12px",
                        }}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-[2px]  bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shrink-0" />
                        <span className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-[#4a6aa8]">
                            {sectionLabel}
                        </span>
                    </div>

                    <h2
                        id="school-intro-heading"
                        className="font-serif font-bold text-[#0f1f4a] leading-[1.18] tracking-[-0.015em] mb-6"
                        style={{ fontSize: "clamp(1.625rem, 2.2vw + 0.8rem, 2.75rem)" }}
                    >
                        {headingStart}{" "}
                        <span className="text-[#1e40af]">{headingAccent}</span>
                        {headingEnd && ` ${headingEnd}`}
                    </h2>

                    <p
                        className="text-[#3d4a6a] leading-[1.72] mb-4"
                        style={{ fontSize: "clamp(0.875rem, 0.82rem + 0.35vw, 1rem)" }}
                    >
                        {paragraph1}
                    </p>

                    <p
                        className="text-[#3d4a6a] leading-[1.72] mb-7"
                        style={{ fontSize: "clamp(0.875rem, 0.82rem + 0.35vw, 1rem)" }}
                    >
                        {paragraph2}
                    </p>

                    <blockquote
                        className="
              bg-[#f0f1f8]
              border border-[rgba(30,58,138,0.12)]
              border-l-[3px] border-l-[#1e40af]
              rounded-r-xl px-[22px] py-[18px] mb-8
            "
                    >
                        <p
                            className="font-serif italic text-[#1a2a5e] leading-[1.68] mb-2.5"
                            style={{ fontSize: "clamp(0.875rem, 0.82rem + 0.25vw, 0.9375rem)" }}
                        >
                            "{quote}"
                        </p>
                        <footer className="text-[0.8rem] text-[#5a6a90]">
                            — <strong className="text-[#1a2a5e] font-semibold">{quoteAuthor}</strong>,{" "}
                            <span>{quoteTitle}</span>
                        </footer>
                    </blockquote>

                    <div
                        className="flex mb-9 pb-8 border-b border-[rgba(30,58,138,0.1)]"
                        style={{ gap: "clamp(24px, 4vw, 48px)" }}
                    >
                        {[
                            { value: stat1Value, label: stat1Label },
                            { value: stat2Value, label: stat2Label },
                        ].map(({ value, label }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <span
                                    className="font-serif font-bold text-[#0f1f4a] leading-none tracking-[-0.01em]"
                                    style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)" }}
                                >
                                    {value}
                                </span>
                                <span className="text-[0.75rem] font-medium text-[#6a7a9a]">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <a
                            href={ctaHref}
                            onMouseEnter={() => setCtaHovered(true)}
                            onMouseLeave={() => setCtaHovered(false)}
                            onFocus={(e) => {
                                e.target.style.outline = "2.5px solid rgba(30,64,175,0.6)";
                                e.target.style.outlineOffset = "3px";
                            }}
                            onBlur={(e) => {
                                e.target.style.outline = "none";
                            }}
                            aria-label={ctaText}
                            className={[
                                "inline-flex items-center gap-2.5",
                                "font-semibold tracking-[0.025em] no-underline",
                                " cursor-pointer outline-none",
                                "transition-all duration-[260ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                                ctaHovered
                                    ? "bg-[#1e3a8a] text-white -translate-y-0.5 shadow-[0_6px_24px_rgba(30,58,138,0.28),0_2px_6px_rgba(0,0,0,0.12)]"
                                    : "bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[#1a0a00] translate-y-0 shadow-[0_4px_18px_rgba(245,158,11,0.30),0_1px_3px_rgba(0,0,0,0.10)]",
                            ].join(" ")}
                            style={{
                                fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.9375rem)",
                                padding: "clamp(11px,1.3vw,15px) clamp(24px,2.5vw,34px)",
                            }}
                        >
                            {ctaText}
                            <svg
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-200 ${ctaHovered ? "translate-x-1" : "translate-x-0"
                                    }`}
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
        </section>
    );
};

export default Explaination;