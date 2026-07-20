export default function SectionHeading({
  overline,
  title,
}: {
  overline: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-sacramento-600 mb-2">
        {overline}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4 h-1 w-16 bg-gradient-to-r from-sacramento-600 to-sacramento-400 rounded-full" />
    </div>
  )
}
