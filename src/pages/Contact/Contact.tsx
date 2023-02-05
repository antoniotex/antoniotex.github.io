import { ContactForm } from '../../components/ContactForm';
import { ModalButton } from '../../components/ModalButton';
import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Contact: React.FC = () => {
  return (
    <SectionTag num='05' title='contato' idItem='contato'>
      <S.Container>
        <S.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </S.Description>
        <ModalButton title='Entre em contato'>
          <ContactForm />
        </ModalButton>
      </S.Container>
    </SectionTag>
  );
};

export default Contact;
