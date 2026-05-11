import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saywise — Resume is dead. Your work isn't.",
  description:
    "Saywise is a Resume 2.0 platform. Show the real context, depth, and thinking behind your work — in your own voice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="minimal"
      data-font="default"
      data-corners="rounded"
    >
      <body>{children}</body>
    </html>
  );
}
