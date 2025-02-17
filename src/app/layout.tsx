import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wearable Setup",
  description: "Onboarding experience for wearable microphone setup",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background-color: black;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-black`}>
        {children}
      </body>
    </html>
  )
}