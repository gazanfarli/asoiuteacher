import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import { mobile } from "../../responsive";
import ScientificWorksEdit from "./ScientificWorksEdit";

const ScientificWorks = () => {
  const teacher = useSelector((state) => state.teacher);
  const [editWorks, setEditWorks] = useState(false);

  const onClickHandler = (set) => {
    set((prev) => !prev);
  };

  console.log(editWorks);

  const tbEditIconStyle = {
    position: "absolute",
    top: "3rem",
    left: "3rem",
    cursor: "pointer",
    width: "25px",
    height: "25px",
    opacity: "0.8",
  };

  console.log(editWorks);

  const columns = [
    "Elmi işin adı",
    "Kateqoriyası",
    "Nəşr olunduğu ölkə",
    "Nəşr olunduğu tarix",
    "Link",
  ];
  return (
    <>
      {editWorks ? (
        <>
          <ScientificWorksEdit />
          <ButtonContainer>
            <Button color="red" onClick={() => onClickHandler(setEditWorks)}>
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
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
              <Td style={{ minWidth: "15rem" }}>{item.name}</Td>
              <Td>{item.category}</Td>
              <Td>{item.publishCountry}</Td>
              <Td>{item.publishDate}</Td>
              <Td style={{ maxWidth: "180px", overflowWrap: "break-word" }}>
                {item.link}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <TbEdit
        style={tbEditIconStyle}
        onClick={() => onClickHandler(setEditWorks)}
      />
    </Container>
      )}
    </>
  );
};

export default ScientificWorks;

const Container = styled.div`
  position: relative;
  padding: 30px;
  background-color: white;
  overflow: auto;
  ${mobile({ padding: "1rem" })};
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  width: 48%;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border: none;
  border-radius: 6px;
  background-color: ${(el) => el.color};
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
`;
