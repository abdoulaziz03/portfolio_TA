'use client'

import { useState, type FormEvent } from 'react'
import { Github, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tabdoulaziz188@gmail.com',
    href: 'mailto:tabdoulaziz188@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@abdoulaziz03',
    href: 'https://github.com/abdoulaziz03',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Paris, France',
    href: null,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact Portfolio — ${form.name}`)
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:tabdoulaziz188@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Me Contacter"
            subtitle="Disponible pour des opportunités de stage, alternance ou freelance. N'hésitez pas à me contacter."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <ScrollReveal delay={100}>
            <div className="space-y-4">
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Je suis toujours ouvert à discuter de nouveaux projets, d&apos;opportunités
                professionnelles ou simplement d&apos;échanges sur la Data Science et l&apos;IA.
                N&apos;hésitez pas à me contacter !
              </p>

              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                const inner = (
                  <div
                    className={`flex items-center gap-4 border ${item.bg} rounded-xl p-4 transition-all duration-200 ${
                      item.href ? 'hover:scale-[1.02] cursor-pointer' : ''
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center shrink-0`}
                    >
                      <Icon size={18} className={item.color} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                      <div className={`text-sm font-semibold ${item.color}`}>{item.value}</div>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}

              {/* Availability badge */}
              <div className="mt-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <div className="text-sm font-semibold text-white">Disponible dès maintenant</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Stage • Alternance • Freelance (Data / IA / Web)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#0d1b2e] border border-slate-700/50 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1.5">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-2.5 bg-[#050b1a] border border-slate-700/50 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2.5 bg-[#050b1a] border border-slate-700/50 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full px-4 py-2.5 bg-[#050b1a] border border-slate-700/50 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {sent ? (
                  <>
                    <CheckCircle size={17} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Envoyer le message
                  </>
                )}
              </button>

              <p className="text-xs text-slate-600 text-center">
                Le formulaire ouvre votre client mail avec le message pré-rempli.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}