import styled from "styled-components";
import { TbEdit } from "react-icons/tb";
import { Title, Row, Date, Info } from "./About";

const Education = ({ teacher, tbEditIconStyle, onClickHandler, set }) => {
  return (
    <EducationContainer style={{ position: "relative" }}>
      <Title>Təhsil</Title>
      {teacher?.education?.map((item, index) => (
        <Row key={index}>
          <Date>{item.date}</Date>
          <Info>{item.specialty}</Info>
        </Row>
      ))}
      <TbEdit style={tbEditIconStyle} onClick={() => onClickHandler(set)} />
    </EducationContainer>
  );
};

export default Education;

const EducationContainer = styled.div`
  position: relative;
  padding: 0 2.2rem 2.2rem 2.2rem;
`;
