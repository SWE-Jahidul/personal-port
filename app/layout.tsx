import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Jahidul Islam - Frontend Developer",
  description:
    "Experienced frontend developer specializing in React, Next.js, and modern web technologies. Creating beautiful, performant user experiences.",
  keywords: ["frontend developer", "react developer", "next.js", "typescript", "web development", "ui/ux"],
  authors: [{ name: "Jahidul Islam" }],
  creator: "Jahidul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahidulislam.dev",
    title: "Jahidul Islam - Frontend Developer",
    description: "Experienced frontend developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Jahidul Islam Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahidul Islam - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahidul Islam - Frontend Developer",
    description: "Experienced frontend developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@jahidulislam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${jetbrainsMono.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
