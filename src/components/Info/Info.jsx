import Navbar from "./Navbar";
import About from "../About/About";
import ScientificWorks from "../ScientificWorks/ScientificWorks";
import Achievements from "../Achievements/Achievements";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { mobile } from "../../responsive";
// import axios from "axios";
// import apiUrl from "../../api/apiUrl";
// import { useSelector } from "react-redux";
// import alertify from 'alertifyjs'

const Info = ({ editMode, setEditMode }) => {
  // const teacher = useSelector((state) => state.teacher.teacher);
  const onClickHandler = () => {
    window.location.reload();
  }

  // const saveData = async () => {
  //   axios.post(apiUrl, teacher)
  //   .then((res) =>{
  //     console.log(res);
  //     alertify.success('Dəyişikliklər qeyd olundu');
  //   }).catch(err => console.error(err));
  // } 
  
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<About editMode={editMode} />} />
          <Route path="/about" element={<About editMode={editMode} />} />
          <Route path="/achievement" element={<Achievements editMode={editMode} />} />
          <Route path="/scientific-works" element={<ScientificWorks editMode={editMode} />} />
          <Route path="*" element={<About />} />
        </Routes>
        {editMode && (
          <ButtonContainer>
            <SaveButton onClick={() => {setEditMode((prev) => (prev = false));}}>Yadda saxla</SaveButton>
            <CancelButton onClick={() => {
              setEditMode((prev) => (prev = false));
              onClickHandler();
              }}><Link to='/' style={{color: 'white', textDecoration: 'none', width: '100%'}}>Ləğv et</Link></CancelButton>
          </ButtonContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 66.666667%;
  min-height: 100vh;
  background-color: #f0f0fce3;
  ${mobile({width: '100%', height: 'auto'})}
`;

const Wrapper = styled.div`
  padding: 1.25rem;
`;

const buttonStyle = {
  width: "10.5rem",
  fontSize: "1rem",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  margin: "2rem 1rem 0 0",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${mobile({display: 'flex', justifyContent: 'space-between', padding: '0 1.5rem'})}
`;

const SaveButton = styled.button`
  background-color: #1abb00;
  ${buttonStyle};
  &:hover {
    opacity: 0.9;
  };
`;

const CancelButton = styled.button`
width: 100%;
  background-color: #ff0000;
  ${buttonStyle}
  &:hover {
    opacity: 0.9;
  };
`;
