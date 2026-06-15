import Hero from '@/components/sections/hero/Hero'
import About from '@/components/sections/about/About'
import Skills from '@/components/sections/skills/Skills'
import Projects from '@/components/sections/projects/Projects'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
