import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const EDUCATION = [
  {
    period: '2025 — 2026',
    degree: 'Master Architecte en Intelligence Artificielle',
    school: "École Multimédia / Campus Fonderie de l’Image",
    location: 'Paris, France',
    description:
      'Formation avancée en architecture IA, machine learning, deep learning et MLOps. Conception de systèmes IA robustes et déploiement en production.',
    tags: ['Machine Learning', 'Deep Learning', 'MLOps', 'LLM', 'Architecture IA'],
    current: true,
  },
  {
    period: '2022 — 2025',
    degree: 'Licence Informatique — Génie Logiciel',
    school: "Université de Technologie d’Abidjan",
    location: "Abidjan, Côte d’Ivoire",
    description:
      "Formation en développement logiciel, algorithmique et gestion de projets informatiques. Acquisition de bases solides en programmation et conception d’applications.",
    tags: ['Algorithmique', 'Développement logiciel', 'Gestion de projet'],
    current: false,
  },
  {
    period: '2022',
    degree: 'Baccalauréat Série D',
    school: 'Collège Moderne Rodin',
    location: "Côte d’Ivoire",
    description:
      'Diplôme du baccalauréat scientifique, option mathématiques et sciences physiques.',
    tags: ['Mathématiques', 'Sciences physiques'],
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 section-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle title="Formation" subtitle="Mon parcours académique, de la Côte d’Ivoire à Paris." />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-8">
            {EDUCATION.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative pl-14">
                  {/* Dot */}
                  <div
                    className={`absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                      item.current
                        ? 'bg-blue-500 border-blue-400 shadow-sm shadow-blue-500/50'
                        : 'bg-[#0d1b2e] border-slate-600'
                    }`}
                  />

                  <div className="bg-[#0d1b2e] border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            En cours
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg font-semibold text-white">{item.degree}</h3>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-lg shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-blue-400 font-medium mb-1">{item.school}</p>
                    <p className="text-xs text-slate-500 mb-3">{'\u{1F4CD}'} {item.location}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-slate-800 border border-slate-700/50 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
