import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../../Helpers/HeadingStyle";
import { useRef } from "react";
import { updateTeacherData } from "../../../features/Teacher";
import Education from "./Education";
import NewEducation from "./NewEducation";
import Certificates from "./Certificates";
import NewCertificate from "./NewCertificate";
import Patents from "./Patents";
import Inventions from "./Inventions";
import Projects from "./Projects";
import { mobile } from "../../../responsive";
import { IoDocumentTextOutline } from "react-icons/io5";

const AchievementsEdit = () => {
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.teacher.teacher);

  const [editListId, setEditListId] = useState({ index: null, name: "" });
  const [addAchClicked, setAchAddClicked] = useState(true);
  const [addCeClicked, setCeAddClicked] = useState(true);
  const [addProClicked, setAddProClicked] = useState(true);
  const [addInvClicked, setAddInvClicked] = useState(true);
  const [addPatClicked, setAddPatClicked] = useState(true);
  const [newEdu, setNewEdu] = useState({
    degree: "",
    category: "",
    university: "",
    specialty: "",
  });
  const [newCertificate, setNewCertificate] = useState({
    name: "",
    link: "",
  });
  const [newPatent, setNewPatent] = useState({
    name: "",
    about: "",
  });
  const [newInvention, setNewInvention] = useState({
    name: "",
    about: "",
  });
  const [newProject, setNewProject] = useState({
    name: "",
    about: "",
  });

  // achievements input's refs
  const degreeInput = useRef(null);
  const universityInput = useRef(null);
  const specialtyInput = useRef(null);
  const categoryInput = useRef(null);
  // certificates input's refs
  const certificateName = useRef(null);
  const certificateLink = useRef(null);
  // patents input's refs
  const patentName = useRef(null);
  const patentAbout = useRef(null);
  // inventions input's refs
  const inventiontName = useRef(null);
  const inventionAbout = useRef(null);
  // projects input's refs
  const projectName = useRef(null);
  const projectAbout = useRef(null);
  // CV input's refs
  const cvRef = useRef(null);

  const addClickHandler = (set) => {
    set((prev) => !prev);
  };

  const handleChange = (e, state, set) => {
    set({ ...state, [e.target.name]: e.target.value });
  };

  const saveNew = (name) => {
    let data = teacher && [...teacher[name]];

    if (name === "achievements") {
      if (
        degreeInput.current.value.length === 0 ||
        universityInput.current.value.length === 0 ||
        specialtyInput.current.value.length === 0 ||
        categoryInput.current.value.length === 0
      ) {
        alert("Bütün yeni nailiyyət məlumatlarını doldurun");
      } else {
        data.push({
          degree: degreeInput.current.value,
          university: universityInput.current.value,
          specialty: specialtyInput.current.value,
          category: categoryInput.current.value,
        });
        emptyAchState();
        addClickHandler(setAchAddClicked);
      }
    }

    if (name === "certificates") {
      if (
        certificateName.current.value.length === 0 ||
        certificateLink.current.value.length === 0
      ) {
        alert("Bütün yeni sertifikat məlumatlarını doldurun");
      } else {
        data.push({
          name: certificateName.current.value,
          link: certificateLink.current.value,
        });
        emptyCeState();
        addClickHandler(setCeAddClicked);
      }
    }

    if (name === "patents") {
      if (
        patentName.current.value.length === 0 ||
        patentAbout.current.value.length === 0
      ) {
        alert("Bütün yeni patent məlumatlarını doldurun");
      } else {
        data.push({
          name: patentName.current.value,
          about: patentAbout.current.value,
        });
        emptyPatState();
        addClickHandler(setAddPatClicked);
      }
    }

    if (name === "inventions") {
      if (
        inventiontName.current.value.length === 0 ||
        inventionAbout.current.value.length === 0
      ) {
        alert("Bütün yeni ixtira məlumatlarını doldurun");
      } else {
        data.push({
          name: inventiontName.current.value,
          about: inventionAbout.current.value,
        });
        emptyInvState();
        addClickHandler(setAddInvClicked);
      }
    }

    if (name === "projects") {
      if (
        projectName.current.value.length === 0 ||
        projectAbout.current.value.length === 0
      ) {
        alert("Bütün yeni proyekt məlumatlarını doldurun");
      } else {
        data.push({
          name: projectName.current.value,
          about: projectAbout.current.value,
        });
        emptyProState();
        addClickHandler(setAddProClicked);
      }
    }

    dispatch(updateTeacherData({ data: data, type: name }));
  };

  const saveInfo = (id, name) => {
    let data = teacher && [...teacher[name]];
    if (name === "achievements") {
      data[id] = {
        ...data[id],
        degree: degreeInput.current.value,
        specialty: specialtyInput.current.value,
        university: universityInput.current.value,
        category: categoryInput.current.value,
      };
    } else if (name === "certificates") {
      data[id] = {
        ...data[id],
        name: certificateName.current.value,
        link: certificateLink.current.value,
      };
    } else if (name === "patents") {
      data[id] = {
        ...data[id],
        name: patentName.current.value,
        about: patentAbout.current.value,
      };
    } else if (name === "inventions") {
      data[id] = {
        ...data[id],
        name: inventiontName.current.value,
        about: inventionAbout.current.value,
      };
    } else if (name === "projects") {
      data[id] = {
        ...data[id],
        name: projectName.current.value,
        about: projectAbout.current.value,
      };
    }

    dispatch(updateTeacherData({ data: data, type: name }));
    setEditId(null);
  };

  const deleteInfo = (id, name) => {
    let data = teacher && teacher[name];
    data = data.filter((item, index) => index !== id);
    dispatch(updateTeacherData({ data: data, type: name }));
  };

  const setEditId = (index, name) => {
    setEditListId({ index: index, name: name });
  };

  const emptyAchState = () => {
    setNewEdu({
      degree: "",
      category: "",
      university: "",
      specialty: "",
    });
  };

  const emptyCeState = () => {
    setNewCertificate({
      name: "",
      link: "",
    });
  };

  const emptyPatState = () => {
    setNewPatent({
      name: "",
      about: "",
    });
  };

  const emptyInvState = () => {
    setNewInvention({
      name: "",
      about: "",
    });
  };

  const emptyProState = () => {
    setNewProject({
      name: "",
      about: "",
    });
  };

  return (
    <Container>
      <Title>Diplom</Title>
      <Education
        teacher={teacher}
        editListId={editListId}
        degreeInput={degreeInput}
        categoryInput={categoryInput}
        specialtyInput={specialtyInput}
        universityInput={universityInput}
        setEditId={setEditId}
        deleteInfo={deleteInfo}
        saveInfo={saveInfo}
        addAchClicked={addAchClicked}
        addClickHandler={addClickHandler}
        setAchAddClicked={setAchAddClicked}
      />

      {/* ADD NEW ACHIEVEMENT */}
      <NewEducation
        degreeInput={degreeInput}
        specialtyInput={specialtyInput}
        categoryInput={categoryInput}
        universityInput={universityInput}
        newEdu={newEdu}
        saveNew={saveNew}
        handleChange={handleChange}
        addAchClicked={addAchClicked}
        addClickHandler={addClickHandler}
        emptyAchState={emptyAchState}
        setAchAddClicked={setAchAddClicked}
        setNewEdu={setNewEdu}
      />
      {/* CERTIFICATES */}
      <Title>Sertifikat</Title>
      <Certificates
        teacher={teacher}
        certificateName={certificateName}
        certificateLink={certificateLink}
        deleteInfo={deleteInfo}
        editListId={editListId}
        saveInfo={saveInfo}
        setEditId={setEditId}
        addCeClicked={addCeClicked}
        addClickHandler={addClickHandler}
        setCeAddClicked={setCeAddClicked}
      />
      {/* ADD NEW CERTIFICATE */}
      <NewCertificate
        addCeClicked={addCeClicked}
        addClickHandler={addClickHandler}
        certificateLink={certificateLink}
        certificateName={certificateName}
        emptyCeState={emptyCeState}
        handleChange={handleChange}
        newCertificate={newCertificate}
        saveNew={saveNew}
        setCeAddClicked={setCeAddClicked}
        setNewCertificate={setNewCertificate}
      />

      <Title>Proyekt</Title>
      <Projects
        HeadingStyle={HeadingStyle}
        addClickHandler={addClickHandler}
        deleteInfo={deleteInfo}
        editListId={editListId}
        handleChange={handleChange}
        saveInfo={saveInfo}
        saveNew={saveNew}
        setEditId={setEditId}
        teacher={teacher}
        addProClicked={addProClicked}
        emptyProState={emptyProState}
        newProject={newProject}
        projectAbout={projectAbout}
        projectName={projectName}
        setAddProClicked={setAddProClicked}
        setNewProject={setNewProject}
      />

      <Title>İxtira</Title>
      <Inventions
        HeadingStyle={HeadingStyle}
        addClickHandler={addClickHandler}
        addInvClicked={addInvClicked}
        deleteInfo={deleteInfo}
        editListId={editListId}
        emptyInvState={emptyInvState}
        handleChange={handleChange}
        newInvention={newInvention}
        inventionAbout={inventionAbout}
        inventiontName={inventiontName}
        saveInfo={saveInfo}
        saveNew={saveNew}
        setAddInvClicked={setAddInvClicked}
        setEditId={setEditId}
        setNewInvention={setNewInvention}
        teacher={teacher}
      />

      <Title>Patent</Title>
      <Patents
        HeadingStyle={HeadingStyle}
        addClickHandler={addClickHandler}
        addPatClicked={addPatClicked}
        deleteInfo={deleteInfo}
        editListId={editListId}
        emptyPatState={emptyPatState}
        handleChange={handleChange}
        newPatent={newPatent}
        patentAbout={patentAbout}
        patentName={patentName}
        saveInfo={saveInfo}
        saveNew={saveNew}
        setAddPatClicked={setAddPatClicked}
        setEditId={setEditId}
        setNewPatent={setNewPatent}
        teacher={teacher}
      />

      <Title>CV</Title>
      <CVContainer>
        <IoDocumentTextOutline
          style={{
            fontSize: "2rem",
            WebkitTextStroke: "5px #38547B",
            marginRight: "0.5rem",
          }}
        />
        <div>
          <Label htmlFor="cv_input">
            <InputFile
              id="cv_input"
              name="cv_input"
              type="file"
              accept="pdf doc docx"
            />
            <span style={{ cursor: "pointer", fontWeight: "600" }}>
              CV əlavə edin
            </span>
          </Label>
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            Fayl .pdf və ya .doc formatında olmalıdır.
          </span>
        </div>
      </CVContainer>
      <File type="file" accept="pdf doc docx" ref={cvRef} alt="profile_image" />
    </Container>
  );
};

