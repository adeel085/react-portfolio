import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function App() {

  const [activeSection, setActiveSection] = useState("about");
  const setActiveSectionState = (section) => {
    setActiveSection(section);
  }

  let activeSectionJSX = "";
  if (activeSection === "about") {
    activeSectionJSX = <About></About>
  }
  else if (activeSection === "portfolio") {
    activeSectionJSX = <Portfolio></Portfolio>
  }
  else if (activeSection === "contact") {
    activeSectionJSX = <Contact></Contact>
  }
  else if (activeSection === "resume") {
    activeSectionJSX = <Resume></Resume>
  }

  return (
    <div>
      <Header setActiveSectionState={setActiveSectionState} activeSection={activeSection}></Header>
      <div className="main-content">
        {activeSectionJSX}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
