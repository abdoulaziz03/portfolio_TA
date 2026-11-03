import { ExternalLink, Github, Gitlab } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import Emoji from './Emoji'

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
    title: "L'air de Paris",
    subtitle: 'Plateforme Smart City',
    description:
      "Suivi de la qualité de l'air et de la mobilité dans les 20 arrondissements de Paris : collecte horaire des données ouvertes, capteurs IoT simulés, prévision PM2.5 du lendemain, détection d'anomalies, alertes e-mail, rapport PDF hebdomadaire et tableau de bord public React.",
    category: 'Data & IA',
    gradient: 'from-emerald-600 to-green-500',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    emoji: '🌆',
    tags: ['Python', 'FastAPI', 'Airflow', 'TimescaleDB', 'React', 'scikit-learn', 'Docker', 'Grafana', 'GitLab CI'],
    metrics: [
      { label: 'Arrondissements', value: '20' },
      { label: 'DAGs Airflow', value: '6' },
      { label: 'Prévision', value: 'J+1' },
    ],
    link: 'https://gitlab.com/Abdoulazizt/smart-city',
    linkLabel: 'Voir sur GitLab',
  },
  {
    title: 'Olist Data Platform',
    subtitle: 'Plateforme data e-commerce de bout en bout',
    description:
      "Ingestion, Data Lake médaillon (MinIO / S3), transformations Spark avec quality gate Great Expectations, entrepôt en étoile (PostgreSQL / RDS), streaming Kafka temps réel et modèle de prédiction des retards de livraison suivi dans MLflow. Infrastructure AWS provisionnée avec Terraform.",
    category: 'Data Engineering',
    gradient: 'from-orange-600 to-amber-500',
    badgeColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    emoji: '🛒',
    tags: ['PySpark', 'Airflow', 'Kafka', 'MLflow', 'Great Expectations', 'Terraform', 'AWS S3/RDS', 'Power BI'],
    metrics: [
      { label: 'Commandes', value: '99K+' },
      { label: 'Services Docker', value: '16' },
      { label: 'Lift ML', value: '×2.7' },
    ],
    link: 'https://gitlab.com/Abdoulazizt/olist-data-platform',
    linkLabel: 'Voir sur GitLab',
  },
  {
    title: 'Churn Prediction',
    subtitle: 'Désabonnement client télécom',
    description:
      "Prédiction du churn sur le dataset Telco (7 043 clients) : nettoyage, feature engineering sans fuite de données, comparaison de modèles par GridSearchCV, pipeline GitLab CI avec garde-fou sur l'AUC et dashboard Streamlit de scoring client et par lot.",
    category: 'Machine Learning',
    gradient: 'from-rose-600 to-pink-500',
    badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    emoji: '📉',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'Plotly', 'Pytest', 'GitLab CI'],
    metrics: [
      { label: 'AUC test', value: '0.84' },
      { label: 'Recall', value: '78%' },
      { label: 'Clients', value: '7 043' },
    ],
    link: 'https://gitlab.com/Abdoulazizt/churn-prediction',
    linkLabel: 'Voir sur GitLab',
  },
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
            <Emoji native={project.emoji} className="text-4xl" />
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
              {project.link.includes('gitlab.com') ? (
                <Gitlab size={15} className="opacity-70" />
              ) : (
                <Github size={15} className="opacity-70" />
              )}
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
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/abdoulaziz03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 rounded-xl text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={16} />
              Voir tous mes projets sur GitHub
            </a>
            <a
              href="https://gitlab.com/Abdoulazizt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 rounded-xl text-sm font-medium hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Gitlab size={16} />
              Voir tous mes projets sur GitLab
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
