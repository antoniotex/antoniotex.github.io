import GlobalStyles from './common/styles/global.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import bgSVG from './common/images/background/lines_bg.svg';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Contact />
      <Footer />
      <GlobalStyles bg={bgSVG} />
    </>
  );
};

export default App;
