import { ExternalLink, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

interface Metric {
  label: string
  value: string
}

interface Project {
  title: string
  subtitle: string
  description: string
  category: string
  gradient: string
  badgeColor: string
  emoji: string
  tags: string[]
  metrics: Metric[]
  link: string
  linkLabel: string
}

const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Analytics Dashboard',
    subtitle: 'RetailRocket Dataset',
    description:
      "Dashboard interactif analysant le comportement de 1.4M+ visiteurs sur une plateforme e-commerce. Implémente la segmentation RFM, les tests A/B statistiques et la visualisation de l'entonnoir de conversion avec MongoDB et Streamlit.",
    category: 'Data Science',
    gradient: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    emoji: '📊',
    tags: ['Python', 'Pandas', 'Streamlit', 'Plotly', 'MongoDB', 'Jupyter', 'SciPy'],
    metrics: [
      { label: 'Événements', value: '2.75M+' },
      { label: 'Visiteurs uniques', value: '1.4M+' },
      { label: 'Produits catalogués', value: '235K+' },
    ],
    link: 'https://github.com/abdoulaziz03/data_projet',
    linkLabel: 'Voir sur GitHub',
  },
  {
    title: 'FactChecker Bluesky',
    subtitle: 'Vérification de faits par IA',
    description:
      'Application intelligente de fact-checking qui analyse des affirmations en temps réel via LLaMA 3.3 (Groq), la recherche web (DuckDuckGo), et des fact-checkers officiels (Snopes, AFP). Collecte automatisée via Airflow, déployé sur Railway + Streamlit Cloud.',
    category: 'AI & NLP',
    gradient: 'from-purple-600 to-violet-500',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    emoji: '🔍',
    tags: ['Python', 'FastAPI', 'Groq LLaMA 3.3', 'MongoDB', 'Docker', 'Airflow', 'bcrypt'],
    metrics: [
      { label: 'Modèle IA', value: 'LLaMA 3.3' },
      { label: 'Langues', value: 'FR / EN' },
      { label: 'Déploiement', value: 'Railway' },
    ],
    link: 'https://github.com/abdoulaziz03/factchecker',
    linkLabel: 'Voir sur GitHub',
  },
  {
    title: 'Data Jobs Pipeline',
    subtitle: "Intelligence du marché de l'emploi data",
    description:
      "Pipeline ETL production agrégeant quotidiennement les offres d'emploi pour data scientists, ML engineers et MLOps en France. Architecture médaillon (Bronze/Silver/Gold) avec stockage MinIO, entrepôt PostgreSQL et monitoring complet via Prometheus & Grafana sur AWS EC2.",
    category: 'Data Engineering',
    gradient: 'from-cyan-600 to-teal-500',
    badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    emoji: '⚡',
    tags: ['Python', 'Airflow', 'PostgreSQL', 'MinIO', 'Docker', 'AWS EC2', 'Prometheus', 'Grafana'],
    metrics: [
      { label: 'Collecte', value: 'Quotidienne' },
      { label: 'Infra', value: 'AWS EC2' },
      { label: 'Sources', value: 'Adzuna + AI-Jobs' },
    ],
    link: 'https://gitlab.com/Abdoulazizt/data_jobs',
    linkLabel: 'Voir sur GitLab',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={index * 120}>
      <div className="bg-[#0d1b2e] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col h-full">
        {/* Top gradient banner */}
        <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
          <div className="flex items-start justify-between relative z-10">
            <span className="text-4xl">{project.emoji}</span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm bg-black/20 text-white border-white/20`}
            >
              {project.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-4 relative z-10">{project.title}</h3>
          <p className="text-sm text-white/70 mt-0.5 relative z-10">{project.subtitle}</p>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center bg-[#050b1a] rounded-xl p-2.5 border border-slate-800"
              >
                <div className="text-xs font-bold text-white">{m.value}</div>
                <div className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
            >
              <Github size={15} className="opacity-70" />
              <span className="group-hover:underline underline-offset-2">{project.linkLabel}</span>
              <ExternalLink size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050b1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Mes Projets"
            subtitle="Des projets concrets alliant Data Science, IA et ingénierie des données — de l'exploration à la production."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/abdoulaziz03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 rounded-xl text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={16} />
              Voir tous mes projets sur GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
