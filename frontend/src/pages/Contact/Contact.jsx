import React, { useState } from "react";

/* ══════════════════════════════════════════════
   CONTACT DATA — easy to edit
══════════════════════════════════════════════ */
const CONTACT_CARDS = [
    {
        id: 1,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="9" cy="6" r="1.75" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        accent: "amber",
        title: "Campus Address",
        lines: [
            "St. Andrews Academy, Knowledge Park,",
            "Education Hub Area, Bengaluru,",
            "Karnataka – 560001, India",
        ],
        cta: null,
    },
    {
        id: 2,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M3 9.5l3.5 2L9 7.5l2.5 4 3-6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        accent: "indigo",
        title: "Admission Inquiry",
        lines: [
            "Mon – Sat, 9:00 AM – 4:00 PM",
            "+91 80 1234 5678",
            "admissions@standrews.edu.in",
        ],
        cta: "mailto:admissions@standrews.edu.in",
    },
    {
        id: 3,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 3h3l1.5 3.5-2 1.25A9.25 9.25 0 009.25 12L10.5 10l3.5 1.5v3C14 15.33 12 16 9 13.5 6 11 3 8 3.5 3Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
        accent: "blue",
        title: "General Desk",
        lines: [
            "Mon – Fri, 8:30 AM – 5:00 PM",
            "+91 80 9876 5432",
            "info@standrews.edu.in",
        ],
        cta: "tel:+918098765432",
    },
    {
        id: 4,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        accent: "emerald",
        title: "Office Hours",
        lines: [
            "Monday – Friday: 8:00 AM – 6:00 PM",
            "Saturday: 9:00 AM – 1:00 PM",
            "Sunday & Holidays: Closed",
        ],
        cta: null,
    },
];

const INQUIRY_TYPES = [
    "Select inquiry type",
    "Admission – New Enrolment",
    "Fee & Finance",
    "Academic Query",
    "Transport Facility",
    "Hostel & Boarding",
    "General Feedback",
    "Other",
];

const ACCENT_CLASSES = {
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
};

const STATS = [
    { value: "< 2 hrs", label: "Average Response Time" },
    { value: "98%", label: "Query Resolution Rate" },
    { value: "24 / 7", label: "Online Portal Access" },
];

