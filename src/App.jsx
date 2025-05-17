import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationDetails from './components/EducationDetails';

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <EducationDetails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
