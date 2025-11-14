export const metadata = {
    title: "Volunteer | HAVEN Free Clinic",
    description:
        "Learn how to volunteer with HAVEN Free Clinic across disciplines and support patient care.",
};

export default function VolunteerPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Volunteer with HAVEN</h1>
            <p className="mt-4 text-black/70 max-w-prose">
                Join students from medicine, nursing, PA, and public health to provide care and learn about community health.
            </p>
            <div className="mt-8">
                <a
                    href="https://www.havenfreeclinic.com/volunteer-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
                    style={{ backgroundColor: "var(--brand)" }}
                >
                    See opportunities
                </a>
            </div>

            <section className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Clinic roles</h3>
                    <p className="mt-2 text-sm text-muted">Clinical, operations, interpretation, patient navigation, and more.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Time commitment</h3>
                    <p className="mt-2 text-sm text-muted">Saturday mornings with flexible scheduling across roles.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Who can volunteer</h3>
                    <p className="mt-2 text-sm text-muted">Students across Yale’s health professional schools and community partners.</p>
                </div>
            </section>
        </div>
    );
}
