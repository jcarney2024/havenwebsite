export const metadata = {
  title: "Community Partners | HAVEN Free Clinic",
  description: "Learn about our community partners and collaborations.",
};

export default function CommunityPartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Community Partners</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        We work closely with Yale University and local organizations to expand access to care and support the New Haven community.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Yale University</h3>
          <p className="mt-2 text-sm text-muted">Partnership with Yale School of Medicine, School of Nursing, PA Program, and School of Public Health.</p>
        </div>
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Yale-New Haven Hospital</h3>
          <p className="mt-2 text-sm text-muted">Collaboration for referrals and specialty care services.</p>
        </div>
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Community Organizations</h3>
          <p className="mt-2 text-sm text-muted">Partnerships with local non-profits and community health organizations.</p>
        </div>
      </section>
    </div>
  );
}
