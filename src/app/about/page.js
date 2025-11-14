export const metadata = {
    title: "About | HAVEN Free Clinic",
    description:
        "Learn about HAVEN Free Clinic's mission to provide high-quality, free health care to uninsured adults in New Haven.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Our Mission</h1>
            <p className="mt-4 text-black/70 max-w-prose">
                We provide access to comprehensive, high-quality healthcare, free of cost to the New Haven community. Our student-run model brings together learners from medicine, nursing, physician associate programs, and public health to deliver care while advancing community health.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">What we do</h2>
                    <p className="mt-2 text-sm text-muted">Primary care, wellness education, and assistance obtaining health coverage.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">Who we serve</h2>
                    <p className="mt-2 text-sm text-muted">Uninsured adults in New Haven, regardless of immigration status or ability to pay.</p>
                </div>
            </div>

            <section className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Values</h3>
                    <p className="mt-2 text-sm text-muted">Compassion, equity, partnership, and education are at the core of our work.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Partners</h3>
                    <p className="mt-2 text-sm text-muted">We partner with Yale University and local organizations to expand access to care.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Leadership</h3>
                    <p className="mt-2 text-sm text-muted">Student leaders and advisors guide clinic operations and quality improvement.</p>
                </div>
            </section>
        </div>
    );
}
