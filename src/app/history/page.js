export const metadata = {
  title: "History | HAVEN Free Clinic",
  description: "Learn about the history and founding of the HAVEN Free Clinic.",
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Our History</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        The HAVEN Free Clinic was founded to provide access to high-quality, compassionate healthcare for uninsured adults in the New Haven community. Learn about our journey and milestones.
      </p>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Founding & Early Years</h2>
        <p className="mt-4 text-black/70 max-w-prose">
          Information about the clinic's founding and development will be added here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Key Milestones</h2>
        <p className="mt-4 text-black/70 max-w-prose">
          Major achievements and milestones in the clinic's history will be highlighted here.
        </p>
      </section>
    </div>
  );
}
