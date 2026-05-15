import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KeyCal — API Key Expiration Calendar Sync',
  description: 'Scan codebases and cloud providers for API keys, extract expiration dates, and sync renewal reminders to your calendar automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="091d6725-2c32-4c54-8e6e-e9af1b211bec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
