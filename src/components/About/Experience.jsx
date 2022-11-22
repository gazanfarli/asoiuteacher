import styled from 'styled-components';
import { TbEdit } from 'react-icons/tb';
import { Row, Date, Info, Title } from './About';

const Experience = ({
    teacher, 
    tbEditIconStyle,
    onClickHandler,
    set
}) => {
  return (
    <ExperienceContainer>
          <Title>İş təcrübəsi</Title>
          {teacher?.workExperiences?.map((item, index) => (
            <Row key={index}>
              <Date>{item.date}</Date>
              <Info>{item.position}</Info>
            </Row>
          ))}
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => onClickHandler(set)}
          />
        </ExperienceContainer>
  )
}

export default Experience;

const ExperienceContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-left: 2rem;
`;