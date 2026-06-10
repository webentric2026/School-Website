import React, { useRef } from "react";

/* ─────────────────────────────────────────
   Hardcoded faculty data — edit freely
───────────────────────────────────────── */
const FACULTY = [
    {
        id: 1,
        name: "Dr. Rajesh Kumar",
        department: "Physics Department",
        experience: "15+ Years Exp.",
        bio: "Fostering analytical thinking through hands-on experiments and rigorous inquiry.",
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&q=80",
        accentColor: "#1e3a8a",
    },
    {
        id: 2,
        name: "Mrs. Anjali Sharma",
        department: "Mathematics",
        experience: "10+ Years Exp.",
        bio: "Making complex equations approachable, intuitive, and highly engaging for all levels.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
        accentColor: "#1e3a8a",
    },
    {
        id: 3,
        name: "Mr. Vikram Singh",
        department: "English Literature",
        experience: "12+ Years Exp.",
        bio: "Cultivating a lifelong passion for classic texts and modern literary narratives.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        accentColor: "#1e3a8a",
    },
    {
        id: 4,
        name: "Ms. Priya Desai",
        department: "Biology",
        experience: "8+ Years Exp.",
        bio: "Exploring the microscopic and macroscopic wonders of life sciences with deep curiosity.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        accentColor: "#1e3a8a",
    },
    {
        id: 5,
        name: "Dr. Anil Mehta",
        department: "Chemistry Department",
        experience: "20+ Years Exp.",
        bio: "Bridging complex theoretical concepts with impactful, real-world chemical applications.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
        accentColor: "#1e3a8a",
    },
    {
        id: 6,
        name: "Mrs. Sunita Rao",
        department: "History & Humanities",
        experience: "14+ Years Exp.",
        bio: "Bringing the past to vivid life to help students better understand our shared present.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
        accentColor: "#1e3a8a",
    },
];

