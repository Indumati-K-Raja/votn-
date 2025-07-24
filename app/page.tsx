import Hero from "./components/Hero"
import Objectives from "./components/Objectives"
import Activities from "./components/Activities"
import Stats from "./components/Stats"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Objectives />
      <Activities />
      <Stats />
    </div>
  )
}
