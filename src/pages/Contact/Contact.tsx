import { useTranslation } from 'react-i18next';
import { ContactForm } from '../../components/ContactForm';
import { ModalButton } from '../../components/ModalButton';
import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionTag num='05' title={t('section.contact')} idItem='contato'>
      <S.Container>
        <S.Description>
          Estou aberto a novas oportunidades, tanto para períodos longos, quando
          para contratos PJ / freelance. Entre em contato através do botão
          abaixo e vamos desenvolver algo juntos!
        </S.Description>
        <ModalButton title='Entre em contato'>
          <ContactForm />
        </ModalButton>
      </S.Container>
    </SectionTag>
  );
};

export default Contact;
