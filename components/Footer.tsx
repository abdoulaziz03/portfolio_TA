import { Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1b2e] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">
              <span className="text-white">TA</span>
              <span className="text-blue-500">.</span>
            </span>
            <span className="text-slate-500 text-sm">
              © {year} Touré Abdoul-Aziz. Tous droits réservés.
            </span>
          </div>

          {/* Built with */}
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Construit avec
            <Heart size={12} className="text-red-500/70" />
            en Next.js &amp; Tailwind CSS
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abdoulaziz03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="mailto:tabdoulaziz188@gmail.com"
              className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
