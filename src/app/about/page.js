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
                We aim to serve uninsured adults in New Haven by providing safe, high-quality primary care, wellness education, and social services, and acting as an avenue toward more sustainable healthcare destinations.
            </p>
            <p className="mt-4 text-black/70 max-w-prose">
                HAVEN also hopes to educate Yale students about the value of working in healthcare, to allow students to gain experience in community health through partnership with patients and professionals, to promote continuous quality improvement through scholarly efforts, and to expose students to patient care management with limited resources.
            </p>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="mt-4 text-black/70 max-w-prose">
                    Every adult living in New Haven will have access to comprehensive quality healthcare.
                </p>
                <p className="mt-2 text-black/70 max-w-prose">
                    Students will develop a lifelong commitment to valuing social context and community needs in their future work with patients and communities.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Who We Serve</h2>
                <p className="mt-4 text-black/70 font-semibold">To be a patient, you must*:</p>
                <ul className="mt-2 text-black/70 list-disc pl-6 space-y-1">
                    <li>Resident of the Greater New Haven Area.</li>
                    <li>Between the ages of 18 and 65 years.</li>
                    <li>Have no active medical coverage/insurance.</li>
                    <li>Have none of the following active medical concerns: insulin management, HIV/AIDS, pregnancy.</li>
                </ul>
                <p className="mt-4 text-sm text-black/60">*Please note that additional criteria may apply and will be assessed prior to acceptance as a new patient.</p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">How We Operate</h2>
                <p className="mt-4 text-black/70 max-w-prose">
                    HAVEN operates on Saturdays (9am-12pm) out of the Yale Physicians Building. Patients are seen by teams of senior and junior students with guidance from faculty preceptors. Currently, we see an average of 70 patients per week.
                </p>
                <p className="mt-4 text-black/70 max-w-prose">
                    We are able to do this work through generous contributions from students, faculty, and philanthropic donors. We are especially fortunate to have the support of the <a href="/endowment" className="underline" style={{ color: "var(--brand)" }}>Dr. John B. Goetsch Endowment</a>, which has provided incredible support to the clinic for many years.
                </p>
            </section>
        </div>
    );
}
