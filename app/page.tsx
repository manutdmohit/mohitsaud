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
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <FloatingContact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
