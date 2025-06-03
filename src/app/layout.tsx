import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PostHogProvider } from './providers'
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Plüm - ease your life",
  description: "Garde d'enfants, ménage-linge, garde d'animaux domestiques...Plüm adoucit votre journée.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <PostHogProvider>
      <body className={inter.className}>{children}</body>
      </PostHogProvider>
      
    </html>
  )
} 