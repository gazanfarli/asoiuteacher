import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { updateTeacherData } from '../../../features/Teacher';
import { mobile } from "../../../responsive";
import Works from "./Works";
import NewWork from './NewWork';
import alertify from "alertifyjs";

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
    alertify.success('Yeni elmi iş əlavə olundu');
    setNewWork({
      name: "",
      category: "",
      publishCountry: "",
      publishDate: "",
      link: "",
    });
  };

  const deleteInfo = (id, name) => {
    let data = teacher && teacher[name];
    data = data.filter((item, index) => index !== id);
    dispatch(updateTeacherData({ data: data, type: name }));
    alertify.error(`Bir elmi iş siyahıdan silindi`);
  };
  
  return (
    <>
      <Container>
        <Works
          addClicked={addClicked}
          addClickedHandler={addClickedHandler}
          teacher={teacher}
          deleteInfo={deleteInfo}
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