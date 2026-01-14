export const metadata = {
  title: "Education Guides | HAVEN Free Clinic",
  description: "Health education resources and guides for patients.",
};

export default function EducationGuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Education Guides</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Access health education materials and resources to support your wellness journey.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Chronic Disease Management</h3>
          <p className="mt-2 text-sm text-muted">Information about managing diabetes, hypertension, and other chronic conditions.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Nutrition & Exercise</h3>
          <p className="mt-2 text-sm text-muted">Guides for healthy eating, physical activity, and weight management.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Preventive Care</h3>
          <p className="mt-2 text-sm text-muted">Screening recommendations and preventive health information.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Mental Health</h3>
          <p className="mt-2 text-sm text-muted">Resources for managing stress, depression, and anxiety.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Smoking Cessation</h3>
          <p className="mt-2 text-sm text-muted">Support and strategies for quitting tobacco use.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Medication Information</h3>
          <p className="mt-2 text-sm text-muted">Understanding your medications and how to take them safely.</p>
        </div>
      </section>
    </div>
  );
}
