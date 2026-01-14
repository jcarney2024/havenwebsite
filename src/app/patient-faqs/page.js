export const metadata = {
  title: "Patient FAQs | HAVEN Free Clinic",
  description: "Frequently asked questions for patients at HAVEN Free Clinic.",
};

export default function PatientFAQsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Patient FAQs</h1>
      <p className="mt-4 text-black/70 max-w-prose">
        Find answers to common questions about our services, eligibility, and how to access care.
      </p>

      <section className="mt-12 space-y-6">
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Who is eligible for care at HAVEN?</h3>
          <p className="mt-2 text-sm text-muted">We serve uninsured adults ages 18-65 living in the Greater New Haven area. Some additional criteria may apply.</p>
        </div>
        
        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">What services do you provide?</h3>
          <p className="mt-2 text-sm text-muted">We provide primary care services, screenings, wellness education, behavioral health support, and assistance with insurance enrollment and specialty care referrals.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">When are you open?</h3>
          <p className="mt-2 text-sm text-muted">We are open Saturdays from 8:30am to 12:00pm at the Yale Physicians Building, 800 Howard Avenue, Floor 1.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">How do I schedule an appointment?</h3>
          <p className="mt-2 text-sm text-muted">Call (203) 200-0673 and leave a message with your name and phone number. We'll return your call within 24 hours. Both English and Spanish speakers are available.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">What should I bring to my appointment?</h3>
          <p className="mt-2 text-sm text-muted">Please bring a photo ID (if available), a list of current medications and allergies, and any recent medical records you have.</p>
        </div>

        <div className="rounded-xl border border-default p-6 bg-surface">
          <h3 className="font-semibold">Is there a cost for services?</h3>
          <p className="mt-2 text-sm text-muted">All services at HAVEN Free Clinic are provided free of charge to eligible patients.</p>
        </div>
      </section>
    </div>
  );
}
