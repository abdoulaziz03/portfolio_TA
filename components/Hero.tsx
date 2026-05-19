'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, Mail, ChevronDown } from 'lucide-react'

const TITLES = [
  'Data Scientist',
  'Data Engineer',
  'Développeur Web & IA',
  'Étudiant Master IA',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TITLES[titleIdx]
    const speed = deleting ? 40 : 90

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 2200)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setTitleIdx((prev) => (prev + 1) % TITLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#050b1a]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible pour des opportunités
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Touré{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Abdoul-Aziz
              </span>
            </h1>

            {/* Typing animation */}
            <div className="text-xl sm:text-2xl text-slate-300 mb-6 h-9 font-light">
              <span>{displayed}</span>
              <span className="text-blue-400 animate-blink font-light">|</span>
            </div>

            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              Passionné par la Data Science et l'IA, je construis des pipelines de données
              robustes, des modèles intelligents et des applications web modernes.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Me contacter
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Voir mes projets
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/abdoulaziz03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0d1b2e] border border-slate-700/50 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-200">
                  <Github size={17} />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="mailto:tabdoulaziz188@gmail.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0d1b2e] border border-slate-700/50 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-200">
                  <Mail size={17} />
                </div>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-blue-500/15 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-purple-500/10" />

              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/15">
                <Image
                  src="/imgportfolio.jpeg"
                  alt="Touré Abdoul-Aziz"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5" />
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-2 -right-4 sm:right-0 bg-[#0d1b2e] border border-slate-700/60 rounded-xl px-3 py-2 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <span className="text-xs text-slate-300 font-medium whitespace-nowrap">Master IA — Paris</span>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-2 -left-4 sm:left-0 bg-[#0d1b2e] border border-slate-700/60 rounded-xl px-3 py-2 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span className="text-xs text-slate-300 font-medium whitespace-nowrap">3 Projets Data / IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors animate-bounce-slow"
            aria-label="Défiler vers le bas"
          >
            <span className="text-xs tracking-widest uppercase">Défiler</span>
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
