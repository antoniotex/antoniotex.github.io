import * as S from './styles.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { theme } from '../../common/styles/theme.css';
import { useState } from 'react';

const Header = () => {
  const [menuTop, setMenuTop] = useState(-500);

  const toggleMenu = () => {
    setMenuTop(menuTop === 0 ? -500 : 0);
  };

  return (
    <S.Container>
      <S.NavBar top={menuTop}>
        <S.Menu>
          <S.MenuItem>
            <S.Number>01.</S.Number>
            <S.Link>{'<sobre mim>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Number>02.</S.Number>
            <S.Link>{'<habilidades>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Number>03.</S.Number>
            <S.Link>{'<projetos>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Number>04.</S.Number>
            <S.Link>{'<experiência>'}</S.Link>
          </S.MenuItem>
          <S.MenuItem>
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
