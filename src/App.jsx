import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Fond avec image + flou */}
      <div className="relative z-0 min-h-screen">
        {/* Image de fond floutée */}
        <div className="fixed inset-0 -z-10 bg-site bg-cover bg-center bg-fixed" />
        {/* Surcouche semi-transparente + blur */}
        <div className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-md" />

        {/* Contenu principal au-dessus */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Experience />
          </main>

          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
