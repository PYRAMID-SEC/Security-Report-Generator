import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Security Report Generator",
  description: "Turn vulnerability notes into structured security reports.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
