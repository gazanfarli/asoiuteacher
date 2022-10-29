import { useRef, useState } from "react";
import styled from "styled-components";
import { HeadingStyle } from "../../Helpers/HeadingStyle";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiCheckCircle } from 'react-icons/fi'
import { FaRegTimesCircle } from 'react-icons/fa'
import Skills from "./Skills";
import AddButton from './AddButton';
import { useDispatch, useSelector } from "react-redux";
import { updateTeacherData } from "../../features/Teacher";


const AboutEdit = () => {
  const teacher = useSelector(state => state.teacher.teacher);
  const [tags, setTags] = useState(teacher?.skills[0]?.skill);
  const [editListId, setEditListId] = useState({index: null, name: ''});
  const [addClickedEd, setAddClickedEd] = useState(true);
  const [addClickedEx, setAddClickedEx] = useState(true);

  const dispatch = useDispatch();
  const edDate = useRef(null);
  const exDate = useRef(null);
  const specialty = useRef(null);
  const position = useRef(null);

  const deleteInfo = (id, name) => {
    let data = teacher && teacher[name];
    data = data.filter((item, index) => index !== id);
    dispatch(updateTeacherData({data: data, type: name}));
  }

  const addClickedEdHandler = () => {
    setAddClickedEd(prev => !prev);
  }
  const addClickedExHandler = () => {
    setAddClickedEx(prev => !prev);
  }

  const saveInfo = (id, name) => {
    let data = teacher && [...teacher[name]];
    if (name === 'education') {
      data[id] = {...data[id], date: edDate.current.value, specialty: specialty.current.value};
    } else if (name === 'experience') {
      data[id] = {...data[id], date: exDate.current.value, position: position.current.value};
    }
    
    dispatch(updateTeacherData({data: data, type: name}));
    setEditId(null);
  }

  const addInfo = (name) => {
    let data = teacher && [...teacher[name]];
    if (name === 'education') {

      if(edDate.current.value.length === 0 || specialty.current.value.length === 0) {
        alert('Məlumatları tam daxil edin');
        return 0;
      } else { data.push({date: edDate.current.value, specialty: specialty.current.value}) }

    } else if (name === 'experience') {
      
      if(exDate.current.value.length === 0 || position.current.value.length === 0) {
        alert('Məlumatları tam daxil edin');
        return 0;
      } else { data.push({date: exDate.current.value, position: position.current.value}) }

    }
    
    dispatch(updateTeacherData({data: data, type: name}));
  }
  

  const setEditId = (index, name) => {
    setEditListId({index: index, name: name});
  }

  const iconStyle = {
    margin: 'auto auto auto 0.5rem', 
    color: '#1b3b67', 
    width: '1.4rem',
    height: '1.4rem', 
    cursor: 'pointer',
  }
 
  return (
    <Container>
      <Education>
      <Title>Təhsil</Title>
        {teacher?.education?.map((item, index) =>
          index === editListId.index && editListId.name === 'education' ? (
            <Row key={index}>
              <Input
                name="date"
                type="text"
                defaultValue={item.date}
                ref={edDate}
                style={{ width: "15%", marginRight: "1rem" }}
              />
              <Input
                name="specialty"
                type="text"
                defaultValue={item.specialty}
                ref={specialty}
                style={{ width: "85%" }}
              />
              <FaRegTimesCircle 
              onClick={() => setEditId(null)} 
              style={ iconStyle } />
              <FiCheckCircle style={iconStyle}
              onClick={() => saveInfo(index, 'education')} />
            </Row>
          ) : (
            <Row key={index}>
              <Date>{item.date}</Date>
              <Info>{item.specialty}</Info>
              <FiEdit 
              onClick={() => setEditId(index, 'education')} 
              style={{width: '1.2rem',height: '1.2rem', color: 'blue', cursor: 'pointer'}} />
              <RiDeleteBin6Line
              onClick={() => deleteInfo(index, 'education')} 
              style={{ width: '1.2rem',height: '1.2rem', marginLeft: '0.5rem', color: 'red', cursor: 'pointer'}} />
            </Row>
          )
        )}
        {addClickedEd ?
          <AddButton onclick={addClickedEdHandler} /> 
          : (
            <Row>
              <Input
                name="dateAdd"
                type="text"
                placeholder="Tarix"
                ref={edDate}
                style={{ width: "15%", marginRight: "1rem" }}
              />
              <Input
                name="specialtyAdd"
                type="text"
                placeholder="Universitet və ixtisas"
                ref={specialty}
                style={{ width: "85%" }}
              />
              <FaRegTimesCircle 
              onClick={addClickedEdHandler} 
              style={ iconStyle } />
              <FiCheckCircle style={iconStyle}
              onClick={() => {addInfo('education')}} />
            </Row>
          )
        }
        
      </Education>

      <SkillsContainer>
        <Title>İxtisas üzrə bacarıqlar</Title>
        {teacher?.skills.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <h3 style={{ padding: "0 2rem 0 1rem", background: 'white' }}>{item.label}:</h3>
            <Skills tags={tags} setTags={setTags} style={{padding: '0 1rem 1rem 0'}} />
          </div>
        ))}
      </SkillsContainer>

      <Experience>
        <Title>İş təcrübəsi</Title>
        {teacher?.experience?.map((item, index) =>
          index === editListId.index && editListId.name === 'experience' ? (
            <Row key={index}>
              <Input
                name="date"
                type="text"
                defaultValue={item.date}
                ref={exDate}
                style={{ width: "15%", marginRight: "1rem" }}
              />
              <Input
                name="position"
                type="text"
                defaultValue={item.position}
                ref={position}
                style={{ width: "85%" }}
              />
              <FaRegTimesCircle 
              onClick={() => setEditId(null)} 
              style={ iconStyle } />
              <FiCheckCircle style={iconStyle}
              onClick={() => saveInfo(index, 'experience')} />
            </Row>
          ) : (
            <Row key={index}>
              <Date>{item.date}</Date>
              <Info>{item.position}</Info>
              <FiEdit 
              onClick={() => setEditId(index, 'experience')} 
              style={{width: '1.2rem',height: '1.2rem', color: 'blue', cursor: 'pointer'}} />
              <RiDeleteBin6Line
              onClick={() => deleteInfo(index, 'experience')} 
              style={{width: '1.2rem',height: '1.2rem', marginLeft: '0.5rem', color: 'red', cursor: 'pointer'}} />
            </Row>
          )
        )}
        {addClickedEx ?
          <AddButton onclick={addClickedExHandler} /> 
          : (
            <Row>
              <Input
                name="dateAdd"
                type="text"
                placeholder="Tarix"
                ref={exDate}
                style={{ width: "15%", marginRight: "1rem" }}
              />
              <Input
                name="specialtyAdd"
                type="text"
                placeholder="Vəzifə"
                ref={position}
                style={{ width: "85%" }}
              />
              <FaRegTimesCircle 
              onClick={addClickedExHandler} 
              style={ iconStyle } />
              <FiCheckCircle style={iconStyle}
              onClick={() => {addClickedExHandler(); addInfo('experience')}} />
            </Row>
          )
        }
      </Experience>
    </Container>
  );
};

export default AboutEdit;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f0fce3;
  padding: 0 2.2rem 2.2rem 0;
  overflow: auto;
`;

const Education = styled.div`
  padding-bottom: 2rem;
  background-color: #f0f0fce3;
`;

const SkillsContainer = styled.div`
  padding: 2rem 0 2rem 0;
  border-top: 2px solid rgb(238, 238, 238);
  border-bottom: 2px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Experience = styled.div`
  padding-top: 2rem;
`;

const Title = styled.div`
  ${HeadingStyle};
  padding: 2.2rem 0 1rem 1rem;
  background-color: white;
`;

const Row = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const Date = styled.span`
  flex: 1;
  line-height: 145%;
`;

const Info = styled.span`
  flex: 6;
  line-height: 145%;
`;

const Input = styled.input`
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
