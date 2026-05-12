import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Admin layout",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      {children}
    </main>
  );
}
