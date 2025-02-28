import "./globals.css";

export const metadata = {
  title: "NexusBank Dashboard",
  description: "Modern banking dashboard with real-time analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
