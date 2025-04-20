import './App.css';
import Contact from './components/Contact';
import EducationDetails from './components/EducationDetails';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <EducationDetails/>
      <Contact/>
    </div>
  )
}

export default App;
