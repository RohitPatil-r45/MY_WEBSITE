import Home from "./Home";
import Navbar from "./Navbar";
import Games from "./Games";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Error from "./Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/games" element={<Games />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
