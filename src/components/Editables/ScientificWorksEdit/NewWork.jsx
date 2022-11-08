import { FaRegTimesCircle } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import styled from 'styled-components';
import countries from "../../../api/countries";
import { HeadingStyle } from '../../../Helpers/HeadingStyle';

const NewWork = ({
    addClicked,
    addClickedHandler,
    newWork,
    handleChange,
    addNewWork
}) => {
  return (
    <>
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
  )
}

export default NewWork;

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
