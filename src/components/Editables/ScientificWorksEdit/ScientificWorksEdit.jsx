import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { updateTeacherData } from '../../../features/Teacher';
import { mobile } from "../../../responsive";
import Works from "./Works";
import NewWork from './NewWork';

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
  
  return (
    <>
      <Container>
        <Works
          addClicked={addClicked}
          addClickedHandler={addClickedHandler}
          teacher={teacher}
        />
      </Container>
      
      <NewWork
        addClicked={addClicked}
        addClickedHandler={addClickedHandler}
        addNewWork={addNewWork}
        handleChange={handleChange}
        newWork={newWork}
      />
    </>
  );
};

export default ScientificWorksEdit;

export const Container = styled.div`
  overflow: auto;
  background-color: white;
  ${mobile({padding: '1rem'})}
`;