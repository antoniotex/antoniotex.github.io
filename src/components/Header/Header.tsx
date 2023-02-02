import * as S from './styles.css';

const Header = () => {
  return (
    <S.Container>
      <S.NavBar>
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
    </S.Container>
  );
};

export default Header;
