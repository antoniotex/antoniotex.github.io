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
import bgSVGDark from './common/images/background/lines_bg-dark.svg';
import AppContextProvider, { AppContext } from './store/AppContext';
import { DefaultTheme, ThemeProvider, useTheme } from 'styled-components';
import light from './common/styles/themes/light';
import usePersistedState from './hooks/usePersistedState';
import dark from './common/styles/themes/dark';
import { useContext } from 'react';

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
