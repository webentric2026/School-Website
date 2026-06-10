import React, { useState, useEffect, useCallback } from "react";
import Hero from "../../components/common/Hero";

/* ─────────────────────────────────────────
   Gallery Data — hardcoded
───────────────────────────────────────── */
const GALLERY = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
        caption: "Annual Science Exhibition",
        category: "Academics",
        span: "col-span-2 row-span-2",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        caption: "Sports Day 2026",
        category: "Sports",
        span: "col-span-1 row-span-1",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
        caption: "Library Reading Sessions",
        category: "Academics",
        span: "col-span-1 row-span-1",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
        caption: "Classroom Innovation Lab",
        category: "Academics",
        span: "col-span-1 row-span-1",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
        caption: "Inter-School Debate",
        category: "Events",
        span: "col-span-2 row-span-1",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
        caption: "Annual Cultural Fest",
        category: "Events",
        span: "col-span-1 row-span-2",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
        caption: "Morning Assembly",
        category: "Campus Life",
        span: "col-span-1 row-span-1",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
        caption: "STEM Workshop",
        category: "Academics",
        span: "col-span-1 row-span-1",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
        caption: "Teacher's Appreciation Day",
        category: "Events",
        span: "col-span-2 row-span-1",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80",
        caption: "Graduation Ceremony",
        category: "Events",
        span: "col-span-1 row-span-1",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&q=80",
        caption: "Athletics Track Meet",
        category: "Sports",
        span: "col-span-1 row-span-1",
    },
];

const CATEGORIES = ["All", "Academics", "Sports", "Events", "Campus Life"];

