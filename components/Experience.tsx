import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const EXPERIENCES = [
  {
    period: '2025 — Présent',
    role: 'Master Architecte en IA — Étudiant-Chercheur',
    company: "École Multimédia / Campus Fonderie de l’Image",
    location: 'Paris, France',
    description:
      "Développement de projets en Data Science, ingénierie des données et IA générative dans le cadre du Master. Conception et déploiement de pipelines ETL, applications de fact-checking et dashboards analytiques.",
    achievements: [
      'Pipeline ETL production sur AWS EC2 avec Airflow, MinIO et PostgreSQL',
      'Système de fact-checking IA avec LLaMA 3.3 déployé sur Railway',
      "Dashboard e-commerce analysant 2.75M+ événements utilisateurs",
    ],
    current: true,
    type: 'Formation',
  },
  {
    period: '2024 — 2025',
    role: 'Stagiaire Développeur Front-End',
    company: 'KEHO Group',
    location: "Côte d’Ivoire",
    description:
      "Stage en développement front-end au sein d’une équipe dynamique. Conception et intégration d’interfaces web responsives, collaboration étroite avec les équipes design et back-end.",
    achievements: [
      'Développement de sites web responsives avec HTML, CSS, JavaScript',
      "Intégration de maquettes graphiques avec fidélité aux designs",
      "Collaboration avec l’équipe design et l’équipe back-end",
      "Optimisation des performances et de l’accessibilité web",
    ],
    current: false,
    type: 'Stage',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050b1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Expérience"
            subtitle="Mon parcours professionnel et mes réalisations concrètes."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative pl-14">
                  {/* Dot */}
                  <div
                    className={`absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                      exp.current
                        ? 'bg-purple-500 border-purple-400 shadow-sm shadow-purple-500/50'
                        : 'bg-[#0d1b2e] border-slate-600'
                    }`}
                  />

                  <div className="bg-[#0d1b2e] border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/20 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                              Présent
                            </span>
                          )}
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{exp.role}</h3>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-lg shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-purple-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-xs text-slate-500 mb-3">{'\u{1F4CD}'} {exp.location}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                          <span className="text-blue-500 mt-0.5 shrink-0">{'▸'}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
