"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [patientsOpen, setPatientsOpen] = useState(false);
    const [volunteerOpen, setVolunteerOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Close mobile menu on route change
        setOpen(false);
    }, [pathname]);

    return (
        <header className="border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg tracking-tight">
                    HAVEN Free Clinic
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {/* About dropdown */}
                    <div className="relative group">
                        <button
                            className={`hover:opacity-80 flex items-center gap-1 ${pathname.startsWith("/about") || pathname.startsWith("/history") || pathname.startsWith("/community-partners") || pathname.startsWith("/leadership") || pathname.startsWith("/news") ? "font-semibold" : ""}`}
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >
                            About
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        {aboutOpen && (
                            <div
                                className="absolute top-full left-0 mt-1 w-56 bg-white border border-black/10 rounded-lg shadow-lg py-2"
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                            >
                                <Link href="/about" className="block px-4 py-2 hover:bg-black/5">Mission</Link>
                                <Link href="/history" className="block px-4 py-2 hover:bg-black/5">History</Link>
                                <Link href="/community-partners" className="block px-4 py-2 hover:bg-black/5">Community Partners</Link>
                                <Link href="/leadership" className="block px-4 py-2 hover:bg-black/5">Leadership</Link>
                                <Link href="/news" className="block px-4 py-2 hover:bg-black/5">News & Publications</Link>
                            </div>
                        )}
                    </div>

                    {/* For Patients dropdown */}
                    <div className="relative group">
                        <button
                            className={`hover:opacity-80 flex items-center gap-1 ${pathname.startsWith("/for-patients") || pathname.startsWith("/patient-faqs") || pathname.startsWith("/education-guides") || pathname.startsWith("/resources") ? "font-semibold" : ""}`}
                            onMouseEnter={() => setPatientsOpen(true)}
                            onMouseLeave={() => setPatientsOpen(false)}
                        >
                            For Patients
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        {patientsOpen && (
                            <div
                                className="absolute top-full left-0 mt-1 w-56 bg-white border border-black/10 rounded-lg shadow-lg py-2"
                                onMouseEnter={() => setPatientsOpen(true)}
                                onMouseLeave={() => setPatientsOpen(false)}
                            >
                                <Link href="/for-patients" className="block px-4 py-2 hover:bg-black/5">Our Services</Link>
                                <Link href="/patient-faqs" className="block px-4 py-2 hover:bg-black/5">Patient FAQs</Link>
                                <Link href="/education-guides" className="block px-4 py-2 hover:bg-black/5">Education Guides</Link>
                                <Link href="/resources" className="block px-4 py-2 hover:bg-black/5">Resources</Link>
                            </div>
                        )}
                    </div>

                    {/* Volunteer dropdown */}
                    <div className="relative group">
                        <button
                            className={`hover:opacity-80 flex items-center gap-1 ${pathname.startsWith("/volunteer") || pathname.startsWith("/professional-volunteers") || pathname.startsWith("/5k") || pathname.startsWith("/volunteer-reference") ? "font-semibold" : ""}`}
                            onMouseEnter={() => setVolunteerOpen(true)}
                            onMouseLeave={() => setVolunteerOpen(false)}
                        >
                            Volunteer
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        {volunteerOpen && (
                            <div
                                className="absolute top-full left-0 mt-1 w-56 bg-white border border-black/10 rounded-lg shadow-lg py-2"
                                onMouseEnter={() => setVolunteerOpen(true)}
                                onMouseLeave={() => setVolunteerOpen(false)}
                            >
                                <Link href="/volunteer" className="block px-4 py-2 hover:bg-black/5">Volunteering at HAVEN</Link>
                                <Link href="/professional-volunteers" className="block px-4 py-2 hover:bg-black/5">Professional Volunteers</Link>
                                <Link href="/5k" className="block px-4 py-2 hover:bg-black/5">¡ANDA! 5K Volunteers</Link>
                                <Link href="/volunteer-reference" className="block px-4 py-2 hover:bg-black/5">Volunteer Reference</Link>
                            </div>
                        )}
                    </div>

                    <div className="w-px h-5 bg-black/10" aria-hidden />
                    <Link
                        href="/request-appointment"
                        className="inline-flex h-9 items-center rounded-full border border-black/10 px-4 hover:bg-black/5"
                    >
                        Request appointment
                    </Link>
                    <Link href={pathname} locale="es" className="hover:opacity-80" prefetch={false}>
                        Español
                    </Link>

                    {/* Donate dropdown */}
                    <div className="relative group">
                        <button
                            className="inline-flex h-9 items-center rounded-full px-4 text-white shadow focus:outline-none focus-visible:ring-2 gap-1"
                            style={{ backgroundColor: "var(--brand)" }}
                            onMouseEnter={() => setDonateOpen(true)}
                            onMouseLeave={() => setDonateOpen(false)}
                        >
                            Donate
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        {donateOpen && (
                            <div
                                className="absolute top-full right-0 mt-1 w-56 bg-white border border-black/10 rounded-lg shadow-lg py-2"
                                onMouseEnter={() => setDonateOpen(true)}
                                onMouseLeave={() => setDonateOpen(false)}
                            >
                                <a href="https://yale.imodules.com/s/1667/52/cart/cart.aspx?sid=1667&gid=52&pgid=5767" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-black/5">Donate</a>
                                <Link href="/endowment" className="block px-4 py-2 hover:bg-black/5">The John B. Goetsch Endowment</Link>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile controls */}
                <div className="md:hidden flex items-center gap-2">
                    <Link href={pathname} locale="es" className="inline-flex h-9 items-center rounded-md px-3 border border-black/10 hover:bg-black/5">
                        ES
                    </Link>
                    <Link
                        href="/request-appointment"
                        className="inline-flex h-9 items-center rounded-full px-3 border border-black/10 hover:bg-black/5"
                    >
                        Appt
                    </Link>
                    <Link
                        href="/donate"
                        className="inline-flex h-9 items-center rounded-full px-4 text-white shadow focus:outline-none focus-visible:ring-2"
                        style={{ backgroundColor: "var(--brand)" }}
                    >
                        Donate
                    </Link>
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 hover:bg-black/5"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            {open ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <>
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden border-t border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${open ? "opacity-100 max-h-[600px] overflow-y-auto" : "opacity-0 max-h-0"}`}
                aria-hidden={!open}
            >
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                    <ul className="flex flex-col divide-y divide-black/10">
                        {/* About section */}
                        <li>
                            <details className="group">
                                <summary className="py-3 cursor-pointer list-none flex items-center justify-between">
                                    <span className={pathname.startsWith("/about") || pathname.startsWith("/history") || pathname.startsWith("/community-partners") || pathname.startsWith("/leadership") || pathname.startsWith("/news") ? "font-semibold" : ""}>About</span>
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </summary>
                                <div className="pb-3 pl-4 space-y-2">
                                    <Link href="/about" className="block py-2 text-sm">Mission</Link>
                                    <Link href="/history" className="block py-2 text-sm">History</Link>
                                    <Link href="/community-partners" className="block py-2 text-sm">Community Partners</Link>
                                    <Link href="/leadership" className="block py-2 text-sm">Leadership</Link>
                                    <Link href="/news" className="block py-2 text-sm">News & Publications</Link>
                                </div>
                            </details>
                        </li>
                        {/* For Patients section */}
                        <li>
                            <details className="group">
                                <summary className="py-3 cursor-pointer list-none flex items-center justify-between">
                                    <span className={pathname.startsWith("/for-patients") || pathname.startsWith("/patient-faqs") || pathname.startsWith("/education-guides") || pathname.startsWith("/resources") ? "font-semibold" : ""}>For Patients</span>
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </summary>
                                <div className="pb-3 pl-4 space-y-2">
                                    <Link href="/for-patients" className="block py-2 text-sm">Our Services</Link>
                                    <Link href="/patient-faqs" className="block py-2 text-sm">Patient FAQs</Link>
                                    <Link href="/education-guides" className="block py-2 text-sm">Education Guides</Link>
                                    <Link href="/resources" className="block py-2 text-sm">Resources</Link>
                                </div>
                            </details>
                        </li>
                        {/* Volunteer section */}
                        <li>
                            <details className="group">
                                <summary className="py-3 cursor-pointer list-none flex items-center justify-between">
                                    <span className={pathname.startsWith("/volunteer") || pathname.startsWith("/professional-volunteers") || pathname.startsWith("/5k") || pathname.startsWith("/volunteer-reference") ? "font-semibold" : ""}>Volunteer</span>
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </summary>
                                <div className="pb-3 pl-4 space-y-2">
                                    <Link href="/volunteer" className="block py-2 text-sm">Volunteering at HAVEN</Link>
                                    <Link href="/professional-volunteers" className="block py-2 text-sm">Professional Volunteers</Link>
                                    <Link href="/5k" className="block py-2 text-sm">¡ANDA! 5K Volunteers</Link>
                                    <Link href="/volunteer-reference" className="block py-2 text-sm">Volunteer Reference</Link>
                                </div>
                            </details>
                        </li>
                        <li>
                            <Link href="/request-appointment" className="block py-3">Request appointment</Link>
                        </li>
                        <li>
                            <Link href={pathname} locale="es" className="block py-3">Español</Link>
                        </li>
                        {/* Donate section */}
                        <li>
                            <details className="group">
                                <summary className="py-3 cursor-pointer list-none flex items-center justify-between">
                                    <span className={pathname.startsWith("/donate") || pathname.startsWith("/endowment") ? "font-semibold" : ""}>Donate</span>
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </summary>
                                <div className="pb-3 pl-4 space-y-2">
                                    <a href="https://yale.imodules.com/s/1667/52/cart/cart.aspx?sid=1667&gid=52&pgid=5767" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm">Donate</a>
                                    <Link href="/endowment" className="block py-2 text-sm">The John B. Goetsch Endowment</Link>
                                </div>
                            </details>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
