import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Touré Abdoul-Aziz | Data Scientist & Développeur Web',
  description:
    'Portfolio de Touré Abdoul-Aziz — Data Scientist, Data Engineer et Développeur Web. Étudiant en Master Architecte IA à Paris.',
  keywords: ['Data Science', 'IA', 'Python', 'Next.js', 'Développeur Web', 'Pipeline ETL', 'Portfolio'],
  authors: [{ name: 'Touré Abdoul-Aziz' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
