import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Facilities", href: "/facilities" },
    { label: "Activities", href: "/activities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

const IMPORTANT_LINKS = [
    { label: "Notices", href: "/notices" },
    { label: "Examination Updates", href: "/exams" },
    { label: "Admission Process", href: "/admissions/process" },
    { label: "School Calendar", href: "/calendar" },
    { label: "Fee Structure", href: "/fees" },
    { label: "Mandatory Disclosure", href: "/disclosure" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
];

const SOCIAL = [
    { icon: <FaFacebookF size={16} strokeWidth={1.8} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={16} strokeWidth={1.8} />, href: "#", label: "FaInstagram" },
    { icon: <FaYoutube size={16} strokeWidth={1.8} />, href: "#", label: "YouTube" },
    { icon: <FaLinkedinIn size={16} strokeWidth={1.8} />, href: "#", label: "LinkedIn" },
];

/* ── Reusable footer link ── */
function FooterLink({ href, children }) {
    return (
        <li>
            <a
                href={href}
                className="
          group flex items-center gap-2
          font-['Poppins'] text-[0.82rem] text-white/60
          hover:text-[#5C78C9] transition-colors duration-200
          no-underline leading-relaxed
        "
            >
                <span
                    className="
            block w-0 h-[1px] bg-[#5C78C9]
            group-hover:w-3 transition-all duration-200
          "
                />
                {children}
            </a>
        </li>
    );
}

/* ── Column heading ── */
function ColHeading({ children }) {
    return (
        <div className="mb-5">
            <h4 className="font-['Poppins'] text-[0.72rem] font-bold tracking-[0.2em] uppercase text-white mb-2">
                {children}
            </h4>
            <div className="flex items-center gap-1.5">
                <span className="block w-6 h-[2px] bg-[#F2AB58]" />
                <span className="block w-2 h-[2px] bg-[#5C78C9]" />
            </div>
        </div>
    );
}

/* ════ FOOTER ════ */
export default function Footer() {
    return (
        <footer className="font-['Poppins'] bg-[#2C2A2A] relative overflow-hidden">

            {/* ── Subtle background watermark shape ── */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#5C78C9]/[0.03] rotate-12 pointer-events-none z-0" />
            <div className="absolute bottom-12 left-0 w-72 h-72 bg-[#F2AB58]/[0.025] -rotate-12 pointer-events-none z-0" />

            {/* ══ TOP CTA STRIP ══ */}
            <div className="relative z-10 border-b border-white/[0.07]">
                <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-10 bg-[#F2AB58] shrink-0" />
                            <div>
                                <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#F2AB58] mb-0.5">
                                    Now Accepting Applications
                                </p>
                                <p className="font-['Poppins'] text-white text-[0.92rem] font-semibold leading-tight">
                                    Admissions Open for Academic Session 2026–27
                                </p>
                            </div>
                        </div>
                        <a
                            href="/admissions"
                            className="
                inline-flex items-center gap-2 shrink-0
                font-['Poppins'] text-[0.72rem] font-bold tracking-[0.09em] uppercase
                bg-[#F2AB58] text-[#2C2A2A] px-5 py-2.5
                border-2 border-[#F2AB58] no-underline
                transition-all duration-200
                hover:bg-[#d9934a] hover:border-[#d9934a] hover:-translate-y-0.5
              "
                        >
                            Apply Now
                            <ArrowRight size={12} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </div>

            {/* ══ MAIN FOOTER BODY ══ */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 pt-14 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* ── Col 1: School Info ── */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#5C78C9] flex items-center justify-center shrink-0">
                                <span className="font-['Playfair_Display',Georgia,serif] text-white text-base font-bold leading-none">
                                    SA
                                </span>
                            </div>
                            <div>
                                <div className="font-['Playfair_Display',Georgia,serif] text-white text-[1rem] font-bold leading-tight">
                                    St. Andrews
                                </div>
                                <div className="font-['Poppins'] text-white/50 text-[0.58rem] tracking-[0.15em] uppercase leading-tight">
                                    Academy
                                </div>
                            </div>
                        </div>

                        {/* Tagline */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="block w-4 h-[1px] bg-[#F2AB58]" />
                            <span className="font-['Poppins'] text-[0.6rem] tracking-[0.18em] uppercase text-[#F2AB58]">
                                Est. 2001
                            </span>
                        </div>

                        {/* Description */}
                        <p className="font-['Poppins'] text-[0.8rem] text-white/55 leading-[1.85] mb-5">
                            Committed to academic excellence, character development, and holistic
                            student growth through modern education and strong values.
                        </p>

                        {/* Affiliation badge */}
                        <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 mb-6">
                            <span className="block w-1.5 h-1.5 bg-[#5C78C9]" />
                            <span className="font-['Poppins'] text-[0.62rem] text-white/45 tracking-wide uppercase">
                                CBSE Affiliated · No. 2730178
                            </span>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            {SOCIAL.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="
                    w-8 h-8 border border-white/15 flex items-center justify-center
                    text-white/45 hover:text-[#5C78C9] hover:border-[#5C78C9]
                    transition-all duration-200
                  "
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Col 2: Quick Links ── */}
                    <div>
                        <ColHeading>Quick Links</ColHeading>
                        <ul className="flex flex-col gap-2.5">
                            {QUICK_LINKS.map((l) => (
                                <FooterLink key={l.label} href={l.href}>
                                    {l.label}
                                </FooterLink>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Important Links ── */}
                    <div>
                        <ColHeading>Important Links</ColHeading>
                        <ul className="flex flex-col gap-2.5">
                            {IMPORTANT_LINKS.map((l) => (
                                <FooterLink key={l.label} href={l.href}>
                                    {l.label}
                                </FooterLink>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contact Info ── */}
                    <div>
                        <ColHeading>Contact Information</ColHeading>

                        <ul className="flex flex-col gap-4">
                            {/* Address */}
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-7 h-7 bg-[#5C78C9]/10 border-l-2 border-[#5C78C9] flex items-center justify-center text-[#5C78C9] mt-0.5">
                                    <MapPin size={13} strokeWidth={1.8} />
                                </div>
                                <p className="font-['Poppins'] text-[0.8rem] text-white/55 leading-relaxed">
                                    123 Education Lane,<br />
                                    Knowledge Park, New Delhi – 110001
                                </p>
                            </li>

                            {/* Phone */}
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-7 h-7 bg-[#5C78C9]/10 border-l-2 border-[#5C78C9] flex items-center justify-center text-[#5C78C9]">
                                    <Phone size={13} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <a
                                        href="tel:+911123456789"
                                        className="block font-['Poppins'] text-[0.8rem] text-white/55 hover:text-[#5C78C9] transition-colors duration-200 no-underline"
                                    >
                                        +91 11 2345 6789
                                    </a>
                                    <a
                                        href="tel:+919876543210"
                                        className="block font-['Poppins'] text-[0.8rem] text-white/55 hover:text-[#5C78C9] transition-colors duration-200 no-underline"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-7 h-7 bg-[#5C78C9]/10 border-l-2 border-[#5C78C9] flex items-center justify-center text-[#5C78C9]">
                                    <Mail size={13} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <a
                                        href="mailto:info@standrews.edu"
                                        className="block font-['Poppins'] text-[0.8rem] text-white/55 hover:text-[#5C78C9] transition-colors duration-200 no-underline"
                                    >
                                        info@standrews.edu
                                    </a>
                                    <a
                                        href="mailto:admissions@standrews.edu"
                                        className="block font-['Poppins'] text-[0.8rem] text-white/55 hover:text-[#5C78C9] transition-colors duration-200 no-underline"
                                    >
                                        admissions@standrews.edu
                                    </a>
                                </div>
                            </li>

                            {/* Timings */}
                            <li className="flex items-start gap-3">
                                <div className="shrink-0 w-7 h-7 bg-[#5C78C9]/10 border-l-2 border-[#5C78C9] flex items-center justify-center text-[#5C78C9]">
                                    <Clock size={13} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <p className="font-['Poppins'] text-[0.8rem] text-white/55 leading-relaxed">
                                        Mon – Sat: 8:00 AM – 3:30 PM
                                    </p>
                                    <p className="font-['Poppins'] text-[0.75rem] text-white/35 leading-relaxed">
                                        Office: 9:00 AM – 5:00 PM
                                    </p>
                                </div>
                            </li>

                            {/* Maps CTA */}
                            <li>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-2
                    font-['Poppins'] text-[0.68rem] font-semibold tracking-wide uppercase
                    text-[#F2AB58] hover:text-[#d9934a]
                    transition-colors duration-200 no-underline
                  "
                                >
                                    <ExternalLink size={11} strokeWidth={2} />
                                    View on Google Maps
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ══ DIVIDER ══ */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
                <div className="border-t border-white/[0.07]" />
            </div>

            {/* ══ BOTTOM BAR ══ */}
            <div className="relative z-10 bg-black/20">
                <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

                        {/* Left: Copyright */}
                        <p className="font-['Poppins'] text-[0.72rem] text-white/35 tracking-wide text-center sm:text-left">
                            © 2026 St. Andrews Academy. All Rights Reserved.
                        </p>

                        {/* Right: Policy links */}
                        <div className="flex items-center gap-4">
                            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, i, arr) => (
                                <span key={item} className="flex items-center gap-4">
                                    <a
                                        href={`/${item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                                        className="
                      font-['Poppins'] text-[0.68rem] text-white/35
                      hover:text-[#5C78C9] transition-colors duration-200 no-underline
                      tracking-wide
                    "
                                    >
                                        {item}
                                    </a>
                                    {i < arr.length - 1 && (
                                        <span className="block w-[1px] h-3 bg-white/15" />
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}