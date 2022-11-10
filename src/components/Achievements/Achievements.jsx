import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import AchievementsEdit from "../Editables/Achievements/AchievementsEdit";
import OtherAchievements from "./Others";
import { mobile } from "../../responsive";
import CV from './CV';

const Achievements = ({ editMode }) => {
  const teacher = useSelector((state) => state.teacher.teacher);

  const columns = [
    "Elmi dərəcə",
    "Universitet",
    "İxtisas",
    "Diplomun Kateqoriyası",
  ];

  return (
    <>
      {!editMode ? (
        <Container>
          <Table style={{ marginBottom: "2rem" }}>
            <Thead>
              <Tr>
                {columns.map((item, index) => (
                  <Th key={index}>{item}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {teacher?.achievements?.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.degree}</Td>
                  <Td>{item.university}</Td>
                  <Td>{item.specialty}</Td>
                  <Td>{item.category}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Table>
            <Thead>
              <Tr>
                <Th>Sertifikatın adı</Th>
                <Th>Sertifikatın linki</Th>
              </Tr>
            </Thead>
            <Tbody>
              {teacher?.certificates?.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.link}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Title>Proyekt</Title>
          <OtherAchievements name="projects" teacher={teacher} />

          <Title>İxtira</Title>
          <OtherAchievements name="inventions" teacher={teacher} />

          <Title>Patent</Title>
          <OtherAchievements name="patents" teacher={teacher} />

          <Title>CV</Title>
          <CV teacher={teacher} />

        </Container>
      ) : (
        <AchievementsEdit />
      )}
    </>
  );
};

export default Achievements;

const Container = styled.div`
  max-width: 100vw;
  overflow: auto;
  padding: 2.2rem;
  background-color: white;
  ${mobile({ padding: "1rem" })}
`;

const Table = styled.table`
  border-spacing: 5px;
  ${mobile({ overflow: "auto", width: "100%" })}
`;

const Thead = styled.thead``;

const Th = styled.th`
  width: 24%;
  text-align: left;
  padding: 1rem;
  background-color: #f4f5fc;
  ${HeadingStyle};
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 1rem;
  background-color: #f4f5fc;
`;

const Title = styled.div`
  ${HeadingStyle};
  font-size: 1.3rem;
  padding: 2.2rem 0 1rem 1rem;
  background-color: white;
`;

