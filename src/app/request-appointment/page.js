export const metadata = {
  title: "Request an Appointment | HAVEN Free Clinic",
  description: "Request an appointment at the HAVEN Free Clinic using our secure form.",
};

export default function RequestAppointmentPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Request an Appointment</h1>
      <p className="mt-4 text-muted">Please complete the form below to request an appointment. We will contact you as soon as possible.</p>
      <div className="mt-8 w-full overflow-hidden rounded-xl ring-1 ring-default" style={{ aspectRatio: "4 / 3" }}>
        <iframe
          className="h-full w-full"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=u76M3Tkh-E20EU4-h6vrXLja4_b5zV1HpbiGdKWHt1hURUUzUFdXTEhMNzUwTFMzV0xLRERXMkRHSy4u&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          style={{ border: 'none' }}
          allowFullScreen
          title="HAVEN Free Clinic Appointment Request"
        />
      </div>
    </div>
  );
}
