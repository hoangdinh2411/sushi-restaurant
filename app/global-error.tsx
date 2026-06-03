"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <section className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4">
          <p className="text-primary/40 text-sm tracking-widest uppercase">500</p>
          <h1 className="text-5xl lg:text-7xl font-semibold">Något gick fel</h1>
          <p className="text-primary/60 max-w-md">
            {error.message || "Ett oväntat fel inträffade. Försök igen."}
          </p>
          <button onClick={reset} className="header-button mt-4">
            Försök igen
          </button>
        </section>
      </body>
    </html>
  );
}
