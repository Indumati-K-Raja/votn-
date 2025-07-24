import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Voice of Tamilnadu - Shaping the Future: Together for Change",
  description:
    "A community-centric, awareness-driven, and advocacy-focused platform raising public awareness about social, economic, and political issues in Tamil Nadu.",
  keywords: "Tamil Nadu, community development, social change, advocacy, empowerment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
