import React, { useState, useMemo } from "react";
import Hero from "../../components/common/Hero";

/* ═══════════════════════════════════════════════════════
   DATA — Add new notices here. No JSX changes needed.
═══════════════════════════════════════════════════════ */
const NOTICES = [
    {
        id: 1,
        title: "Final Term Examination Schedule Released",
        category: "Exams",
        date: "2026-05-20",
        description:
            "The detailed schedule for the upcoming Final Term examinations for Grades 9–12 has been finalized. Please download and review your timetable carefully to plan your preparation.",
        important: true,
        ctaLabel: "Download Schedule (PDF)",
        ctaHref: "#",
    },
    {
        id: 2,
        title: "Admissions Open for Session 2026–27",
        category: "Admissions",
        date: "2026-05-15",
        description:
            "Applications are now open for Nursery to Class IX. Visit the school website or front office for registration forms and eligibility criteria.",
        important: false,
        ctaLabel: "View Details",
        ctaHref: "#",
    },
    {
        id: 3,
        title: "Spring Break Announcement",
        category: "Holidays",
        date: "2026-05-12",
        description:
            "The campus will be closed from May 25 to June 15 for summer vacations. Regular classes resume on June 16. Vacation homework to be collected beforehand.",
        important: false,
        ctaLabel: "View Details",
        ctaHref: "#",
    },
    {
        id: 4,
        title: "Parent–Teacher Conference: Q1 Performance",
        category: "Academic",
        date: "2026-05-10",
        description:
            "Bookings are open for Q1 Parent–Teacher conferences. Meetings will be conducted virtually. Log in to the Parent Portal to reserve your slot.",
        important: false,
        ctaLabel: "Access Parent Portal",
        ctaHref: "#",
    },
    {
        id: 5,
        title: "Annual Circular: Revised School Fee Structure",
        category: "Circulars",
        date: "2026-05-05",
        description:
            "The revised fee structure for Session 2026–27 has been issued. All parents are requested to download and review the circular for details.",
        important: false,
        ctaLabel: "Download Circular",
        ctaHref: "#",
    },
    {
        id: 6,
        title: "National Science Olympiad — Registration Open",
        category: "Academic",
        date: "2026-04-28",
        description:
            "Students of Classes VI–XII are invited to register for the National Science Olympiad. Last date to register is May 28. Contact your class teacher.",
        important: false,
        ctaLabel: "Register Now",
        ctaHref: "#",
    },
];

const UPCOMING_EVENTS = [
    { id: 1, month: "MAY", day: "20", title: "Annual Science Fair", detail: "Main Auditorium · 10:00 AM" },
    { id: 2, month: "JUN", day: "05", title: "Alumni Meetup", detail: "Campus Courtyard · 5:00 PM" },
    { id: 3, month: "JUN", day: "16", title: "School Reopens", detail: "All Classes Resume" },
];

const DOWNLOADS = [
    { id: 1, label: "School Brochure 2026", href: "#" },
    { id: 2, label: "Academic Calendar", href: "#" },
    { id: 3, label: "Student Handbook", href: "#" },
    { id: 4, label: "Fee Structure 2026–27", href: "#" },
];

const CATEGORIES = ["All", "Academic", "Exams", "Holidays", "Admissions", "Circulars"];

const CATEGORY_STYLES = {
    Academic: "bg-blue-50   text-blue-700   border-blue-200",
    Exams: "bg-indigo-50 text-indigo-700 border-indigo-200",
    Holidays: "bg-amber-50  text-amber-700  border-amber-200",
    Admissions: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Circulars: "bg-violet-50 text-violet-700 border-violet-200",
};

const fmt = (d) =>
    new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

/* ═══════════ SHARED SUB-COMPONENTS ═══════════ */

