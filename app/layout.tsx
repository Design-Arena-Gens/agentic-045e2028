import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "MQL4 Knowledge Hub",
  description: "Interactive guide breaking down the MQL4 language, trading strategies, and platform tooling for algorithmic traders.",
  metadataBase: new URL("https://agentic-045e2028.vercel.app"),
  openGraph: {
    title: "MQL4 Knowledge Hub",
    description: "Interactive guide breaking down the MQL4 language, trading strategies, and platform tooling for algorithmic traders.",
    url: "https://agentic-045e2028.vercel.app",
    siteName: "MQL4 Knowledge Hub",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MQL4 Knowledge Hub",
    description: "Interactive guide breaking down the MQL4 language, trading strategies, and platform tooling for algorithmic traders.",
    creator: "@agentic"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased", "bg-grid-light")}>{children}</body>
    </html>
  );
}
