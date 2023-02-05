import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

type Skills = {
  tech: string;
  level: number;
};

const Skills: React.FC = () => {
  const skills: Skills[] = [
    { tech: 'HTML / CSS', level: 5 },
    { tech: 'Javascript', level: 5 },
    { tech: 'Typescript', level: 5 },
    { tech: 'ReactJs', level: 5 },
    { tech: 'React Native', level: 4 },
    { tech: 'Angular 2+', level: 3 },
    { tech: 'Jest', level: 4 },
    { tech: 'Styled Components', level: 5 },
    { tech: 'NodeJs', level: 4 },
  ];

  return (
    <SectionTag num='02' title='tecnologias' idItem='tecnologias'>
      <S.Container>
        {skills.map((skill: Skills, index: number) => (
          <S.Row key={index}>
            <S.TechText>{skill.tech}</S.TechText>
            <S.Level key={index}>
              <S.LevelItem
                opacity={skill.level >= 1 ? '44' : '00'}
              ></S.LevelItem>
              <S.LevelItem
                opacity={skill.level >= 2 ? '77' : '00'}
              ></S.LevelItem>
              <S.LevelItem
                opacity={skill.level >= 3 ? 'aa' : '00'}
              ></S.LevelItem>
              <S.LevelItem
                opacity={skill.level >= 4 ? 'dd' : '00'}
              ></S.LevelItem>
              <S.LevelItem
                opacity={skill.level >= 5 ? 'ff' : '00'}
              ></S.LevelItem>
            </S.Level>
          </S.Row>
        ))}
      </S.Container>
    </SectionTag>
  );
};

export default Skills;
