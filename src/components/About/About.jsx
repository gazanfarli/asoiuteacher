import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import listArrValues from "../../Helpers/listArrValues";
import AboutEdit from "../Editables/AboutEdit/AboutEdit";
import { mobile } from '../../responsive';

const About = ({ editMode }) => {
  const teacher = useSelector((state) => state.teacher.teacher);
  return (
    <>
      {!editMode ? (
        <Container>
          <Education>
            <Title>Təhsil</Title>
            {teacher?.education?.map((item, index) => (
              <Row key={index}>
                <Date>{item.date}</Date>
                <Info>{item.specialty}</Info>
              </Row>
            ))}
          </Education>

          <Skills>
            <Title>İxtisas üzrə bacarıqlar</Title>
              <div style={{ position: "relative" }}>
                <Info>
                  {teacher?.skills?.label}: {listArrValues(teacher?.skills, "skill")}
                </Info>
              </div>
          </Skills>

          <Experience>
            <Title>İş təcrübəsi</Title>
            {teacher?.experience?.map((item, index) => (
              <Row key={index}>
                <Date>{item.date}</Date>
                <Info>{item.position}</Info>
              </Row>
            ))}
          </Experience>
        </Container>
      ) : (
        <AboutEdit teacher={teacher} editMode={editMode} />
      )}
    </>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 2.2rem;
  overflow: auto;
  ${mobile({height: 'auto', padding: '1.8rem'})}
`;

const Education = styled.div`
  padding-bottom: 2rem;
`;

const Skills = styled.div`
  padding: 2rem 0 2rem 0;
  border-top: 2px solid rgb(238, 238, 238);
  border-bottom: 2px solid rgb(238, 238, 238);
`;

const Experience = styled.div`
  padding-top: 2rem;
`;

const Title = styled.div`
  ${HeadingStyle};
  margin-bottom: 1rem;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  padding: 0.7rem 0;
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  flex: 1;
  line-height: 145%;
  color: black;
  ${mobile({flex: '2', marginRight: '0.7rem'})}
`;

const Info = styled.span`
  flex: 6;
  line-height: 145%;
`;
