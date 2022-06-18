import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/Testimonials/testimonials";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> //useState
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      />
      <div className="sections">
        <Intro />
        <Portfolio />
      </div>
    </div>
  );
}