function CategoryBadge({ category }) {
    const cls = CATEGORY_STYLES[category] ?? "bg-slate-50 text-slate-600 border-slate-200";
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5   text-[0.65rem] font-bold tracking-[0.07em] uppercase border ${cls}`}>
            {category}
        </span>
    );
}

function ImportantBadge() {
    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5   text-[0.65rem] font-bold tracking-[0.06em] uppercase bg-rose-50 text-rose-600 border border-rose-200">
            <span className="w-1.5 h-1.5   bg-rose-500 animate-pulse" />
            Important
        </span>
    );
}

function CtaButton({ label, href, variant = "outline", fullWidth = false }) {
    const base = `inline-flex items-center justify-center gap-1.5 text-[0.8rem] font-semibold tracking-wide  g transition-all duration-200 ${fullWidth ? "w-full" : ""}`;
    const styles = {
        outline: "px-4 py-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
        solid: "px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-[0_4px_16px_rgba(99,102,241,0.35)]",
        ghost: "px-3 py-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50",
    };
    return (
        <a href={href} className={`${base} ${styles[variant]}`}>
            {label}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
}

/* ═══════════ FEATURED NOTICE ═══════════ */
function FeaturedNotice({ notice }) {
    return (
        <article className="relative bg-white     overflow-hidden border border-indigo-200 shadow-[0_2px_20px_rgba(99,102,241,0.10)] mb-6">
            {/* Top accent gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400" />
            <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <ImportantBadge />
                    <CategoryBadge category={notice.category} />
                    <span className="ml-auto text-[0.75rem] text-slate-400 font-medium">{fmt(notice.date)}</span>
                </div>
                <h2 className="text-[#0f1f4a] font-bold text-[clamp(1.125rem,2vw+0.5rem,1.5rem)] leading-snug mb-3">
                    {notice.title}
                </h2>
                <p className="text-slate-500 text-[0.875rem] leading-relaxed mb-6 max-w-2xl">
                    {notice.description}
                </p>
                <CtaButton label={notice.ctaLabel} href={notice.ctaHref} variant="solid" />
            </div>
        </article>
    );
}

/* ═══════════ NOTICE CARD ═══════════ */
function NoticeCard({ notice }) {
    return (
        <article className="group bg-white    border border-gray-100 shadow-[0_1px_6px_rgba(20,40,100,0.05)] hover:shadow-[0_6px_24px_rgba(20,40,100,0.10)] hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
                <CategoryBadge category={notice.category} />
                <span className="text-[0.72rem] text-slate-400 font-medium shrink-0">{fmt(notice.date)}</span>
            </div>
            <h3 className="text-[#0f1f4a] font-semibold text-[0.9375rem] leading-snug group-hover:text-indigo-700 transition-colors duration-200">
                {notice.title}
            </h3>
            <p className="text-slate-500 text-[0.8125rem] leading-relaxed line-clamp-3 flex-1">
                {notice.description}
            </p>
            <div className="pt-3 border-t border-slate-100">
                <CtaButton label={notice.ctaLabel} href={notice.ctaHref} variant="ghost" />
            </div>
        </article>
    );
}

/* ═══════════ SIDEBAR WIDGETS ═══════════ */

function WidgetShell({ title, icon, children }) {
    return (
        <div className="bg-white     border border-gray-100 shadow-[0_1px_8px_rgba(20,40,100,0.05)] overflow-hidden">
            <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100">
                <span className="text-indigo-600">{icon}</span>
                <h3 className="text-[0.8125rem] font-bold tracking-[0.06em] uppercase text-[#0f1f4a]">{title}</h3>
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function UpcomingEventsWidget() {
    const CalIcon = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="3" width="13" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M1.5 7h13" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 1.5V4M11 1.5V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );

    return (
        <WidgetShell title="Upcoming Events" icon={CalIcon}>
            <div className="flex flex-col gap-3">
                {UPCOMING_EVENTS.map((ev) => (
                    <div key={ev.id} className="flex items-start gap-3.5 group">
                        <div className="shrink-0 w-12 h-12    bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center">
                            <span className="text-[0.55rem] font-bold tracking-widest text-indigo-400 uppercase">{ev.month}</span>
                            <span className="text-[1.125rem] font-bold text-indigo-700 leading-none">{ev.day}</span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-[0.8375rem] font-semibold text-[#0f1f4a] leading-snug group-hover:text-indigo-700 transition-colors">
                                {ev.title}
                            </p>
                            <p className="text-[0.74rem] text-slate-400 mt-0.5">{ev.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="mt-4 flex items-center gap-1 text-[0.78rem] font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
                View All Events
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </WidgetShell>
    );
}

function DownloadCenterWidget() {
    const DlIcon = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v8M5.5 7.5L8 10l2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 12.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <rect x="1.5" y="12.5" width="13" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
    );

    return (
        <WidgetShell title="Download Center" icon={DlIcon}>
            <div className="flex flex-col gap-1.5">
                {DOWNLOADS.map((d) => (
                    <a
                        key={d.id}
                        href={d.href}
                        className="flex items-center justify-between gap-3 px-3 py-2.5  g hover:bg-indigo-50 transition-colors group"
                    >
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7  g bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-200 transition-colors">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <rect x="1.5" y="0.5" width="7" height="11" rx="1" stroke="#4f46e5" strokeWidth="1.2" />
                                    <path d="M8.5 0.5l2 2v9H8.5" stroke="#4f46e5" strokeWidth="1.2" strokeLinejoin="round" />
                                    <path d="M3.5 4.5h4M3.5 6.5h4M3.5 8.5h2.5" stroke="#4f46e5" strokeWidth="1.1" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="text-[0.8125rem] font-medium text-slate-700 group-hover:text-indigo-700 transition-colors truncate">
                                {d.label}
                            </span>
                        </div>
                        <svg className="shrink-0 text-slate-400 group-hover:text-indigo-500 transition-colors" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 2.5v6M4.5 6.5L7 9l2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 11.5h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                    </a>
                ))}
            </div>
        </WidgetShell>
    );
}

function WeeklyDigestWidget() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) setSubscribed(true);
    };

    return (
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#312e81]     overflow-hidden p-6 shadow-[0_4px_24px_rgba(30,58,138,0.20)]">
            {/* Icon + Title */}
            <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8  g bg-white/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="3.5" width="13" height="10" rx="1.5" stroke="white" strokeWidth="1.3" />
                        <path d="M1.5 6l6.5 4 6.5-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                </div>
                <h3 className="text-white font-bold text-[0.875rem] tracking-wide">Weekly Digest</h3>
            </div>

            <p className="text-indigo-200/70 text-[0.8rem] leading-relaxed mb-4">
                Get the latest notices delivered directly to your inbox every Friday.
            </p>

            {!subscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5  g bg-white/10 border border-white/20 text-white placeholder-indigo-300/60 text-[0.8125rem] focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all"
                    />
                    <button
                        type="submit"
                        className="w-full py-2.5 bg-white text-indigo-700 font-bold text-[0.8125rem]  g hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                        Subscribe
                    </button>
                </form>
            ) : (
                <div className="flex items-center gap-2 text-white/90 text-[0.8125rem] font-medium bg-white/10    px-4 py-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    You're subscribed!
                </div>
            )}
        </div>
    );
}

/* ═══════════ PAGINATION ═══════════ */
function Pagination({ total, perPage, page, setPage }) {
    const totalPages = Math.ceil(total / perPage);
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-1.5 mt-8">
            <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center  g border border-gray-200 text-slate-500 hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 flex items-center justify-center  g text-[0.8125rem] font-semibold border transition-all ${p === page
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "border-gray-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600"
                        }`}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? "page" : undefined}
                >
                    {p}
                </button>
            ))}

            <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center  g border border-gray-200 text-slate-500 hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

