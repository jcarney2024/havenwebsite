"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [open, setOpen] = useState(false);
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
                    <Link href="/about" className={`hover:opacity-80 ${pathname === "/about" ? "font-semibold" : ""}`}>
                        About
                    </Link>
                    <Link href="/patients" className={`hover:opacity-80 ${pathname === "/patients" ? "font-semibold" : ""}`}>
                        For Patients
                    </Link>
                    <Link href="/volunteer" className={`hover:opacity-80 ${pathname === "/volunteer" ? "font-semibold" : ""}`}>
                        Volunteer
                    </Link>
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
                    <Link
                        href="/donate"
                        className="inline-flex h-9 items-center rounded-full px-4 text-white shadow focus:outline-none focus-visible:ring-2"
                        style={{ backgroundColor: "var(--brand)" }}
                    >
                        Donate
                    </Link>
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
                className={`md:hidden border-t border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${open ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}
                aria-hidden={!open}
            >
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                    <ul className="flex flex-col divide-y divide-black/10">
                        <li>
                            <Link href="/about" className={`block py-3 ${pathname === "/about" ? "font-semibold" : ""}`}>About</Link>
                        </li>
                        <li>
                            <Link href="/patients" className={`block py-3 ${pathname === "/patients" ? "font-semibold" : ""}`}>For Patients</Link>
                        </li>
                        <li>
                            <Link href="/volunteer" className={`block py-3 ${pathname === "/volunteer" ? "font-semibold" : ""}`}>Volunteer</Link>
                        </li>
                        <li>
                            <Link href="/request-appointment" className="block py-3">Request appointment</Link>
                        </li>
                        <li>
                            <Link href={pathname} locale="es" className="block py-3">Español</Link>
                        </li>
                        <li className="pt-3">
                            <Link
                                href="/donate"
                                className="inline-flex h-10 items-center rounded-full px-4 text-white shadow focus:outline-none focus-visible:ring-2"
                                style={{ backgroundColor: "var(--brand)" }}
                            >
                                Donate
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
