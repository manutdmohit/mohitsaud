import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import FloatingContact from '@/components/floating-contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="mb-0">
          <Hero />
        </div>
        <div className="mb-0">
          <About />
        </div>
        <div className="mb-0">
          <Experience />
        </div>
        <div className="mb-0">
          <Projects />
        </div>
        <div className="mb-0">
          <Skills />
        </div>
        <div className="mb-0">
          <Contact />
        </div>
        <FloatingContact />
      </main>
    </div>
  );
}
