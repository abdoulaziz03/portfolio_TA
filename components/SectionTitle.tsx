interface Props {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
