export const metadata = {
  title: "Resources | HAVEN Free Clinic",
  description: "Additional health and community resources for patients.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Patient Resources</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Find helpful resources for healthcare access, social services, and community support in the New Haven area.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Healthcare Access</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Insurance Enrollment</h3>
            <p className="mt-2 text-sm text-muted">Information about Medicare, Medicaid, and marketplace insurance options.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Prescription Assistance</h3>
            <p className="mt-2 text-sm text-muted">Programs to help with medication costs and access.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Community Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Food Security</h3>
            <p className="mt-2 text-sm text-muted">Local food banks and nutrition assistance programs.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Housing Support</h3>
            <p className="mt-2 text-sm text-muted">Resources for housing assistance and stability.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Legal Services</h3>
            <p className="mt-2 text-sm text-muted">Free and low-cost legal assistance in the New Haven area.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">ESL & Education</h3>
            <p className="mt-2 text-sm text-muted">English language classes and adult education programs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
