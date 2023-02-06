import { SectionTag } from '../../components/SectionTag';
import { ProjectCard } from './components/ProjectCard';
import * as S from './styles.css';
import { Project } from './types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Portfolio',
      description:
        'Repositório para esta própria página, pois está em constante evolução e demonstra um pouco do meu jeito de codar',
      techs: [
        'React',
        'Styled Components',
        'TypeScript',
        'React Hook Form',
        'Conventional Commits',
        'Vite',
        'Media Queries',
      ],
      source: 'https://github.com/antoniotex/portfolio',
      online: 'https://antoniotx.dev/',
    },
    {
      title: 'React Login Clean Arch',
      description:
        'Página de login em React desenvolvida utilizando TDD e Clean Architecture',
      techs: ['ReactJs', 'SASS', 'Jest', 'Typescript', 'Clean Architecture'],
      source: 'https://github.com/antoniotex/clean-react',
    },
    {
      title: 'Node Api Clean Arch',
      description:
        'API em NodeJs desenvolvida utilizando TDD e Clean Architecture',
      techs: [
        'NodeJs',
        'MongoDB',
        'Jest',
        'JWT',
        'Clean Architecture',
        'SOLID',
        'API',
      ],
      source: 'https://github.com/antoniotex/clean-node-api',
    },
    {
      title: 'Online Store',
      description:
        'Projeto em evolução, e é um protótipo de uma página frontend construída com TDD e abrangendo todo o processo de compra e carrinho de um e-commerce',
      techs: [
        'Javascript',
        'NextJs',
        'ReactJs',
        'E-commerce',
        'TDD',
        'Jest',
        'Testing Library',
      ],
      source: 'https://github.com/antoniotex/online_store_next_jest',
    },
    {
      title: 'Web Scrapper',
      description:
        'Gosto deste projeto, pois foi a primeira vez que criei um web scraper do zero e me ajudou a entender melhor como a web funciona.',
      techs: ['Javascript', 'Web Scraper', 'Axios', 'Cheerio'],
      source: 'https://github.com/antoniotex/desafio-b2w-dev-web',
    },
    {
      title: 'Encontrados',
      description:
        'Projeto sendo desenvolvido para ser referência em pessoas desaparecidas. A ideia é concentrar em um só lugar informações, para facilitar as buscas pelos parentes',
      techs: [
        'ReactJs',
        'React Native',
        'NodeJs',
        'Sequelize',
        'AWS S3',
        'Styled Components',
      ],
      source: 'https://github.com/antoniotex/encontrados',
    },
  ];

  return (
    <SectionTag num='03' title='projetos' idItem='projetos'>
      <S.Container>
        <S.SectionDescription>
          Uma pequena galeria com alguns projetos que gostei de desenvolver.
          Através do meu Github você conseguirá ir mais a fundo nas stacks e
          tecnologias que tenho conhecimento
        </S.SectionDescription>
        <S.CardContainer>
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </S.CardContainer>
      </S.Container>
    </SectionTag>
  );
};

export default Projects;
