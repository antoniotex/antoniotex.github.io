import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Contact: React.FC = () => {
  return (
    <SectionTag num='05' title='contato'>
      <S.Container>
        <S.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </S.Description>
        <S.ModalButton>Mande um Oi!</S.ModalButton>
      </S.Container>
    </SectionTag>
  );
};

export default Contact;