/* ─────────────────────────────────────────
   Single Faculty Card
───────────────────────────────────────── */
function FacultyCard({ faculty }) {
    return (
        <div
            className="
        group
        flex-shrink-0 w-[78vw] sm:w-[54vw] md:w-auto
        bg-white overflow-hidden
        border border-gray-100
        shadow-[0_2px_8px_rgba(20,40,100,0.06),0_8px_24px_rgba(20,40,100,0.06)]
        hover:shadow-[0_8px_32px_rgba(20,40,100,0.14)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        cursor-pointer
      "
        >
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    src={faculty.image}
                    alt={faculty.name}
                    loading="lazy"
                    decoding="async"
                    className="
            w-full object-cover object-top
            h-[220px] sm:h-[240px] md:h-[256px]
            group-hover:scale-[1.03]
            transition-transform duration-500 ease-out
          "
                />

                <div
                    aria-hidden="true"
                    className="
            absolute inset-x-0 bottom-0 h-16
            bg-gradient-to-t from-[rgba(15,25,60,0.22)] to-transparent
            pointer-events-none
          "
                />

                <span
                    className="
            absolute top-3 left-3
            inline-flex items-center
            bg-[#1e3a8a] text-white
            text-[0.625rem] font-bold tracking-wide uppercase
            px-2.5 py-1
            shadow-md
          "
                >
                    {faculty.experience}
                </span>
            </div>

            <div className="p-5">
                <p
                    className="
            text-[0.625rem] font-bold tracking-[0.14em] uppercase
            text-[#4a6aa8] mb-1.5
          "
                >
                    {faculty.department}
                </p>

                <h3
                    className="
            font-serif font-bold text-[#0f1f4a]
            text-[1.0625rem] leading-tight mb-2
            group-hover:text-[#1e40af]
            transition-colors duration-200
          "
                >
                    {faculty.name}
                </h3>

                <div className="w-8 h-[2px] bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mb-3" />

                <p className="text-[#4a5568] text-[0.8125rem] leading-relaxed line-clamp-3">
                    {faculty.bio}
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   FacultySection — Main Component
───────────────────────────────────────── */
function Faculty() {
    const sliderRef = useRef(null);

    const scrollBy = (dir) => {
        if (!sliderRef.current) return;
        const cardWidth = sliderRef.current.firstChild?.offsetWidth ?? 0;
        sliderRef.current.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
    };

    return (
        <section
            className="
        relative overflow-hidden
        bg-[#f8f7f4]
        [background-image:linear-gradient(rgba(30,50,120,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(30,50,120,0.022)_1px,transparent_1px)]
        [background-size:48px_48px]
        py-16 md:py-24
      "
            aria-labelledby="faculty-heading"
        >
            <div
                aria-hidden="true"
                className="
          absolute top-0 right-0
          w-[380px] h-[380px]
           pointer-events-none opacity-40
          bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]
          blur-3xl
        "
            />
            <div
                aria-hidden="true"
                className="
          absolute bottom-10 left-0
          w-[280px] h-[280px]
           pointer-events-none opacity-30
          bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,transparent_70%)]
          blur-3xl
        "
            />

            <div className="relative z-10 text-center px-6 mb-10 md:mb-14">
                <div className="inline-flex items-center gap-2.5 mb-4">
                    <span className="block w-7 h-[2px]  bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
                    <span className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-[#4a6aa8]">
                        Our Educators
                    </span>
                    <span className="block w-7 h-[2px]  bg-gradient-to-r from-[#3b82f6] to-[#1e3a8a]" />
                </div>

                <h2
                    id="faculty-heading"
                    className="
            font-serif font-bold text-[#0f1f4a]
            text-[clamp(1.75rem,3vw+0.8rem,2.75rem)]
            leading-tight tracking-tight mb-3
          "
                >
                    Meet Our <span className="text-[#1e40af]">Faculty</span>
                </h2>

                <p className="text-[#4a5568] text-[clamp(0.875rem,0.85rem+0.2vw,1rem)] max-w-md mx-auto leading-relaxed">
                    A dedicated team of mentors committed to academic excellence and student growth.
                </p>
            </div>

            <div className="relative z-10 hidden md:grid grid-cols-3 gap-6 max-w-[1100px] mx-auto px-6">
                {FACULTY.map((f) => (
                    <FacultyCard key={f.id} faculty={f} />
                ))}
            </div>

            <div className="relative z-10 md:hidden">
                <div
                    ref={sliderRef}
                    className="
            flex gap-4
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            pl-5 pr-5
            pb-2
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
                >
                    {FACULTY.map((f) => (
                        <div key={f.id} className="snap-start">
                            <FacultyCard faculty={f} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-5 px-6">
                    <button
                        onClick={() => scrollBy(-1)}
                        aria-label="Previous faculty"
                        className="
              w-10 h-10 
              bg-white border border-[rgba(30,58,138,0.15)]
              flex items-center justify-center
              shadow-sm
              hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a]
              active:scale-95
              transition-all duration-200
              text-[#1e3a8a]
            "
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scrollBy(1)}
                        aria-label="Next faculty"
                        className="
              w-10 h-10 
              bg-white border border-[rgba(30,58,138,0.15)]
              flex items-center justify-center
              shadow-sm
              hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a]
              active:scale-95
              transition-all duration-200
              text-[#1e3a8a]
            "
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex justify-center mt-12 px-6">
                <a
                    href="#"
                    className="
            group
            inline-flex items-center gap-2.5
            border-2 border-[#1e3a8a]
            text-[#1e3a8a]
            font-semibold tracking-[0.06em] uppercase
            text-[0.8125rem]
            
            px-8 py-3.5
            transition-all duration-300
            hover:bg-[#1e3a8a] hover:text-white
            hover:shadow-[0_6px_24px_rgba(30,58,138,0.25)]
            hover:-translate-y-0.5
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]
          "
                    aria-label="Meet our entire faculty team"
                >
                    Meet Our Entire Team
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-200 group-hover:translate-x-1"
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
        </section>
    );
}

export default Faculty;