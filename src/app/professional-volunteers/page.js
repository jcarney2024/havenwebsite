export const metadata = {
  title: "Professional Volunteers | HAVEN Free Clinic",
  description: "Information for licensed professional volunteers interested in supporting the HAVEN Free Clinic.",
};

export default function ProfessionalVolunteersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Professional Volunteers</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Professional volunteers act as volunteer attending clinicians at HAVEN, and are integral to the function and success of the clinic. Faculty preceptors guide teams of students in the evaluation and treatment of patients, giving them an opportunity to mentor students across the disciplines of medicine.
      </p>
      <p className="mt-4 text-black/70 max-w-prose">
        In order to become a medical preceptor at the HAVEN Free Clinic, we ask that you complete a credentialing and privileging process, and provide a recommendation from a current Yale faculty member. If necessary, we will work with you to find a Yale faculty member that can provide a recommendation on your behalf. Please email <a href="mailto:haven.free.clinic@yale.edu" className="underline" style={{ color: "var(--brand)" }}>haven.free.clinic@yale.edu</a> for more information.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Volunteer FAQs</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">What are HAVEN's hours and what are my hours as a medical preceptor?</h3>
            <p className="mt-2 text-sm text-muted">HAVEN operates on Saturday mornings from 8:30am to 12:00pm. Medical preceptors typically arrive at 8:30am and stay through the clinic session.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">What is the medical preceptor application process like?</h3>
            <p className="mt-2 text-sm text-muted">After expressing interest, you'll complete a credentialing and privileging process and provide a recommendation from a current Yale faculty member. Our team will guide you through each step.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">How many Saturdays a year should I volunteer?</h3>
            <p className="mt-2 text-sm text-muted">We appreciate any commitment you can make. Many preceptors volunteer once or twice a month, but flexibility is welcome based on your availability.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Who will my fellow Medical Preceptor colleagues be?</h3>
            <p className="mt-2 text-sm text-muted">You'll work alongside Yale faculty and community physicians who are committed to teaching and serving the New Haven community.</p>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">I am a trained specialist in an area other than primary care. Can I still volunteer?</h3>
            <p className="mt-2 text-sm text-muted">Yes! While our focus is primary care, specialists can provide valuable consultation and mentorship. Please reach out to discuss how your expertise can support our patients and students.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
