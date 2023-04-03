import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ExperiencePage from "./pages/ExperiencePage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <HomePage />
      </div>
      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <AboutPage />
      </div>

      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <WorkPage />
      </div>
      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <ExperiencePage />
      </div>
      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <TechnologiesPage />
      </div>
      <div
        style={{
          borderBottom: "2px solid #5BE9B9",
        }}
      >
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
