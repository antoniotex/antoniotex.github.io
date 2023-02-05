import { Project } from '../../types';
import * as S from './styles.css';
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { theme } from '../../../../common/styles/theme.css';

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <S.Container>
      <S.Top>
        <FaRegFolder size={35} color={theme.colors.primary} />
        <S.Link href={project.source} target='_blank'>
          <FiGithub
            size={30}
            color={theme.colors.black}
            style={{ marginLeft: 20 }}
          />
        </S.Link>
        <S.Link
          style={{
            display: `${project.online ? 'block' : 'none'}`,
          }}
          href={project.online}
          target='_blank'
        >
          <CgWebsite
            size={30}
            color={theme.colors.black}
            style={{
              marginLeft: 20,
              display: `${project.online ? 'block' : 'none'}`,
            }}
          />
        </S.Link>
      </S.Top>
      <S.Title>{project.title}</S.Title>
      <S.Description>{project.description}</S.Description>
      <S.TechContainer>
        {project.techs.map((tech: string, index: number) => (
          <S.TechPill key={index}>{tech}</S.TechPill>
        ))}
      </S.TechContainer>
    </S.Container>
  );
};

export default ProjectCard;
