import * as S from './styles.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { theme } from '../../common/styles/theme.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SocialNetwork = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <S.Link href='https://github.com/antoniotex' target='_blank'>
        <FiGithub size={width > 425 ? 35 : 25} color={theme.colors.primary} />
      </S.Link>
      <S.Link
        href='https://www.linkedin.com/in/antonio-carlos-teixeira/'
        target='_blank'
      >
        <FaLinkedinIn
          size={width > 425 ? 35 : 25}
          color={theme.colors.primary}
        />
      </S.Link>
      <S.Link
        href='https://wa.me/5521996796217?text=Olá%20Antonio,%20seu%20perfil%20da%20match%20com%20uma%20oportunidade,%20vamos%20bater%20um%20papo?'
        target='_blank'
      >
        <AiOutlineWhatsApp
          size={width > 425 ? 35 : 25}
          color={theme.colors.primary}
        />
      </S.Link>
      <S.Link href='https://t.me/Antonio_Tex' target='_blank'>
        <TbBrandTelegram
          size={width > 425 ? 35 : 25}
          color={theme.colors.primary}
        />
      </S.Link>
    </S.Container>
  );
};

export default SocialNetwork;
