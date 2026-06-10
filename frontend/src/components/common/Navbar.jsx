import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Share2,
    Menu,
    X,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
        label: "Academics",
        to: "/academics",
        dropdown: [
            { label: "Primary School", to: "/academics/primary" },
            { label: "I to V", to: "/academics/middle" },
            { label: "VI to X", to: "/academics/senior" },
            { label: "Science Stream", to: "/academics/science" },
            { label: "Commerce Stream", to: "/academics/commerce" },
        ],
    },
    {
        label: "Admissions",
        to: "/admissions",
        dropdown: [
            { label: "How to Apply", to: "/pageNotFound" },
            { label: "Eligibility Criteria", to: "/pageNotFound" },
            { label: "Fee Structure", to: "/pageNotFound" },
            { label: "Scholarship", to: "/pageNotFound" },
        ],
    },
    {
        label: "Facilities",
        to: "/facilities",
        dropdown: [
            { label: "Library", to: "/facilities/library" },
            { label: "Sports Complex", to: "/facilities/sports" },
            { label: "Science Labs", to: "/facilities/labs" },
            { label: "Hostel", to: "/facilities/hostel" },
            { label: "Transport", to: "/facilities/transport" },
        ],
    },
    { label: "Gallery", to: "/gallery" },
    { label: "Notices", to: "/notices" },
];

