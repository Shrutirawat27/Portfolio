import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative w-full">
      <div
        className="fixed inset-0 -z-10 w-full h-full
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;