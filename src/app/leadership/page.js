export const metadata = {
  title: "Leadership | HAVEN Free Clinic",
  description: "Meet the student leadership team and advisors guiding the HAVEN Free Clinic.",
};

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Leadership</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        HAVEN Free Clinic is led by dedicated students across multiple health professional programs, supported by experienced faculty advisors.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Executive Board</h2>
        <p className="text-black/70 max-w-prose">
          Our executive team coordinates clinic operations, quality improvement, and strategic planning across all departments.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Department Directors</h2>
        <p className="text-black/70 max-w-prose">
          Each clinical and operational department is led by student directors who oversee service delivery and team coordination.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Faculty Advisors</h2>
        <p className="text-black/70 max-w-prose">
          Our faculty advisors provide clinical supervision, mentorship, and strategic guidance to ensure high-quality patient care.
        </p>
      </section>
    </div>
  );
}
