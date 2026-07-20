import '../index.css'

export const metadata = {
  title: 'Al-Tanwir Facilities Management',
  description: 'Leading provider of sustainable, integrated facilities management solutions across Commercial, Industrial, and Residential sectors in the UAE.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-body selection:bg-emerald-brand/20 selection:text-emerald-deep">
        {children}
      </body>
    </html>
  )
}
