import logo from "./logo.svg";
import download from "./assets/images/download.png";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ExperiencePage from "./pages/ExperiencePage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import RotatingSphere from "./components/RotatingSphere";

function App() {
  return (
    <div>
      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          boxShadow: "1px 2px 9px #5BE9B9",
        }}
      >
        <HomePage />
      </div>
      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          dropShadow: "0px 0px 9px 2px #5BE9B9",
        }}
      >
        <AboutPage />
      </div>

      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          dropShadow: "0px 0px 9px 2px #5BE9B9",
        }}
      >
        <WorkPage />
      </div>
      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          dropShadow: "0px 0px 9px 2px #5BE9B9",
        }}
      >
        <ExperiencePage />
      </div>
      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          dropShadow: "0px 0px 9px 2px #5BE9B9",
        }}
      >
        <TechnologiesPage />
      </div>
      <div
        style={{
          borderBottom: "3px solid #5BE9B9",
          dropShadow: "0px 0px 9px 2px #5BE9B9",
        }}
      >
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
