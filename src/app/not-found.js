import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-5xl font-semibold tracking-tight">404</h1>
            <p className="mt-4 text-black/70">Sorry, the page you’re looking for couldn’t be found.</p>
            <div className="mt-8">
                <Link href="/" className="inline-flex h-11 items-center justify-center rounded-full px-6 text-white" style={{ backgroundColor: "var(--brand)" }}>
                    Back to home
                </Link>
            </div>
        </div>
    );
}
