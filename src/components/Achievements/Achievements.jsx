import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import OtherAchievements from "./Others";
import { mobile, xs } from "../../responsive";
import CV from "./CV";
import { useRef, useState } from "react";
import alertify from "alertifyjs";
import { updateTeacherData } from "../../features/Teacher";
import EducationEdit from "./EducationEdit";
import { TbEdit } from "react-icons/tb";
import CertificatesEdit from "./CertificatesEdit";
import ProjectsEdit from "./ProjectsEdit";
import InventionsEdit from "./InventionsEdit";
import PatentsEdit from "./PatentsEdit";
import CVedit from "./CVedit";
import NewEducation from "./NewEducation";
import NewCertificate from "./NewCertificate";

const Achievements = () => {
  const teacher = useSelector((state) => state.teacher.teacher);
  const dispatch = useDispatch();
  const [editEducation, setEditEducation] = useState(false);
  const [editCertificates, setEditCertificates] = useState(false);
  const [editProjects, setEditProjects] = useState(false);
  const [editInventions, setEditInventions] = useState(false);
  const [editPatents, setEditPatents] = useState(false);
  const [editCV, setEditCV] = useState(false);
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
        alertify.success("Yeni nailiyyət əlavə olundu");
      }
    } else if (name === "certificates") {
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
        alertify.success("Yeni sertifikat əlavə olundu");
      }
    } else if (name === "patents") {
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
        alertify.success("Yeni patent əlavə olundu");
      }
    } else if (name === "inventions") {
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
        alertify.success("Yeni ixtira əlavə olundu");
      }
    } else if (name === "projects") {
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
        alertify.success("Yeni proyekt əlavə olundu");
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
    const arr = [
      "achievements",
      "certificates",
      "patents",
      "inventions",
      "projects",
    ];
    const newArr = ["nailiyyət", "sertifikat", "patent", "ixtira", "proyekt"];
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

  const columns = [
    "Elmi dərəcə",
    "Universitet",
    "İxtisas",
    "Diplomun Kateqoriyası",
  ];

  const tbEditIconStyle = {
    position: "absolute",
    top: "1rem",
    right: "1.5rem",
    cursor: "pointer",
    width: "25px",
    height: "25px",
    opacity: "0.8",
  };

  return (
    <Container>
      {/* EDUCATION */}
      {editEducation ? (
        <>
          <EducationEdit
            addAchClicked={addAchClicked}
            addClickHandler={addClickHandler}
            categoryInput={categoryInput}
            degreeInput={degreeInput}
            deleteInfo={deleteInfo}
            editListId={editListId}
            saveInfo={saveInfo}
            setAchAddClicked={setAchAddClicked}
            setEditId={setEditId}
            specialtyInput={specialtyInput}
            teacher={teacher}
            universityInput={universityInput}
          />
          {/* ADD NEW EDUCATION */}
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
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => addClickHandler(setEditEducation)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <Table style={{ marginBottom: "2rem" }}>
          <Thead>
            <Tr>
              {columns.map((item, index) => (
                <Th key={index}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {teacher?.achievements?.map((item, index) => (
              <Tr key={index}>
                <Td>{item.degree}</Td>
                <Td>{item.university}</Td>
                <Td>{item.specialty}</Td>
                <Td>{item.category}</Td>
              </Tr>
            ))}
          </Tbody>
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditEducation)}
          />
        </Table>
      )}

      {/* CERTIFICATES */}
      {editCertificates ? (
        <>
          <CertificatesEdit
            addCeClicked={addCeClicked}
            addClickHandler={addClickHandler}
            certificateLink={certificateLink}
            certificateName={certificateName}
            deleteInfo={deleteInfo}
            editListId={editListId}
            saveInfo={saveInfo}
            setCeAddClicked={setCeAddClicked}
            setEditId={setEditId}
            teacher={teacher}
          />
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
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => addClickHandler(setEditCertificates)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <Table style={{ overflowWrap: "break-word" }}>
          <Thead>
            <Tr>
              <Th>Sertifikatın adı</Th>
              <Th>Sertifikatın linki</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teacher?.certificates?.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.link}</Td>
              </Tr>
            ))}
          </Tbody>
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditCertificates)}
          />
        </Table>
      )}

      <Title>Proyekt</Title>
      {editProjects ? (
        <>
          <ProjectsEdit
            HeadingStyle={HeadingStyle}
            addClickHandler={addClickHandler}
            addProClicked={addProClicked}
            deleteInfo={deleteInfo}
            editListId={editListId}
            emptyProState={emptyProState}
            handleChange={handleChange}
            newProject={newProject}
            projectAbout={projectAbout}
            projectName={projectName}
            saveInfo={saveInfo}
            saveNew={saveNew}
            setAddProClicked={setAddProClicked}
            setEditId={setEditId}
            setNewProject={setNewProject}
            teacher={teacher}
          />
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => addClickHandler(setEditProjects)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <div style={{ position: "relative" }}>
          <OtherAchievements name="projects" teacher={teacher} />
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditProjects)}
          />
        </div>
      )}

      <Title>İxtira</Title>
      {editInventions ? (
        <>
          <InventionsEdit
            HeadingStyle={HeadingStyle}
            addClickHandler={addClickHandler}
            addInvClicked={addInvClicked}
            deleteInfo={deleteInfo}
            editListId={editListId}
            emptyInvState={emptyInvState}
            handleChange={handleChange}
            inventionAbout={inventionAbout}
            inventiontName={inventiontName}
            newInvention={newInvention}
            saveInfo={saveInfo}
            saveNew={saveNew}
            setAddInvClicked={setAddInvClicked}
            setEditId={setEditId}
            setNewInvention={setNewInvention}
            teacher={teacher}
          />
          <ButtonContainer>
            <Button
              color="red"
              onClick={() => addClickHandler(setEditInventions)}
            >
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <div style={{ position: "relative" }}>
          <OtherAchievements name="inventions" teacher={teacher} />
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditInventions)}
          />
        </div>
      )}

      <Title>Patent</Title>
      {editPatents ? (
        <>
          <PatentsEdit
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
          <ButtonContainer>
            <Button color="red" onClick={() => addClickHandler(setEditPatents)}>
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <div style={{ position: "relative" }}>
          <OtherAchievements name="patents" teacher={teacher} />
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditPatents)}
          />
        </div>
      )}

      <Title>CV</Title>
      {editCV ? (
        <>
          <CVedit />
          <ButtonContainer>
            <Button color="red" onClick={() => addClickHandler(setEditCV)}>
              Ləğv et
            </Button>
            <Button color="#1abb00">Yadda saxla</Button>
          </ButtonContainer>
        </>
      ) : (
        <div style={{ position: "relative" }}>
          <CV teacher={teacher} />
          <TbEdit
            style={tbEditIconStyle}
            onClick={() => addClickHandler(setEditCV)}
          />
        </div>
      )}
    </Container>
  );
};

export default Achievements;

const Container = styled.div`
  max-width: 100vw;
  overflow: auto;
  padding: 2.2rem;
  background-color: white;
  ${mobile({ padding: "1rem" })}
`;

export const Row = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

export const Table = styled.table`
  position: relative;
  border-spacing: 5px;
  table-layout: fixed;
  width: 100%;
  ${mobile({ overflow: "auto", width: "100%" })}
`;

export const Thead = styled.thead``;

export const Th = styled.th`
  width: 24%;
  text-align: left;
  padding: 1rem;
  background-color: #f4f5fc;
  ${HeadingStyle};
  ${xs({ overflow: "scroll" })}
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 1rem;
  background-color: #f4f5fc;
  ${xs({ overflow: "scroll" })}
`;

export const Title = styled.div`
  ${HeadingStyle};
  font-size: 1.3rem;
  padding: 2.2rem 0 1rem 1rem;
  background-color: white;
`;

export const iconStyle = {
  margin: "auto auto auto 0.5rem",
  color: "#1b3b67",
  width: "1.4rem",
  height: "1.4rem",
  cursor: "pointer",
};

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
