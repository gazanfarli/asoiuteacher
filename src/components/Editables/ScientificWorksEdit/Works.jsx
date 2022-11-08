import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { HeadingStyle } from "../../../Helpers/HeadingStyle";
import { Container } from "./ScientificWorksEdit";

const Works = ({ teacher, addClicked, addClickedHandler }) => {
  const columns = [
    "Elmi işin adı",
    "Kateqoriyası",
    "Nəşr olunduğu ölkə",
    "Nəşr olunduğu tarix",
    "Link",
  ];
  return (
    <Container>
      <div style={{width: '100%', overflow: 'auto'}}>
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
                <Td style={{ minWidth: "18rem" }}>{item.name}</Td>
                <Td>{item.category}</Td>
                <Td>{item.publishCountry}</Td>
                <Td>{item.publishDate}</Td>
                <Td>{item.link}</Td>
              </Tr>
            ))}
            {addClicked && (
              <Tr
                onClick={addClickedHandler}
                style={{ cursor: "pointer", height: "5rem" }}
              >
                <Td>Əlavə et</Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <AiOutlinePlus />
                </Td>
                <Td></Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Works;

const Table = styled.table`
  max-width: 100%;
  border-spacing: 5px;
  margin: 30px;
  ${mobile({ margin: "0" })}
  overflow: auto;
`;

const Thead = styled.thead``;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  ${HeadingStyle};
  background-color: #f0f0fce3;
`;

const Tbody = styled.tbody`
  width: 66.666667%;
`;

const Tr = styled.tr`
  background-color: #f0f0fce3;
`;

const Td = styled.td`
  padding: 1rem;
  background-color: #f0f0fce3;
`;
