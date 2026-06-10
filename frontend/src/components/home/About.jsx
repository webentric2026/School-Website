import { useEffect, useState } from "react";
import { ArrowRight, Users, BookOpen, Building2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FEATURES = [
    {
        icon: <BookOpen size={18} strokeWidth={1.8} />,
        title: "Experienced Faculty",
        desc: "Over 50 dedicated educators with advanced degrees and a passion for mentoring.",
    },
    {
        icon: <Building2 size={18} strokeWidth={1.8} />,
        title: "Modern Infrastructure",
        desc: "Smart classrooms, well-equipped labs, and a rich library designed for deep learning.",
    },
    {
        icon: <Users size={18} strokeWidth={1.8} />,
        title: "Holistic Development",
        desc: "A balanced curriculum integrating academics, arts, sports, and character building.",
    },
];

const STATS = [
    { value: "25+", label: "Years of Excellence" },
    { value: "3000+", label: "Students Enrolled" },
    { value: "100%", label: "Board Results" },
];

function FeatureItem({ item, index }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 70}
            className="flex items-start gap-3 pb-4 border-b border-black/[0.08]"
        >
            <div className="shrink-0 w-9 h-9 bg-[#5C78C9]/10 border-l-2 border-[#5C78C9] flex items-center justify-center text-[#5C78C9]">
                {item.icon}
            </div>
            <div>
                <p className="font-['Poppins'] text-sm font-bold text-[#2C2A2A] mb-1 leading-tight">
                    {item.title}
                </p>
                <p className="font-['Poppins'] text-[0.79rem] text-[#6b6967] leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </div>
    );
}

export default function AboutPreview() {
    const [imgHovered, setImgHovered] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 750, easing: "ease-out-cubic", once: true, offset: 60 });
    }, []);

    return (
        <>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');`}</style>

            <section className="bg-white py-20 md:py-28 font-['Poppins'] relative overflow-hidden">

                {/* Background geometry */}
                <div className="absolute -top-16 -left-20 w-72 h-72 bg-[#5C78C9]/[0.035] -rotate-12 pointer-events-none z-0" />
                <div className="absolute -bottom-12 -right-14 w-56 h-56 bg-[#F2AB58]/[0.045] rotate-12 pointer-events-none z-0" />

                <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* ══ LEFT: Image Collage ══ */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="900"
                            className="relative"
                            onMouseEnter={() => setImgHovered(true)}
                            onMouseLeave={() => setImgHovered(false)}
                        >
                            {/* Blue corner — top left */}
                            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#5C78C9] z-20 pointer-events-none" />
                            {/* Orange corner — bottom right */}
                            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-[#F2AB58] z-20 pointer-events-none" />

                            {/* Main image */}
                            <div className="relative overflow-hidden h-[320px] md:h-[440px]">
                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80&fit=crop&crop=center"
                                    alt="St. Andrews Academy campus"
                                    loading="lazy"
                                    className={`w-full h-full object-cover object-center block transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${imgHovered ? "scale-[1.04]" : "scale-100"
                                        }`}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating secondary image — inside container bottom right */}
                            <div className="absolute bottom-4 right-4 w-[140px] h-[96px] md:w-[170px] md:h-[116px] overflow-hidden border-[3px] border-white shadow-xl z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&fit=crop&crop=top"
                                    alt="Students in classroom"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top block"
                                />
                            </div>

                            {/* Orange stat badge — inside container bottom left */}
                            <div className="absolute bottom-4 left-4 bg-[#F2AB58] px-4 py-3 z-10 flex flex-col items-center justify-center min-w-[84px]">
                                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#2C2A2A] leading-none">
                                    25+
                                </span>
                                <span className="font-['Poppins'] text-[0.55rem] font-bold tracking-wider uppercase text-[#2C2A2A] mt-1 text-center leading-snug">
                                    Years of<br />Excellence
                                </span>
                            </div>
                        </div>

                        {/* ══ RIGHT: Content ══ */}
                        <div className="flex flex-col gap-0">

                            {/* Label */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="600"
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="block w-7 h-[2px] bg-[#5C78C9] shrink-0" />
                                <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#5C78C9]">
                                    About Our School
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="750"
                                data-aos-delay="80"
                                className="font-['Playfair_Display'] text-[1.85rem] md:text-[2.5rem] font-bold text-[#2C2A2A] leading-[1.18] mb-5"
                            >
                                Nurturing Excellence,<br />
                                Character &amp; Future Leaders
                            </h2>

                            {/* Description */}
                            <p
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="140"
                                className="font-['Poppins'] text-[0.88rem] text-[#6b6967] leading-[1.85] mb-7"
                            >
                                Founded on the belief that education shapes not just careers but
                                complete human beings, St. Andrews Academy provides a structured,
                                compassionate, and rigorous learning environment. Our curriculum
                                balances academic depth with values, sport, and the arts — helping
                                every student discover their truest potential.
                            </p>

                            {/* Stats row */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="160"
                                className="grid grid-cols-3 border border-black/10 mb-7"
                            >
                                {STATS.map((s, i) => (
                                    <div
                                        key={i}
                                        className={`py-4 px-2 text-center ${i < STATS.length - 1 ? "border-r border-black/10" : ""
                                            }`}
                                    >
                                        <div className="font-['Playfair_Display'] text-[1.4rem] md:text-[1.55rem] font-bold text-[#5C78C9] leading-none mb-1">
                                            {s.value}
                                        </div>
                                        <div className="font-['Poppins'] text-[0.58rem] font-semibold tracking-[0.09em] uppercase text-[#8a8785] leading-snug">
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-[18px] mb-8">
                                {FEATURES.map((item, i) => (
                                    <FeatureItem key={i} item={item} index={i} />
                                ))}
                            </div>

                            {/* CTAs */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay="280"
                                className="flex items-center gap-4 flex-wrap"
                            >
                                <a
                                    href="/about"
                                    className="inline-flex items-center gap-2 font-['Poppins'] text-[0.75rem] font-bold tracking-[0.09em] uppercase bg-[#F2AB58] text-[#2C2A2A] px-6 py-3 border-2 border-[#F2AB58] no-underline transition-all duration-200 hover:bg-[#d9934a] hover:border-[#d9934a] hover:-translate-y-0.5"
                                >
                                    Learn More
                                    <ArrowRight size={13} strokeWidth={2.5} />
                                </a>

                                <a
                                    href="/facilities"
                                    className="inline-flex items-center gap-2 font-['Poppins'] text-[0.75rem] font-bold tracking-[0.09em] uppercase bg-transparent text-[#2C2A2A] px-6 py-3 border-2 border-black/25 no-underline transition-all duration-200 hover:border-[#5C78C9] hover:text-[#5C78C9] hover:-translate-y-0.5"
                                >
                                    Explore Campus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}