/* ═══════════ MAIN PAGE ═══════════ */
const PER_PAGE = 4;

export default function Notices() {
    const [search, setSearch] = useState("");
    const [activeCategory, setCategory] = useState("All");
    const [page, setPage] = useState(1);

    const featuredNotice = useMemo(() => NOTICES.find((n) => n.important), []);

    const filteredNonFeatured = useMemo(() => {
        return NOTICES.filter((n) => {
            if (n.important) return false;
            const matchCat = activeCategory === "All" || n.category === activeCategory;
            const matchSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.description.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [activeCategory, search]);

    const paginated = useMemo(() => {
        const start = (page - 1) * PER_PAGE;
        return filteredNonFeatured.slice(start, start + PER_PAGE);
    }, [filteredNonFeatured, page]);

    // Reset page on filter/search change
    const handleCategoryChange = (cat) => { setCategory(cat); setPage(1); };
    const handleSearch = (val) => { setSearch(val); setPage(1); };

    return (
        <div className="min-h-screen bg-[#f5f6fa]">

            {/* ─── STICKY FILTER BAR ─── */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

                        {/* Search */}
                        <div className="relative w-full sm:w-64 shrink-0">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
                                <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            <input
                                type="search"
                                placeholder="Search notices..."
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-9 pr-9 py-2.5 text-[0.8125rem] bg-gray-50 border border-gray-200  g focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 text-slate-700 placeholder-slate-400 transition-all"
                            />
                            {search && (
                                <button onClick={() => handleSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Category pills */}
                        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-0.5">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`shrink-0 px-4 py-1.5   text-[0.75rem] font-bold tracking-wide border transition-all duration-200 ${activeCategory === cat
                                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                                        : "bg-white text-slate-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            {/* ─── MAIN CONTENT ─── */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT: Notices */}
                    <div className="flex-1 min-w-0">
                        {/* Featured notice — only show if "All" or matching category */}
                        {featuredNotice && (activeCategory === "All" || activeCategory === featuredNotice.category) && !search && (
                            <FeaturedNotice notice={featuredNotice} />
                        )}

                        {/* Results label */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-[0.8125rem] font-semibold text-slate-500">
                                {filteredNonFeatured.length} notice{filteredNonFeatured.length !== 1 && "s"}
                                {activeCategory !== "All" && <span className="text-indigo-500 ml-1">in {activeCategory}</span>}
                                {search && <span className="text-slate-400 ml-1 font-normal">for "{search}"</span>}
                            </p>
                            <span className="text-[0.72rem] text-slate-400 tracking-wider uppercase font-medium">Latest First</span>
                        </div>

                        {/* Cards grid */}
                        {paginated.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {paginated.map((n) => (
                                    <NoticeCard key={n.id} notice={n} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-14 h-14     bg-indigo-50 flex items-center justify-center mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 font-semibold text-[0.9375rem] mb-1">No notices found</p>
                                <p className="text-slate-400 text-[0.8125rem]">Try a different category or search term.</p>
                                <button
                                    onClick={() => { handleSearch(""); handleCategoryChange("All"); }}
                                    className="mt-4 text-indigo-600 text-[0.8125rem] font-semibold hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}

                        <Pagination total={filteredNonFeatured.length} perPage={PER_PAGE} page={page} setPage={setPage} />
                    </div>

                    {/* RIGHT: Sidebar */}
                    <aside className="w-full lg:w-[296px] shrink-0">
                        <div className="flex flex-col gap-5 lg:sticky lg:top-[73px]">
                            <UpcomingEventsWidget />
                            <DownloadCenterWidget />
                            <WeeklyDigestWidget />
                        </div>
                    </aside>

                </div>
            </main>

            {/* Footer strip */}
            <footer className="bg-[#0c1a45] py-8 px-4 text-center mt-8">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-indigo-400 mb-1">St. Andrews Academy, Delhi</p>
                <p className="text-[0.8rem] text-blue-200/40">
                    Questions? Email us at{" "}
                    <span className="text-blue-300">office@standrewsacademy.edu.in</span>
                </p>
            </footer>

        </div>
    );
}