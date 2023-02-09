import * as S from './styles.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/AppContext';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import BrazilFlag from '../../common/images/brazil.png';
import UsaFlag from '../../common/images/usa.png';

const Header = () => {
  const [menuTop, setMenuTop] = useState(-500);
  const [scrollPosition, setScrollPosition] = useState(0);

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const { colors } = useTheme();

  const { toggleTheme } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuTop(menuTop === 0 ? -500 : 0);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleLanguage = () => {
    changeLanguage(language === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container scroll={scrollPosition > 30 && menuTop === -500}>
      <S.NavContainer>
        <S.NavBar
          top={menuTop}
          scroll={
            scrollPosition > 30 || (scrollPosition <= 30 && menuTop === 0)
          }
        >
          <S.Menu>
            <S.MenuItem href='#sobre'>
              <S.Number>01.</S.Number>
              <S.Link>{t('menu.about')}</S.Link>
            </S.MenuItem>
            <S.MenuItem href='#tecnologias'>
              <S.Number>02.</S.Number>
              <S.Link>{t('menu.skills')}</S.Link>
            </S.MenuItem>
            <S.MenuItem href='#projetos'>
              <S.Number>03.</S.Number>
              <S.Link>{t('menu.projects')}</S.Link>
            </S.MenuItem>
            <S.MenuItem href='#experiencia'>
              <S.Number>04.</S.Number>
              <S.Link>{t('menu.career')}</S.Link>
            </S.MenuItem>
            <S.MenuItem href='#contato'>
              <S.Number>05.</S.Number>
              <S.Link>{t('menu.contact')}</S.Link>
            </S.MenuItem>
          </S.Menu>
        </S.NavBar>
        <S.Configs>
          <S.ToogleDarkMode onClick={toggleTheme}>
            <span>ON</span>
            <span>OFF</span>
          </S.ToogleDarkMode>
          <S.SelectLanguage
            onClick={handleLanguage}
            src={language === 'pt' ? BrazilFlag : UsaFlag}
          />
        </S.Configs>
      </S.NavContainer>
      <S.Hamburger onClick={toggleMenu}>
        <AiOutlineMenu size={35} color={colors.text} />
      </S.Hamburger>
    </S.Container>
  );
};

export default Header;
