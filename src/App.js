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
      <div className="section-border">
        <HomePage />
      </div>
      <div className="section-border">
        <AboutPage />
      </div>

      <div className="section-border">
        <WorkPage />
      </div>
      <div className="section-border">
        <ExperiencePage />
      </div>
      <div className="section-border">
        <TechnologiesPage />
      </div>
      <div className="section-border">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
