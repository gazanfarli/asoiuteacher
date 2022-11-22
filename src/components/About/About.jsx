import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import listArrValues from "../../Helpers/listArrValues";
import { mobile } from "../../responsive";
import { TbEdit } from "react-icons/tb";
import { useRef, useState } from "react";
import { addDataAsync, updateTeacherData } from "../../features/Teacher";
import alertify from "alertifyjs";
import EducationEdit from "./EducationEdit";
import SkillsEdit from "./SkillsEdit";
import ExperienceEdit from "./ExperienceEdit";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const teacher = useSelector((state) => state.teacher);
  const [editEducation, setEditEducation] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [editListId, setEditListId] = useState({ index: null, name: "" });
  const [addClickedEd, setAddClickedEd] = useState(true);
  const [addClickedEx, setAddClickedEx] = useState(true);

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
        dispatch(
          addDataAsync({ data: data[data.length - 1], type: name }, "Education")
        );
        alertify.success("Yeni təhsil əlavə olundu");
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
        // dispatch(
        //   addDataAsync(
        //     { data: data[data.length - 1], type: name },
        //     "Experience"
        //   )
        // );
        alertify.success("Yeni təcrübə əlavə olundu");
      }
    }

    dispatch(updateTeacherData({ data: data, type: name }));
  };

  const deleteInfo = (id, name) => {
    let data = teacher && teacher[name];
    data = data.filter((item, index) => index !== id);
    dispatch(updateTeacherData({ data: data, type: name }));
    const arr = ["education", "experience"];
    const newArr = ["təhsil", "təcrübə"];
    arr.forEach((item, index) => {
      if (item === name) {
        name = newArr[index];
      }
    });
    alertify.error(`Bir ${name} siyahıdan silindi`);
  };

  const setEditId = (index, name) => {
    setEditListId({ index: index, name: name });
  };

  const onClickHandler = (set) => {
    set((prev) => !prev);
  };

  const tbEditIconStyle = {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    cursor: "pointer",
    width: "25px",
    height: "25px",
    opacity: "0.8",
  };

  return (
    <Container>
      {/* EDUCATION */}
      {editEducation ? (
        <EducationContainer>
          <Title
            style={
              editEducation ? { paddingLeft: "1rem" } : { paddingLeft: "0" }
            }
          >
            Təhsil
          </Title>
          <EducationEdit
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
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => onClickHandler(setEditEducation)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </EducationContainer>
      ) : (
        <Education
          onClickHandler={onClickHandler}
          set={setEditEducation}
          tbEditIconStyle={tbEditIconStyle}
          teacher={teacher}
        />
      )}
      {/* SKILLS */}
      {editSkills ? (
        <SkillsContainer>
          <Title style={{ paddingLeft: "1rem" }}>İxtisas üzrə bacarıqlar</Title>
          <SkillsEdit teacher={teacher} />
          <ButtonContainer style={{ margin: "0 1rem" }}>
            <Button color="red" onClick={() => onClickHandler(setEditSkills)}>
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </SkillsContainer>
      ) : (
        <Skills>
          <Title>İxtisas üzrə bacarıqlar</Title>
          <div style={{ position: "relative" }}>
            <Info>
              {teacher?.skills?.label}:{" "}
              {listArrValues(teacher?.skills, "skill")}
            </Info>
          </div>
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => onClickHandler(setEditSkills)}
          />
        </Skills>
      )}
      {/* EXPERIENCE */}
      {editExperience ? (
        <ExperienceContainer>
          <Title style={{ paddingLeft: "1rem" }}>İş təcrübəsi</Title>
          <ExperienceEdit
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
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => onClickHandler(setEditExperience)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </ExperienceContainer>
      ) : (
        <Experience
          onClickHandler={onClickHandler}
          set={setEditExperience}
          tbEditIconStyle={tbEditIconStyle}
          teacher={teacher}
        />
      )}
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  overflow: auto;
  ${mobile({ height: "auto", padding: "1.8rem 0 1.8rem 1.8rem" })}
`;

const EducationContainer = styled.div`
  background-color: #f0f0fce3;
`;

const Skills = styled.div`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  border-top: 2px solid rgb(238, 238, 238);
  border-bottom: 2px solid rgb(238, 238, 238);
`;

const ExperienceContainer = styled.div`
  background-color: #f0f0fce3;
`;

export const Title = styled.div`
  ${HeadingStyle};
  background-color: white;
  padding: 2.2rem 0 0 0;
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  padding: 0.7rem 0;
  margin-bottom: 0.5rem;
`;

export const Date = styled.span`
  flex: 1;
  line-height: 145%;
  color: black;
  ${mobile({ flex: "2", marginRight: "0.7rem" })}
`;

export const Info = styled.span`
  flex: 6;
  line-height: 145%;
`;

export const DateEdit = styled.span`
  flex: 1;
  line-height: 145%;
  ${mobile({ flex: "2", marginRight: "0.7rem" })}
`;

export const InfoEdit = styled.span`
  flex: 6;
  line-height: 145%;
`;

export const Input = styled.textarea`
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

export const RowEdit = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  ${mobile({ alignItems: "center" })}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const SkillsContainer = styled.div`
  width: 100%;
  padding: 2rem 0 2rem 0;
  border-top: 2px solid rgb(238, 238, 238);
  border-bottom: 2px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
