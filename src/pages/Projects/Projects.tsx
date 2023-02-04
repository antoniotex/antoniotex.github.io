import { SectionTag } from '../../components/SectionTag';
import { ProjectCard } from './components/ProjectCard';
import * as S from './styles.css';
import { Project } from './types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Cocktails',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      techs: [
        'React',
        'Styled Components',
        'TypeScript',
        'React',
        'Styled Components',
        'TypeScript',
      ],
      source: '',
      online: '',
    },
  ];

  return (
    <SectionTag num='03' title='projetos'>
      <S.Container>
        <S.SectionDescription>
          Uma pequena galeria com alguns projetos que gostei de desenvolver.
          Através do meu Github você conseguirá ir mais a fundo nas stacks e
          tecnologias que tenho conhecimento
        </S.SectionDescription>
        <S.CardContainer>
          {/* {projects.map((project: Project, index: number) => ( */}
          <ProjectCard key={1} project={projects[0]} />
          <ProjectCard key={2} project={projects[0]} />
          <ProjectCard key={3} project={projects[0]} />
          <ProjectCard key={4} project={projects[0]} />
          {/* ))} */}
        </S.CardContainer>
      </S.Container>
    </SectionTag>
  );
};

export default Projects;
