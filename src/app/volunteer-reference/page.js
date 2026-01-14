export const metadata = {
  title: "Volunteer Reference | HAVEN Free Clinic",
  description: "Reference materials and resources for HAVEN volunteers.",
};

export default function VolunteerReferencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Volunteer Reference</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Access reference materials, protocols, and resources for current HAVEN volunteers.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Clinical Protocols</h3>
          <p className="mt-2 text-sm text-muted">Standard protocols and clinical guidelines for patient care.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Department Resources</h3>
          <p className="mt-2 text-sm text-muted">Department-specific materials and training resources.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Volunteer Handbook</h3>
          <p className="mt-2 text-sm text-muted">Comprehensive guide for all HAVEN volunteers.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Contact Information</h3>
          <p className="mt-2 text-sm text-muted">Directory of department directors and key contacts.</p>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-default p-8 bg-surface">
        <h2 className="text-2xl font-semibold">For Current Volunteers</h2>
        <p className="mt-4 text-black/70">
          If you need access to specific volunteer resources or have questions, please contact your department director or reach out to <a href="mailto:haven.free.clinic@yale.edu" className="underline" style={{ color: "var(--brand)" }}>haven.free.clinic@yale.edu</a>.
        </p>
      </section>
    </div>
  );
}
