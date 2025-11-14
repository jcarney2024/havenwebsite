"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "hf_banner_dismissed_v1";

export default function Announcement() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const dismissed = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
            setVisible(!dismissed);
        } catch {
            setVisible(true);
        }
    }, []);

    if (!visible) return null;

    const dismiss = () => {
        try {
            window.localStorage.setItem(STORAGE_KEY, "1");
        } catch { }
        setVisible(false);
    };

    return (
        <div className="bg-black/90 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm relative">
                Join us for the upcoming ¡Anda! 5K to support patient care. {" "}
                <a href="/5k" className="underline">Learn more</a>
                <button
                    type="button"
                    aria-label="Dismiss announcement"
                    onClick={dismiss}
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded hover:bg-white/10"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
