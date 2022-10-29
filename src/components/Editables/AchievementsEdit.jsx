// import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";

const AchievementsEdit = ({ editMode }) => {
  const teacher = useSelector((state) => state.teacher.teacher);
//   const { addClicked, setAddClicked } = useState(false);

//   const addClickedHandler = () => {
//     setAddClicked((prev) => !prev);
//   };

  const columns = [
    "Elmi dərəcə",
    "Universitet",
    "İxtisas",
    "Diplomun Kateqoriyası",
  ];
  return (
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
          {/* {!addClicked && ( */}
            <Tr
              style={{ cursor: "pointer", height: "5rem" }}
            >
              <Td>Əlavə et</Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <AiOutlinePlus />
              </Td>
            </Tr>
          {/* )} */}
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
          <Tr style={{ cursor: "pointer", height: "5rem" }} >
              <Td>Əlavə et</Td>
              <Td>
                <AiOutlinePlus />
              </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default AchievementsEdit;

const Container = styled.div`
  padding: 2.2rem;
  background-color: white;
  overflow: auto;
`;

const Table = styled.table`
  border-spacing: 5px;
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
