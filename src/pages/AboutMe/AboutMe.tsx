import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const AboutMe: React.FC = () => {
  return (
    <S.Container>
      <SectionTag num='01' title='sobre mim' idItem='sobre'>
        <S.AboutText>
          Desenvolvedor de sistemas com mais de 5 anos de experiência atuando em
          projetos de grande porte. Grande vivência com desenvolvimento
          responsivo, desenvolvimento mobile, criação e integração de API`s,
          testes automatizados (unitários, de integração, e2e). <br />
          <br /> Conhecimentos em: <br />
          <br />
          - Linguagens de Programação: Javascript, TypeScript, C# <br />
          - Frontend: HTML, CSS, SCSS, React, React Native, VueJS, Angular 2+,
          Redux, Styled Components, Storybook <br />- Backend: NodeJS, .NET
          Core, SQL Server, MongoDB, Oracle, TypeORM, EF <br />- Testes: Jest,
          React Testing Library, Cypress
        </S.AboutText>
      </SectionTag>
    </S.Container>
  );
};

export default AboutMe;
