import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shello Onboarding",
  description: "Set up and start using Shello.",
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