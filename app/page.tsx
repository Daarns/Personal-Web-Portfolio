import HeroNew from '@/components/sections/HeroNew'
import AboutNew from '@/components/sections/AboutNew'
import Skills from '@/components/sections/Skills'
import ProjectsNew from '@/components/sections/ProjectsNew'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroNew />
      <div id="about"><AboutNew /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><ProjectsNew /></div>
    </main>
  )
}