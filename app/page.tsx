import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section id="hero" className="relative">
        <Hero />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-gray-500 hover:text-gray-700">
            <span className="mb-1">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>

      <footer className="py-6 bg-gray-900 text-white text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} 바이오AI 테크. 모든 권리 보유.</p>
        </div>
      </footer>
    </main>
  )
}
