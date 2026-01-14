export const metadata = {
  title: "Endowment | HAVEN Free Clinic",
  description: "Learn about the Dr. John B. Goetsch Endowment and how it supports the HAVEN Free Clinic.",
};

export default function EndowmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Dr. John B. Goetsch Endowment</h1>
      <p className="mt-4 text-black/70">
        The Goetsch Endowment provides vital support for clinic operations and patient care. We are grateful for the enduring commitment of our partners and donors in sustaining access to high-quality, compassionate care.
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href="https://yale.imodules.com/s/1667/52/cart/cart.aspx?sid=1667&gid=52&pgid=5767"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Donate
        </a>
        <a
          href="mailto:haven.free.clinic@yale.edu?subject=Endowment%20Inquiry"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}
