import GlobalStyles from './common/styles/global.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <GlobalStyles />
    </>
  );
};

export default App;
