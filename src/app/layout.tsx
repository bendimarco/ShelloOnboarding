import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shello Onboarding",
  description: "Onboarding experience for wearable microphone setup",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}