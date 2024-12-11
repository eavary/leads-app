import { Providers } from '@/providers'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Alma: Lead Form",
  description: "Submit your information to get in touch with us.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>
  )
}
