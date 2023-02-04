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
      <FiGithub size={width > 425 ? 35 : 25} color={theme.colors.primary} />
      <FaLinkedinIn size={width > 425 ? 35 : 25} color={theme.colors.primary} />
      <AiOutlineWhatsApp
        size={width > 425 ? 35 : 25}
        color={theme.colors.primary}
      />
      <TbBrandTelegram
        size={width > 425 ? 35 : 25}
        color={theme.colors.primary}
      />
    </S.Container>
  );
};

export default SocialNetwork;
