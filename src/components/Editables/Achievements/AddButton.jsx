import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = ({ addClicked, addClickHandler, setAddClicked, section }) => {
  return (
    <>
      {addClicked && (
        <Tr
          onClick={() => addClickHandler(setAddClicked)}
          style={{ cursor: "pointer", height: "5rem" }}
        >
          <Td>Əlavə et</Td>
          {section === "education" && (
            <>
              <Td></Td>
              <Td></Td>
            </>
          )}
          <Td>
            <AiOutlinePlus />
          </Td>
        </Tr>
      )}
    </>
  );
};

export default AddButton;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 1rem;
  background-color: #f4f5fc;
`;
