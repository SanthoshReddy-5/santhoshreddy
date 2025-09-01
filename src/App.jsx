import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationDetails from './components/EducationDetails';
import Experience from './components/Experience';


function App() {

  return (
    <div className='custom-scroll'>
      <Navbar/>
      <HeroSection/>
      <SkillsSection/>
      <Experience/>
      <ProjectsSection/>
      <EducationDetails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
