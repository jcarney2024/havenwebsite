import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative isolate overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom, color-mix(in oklab, var(--brand) 10%, transparent), transparent)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
              High-quality health care, free of charge.
            </h1>
            <p className="mt-4 text-base/7 text-black/70 max-w-prose">
              The HAVEN Free Clinic is a student-run primary care clinic that partners with Yale University to provide the New Haven community access to comprehensive, high-quality health care free of charge.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/for-patients"
                className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white shadow focus:outline-none focus-visible:ring-2"
                style={{ backgroundColor: "var(--brand)" }}
              >
                For Patients
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5"
              >
                Volunteer
              </Link>
              <a
                href="https://yale.imodules.com/s/1667/52/cart/cart.aspx?sid=1667&gid=52&pgid=5767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-black/90 px-6 text-white hover:bg-black"
              >
                Donate
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full rounded-xl ring-1 ring-black/10" style={{ background: "color-mix(in oklab, var(--brand) 10%, transparent)" }} aria-hidden />
        </div>
      </section>

      {/* Content sections */}
      <section id="mission" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-muted">We provide access to comprehensive, high-quality healthcare, free of cost to the New Haven community.</p>
        </div>
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">For Patients</h3>
            <p className="mt-2 text-sm text-muted">Information about services, hours, and eligibility.</p>
            <Link className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="/patients">Learn more</Link>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Volunteer</h3>
            <p className="mt-2 text-sm text-muted">Join a multi-disciplinary team serving New Haven.</p>
            <Link className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="/volunteer">Get involved</Link>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Donate</h3>
            <p className="mt-2 text-sm text-muted">Every contribution supports patient care.</p>
            <a className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="https://yale.imodules.com/s/1667/52/cart/cart.aspx?sid=1667&gid=52&pgid=5767" target="_blank" rel="noopener noreferrer">Give now</a>
          </div>
          <div className="rounded-xl border border-default p-6 bg-surface">
            <h3 className="font-semibold">Location & Hours</h3>
            <p className="mt-2 text-sm text-muted">Yale Physicians Building, 800 Howard Ave, Floor 1. Saturday 8:30am–12:00pm.</p>
            <Link className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="#footer">Details</Link>
          </div>
        </div>
      </section>


      {/* Request appointment CTA moved to header */}

      <section id="patients" className="py-16" style={{ background: "color-mix(in oklab, var(--brand) 6%, transparent)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Care for Uninsured Adults</h2>
            <p className="mt-2 text-muted">We provide primary care, wellness education, and assistance in securing health care for uninsured adults in New Haven.</p>
            <Link className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="/for-patients">Patient resources</Link>
          </div>
          <div className="rounded-xl border border-default h-56 bg-surface" aria-hidden />
        </div>
      </section>

      <section id="volunteer" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
          <div className="rounded-xl border border-default h-56 bg-surface" aria-hidden />
          <div>
            <h2 className="text-2xl font-semibold">Volunteer with HAVEN</h2>
            <p className="mt-2 text-muted">Students from medicine, nursing, PA, and public health collaborate to deliver care and learn about community health.</p>
            <a className="mt-4 inline-flex underline underline-offset-4" style={{ color: "var(--brand)" }} href="https://www.havenfreeclinic.com/volunteer-1" target="_blank" rel="noopener noreferrer">See opportunities</a>
          </div>
        </div>
      </section>
    </div>
  );
}
