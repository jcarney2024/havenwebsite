export const metadata = {
    title: "For Patients | HAVEN Free Clinic",
    description:
        "Services, eligibility, hours, and resources for patients at HAVEN Free Clinic.",
};

export default function PatientsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">For Patients</h1>
            <p className="mt-4 text-black/70 max-w-prose">
                We provide primary care, wellness education, and support in obtaining health coverage for uninsured adults in New Haven.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">Hours</h2>
                    <p className="mt-2 text-sm text-muted">Saturdays from 8:30am to 12:00pm.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">Location</h2>
                    <p className="mt-2 text-sm text-muted">Yale Physicians Building, 800 Howard Ave, Floor 1, New Haven, CT 06519.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">Contact</h2>
                    <p className="mt-2 text-sm text-muted">Patients: (203) 200-0673 • Fax: (203) 436-9928 • Email: haven.free.clinic@yale.edu</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h2 className="font-semibold">Resources</h2>
                    <ul className="mt-2 text-sm text-black/70 list-disc pl-5 space-y-1">
                        <li>
                            <a className="underline" style={{ color: "var(--brand)" }} href="https://www.havenfreeclinic.com/for-patients-1" target="_blank" rel="noopener noreferrer">
                                Patient information on current site
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <section className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Eligibility</h3>
                    <p className="mt-2 text-sm text-muted">We serve uninsured adults living in the New Haven area. If you have questions about eligibility, please call us.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">What to bring</h3>
                    <ul className="mt-2 text-sm text-muted list-disc pl-5 space-y-1">
                        <li>Photo ID, if available</li>
                        <li>List of medications and allergies</li>
                        <li>Any recent medical records</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