export default function Navbar() {
    const [topBarVisible, setTopBarVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const lastScrollY = useRef(0);
    const dropdownRef = useRef(null);

    // Scroll: hide/show top bar + detect shadow
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY < 10) {
                setTopBarVisible(true);
            } else if (currentY > lastScrollY.current) {
                setTopBarVisible(false); // scrolling down
            } else {
                setTopBarVisible(true); // scrolling up
            }
            setScrolled(currentY > 10);
            lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (label) =>
        setOpenDropdown((prev) => (prev === label ? null : label));

    const toggleMobileExpanded = (label) =>
        setMobileExpanded((prev) => (prev === label ? null : label));

    return (
        <>
            {/* ===== TOP BAR ===== */}
            <div
                className="block overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: topBarVisible ? "48px" : "0px",
                    opacity: topBarVisible ? 1 : 0,
                    backgroundColor: "#2C2A2A",
                }}
            >
                <div className="max-w-[1280px] mx-auto px-4 h-10 flex items-center justify-between">
                    {/* Left: contact info */}
                    <div className="flex items-center gap-5 text-white text-xs">
                        <span className="hidden md:flex items-center gap-1.5">
                            <MapPin size={13} strokeWidth={1.8} className="shrink-0" />
                            D-94 Noida, UP
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone size={13} strokeWidth={1.8} className="shrink-0" />
                            +91 95603 42636
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Mail size={13} strokeWidth={1.8} className="shrink-0" />
                            webentric2026@gmail.com
                        </span>
                    </div>

                    {/* Right: links + share */}
                    <div className="hidden md:flex items-center gap-5 text-white text-xs">
                        <a
                            href="/contact"
                            className="hover:text-[#F2AB58] transition-colors duration-200"
                        >
                            Contact
                        </a>
                        <a
                            href="/admissions"
                            className="hover:text-[#F2AB58] transition-colors duration-200"
                        >
                            Admissions
                        </a>
                        <button
                            aria-label="Share"
                            className="hover:text-[#F2AB58] transition-colors duration-200 flex items-center"
                        >
                            <Share2 size={14} strokeWidth={1.8} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== MAIN NAVBAR ===== */}
            <nav
                ref={dropdownRef}
                className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
                    }`}
            >
                <div className="max-w-[1280px] mx-auto px-4 h-[68px] flex items-center justify-between">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-[#3157B7] text-xl font-extrabold tracking-tight leading-none shrink-0 select-none"
                    >
                        St. Andrews International School
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) =>
                            link.dropdown ? (
                                <div key={link.label} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(link.label)}
                                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 select-none ${openDropdown === link.label
                                            ? "text-[#5C78C9]"
                                            : "text-[#2C2A2A] hover:text-[#5C78C9]"
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={14}
                                            strokeWidth={2}
                                            className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Panel */}
                                    <div
                                        className={`absolute top-full left-0 mt-0 w-52 bg-white border border-gray-100 shadow-lg overflow-hidden transition-all duration-200 ${openDropdown === link.label
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-2 pointer-events-none"
                                            }`}
                                    >
                                        <div className="py-1">
                                            {link.dropdown.map((item) => (
                                                <NavLink
                                                    key={item.to}
                                                    to={item.to}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className={({ isActive }) =>
                                                        `flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150 ${isActive
                                                            ? "text-[#5C78C9] bg-blue-50 font-medium"
                                                            : "text-[#2C2A2A] hover:text-[#5C78C9] hover:bg-gray-50"
                                                        }`
                                                    }
                                                >
                                                    <ChevronRight
                                                        size={12}
                                                        strokeWidth={2}
                                                        className="text-[#F2AB58] shrink-0"
                                                    />
                                                    {item.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === "/"}
                                    className={({ isActive }) =>
                                        `px-3 py-2 text-sm font-medium transition-colors duration-200 select-none relative ${isActive
                                            ? "text-[#5C78C9]"
                                            : "text-[#2C2A2A] hover:text-[#5C78C9]"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            <span
                                                className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#5C78C9] transition-all duration-200 ${isActive
                                                    ? "opacity-100 scale-x-100"
                                                    : "opacity-0 scale-x-0"
                                                    }`}
                                                style={{ transformOrigin: "left" }}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            )
                        )}
                    </div>

                    {/* Right: CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/contact"
                            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-[#2C2A2A] bg-[#F2AB58] hover:bg-[#e09840] transition-colors duration-200 shrink-0 select-none"
                        >
                            Contact
                        </NavLink>

                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden flex items-center justify-center w-10 h-10 text-[#2C2A2A] hover:text-[#5C78C9] transition-colors duration-200"
                            aria-label="Open menu"
                        >
                            <Menu size={24} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ===== MOBILE FULLSCREEN MENU ===== */}
            <div
                className={`fixed inset-0 z-[100] flex flex-col bg-white transition-all duration-300 ${mobileOpen
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
                    }`}
            >
                {/* Mobile Header */}
                <div
                    className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0"
                    style={{ backgroundColor: "#2C2A2A" }}
                >
                    <span className="text-white text-lg font-extrabold tracking-tight">
                        St. Andrews Academy
                    </span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-10 h-10 text-white hover:text-[#F2AB58] transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <X size={22} strokeWidth={2} />
                    </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 overflow-y-auto py-4">
                    {NAV_LINKS.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleMobileExpanded(link.label)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-base font-semibold text-[#2C2A2A] hover:text-[#5C78C9] hover:bg-gray-50 transition-colors duration-150"
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={18}
                                        strokeWidth={2}
                                        className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${mobileExpanded === link.label
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="bg-gray-50 py-1">
                                        {link.dropdown.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 pl-10 pr-6 py-3 text-sm transition-colors duration-150 ${isActive
                                                        ? "text-[#5C78C9] font-semibold"
                                                        : "text-gray-600 hover:text-[#5C78C9]"
                                                    }`
                                                }
                                            >
                                                <ChevronRight
                                                    size={12}
                                                    strokeWidth={2.5}
                                                    className="text-[#F2AB58] shrink-0"
                                                />
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-4 text-base font-semibold border-b border-gray-100 transition-colors duration-150 ${isActive
                                        ? "text-[#5C78C9] bg-blue-50"
                                        : "text-[#2C2A2A] hover:text-[#5C78C9] hover:bg-gray-50"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        )
                    )}
                </div>

                {/* Mobile CTA */}
                <div className="shrink-0 px-6 py-5 border-t border-gray-100">
                    <NavLink
                        to="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full py-3.5 text-base font-bold text-[#2C2A2A] bg-[#F2AB58] hover:bg-[#e09840] transition-colors duration-200"
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </>
    );
}