import MainSection from "./components/Mainsection";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import RunningProjectsSection from "./components/RunningProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black px-4 sm:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl sm:text-2xl font-medium">
            Mubeen.
          </a>
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <a href="#main" className="hover:text-gray-300">
              Home
            </a>
            <a href="#featured-work" className="hover:text-gray-300">
              Work
            </a>
            <a href="#education" className="hover:text-gray-300">
              Education
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <button className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      <MainSection />
      <EducationSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
