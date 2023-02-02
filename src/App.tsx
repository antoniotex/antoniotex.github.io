import GlobalStyles from './common/styles/global.css';
import { Header } from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
};

export default App;