export default AchievementsEdit;

const Container = styled.div`
  padding: 2.2rem;
  background-color: white;
  overflow: auto;
  ${mobile({ padding: "1rem" })}
`;

export const Table = styled.table`
  border-spacing: 5px;
  max-width: 100vw;
  overflow: auto;
  ${mobile({ overflow: "auto", width: "100%" })}
`;

export const Thead = styled.thead``;

export const Th = styled.th`
  width: 15%;
  text-align: left;
  padding: 1rem;
  background-color: #f4f5fc;
  ${HeadingStyle};
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 1rem;
  background-color: #f4f5fc;
`;

export const Row = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
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

const Title = styled.div`
  ${HeadingStyle};
  font-size: 1.3rem;
  padding: 2.2rem 0 1rem 1rem;
  background-color: white;
`;

export const Name = styled.div`
  width: 100%;
  background-color: #f4f5fc;
  padding: 1rem;
  margin-bottom: 0.3rem;
  border-radius: 8px;
`;

export const About = styled.div`
  padding: 1rem;
  background-color: #f4f5fc;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const CVContainer = styled.div`
  display: flex;
  color: #38547b;
  padding: 1rem;
`;

const Label = styled.label`
  display: flex;
`;

const InputFile = styled.input`
  display: none;
`;

const File = styled.input``;
