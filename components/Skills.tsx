'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

interface Skill {
  name: string
  level: number
}

interface Category {
  id: string
  label: string
  emoji: string
  color: string
  barColor: string
  skills: Skill[]
}

const CATEGORIES: Category[] = [
  {
    id: 'web',
    label: 'Développement Web',
    emoji: '🌐',
    color: 'from-blue-600/20 to-blue-600/5 border-blue-500/30',
    barColor: 'from-blue-500 to-blue-400',
    skills: [
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'React', level: 78 },
      { name: 'Next.js', level: 72 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    id: 'data',
    label: 'Data Science & IA',
    emoji: '🤖',
    color: 'from-purple-600/20 to-purple-600/5 border-purple-500/30',
    barColor: 'from-purple-500 to-purple-400',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Pandas / NumPy', level: 82 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Streamlit / Plotly', level: 80 },
      { name: 'Groq / LLaMA 3.3', level: 70 },
      { name: 'NLP — TF-IDF, K-Means', level: 65 },
    ],
  },
  {
    id: 'engineering',
    label: 'Data Engineering',
    emoji: '⚙️',
    color: 'from-cyan-600/20 to-cyan-600/5 border-cyan-500/30',
    barColor: 'from-cyan-500 to-cyan-400',
    skills: [
      { name: 'Apache Airflow', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB Atlas', level: 75 },
      { name: 'MinIO (S3)', level: 65 },
      { name: 'FastAPI', level: 72 },
      { name: 'ETL Pipeline', level: 74 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    emoji: '☁️',
    color: 'from-green-600/20 to-green-600/5 border-green-500/30',
    barColor: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Docker / Compose', level: 72 },
      { name: 'GitLab CI/CD', level: 65 },
      { name: 'AWS EC2', level: 62 },
      { name: 'Prometheus / Grafana', level: 60 },
      { name: 'Railway', level: 68 },
    ],
  },
]

export default function Skills() {
  const [activeId, setActiveId] = useState('web')
  const active = CATEGORIES.find((c) => c.id === activeId)!

  return (
    <section id="skills" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Mes Compétences"
            subtitle="Du développement web à l'ingénierie des données et à l'IA — un profil polyvalent orienté impact."
          />
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeId === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#0d1b2e] border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600'
                }`}
              >
                <span>{cat.emoji}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill bars */}
        <ScrollReveal delay={150} key={activeId}>
          <div
            className={`bg-gradient-to-br ${active.color} border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{active.emoji}</span>
              <h3 className="text-lg font-semibold text-white">{active.label}</h3>
            </div>

            <div className="space-y-5">
              {active.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${active.barColor} rounded-full transition-all duration-700 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tech badge cloud */}
        <ScrollReveal delay={250}>
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Technologies &amp; outils utilisés
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {CATEGORIES.flatMap((cat) => cat.skills.map((s) => s.name)).map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 text-xs rounded-full bg-[#0d1b2e] border border-slate-700/50 text-slate-400 hover:border-blue-500/30 hover:text-slate-300 transition-colors duration-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
