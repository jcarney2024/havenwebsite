export const metadata = {
    title: "For Patients | HAVEN Free Clinic",
    description:
        "Services, eligibility, hours, and resources for patients at HAVEN Free Clinic.",
};

export default function PatientsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Our Services</h1>
            <p className="mt-4 text-black/70 max-w-prose">
                Welcome to Haven Free Clinic, where we are committed to providing comprehensive and compassionate healthcare services to our community. Below are the various services we offer to address the diverse needs of our patients.
            </p>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
                <p className="text-black/70 max-w-prose">
                    To book an appointment:
                </p>
                <p className="mt-2 text-black/70 max-w-prose">
                    Please call <a href="tel:12032000673" className="underline" style={{ color: "var(--brand)" }}>(203) 200-0673</a> and leave a message with your name and phone number. Someone will return your call within 24 hours.
                </p>
                <p className="mt-2 text-black/70 max-w-prose">
                    Both English and Spanish speakers are available to help you make an appointment.
                </p>
            </section>

            <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Patient Care</h3>
                    <p className="mt-2 text-sm text-muted">Our clinical teams provide a wide range of primary care services for our patients, including: annual physical examinations, screening for hypertension, hyperlipidemia, diabetes, HIV, and tuberculosis, routine pelvic examinations, urgent primary care and management of chronic conditions.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Behavioral Health</h3>
                    <p className="mt-2 text-sm text-muted">The department raises awareness, de-stigmatizes, and help patients manage common behavioral health issues, and connects patients to relevant community-based resources. We also conduct screenings for depression and substance use disorders.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Education</h3>
                    <p className="mt-2 text-sm text-muted">The department provides one-on-one counseling regarding behavioral changes, illness, and general wellness. We provide counseling and resources about diet and exercise, hypertension, high cholesterol, weight management, and smoking cessation.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Laboratory</h3>
                    <p className="mt-2 text-sm text-muted">We provide a fully functioning on-site laboratory that does blood draws, urine testing, and vaccinations. Patients are often referred to the laboratory by their clinical team for diagnostic and screening tests. Patients will be notified of any abnormal test results.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Interpreting & Diversity</h3>
                    <p className="mt-2 text-sm text-muted">Interpreters at HAVEN greet patients when they are called in for their medical appointment and stay with them until the end of the visit. We always have Spanish-speaking interpreters available, and we can provide interpreters for many other languages as the need arises.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Latent TB</h3>
                    <p className="mt-2 text-sm text-muted">We offer patients treatment for latent tuberculosis (TB) infection through our Latent Tuberculosis Initiative (LTBI). Patients enrolled in LTBI are paired with a TB Advocate, who provides emotional support, education, and monthly clinical monitoring during treatment.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Medical Debt & Insurance Counseling</h3>
                    <p className="mt-2 text-sm text-muted">We can help you in securing free or low-cost care. We provide application assistance for Medicare, Medicaid, and YNHH Financial Assistance programs. If you receive any bills from services provided at or referred to by HAVEN Free Clinic, please contact MDIC at <a href="mailto:haven.billing@yale.edu" className="underline" style={{ color: "var(--brand)" }}>haven.billing@yale.edu</a> or by calling the clinic to schedule an appointment.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Medical-Legal Partnership</h3>
                    <p className="mt-2 text-sm text-muted">Law student volunteers offer legal referral services to patients at HAVEN in partnership with New Haven Legal Assistance Association. We screen all new patients at HAVEN for legal issues as well as meet with patients in pre-scheduled appointments to address any legal issue they would like to further discuss.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Medication Access</h3>
                    <p className="mt-2 text-sm text-muted">The department provides information on medications, alternate low-cost options, and assistance with applications for Pharmaceutical Assistance Programs.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Referrals</h3>
                    <p className="mt-2 text-sm text-muted">We provide referrals to specialty services and diagnostic testing, including: women's health services, diagnostic testing, medical & surgical specialty appointments, podiatry and ophthalmology.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Sexual & Reproductive Health</h3>
                    <p className="mt-2 text-sm text-muted">We offer birth control, pregnancy, and sexually transmitted infection resources and counseling options to both women and men. Patients can have stand-alone appointments with the Sexual & Reproductive Health Department or they can be referred by other clinical teams.</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Social Services</h3>
                    <p className="mt-2 text-sm text-muted">We treat patients as a whole, helping with a variety of issues including medical debt, medical insurance, food insecurity, housing insecurity, unemployment, financial arrangements for specialty care appointments, other social services, such as English as a Second Language (ESL) courses, clothing resources, and more.</p>
                </div>
            </section>

            <section className="mt-12 rounded-xl border border-default p-8 bg-surface">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="mt-4 text-black/70">
                    For assistance or inquiries about our services, please contact us at <a href="mailto:haven.free.clinic@yale.edu" className="underline" style={{ color: "var(--brand)" }}>haven.free.clinic@yale.edu</a> or call <a href="tel:12032000673" className="underline" style={{ color: "var(--brand)" }}>(203) 200-0673</a>. For medical emergencies, please call 911. Our team is here to help you navigate our offerings and address any questions you may have.
                </p>
            </section>
        </div>
    );
}
