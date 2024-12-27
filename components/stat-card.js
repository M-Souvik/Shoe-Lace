import { AnimatedCounter } from "./animated-counter";


export function StatsCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white">
      <Icon className="w-12 h-12 text-orange-400 mb-4" />
      <AnimatedCounter end={value} />
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  )
}
