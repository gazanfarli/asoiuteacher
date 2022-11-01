import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../../Helpers/HeadingStyle";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import countries from "../../../api/countries";
import { updateTeacherData } from '../../../features/Teacher';

const ScientificWorksEdit = () => {
  const teacher = useSelector((state) => state.teacher.teacher);
  const dispatch = useDispatch();
  const [addClicked, setAddClicked] = useState(true);
  const [newWork, setNewWork] = useState({
    name: "",
    category: "",
    publishCountry: "",
    publishDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setNewWork({ ...newWork, [e.target.name]: e.target.value });
  };

  const addClickedHandler = () => {
    setAddClicked((prev) => !prev);
  };

  const addNewWork = () => {
    if (newWork.name.length === 0 ||
      newWork.category.length === 0 ||
      newWork.publishCountry.length === 0 ||
      newWork.publishDate.length === 0 ||
      newWork.link.length === 0) {
        alert('Bütün məlumatları daxil edin')
        return 0;
      }

    let works = [...teacher?.scientificWorks];
    works.push(newWork);
    dispatch(updateTeacherData({data: works, type: 'scientificWorks'}));
    setNewWork({
      name: "",
      category: "",
      publishCountry: "",
      publishDate: "",
      link: "",
    });
  };

  const columns = [
    "Elmi işin adı",
    "Kateqoriyası",
    "Nəşr olunduğu ölkə",
    "Nəşr olunduğu tarix",
    "Link",
  ];
  return (
    <>
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
      </Container>

      {/* melumatlari daxil etdiyimiz hisse */}
      {!addClicked && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Elmi işin adı</Title>
          <Input
            name="name"
            type="text"
            value={newWork.name}
            placeholder="Elmi işin adını daxil edin"
            onChange={handleChange}
          />
          <Title>Elmi işin kateqoriyası</Title>
          <Select
            name="category"
            type="text"
            value={newWork.category}
            onChange={handleChange}
          >
            <option disabled value="">
              Bir kateqoriya seçin
            </option>
            <option value="Scopus 1">Scopus 1</option>
            <option value="Scopus 2">Scopus 2</option>
            <option value="Scopus 3">Scopus 3</option>
          </Select>
          <Title>Nəşr olunduğu ölkə</Title>
          <Select
            name="publishCountry"
            type="text"
            value={newWork.publishCountry}
            onChange={handleChange}
          >
            <option disabled value="">
              Nəşr olunduğu ölkəni seçin
            </option>
            {countries.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Title>Nəşr olunduğu tarix (ay / gün / il)</Title>
          <Input
            name="publishDate"
            type="date"
            placeholder="Nəşr olunduğu ölkəni daxil edin"
            value={newWork.publishDate}
            onChange={handleChange}
          />
          <Title>Elmi işin linki</Title>
          <Input
            name="link"
            type="text"
            placeholder="Nəşr olunduğu ölkəni daxil edin"
            value={newWork.link}
            onChange={handleChange}
          />
          <IconContainer>
            <div onClick={addClickedHandler} style={iconStyle}>
              <FaRegTimesCircle
                color="red"
                style={{ "&:hover": { opacity: "0.8" } }}
              />
            </div>
            <div
              onClick={() => addNewWork()}
              style={iconStyle}
            >
              <FiCheckCircle color="#1abb00" />
            </div>
          </IconContainer>
        </div>
      )}
    </>
  );
};

export default ScientificWorksEdit;

const Container = styled.div`
  overflow-x: scroll;
  background-color: white;
`;

const Table = styled.table`
  max-width: 100%;
  border-spacing: 5px;
  margin: 30px;
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

const Title = styled.div`
  ${HeadingStyle};
  padding: 2.2rem 0 1rem 1rem;
`;

const Input = styled.input`
  padding: 1.1rem;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: 1px solid rgb(56, 84, 123);
  }
`;

const Select = styled.select`
  padding: 1.1rem;
  border-radius: 6px;
  border: none;
  &:focus {
    outline: 1px solid rgb(56, 84, 123);
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
`;

const iconStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid lightgray",
  padding: "0.6rem 0",
  cursor: "pointer",
};
