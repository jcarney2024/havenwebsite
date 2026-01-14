export const metadata = {
  title: "News & Publications | HAVEN Free Clinic",
  description: "Read the latest news, updates, and publications from the HAVEN Free Clinic.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">News & Publications</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Stay up to date with the latest news, research, and publications from HAVEN Free Clinic.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Recent News</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Latest Updates</h3>
            <p className="mt-2 text-sm text-muted">Check back soon for news about clinic events, achievements, and community impact.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Publications</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Research & Reports</h3>
            <p className="mt-2 text-sm text-muted">Student and faculty publications related to HAVEN's work and community health research.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
