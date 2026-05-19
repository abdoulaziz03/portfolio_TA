import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const STATS = [
  { value: '3+', label: 'Projets Data & IA', icon: '📊' },
  { value: '1+', label: "An d'expérience", icon: '💼' },
  { value: 'M2', label: 'Master Architecte IA', icon: '🎓' },
]

const HIGHLIGHTS = [
  'Python', 'Data Science', 'IA / LLM', 'Next.js', 'React',
  'ETL Pipeline', 'Docker', 'Apache Airflow',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050b1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="À propos de moi"
            subtitle="Développeur, Data Scientist et futur Architecte IA basé à Paris."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <ScrollReveal delay={100}>
            <div className="space-y-5 text-slate-400 text-base leading-relaxed">
              <p>
                Je suis <strong className="text-white font-semibold">Touré Abdoul-Aziz</strong>,
                développeur web et data scientist, actuellement en{' '}
                <strong className="text-blue-400">Master Architecte en Intelligence Artificielle</strong>{' '}
                à l'École Multimédia / Campus Fonderie de l'Image à Paris.
              </p>
              <p>
                Fort d'une expérience de stagiaire{' '}
                <strong className="text-white font-semibold">Développeur Front-End</strong> chez{' '}
                <strong className="text-white font-semibold">KEHO Group</strong> en Côte d'Ivoire,
                j'ai acquis des compétences solides en développement web tout en développant
                une forte appétence pour la Data Science et l'IA.
              </p>
              <p>
                Mes projets récents couvrent l'analyse de données e-commerce sur{' '}
                <strong className="text-white font-semibold">2.75M+ événements</strong>, la création
                d'un système de fact-checking alimenté par{' '}
                <strong className="text-blue-400">LLaMA 3.3</strong>, et un pipeline ETL en production
                sur <strong className="text-white font-semibold">AWS EC2</strong>.
              </p>
              <p>
                Mon objectif est de concevoir des systèmes intelligents alliant ingénierie des données,
                machine learning et interfaces modernes, pour résoudre des problèmes concrets.
              </p>
            </div>

            {/* Skill highlights */}
            <div className="mt-8 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Stats */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-[#0d1b2e] border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-slate-700/50 flex items-center justify-center text-2xl shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}

              {/* Location + availability */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Localisation</div>
                    <div className="text-xs text-slate-400">Paris, France</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🟢</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Disponibilité</div>
                    <div className="text-xs text-slate-400">Stage / Alternance / Freelance</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
