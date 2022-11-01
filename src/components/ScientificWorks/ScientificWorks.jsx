import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import ScientificWorksEdit from "../Editables/ScientificWorksEdit/ScientificWorksEdit";

const ScientificWorks = ({ editMode }) => {
  const teacher = useSelector((state) => state.teacher.teacher);

  const columns = [
    "Elmi işin adı",
    "Kateqoriyası",
    "Nəşr olunduğu ölkə",
    "Nəşr olunduğu tarix",
    "Link",
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
            {teacher?.scientificWorks?.map((item, index) => (
              <Tr key={index}>
                <Td style={{minWidth: '15rem'}}>{item.name}</Td>
                <Td>{item.category}</Td>
                <Td>{item.publishCountry}</Td>
                <Td>{item.publishDate}</Td>
                <Td>{item.link}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
      ) : (
        <ScientificWorksEdit />
      )}
    </>
  );
};

export default ScientificWorks;

const Container = styled.div`
  padding: 30px;
  background-color: white;
  overflow-x: scroll;
`;

const Table = styled.table`
  max-width: 100%;
  border-spacing: 5px;
`;

const Thead = styled.thead``;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  background-color: #f4f5fc;
  ${HeadingStyle};
`;

const Tbody = styled.tbody`
  width: 66.666667%;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 1rem;
  background-color: #f4f5fc;
`;
