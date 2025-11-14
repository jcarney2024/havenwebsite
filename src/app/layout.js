import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Announcement from "@/components/Announcement";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HAVEN Free Clinic",
  description: "High-quality health care, free of charge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {/* Announcement banner */}
        <Announcement />
        <Header />

        <main className="min-h-[calc(100vh-12rem)]">{children}</main>

        <footer id="footer" className="mt-24 border-t border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-base mb-2">Contact</h3>
              <ul className="space-y-1 text-black/80">
                <li>Email: <a className="underline" style={{ color: "var(--brand)" }} href="mailto:haven.free.clinic@yale.edu">haven.free.clinic@yale.edu</a></li>
                <li>Patients: <a className="underline" style={{ color: "var(--brand)" }} href="tel:12032000673">(203) 200-0673</a></li>
                <li>Fax: (203) 436-9928</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">Location</h3>
              <p className="text-black/80">
                Yale Physicians Building<br />800 Howard Avenue, Floor 1<br />New Haven, CT 06519
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">Hours</h3>
              <p className="text-black/80">Saturday from 8:30am to 12:00pm.</p>
              <div className="mt-4">
                <a href="/volunteer" className="inline-flex h-9 items-center rounded-full border border-black/10 px-4 hover:bg-black/5">Volunteer</a>
              </div>
            </div>
          </div>
          <div className="border-t border-black/10 py-4 text-center text-xs text-black/60">© {new Date().getFullYear()} HAVEN Free Clinic</div>
        </footer>
      </body>
    </html>
  );
}

// Client component version imported above
