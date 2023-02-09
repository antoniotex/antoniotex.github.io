import GlobalStyles from './common/styles/global.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { AppContext } from './store/AppContext';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Career />
        <Contact />
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
};

export default App;
