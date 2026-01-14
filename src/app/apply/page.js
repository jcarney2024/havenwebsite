export const metadata = {
  title: "Apply | HAVEN Free Clinic",
  description: "Apply for student leadership and volunteer roles at the HAVEN Free Clinic.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Apply to Volunteer</h1>
      <p className="mt-4 text-black/70">
        Interested in joining HAVEN? We host recruitment cycles for student leadership and clinic roles. Explore departments and submit your application using the links below.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://airtable.com/appvvlDJLmGfN0340/pagNLIAaYIfJhuCzU/form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Apply now
        </a>
        <a
          href="/volunteer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5"
        >
          Learn about roles
        </a>
        <a
          href="https://www.havenfreeclinic.com/s/HAVEN-Board-Director-Positions-2026-2027-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5"
        >
          Department descriptions (PDF)
        </a>
      </div>
    </div>
  );
}
