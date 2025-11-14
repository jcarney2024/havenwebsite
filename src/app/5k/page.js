export const metadata = {
    title: "¡Anda! 5K | HAVEN Free Clinic",
    description: "Learn about the upcoming ¡Anda! 5K supporting the HAVEN Free Clinic.",
};

export default function FiveKPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">¡Anda! 5K</h1>
            <p className="mt-4 text-muted">
                Join us for the ¡Anda! 5K! Proceeds support patient care at the HAVEN Free Clinic. Check back soon for registration details, route maps, and sponsorship opportunities.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Date & time</h3>
                    <p className="mt-2 text-sm text-muted">TBD</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Location</h3>
                    <p className="mt-2 text-sm text-muted">New Haven, CT</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Get involved</h3>
                    <p className="mt-2 text-sm text-muted">Volunteer, sponsor, or donate to support the event.</p>
                </div>
            </div>
        </div>
    );
}