/* ─────────────────────────────────────────
   Lightbox Component
───────────────────────────────────────── */
function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
    const image = images[activeIndex];

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };

        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose, onPrev, onNext]);

    return (
        <div
            className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/92
        animate-[fadeIn_0.22s_ease_forwards]
      "
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
        >
            <div
                className="relative flex flex-col items-center w-full h-full px-14 md:px-24 py-14 justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close lightbox"
                    className="
            absolute top-5 right-5 z-10
            w-11 h-11
            flex items-center justify-center
            border border-white/20
            text-white/70 hover:text-white hover:bg-white/10
            transition-all duration-200
          "
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
                    </svg>
                </button>

                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
                    {activeIndex + 1} / {images.length}
                </div>

                <div className="relative flex items-center justify-center w-full h-full max-h-[78vh]">
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.caption}
                        className="
              max-w-full max-h-[78vh]
              w-auto h-auto
              object-contain
              animate-[scaleIn_0.22s_ease_forwards]
              shadow-[0_24px_80px_rgba(0,0,0,0.6)]
            "
                    />
                </div>

                <div className="mt-4 text-center">
                    <p className="text-white/80 text-sm font-medium tracking-wide">{image.caption}</p>
                    <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">{image.category}</p>
                </div>

                <button
                    onClick={onPrev}
                    aria-label="Previous image"
                    className="
            absolute left-3 md:left-6 top-1/2 -translate-y-1/2
            w-11 h-16 md:w-13 md:h-20
            flex items-center justify-center
            border border-white/20
            text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40
            transition-all duration-200
          "
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12 2L4 9L12 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                </button>

                <button
                    onClick={onNext}
                    aria-label="Next image"
                    className="
            absolute right-3 md:right-6 top-1/2 -translate-y-1/2
            w-11 h-16 md:w-13 md:h-20
            flex items-center justify-center
            border border-white/20
            text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40
            transition-all duration-200
          "
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6 2L14 9L6 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Gallery Card
───────────────────────────────────────── */
function GalleryCard({ item, index, onClick }) {
    return (
        <div
            className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            onClick={() => onClick(index)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.caption}`}
            onKeyDown={(e) => e.key === "Enter" && onClick(index)}
        >
            <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="
          w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
            />

            <div
                className="
          absolute inset-0
          bg-gradient-to-t from-[#0a1020]/80 via-[#0a1020]/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-350
          flex flex-col justify-end p-4
        "
            >
                <span className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[#93c5fd] mb-1">
                    {item.category}
                </span>
                <p className="text-white font-semibold text-[0.9375rem] leading-tight">
                    {item.caption}
                </p>
            </div>

            <span
                className="
          absolute top-3 left-3
          bg-[#0f1f4a]/80 text-white/80
          text-[0.5625rem] font-bold tracking-[0.14em] uppercase
          px-2.5 py-1
          backdrop-blur-sm
          border-l-2 border-[#3b82f6]
        "
            >
                {item.category}
            </span>

            <div
                className="
          absolute top-3 right-3
          w-8 h-8
          flex items-center justify-center
          border border-white/30 bg-black/20
          text-white
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 5V2H5M9 2H12V5M12 9V12H9M5 12H2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   GalleryPage — Main Component
───────────────────────────────────────── */
function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered =
        activeCategory === "All"
            ? GALLERY
            : GALLERY.filter((g) => g.category === activeCategory);

    const openLightbox = useCallback((i) => setLightboxIndex(i), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const goPrev = useCallback(() => {
        setLightboxIndex((i) => (i <= 0 ? filtered.length - 1 : i - 1));
    }, [filtered.length]);

    const goNext = useCallback(() => {
        setLightboxIndex((i) => (i >= filtered.length - 1 ? 0 : i + 1));
    }, [filtered.length]);

    return (
        <div className="min-h-screen bg-[#f8f7f4] font-sans">
            <header>
                <Hero
                    title="School Gallery"
                    subtitle="Explore memorable moments from academics, cultural events, sports activities, celebrations, campus life, and student achievements through our vibrant gallery."
                    backgroundImage="https://plus.unsplash.com/premium_photo-1761338520256-6d4e653371b9?q=80&w=1069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    breadcrumb="Our Campus"
                    buttonText="Request Campus Tour"
                    buttonLink="#"
                />
            </header>

            <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex items-center gap-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                  shrink-0 px-5 py-4
                  text-[0.75rem] font-bold tracking-[0.10em] uppercase
                  border-b-[2.5px] transition-all duration-200
                  ${activeCategory === cat
                                        ? "border-[#1e3a8a] text-[#1e3a8a]"
                                        : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
                                    }
                `}
                            >
                                {cat}
                            </button>
                        ))}
                        <div className="ml-auto pl-6 shrink-0 hidden md:flex items-center gap-1.5 text-[0.6875rem] text-gray-400 font-medium py-4">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <rect x="1" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
                                <rect x="8" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
                                <rect x="1" y="8" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
                                <rect x="8" y="8" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
                            </svg>
                            {filtered.length} images
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-10 md:py-14">
                {filtered.length === 0 ? (
                    <div className="flex items-center justify-center h-64 text-gray-400 text-sm tracking-widest uppercase">
                        No images in this category
                    </div>
                ) : (
                    <div
                        className="
              grid gap-3
              grid-cols-2 md:grid-cols-4
              auto-rows-[200px] md:auto-rows-[220px]
            "
                    >
                        {filtered.map((item, index) => (
                            <GalleryCard
                                key={item.id}
                                item={item}
                                index={index}
                                onClick={openLightbox}
                            />
                        ))}
                    </div>
                )}
            </main>

            <div className="bg-[#0f1f4a] py-14 px-6 text-center">
                <p className="text-[0.6875rem] font-bold tracking-[0.18em] uppercase text-blue-400 mb-3">
                    Our Campus
                </p>
                <h2 className="font-serif font-bold text-white text-[clamp(1.5rem,2.5vw+0.6rem,2.25rem)] mb-5">
                    Experience St. Andrews in Person
                </h2>
                <a
                    href="#"
                    className="
            inline-flex items-center gap-2.5
            border-2 border-[#3b82f6] text-[#93c5fd]
            font-semibold tracking-[0.06em] uppercase text-[0.8125rem]
            px-8 py-3.5
            hover:bg-[#3b82f6] hover:text-white
            hover:shadow-[0_6px_24px_rgba(59,130,246,0.28)]
            transition-all duration-300
          "
                >
                    Schedule a Campus Tour
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
                    </svg>
                </a>
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={filtered}
                    activeIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={goPrev}
                    onNext={goNext}
                />
            )}
        </div>
    );
}

export default Gallery;