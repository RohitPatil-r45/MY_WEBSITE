import Home from "./Home";
import Navbar from "./Navbar";
import Games from "./Games";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
