import GlobalStyles from './common/styles/global.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <GlobalStyles />
    </>
  );
};

export default App;
