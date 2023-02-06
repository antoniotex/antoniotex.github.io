import * as S from './styles.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { theme } from '../../common/styles/theme.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/AppContext';

const Header = () => {
  const [menuTop, setMenuTop] = useState(-500);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { modal } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuTop(menuTop === 0 ? -500 : 0);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container
      scroll={scrollPosition > 30 || (scrollPosition <= 30 && menuTop === 0)}
    >
      <S.NavBar
        top={menuTop}
        scroll={scrollPosition > 30 || (scrollPosition <= 30 && menuTop === 0)}
      >
        <S.Menu>
          <S.MenuItem href='#sobre'>
            <S.Number>01.</S.Number>
            <S.Link>{'<sobre mim>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem href='#tecnologias'>
            <S.Number>02.</S.Number>
            <S.Link>{'<tecnologias>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem href='#projetos'>
            <S.Number>03.</S.Number>
            <S.Link>{'<projetos>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem href='#experiencia'>
            <S.Number>04.</S.Number>
            <S.Link>{'<experiencia>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem href='#contato'>
            <S.Number>05.</S.Number>
            <S.Link>{'<contato>'}</S.Link>
          </S.MenuItem>
        </S.Menu>
      </S.NavBar>
      <S.Hamburger onClick={toggleMenu}>
        <AiOutlineMenu size={35} color={theme.colors.black} />
      </S.Hamburger>
    </S.Container>
  );
};

export default Header;