/* ══════════════════════════════════════════════
   CONTACT CARD
══════════════════════════════════════════════ */
function ContactCard({ card }) {
    const ac = ACCENT_CLASSES[card.accent];
    return (
        <div className="
      group bg-white    border border-gray-100
      shadow-[0_2px_10px_rgba(20,40,100,0.07)]
      hover:shadow-[0_6px_24px_rgba(20,40,100,0.11)]
      hover:-translate-y-0.5
      transition-all duration-300 p-5 flex gap-4
    ">
            <div className={`
        shrink-0 w-10 h-10    flex items-center justify-center
        ${ac.bg} ${ac.text} border ${ac.border}
        group-hover:scale-105 transition-transform duration-200
      `}>
                {card.icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-slate-400 mb-1">
                    {card.title}
                </p>
                {card.lines.map((line, i) => (
                    <p key={i} className="text-[0.8375rem] text-slate-700 leading-relaxed font-medium">
                        {line}
                    </p>
                ))}
                {card.cta && (
                    <a
                        href={card.cta}
                        className={`inline-flex items-center gap-1 mt-2 text-[0.78rem] font-semibold ${ac.text} hover:underline`}
                    >
                        Contact now
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M2 5.5H9M6 2.5L9 5.5L6 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   FORM FIELD WRAPPERS
══════════════════════════════════════════════ */
function InputField({ label, type = "text", id, placeholder, value, onChange, required }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-[0.78rem] font-semibold text-slate-600 tracking-wide">
                {label}{required && <span className="text-rose-400 ml-0.5">*</span>}
            </label>
            <input
                id={id} type={type} placeholder={placeholder}
                value={value} onChange={onChange}
                required={required}
                className="
          w-full px-4 py-3   
          border border-gray-200 bg-gray-50/60
          text-slate-800 text-[0.875rem] placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-300
          focus:border-indigo-400 focus:bg-white
          transition-all duration-200
        "
            />
        </div>
    );
}

function SelectField({ label, id, value, onChange, options, required }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-[0.78rem] font-semibold text-slate-600 tracking-wide">
                {label}{required && <span className="text-rose-400 ml-0.5">*</span>}
            </label>
            <div className="relative">
                <select
                    id={id} value={value} onChange={onChange} required={required}
                    className="
            w-full px-4 py-3    appearance-none
            border border-gray-200 bg-gray-50/60
            text-slate-800 text-[0.875rem]
            focus:outline-none focus:ring-2 focus:ring-indigo-300
            focus:border-indigo-400 focus:bg-white
            transition-all duration-200 cursor-pointer
          "
                >
                    {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   MAIN CONTACT PAGE
══════════════════════════════════════════════ */
export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", type: INQUIRY_TYPES[0], message: "" });
    const [submitted, setSubmitted] = useState(false);

    const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa]">

            {/* ── HERO ── */}
            <header className="relative overflow-hidden bg-gradient-to-br from-[#0c1a45] via-[#1a2f6e] to-[#0c1a45] pt-16 pb-20 px-4 sm:px-6">
                {/* Grid texture */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
                {/* Orbs */}
                <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-25"
                    style={{ background: "radial-gradient(circle,rgba(99,102,241,0.55) 0%,transparent 65%)", filter: "blur(64px)" }} />
                <div aria-hidden="true" className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-15"
                    style={{ background: "radial-gradient(circle,rgba(245,158,11,0.5) 0%,transparent 65%)", filter: "blur(56px)" }} />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    {/* Breadcrumb */}
                    <nav className="flex items-center justify-center gap-2 text-[0.7rem] font-semibold tracking-[0.10em] uppercase text-blue-300/55 mb-7">
                        <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-blue-200/70">Contact Us</span>
                    </nav>
                    {/* Tag line */}
                    <div className="flex items-center justify-center gap-2.5 mb-5">
                        <div className="w-8 h-[2px] bg-gradient-to-r from-amber-400 to-amber-300   " />
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-amber-400">
                            We're Here to Help
                        </span>
                        <div className="w-8 h-[2px] bg-gradient-to-l from-amber-400 to-amber-300   " />
                    </div>
                    <h1 className="text-white font-bold text-[clamp(2.25rem,5vw+0.5rem,4rem)] leading-tight tracking-tight mb-5">
                        Get in Touch
                    </h1>
                    <p className="text-blue-200/55 text-[clamp(0.9375rem,1vw+0.5rem,1.125rem)] leading-relaxed max-w-xl mx-auto">
                        We welcome your inquiries. Connect with St. Andrews Academy to learn more about our world-class educational environment and admission processes.
                    </p>
                    {/* Quick stats */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                        {STATS.map(s => (
                            <div key={s.label} className="flex flex-col items-center px-5 py-3 border border-white/10 bg-white/5    backdrop-blur-sm min-w-[100px]">
                                <span className="text-[1.375rem] font-bold text-white leading-none">{s.value}</span>
                                <span className="text-[0.62rem] font-bold tracking-widest uppercase text-blue-300/55 mt-1">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* ── MAIN SECTION ── */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">

                    {/* LEFT: Contact info */}
                    <div className="flex flex-col gap-5">
                        <div className="mb-2">
                            <h2 className="text-[#0f1f4a] font-bold text-[1.4375rem] leading-snug mb-2">Contact Information</h2>
                            <p className="text-slate-500 text-[0.875rem] leading-relaxed">
                                Reach out to our dedicated administration teams for prompt assistance regarding your queries.
                            </p>
                        </div>
                        {CONTACT_CARDS.map(c => <ContactCard key={c.id} card={c} />)}

                        {/* Social quick links */}
                        <div className="mt-1 p-5 bg-white    border border-gray-100 shadow-[0_2px_10px_rgba(20,40,100,0.06)]">
                            <p className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-slate-400 mb-3">Follow Us</p>
                            <div className="flex items-center gap-3">
                                {[
                                    { label: "Facebook", color: "bg-blue-600", href: "#", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><path d="M8.5 2h2V4.5h-1.5c-.3 0-.5.2-.5.5v1.5H10l-.5 2H8.5V12H6V8.5H4.5v-2H6V5c0-1.65 1.35-3 3-3h-.5Z" /></svg> },
                                    { label: "Instagram", color: "bg-gradient-to-br from-pink-500 to-amber-400", href: "#", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="white" strokeWidth="1.3" /><circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.3" /><circle cx="10.5" cy="3.5" r="0.7" fill="white" /></svg> },
                                    { label: "YouTube", color: "bg-red-600", href: "#", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="2" stroke="white" strokeWidth="1.2" /><path d="M5.5 5.5l3 1.5-3 1.5v-3Z" fill="white" /></svg> },
                                    { label: "LinkedIn", color: "bg-sky-700", href: "#", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><circle cx="3.5" cy="3.5" r="1.25" /><rect x="2.5" y="5.5" width="2" height="6.5" rx="0.5" /><path d="M7 5.5h2v1.25A2.25 2.25 0 0111.5 5.5C13 5.5 13.5 6.5 13.5 8v4h-2V8.5c0-.83-.34-1.5-1-1.5-.75 0-1.5.6-1.5 1.5V12H7V5.5Z" /></svg> },
                                ].map(s => (
                                    <a key={s.label} href={s.href} aria-label={s.label}
                                        className={`w-9 h-9    flex items-center justify-center ${s.color} shadow-sm hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200`}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="bg-white    border border-gray-100 shadow-[0_4px_24px_rgba(20,40,100,0.09)] p-7 md:p-9">
                        <div className="mb-7">
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-6 h-[2px]    bg-gradient-to-r from-indigo-400 to-blue-400" />
                                <span className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-indigo-500">
                                    Quick Response Form
                                </span>
                            </div>
                            <h2 className="text-[#0f1f4a] font-bold text-[1.4375rem]">Send an Inquiry</h2>
                            <p className="text-slate-500 text-[0.8375rem] mt-1">
                                Our team typically responds within 2 business hours.
                            </p>
                        </div>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                                {/* Row: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField label="Full Name" id="name" placeholder="Parent or Student Name"
                                        value={form.name} onChange={set("name")} required />
                                    <InputField label="Email Address" id="email" type="email" placeholder="your@email.com"
                                        value={form.email} onChange={set("email")} required />
                                </div>
                                {/* Row: Phone + Type */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField label="Phone Number" id="phone" type="tel" placeholder="+91 xxxxx xxxxx"
                                        value={form.phone} onChange={set("phone")} />
                                    <SelectField label="Inquiry Type" id="type"
                                        value={form.type} onChange={set("type")}
                                        options={INQUIRY_TYPES} required />
                                </div>
                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-[0.78rem] font-semibold text-slate-600 tracking-wide">
                                        Your Message <span className="text-rose-400">*</span>
                                    </label>
                                    <textarea
                                        id="message" rows={5}
                                        placeholder="How can we help you?"
                                        value={form.message}
                                        onChange={set("message")}
                                        required
                                        className="
                      w-full px-4 py-3    resize-none
                      border border-gray-200 bg-gray-50/60
                      text-slate-800 text-[0.875rem] placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-indigo-300
                      focus:border-indigo-400 focus:bg-white
                      transition-all duration-200
                    "
                                    />
                                </div>
                                {/* Privacy note */}
                                <p className="text-[0.74rem] text-slate-400 leading-relaxed -mt-1">
                                    By submitting, you agree to our{" "}
                                    <a href="#" className="text-indigo-500 hover:underline">Privacy Policy</a>.
                                    We never share your data with third parties.
                                </p>
                                {/* Submit */}
                                <button type="submit"
                                    className="
                    group w-full flex items-center justify-center gap-2.5
                    bg-[#1e3a8a] text-white font-semibold text-[0.9375rem]
                    py-3.5   
                    border-2 border-[#1e3a8a]
                    hover:bg-transparent hover:text-[#1e3a8a]
                    hover:shadow-[0_6px_28px_rgba(30,58,138,0.22)]
                    hover:-translate-y-0.5
                    transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2
                  "
                                >
                                    Send Message
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        className="group-hover:translate-x-1 transition-transform duration-200">
                                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.75"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        ) : (
                            /* Success state */
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <div className="w-16 h-16    bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-emerald-500">
                                        <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M9 14l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-[#0f1f4a] font-bold text-[1.25rem]">Message Sent!</h3>
                                <p className="text-slate-500 text-[0.875rem] max-w-sm leading-relaxed">
                                    Thank you, <strong>{form.name || "there"}</strong>. Our team will reach out to you at <strong>{form.email}</strong> within 2 business hours.
                                </p>
                                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", type: INQUIRY_TYPES[0], message: "" }); }}
                                    className="mt-2 text-indigo-600 font-semibold text-[0.875rem] hover:underline">
                                    Send another message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* ── MAP SECTION ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                {/* Section header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2.5 mb-3">
                        <div className="w-7 h-[2px]    bg-gradient-to-r from-indigo-400 to-blue-400" />
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-indigo-500">Location</span>
                        <div className="w-7 h-[2px]    bg-gradient-to-l from-indigo-400 to-blue-400" />
                    </div>
                    <h2 className="text-[#0f1f4a] font-bold text-[clamp(1.5rem,2.5vw+0.5rem,2.25rem)] leading-tight mb-2">
                        Visit Our Campus
                    </h2>
                    <p className="text-slate-500 text-[0.9rem] max-w-md mx-auto leading-relaxed">
                        Strategically located for accessibility, our campus offers a serene environment ideal for focused learning.
                    </p>
                </div>

                {/* Map container */}
                <div className="relative w-full    overflow-hidden border border-gray-200 shadow-[0_6px_32px_rgba(20,40,100,0.10)]">
                    {/* Embedded map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                        width="100%"
                        height="420"
                        style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Campus Location Map"
                        aria-label="Google Map showing campus location"
                    />

                    {/* Floating info card */}
                    <div className="
            absolute top-5 left-5 z-10
            bg-white/95 backdrop-blur-md
               border border-white/70
            shadow-[0_4px_20px_rgba(20,40,100,0.13)]
            p-4 max-w-[240px]
          ">
                        <div className="flex items-center gap-2 mb-2.5">
                            <div className="w-8 h-8    bg-indigo-600 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                                    <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4Z"
                                        stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
                                    <circle cx="7" cy="5" r="1.4" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[0.75rem] font-bold text-[#0f1f4a]">St. Andrews Academy</p>
                                <p className="text-[0.65rem] text-slate-400">Bengaluru, Karnataka</p>
                            </div>
                        </div>
                        <div className="h-[1px] bg-slate-100 mb-2.5" />
                        <div className="flex flex-col gap-1 text-[0.72rem] text-slate-500 mb-3">
                            <span>📍 15 min from City Railway Station</span>
                            <span>✈️ 45 min from International Airport</span>
                            <span>🚌 Direct BMTC bus connectivity</span>
                        </div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex items-center justify-center gap-1.5 w-full
                py-2   
                bg-[#1e3a8a] text-white
                text-[0.75rem] font-semibold
                hover:bg-indigo-700 hover:shadow-md
                transition-all duration-200
              "
                        >
                            Get Directions
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FOOTER STRIP ── */}
            <footer className="bg-[#0c1a45] py-10 px-4 text-center">
                <p className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-indigo-400 mb-1.5">
                    St. Andrews Academy — Bengaluru
                </p>
                <p className="text-[0.8rem] text-blue-200/35">
                    Questions? Reach us at{" "}
                    <span className="text-blue-300">info@standrews.edu.in</span>
                </p>
            </footer>
        </div>
    );
}