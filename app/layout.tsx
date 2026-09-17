import type { Metadata, Viewport } from "next"
import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title:
    "Four Pillars Business Services | Connecting Markets. Creating Opportunities. Scaling Businesses.",

  description:
    "Four Pillars Business Services is a Dubai-based cross-border consulting and business development firm helping companies, investors, institutions and entrepreneurs identify opportunities, enter new markets and build sustainable international growth.",

  keywords: [
    "Four Pillars Business Services",
    "Dubai business consulting",
    "Dubai business advisory",
    "cross-border business",
    "business development Dubai",
    "market entry",
    "strategic partnerships",
    "real estate Dubai",
    "GCC business",
    "international business expansion",
  ],

  icons: {
    icon: "/icon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: "#063B2D",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}