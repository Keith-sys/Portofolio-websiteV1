import React from "react";
import AboutSection from "./Components/AboutSection";
import BiographySection from "./Components/BiographySection";
import SkillsSection from "./Components/SkillsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import WorkSectionTitle from "./Components/WorkSectionTitle";
import WorkSection from "./Components/WorkSection";
import WorkSection2 from "./Components/WorkSection2";
import WorkSection3 from "./Components/WorkSection3";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutSection/>
      <SkillsSection/>
      <BiographySection/>
      <WorkSectionTitle/>
      <WorkSection/>
      <WorkSection2/>
      <WorkSection3/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
