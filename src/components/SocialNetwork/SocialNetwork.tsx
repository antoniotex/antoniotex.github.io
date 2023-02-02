import * as S from './styles.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { theme } from '../../common/styles/theme.css';

const SocialNetwork = () => {
  return (
    <S.Container>
      <FiGithub size={35} color={theme.colors.primary} />
      <FaLinkedinIn size={35} color={theme.colors.primary} />
      <AiOutlineWhatsApp size={35} color={theme.colors.primary} />
      <TbBrandTelegram size={35} color={theme.colors.primary} />
    </S.Container>
  );
};

export default SocialNetwork;
