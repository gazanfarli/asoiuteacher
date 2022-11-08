import { useRef, useState } from "react";
import styled from "styled-components";
import { HeadingStyle } from "../../../Helpers/HeadingStyle";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills, updateTeacherData } from "../../../features/Teacher";
import { mobile } from "../../../responsive";
import Education from "./Education";
import Experience from "./Experience";
import Skills from './Skills';

const AboutEdit = () => {
  const teacher = useSelector((state) => state.teacher.teacher);
  const [editListId, setEditListId] = useState({ index: null, name: "" });
  const [addClickedEd, setAddClickedEd] = useState(true);
  const [addClickedEx, setAddClickedEx] = useState(true);
  const [addClickedSk, setAddClickedSk] = useState(true);
  const [newSkill, setNewSkill] = useState("");

  const dispatch = useDispatch();
  const edDate = useRef(null);
  const exDate = useRef(null);
  const specialty = useRef(null);
  const position = useRef(null);

  const addClickedEdHandler = () => {
    setAddClickedEd((prev) => !prev);
  };
  const addClickedExHandler = () => {
    setAddClickedEx((prev) => !prev);
  };
  const addClickedSkHandler = () => {
    setAddClickedSk((prev) => !prev);
  };

  const saveInfo = (id, name) => {
    let data = teacher && [...teacher[name]];
    if (name === "education") {
      data[id] = {
        ...data[id],
        date: edDate.current.value,
        specialty: specialty.current.value,
      };
    } else if (name === "experience") {
      data[id] = {
        ...data[id],
        date: exDate.current.value,
        position: position.current.value,
      };
    }

    dispatch(updateTeacherData({ data: data, type: name }));
    setEditId(null);
  };

  const addInfo = (name) => {
    let data = teacher && [...teacher[name]];
    if (name === "education") {
      if (
        edDate.current.value.length === 0 ||
        specialty.current.value.length === 0
      ) {
        alert("Məlumatları tam daxil edin");
        return 0;
      } else {
        data.push({
          date: edDate.current.value,
          specialty: specialty.current.value,
        });
      }
    } else if (name === "experience") {
      if (
        exDate.current.value.length === 0 ||
        position.current.value.length === 0
      ) {
        alert("Məlumatları tam daxil edin");
        return 0;
      } else {
        data.push({
          date: exDate.current.value,
          position: position.current.value,
        });
      }
    }

    dispatch(updateTeacherData({ data: data, type: name }));
  };

  const addSkill = (skillsId) => {
    let data = teacher?.skills[skillsId];
    data = JSON.parse(JSON.stringify(data));
    if (!data.skill.includes(newSkill) && newSkill.length > 0) {
      data.skill.push(newSkill);
    } else addClickedSkHandler();

    dispatch(updateSkills({ id: skillsId, data: data }));
  };

  const deleteInfo = (id, name) => {
    let data = teacher && teacher[name];
    data = data.filter((item, index) => index !== id);
    dispatch(updateTeacherData({ data: data, type: name }));
  };

  const deleteSkill = (skillsId, id) => {
    let data = teacher?.skills[skillsId];
    let newSkill = data.skill.filter((item, index) => index !== id);
    const newData = { ...data, skill: newSkill };

    dispatch(updateSkills({ id: skillsId, data: newData }));
  };

  const setEditId = (index, name) => {
    setEditListId({ index: index, name: name });
  };

  return (
    <Container>
      <EducationContainer>
        <Title>Təhsil</Title>
        <Education
          addClickedEd={addClickedEd}
          addClickedEdHandler={addClickedEdHandler}
          addInfo={addInfo}
          deleteInfo={deleteInfo}
          edDate={edDate}
          editListId={editListId}
          saveInfo={saveInfo}
          setEditId={setEditId}
          specialty={specialty}
          teacher={teacher}
        />
      </EducationContainer>

      <SkillsContainer>
        <Title>İxtisas üzrə bacarıqlar</Title>
        <Skills
          addClickedSk={addClickedSk}
          addClickedSkHandler={addClickedSkHandler}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          teacher={teacher}
        />
      </SkillsContainer>

      <ExperienceContainer>
        <Title>İş təcrübəsi</Title>
        <Experience
          addClickedEx={addClickedEx}
          addClickedExHandler={addClickedExHandler}
          addInfo={addInfo}
          deleteInfo={deleteInfo}
          editListId={editListId}
          exDate={exDate}
          position={position}
          saveInfo={saveInfo}
          setEditId={setEditId}
          teacher={teacher}
        />
      </ExperienceContainer>
    </Container>
  );
};

export default AboutEdit;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f0fce3;
  padding: 0 2.2rem 2.2rem 0;
  overflow: auto;
  ${mobile({ height: "auto", padding: "0" })}
`;

const EducationContainer = styled.div`
  padding-bottom: 2rem;
  background-color: #f0f0fce3;
`;

const SkillsContainer = styled.div`
  width: 100%;
  padding: 2rem 0 2rem 0;
  border-top: 2px solid rgb(238, 238, 238);
  border-bottom: 2px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



const ExperienceContainer = styled.div`
  padding-top: 2rem;
`;

const Title = styled.div`
  ${HeadingStyle};
  padding: 2.2rem 0 1rem 1rem;
  background-color: white;
`;

export const Row = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  ${mobile({ alignItems: "center" })}
`;

export const Date = styled.span`
  flex: 1;
  line-height: 145%;
  ${mobile({ flex: "2", marginRight: "0.7rem" })}
`;

export const Info = styled.span`
  flex: 6;
  line-height: 145%;
`;

export const Input = styled.input`
  display: "flex";
  font-size: "1rem";
  padding: 5px 10px;
  color: "#000";
  border: 1px solid #c5c2c2;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
  }
`;

export const iconStyle = {
  margin: "auto auto auto 0.5rem",
  color: "#1b3b67",
  width: "1.4rem",
  height: "1.4rem",
  cursor: "pointer",
};
