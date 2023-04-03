import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ExperiencePage from "./pages/ExperiencePage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div>
      <div className="section-border" id="home-section">
        <HomePage />
      </div>
      <div className="section-border" id="about-section">
        <AboutPage />
      </div>

      <div className="section-border" id="work-section">
        <WorkPage />
      </div>
      <div className="section-border" id="experience-section">
        <ExperiencePage />
      </div>
      <div className="section-border" id="tech-section">
        <TechnologiesPage />
      </div>
      <div className="section-border" id="contact-section">
        <ContactPage />
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
