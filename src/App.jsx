import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
