export const metadata = {
    title: "Donate | HAVEN Free Clinic",
    description:
        "Support HAVEN Free Clinic. Every contribution directly supports patient care.",
};

export default function DonatePage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Donate</h1>
            <p className="mt-4 text-black/70">
                Thanks to generous donors like you, every contribution helps us better serve our patient population. 100% of proceeds go towards patient care.
            </p>
            <div className="mt-8">
                <a
                    href="https://www.havenfreeclinic.com/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
                    style={{ backgroundColor: "var(--brand)" }}
                >
                    Give now
                </a>
            </div>

            <section className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Impact</h3>
                    <p className="mt-2 text-sm text-muted">Your gift supports medications, lab testing, and essential clinic operations.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Corporate</h3>
                    <p className="mt-2 text-sm text-muted">We welcome sponsorships and matching gifts to amplify impact.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Questions</h3>
                    <p className="mt-2 text-sm text-muted">Contact us at haven.free.clinic@yale.edu about giving options.</p>
                </div>
            </section>
        </div>
    );
}
