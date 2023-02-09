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
        <S.Description>{t('contact.description')}</S.Description>
        <ModalButton title={t('contact.title')}>
          <ContactForm />
        </ModalButton>
      </S.Container>
    </SectionTag>
  );
};

export default Contact;
