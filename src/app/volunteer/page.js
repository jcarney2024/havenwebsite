export const metadata = {
    title: "Volunteer | HAVEN Free Clinic",
    description:
        "Learn how to volunteer with HAVEN Free Clinic across disciplines and support patient care.",
};

export default function VolunteerPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Leadership Recruitment Timeline</h1>
            
            <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Applications Open</h3>
                    <p className="mt-2 text-sm text-muted">11/12 - 11/24</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Info Sessions</h3>
                    <p className="mt-2 text-sm text-muted">Must attend one:</p>
                    <ul className="mt-2 text-xs text-muted space-y-1">
                        <li>11/14 @ 4:00-5:00 PM EST</li>
                        <li>11/18 @ 8:30-9:30 PM EST</li>
                        <li>11/23 @ 2:00-3:00 PM EST</li>
                    </ul>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Interviews</h3>
                    <p className="mt-2 text-sm text-muted">12/04 - 12/15</p>
                </div>
                <div className="rounded-xl border border-default p-6 bg-surface">
                    <h3 className="font-semibold">Final Selections</h3>
                    <p className="mt-2 text-sm text-muted">12/17</p>
                </div>
            </section>

            <section className="mt-8 rounded-xl border border-default p-6 bg-surface">
                <h3 className="font-semibold">Mandatory Training</h3>
                <p className="mt-2 text-sm text-muted">01/25 [In-Person]</p>
            </section>

            <div className="mt-8 flex gap-3">
                <a
                    href="https://airtable.com/appvvlDJLmGfN0340/pagNLIAaYIfJhuCzU/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
                    style={{ backgroundColor: "var(--brand)" }}
                >
                    Apply Here!
                </a>
                <a
                    href="https://www.havenfreeclinic.com/s/HAVEN-Board-Director-Positions-2026-2027-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5"
                >
                    Department Descriptions
                </a>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
                <p className="text-black/70 mb-6">Applications are open for the following departments:</p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Executive Director [EXEC]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Behavioral Health Department [BVHD]</span> (0)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Community Relations & Advocacy [CRAD]</span> (1)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Clinical Advisor [PCAR]</span> (3)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Education [EDUC]</span> (0)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Faculty Relations [FCLR]</span> (1)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Finance & Development [FIND]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Infections & Chronic Disease Department [ICDD]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Interpretation & Diversity [INTP]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">IT & Communications [ITCM]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Laboratory [LABR]</span> (1)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Longitudinal Care Coordination [LCCN]</span> (4)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Medical Debt Insurance Counseling [MDIC]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Patient Services [PATS]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Pharmacy [PHAM]</span> (3)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Public Relations [PUBR]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Quality Assurance & Improvement [QAQI]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Referrals [REFF]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Sexual and Reproductive Health [SRHD]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Social Services [SOSE]</span> (1)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Student Relations [SRR]</span> (2)</p>
                    </div>
                    <div className="rounded-xl border border-default p-4 bg-surface">
                        <p className="text-sm"><span className="font-semibold">Vaccine Administration [VADM]</span> (2)</p>
                    </div>
                </div>
            </section>

            <section className="mt-12 rounded-xl border border-default p-8 bg-surface">
                <h2 className="text-2xl font-semibold">Interested in volunteering?</h2>
                <p className="mt-4 text-black/70">
                    If you're interested in volunteering with us for the spring 2026 semester, please reach out to <a href="mailto:hfc.recruitment@yale.edu" className="underline" style={{ color: "var(--brand)" }}>hfc.recruitment@yale.edu</a>. Thank you for your interest in supporting our organization!
                </p>
            </section>
        </div>
    );
}
