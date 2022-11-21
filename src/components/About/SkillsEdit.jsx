import { useState } from "react";
import { FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTeacherData } from "../../features/Teacher";
import { iconStyle, Input } from "./About";
import alertify from 'alertifyjs';

const Skills = ({ teacher }) => {
  const [addClickedSk, setAddClickedSk] = useState(true);
  const [newSkill, setNewSkill] = useState("");
  const dispatch = useDispatch();

  const addClickedSkHandler = () => {
    setAddClickedSk((prev) => !prev);
  };

  const addSkill = () => {
    let data = teacher?.skills;
    data = JSON.parse(JSON.stringify(data));
    if (!data.skill.includes(newSkill) && newSkill.length > 0) {
      data.skill.push(newSkill);
    } else {
      addClickedSkHandler()
      return 0;
    };
    
    dispatch(updateTeacherData({ data: data, type: "skills" }));
    alertify.success('Yeni bacarıq əlavə olundu');
  };

  const deleteSkill = (id) => {
    let data = teacher?.skills?.skill;
    let newSkill = data.filter((item, index) => index !== id);
    const newData = { ...data, skill: newSkill };

    dispatch(updateTeacherData({ data: newData, type: "skills" }));
    alertify.error(`Bir bacarıq siyahıdan silindi`);
  };

  const handleChange = (e) => {
    let data = teacher?.skills;
    const newData = { ...data, label: e.target.value };
    dispatch(updateTeacherData({ data: newData, type: 'skills' }));
  };

  return (
    <>
      {/* DEFAULT EDIT MODE VIEW */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "white",
          padding: "0.5rem"
        }}
      >
        <h3
          style={{
            padding: "0 1rem 0 0.5rem",
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input
            name="skills?.label"
            type="text"
            value={teacher?.skills?.label}
            onChange={(e) => handleChange(e)}
            placeholder="Başlıq"
            style={{ width: "8rem", height: "2rem", marginRight: '0.5rem' }}
          /> {' '}:
        </h3>
        {teacher?.skills?.skill.map((skillItem, index) => (
          <SkillItem key={index}>
            {skillItem}{" "}
            <FaTimes
              onClick={() => deleteSkill(index)}
              style={{ marginLeft: "0.4rem", cursor: "pointer" }}
            />
          </SkillItem>
        ))}

        {addClickedSk ? (
          <Button onClick={addClickedSkHandler}>
            <span style={{ fontSize: "1.3rem", lineHeight: "80%" }}>+</span>{" "}
            Əlavə et
          </Button>
        ) : (
          // WHEN ADD BUTTON CLICKED
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0.5rem",
            }}
          >
            <Input
              type="text"
              placeholder="Yeni Bacarıq"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              style={{ width: "8rem" }}
            />
            <FaRegTimesCircle style={iconStyle} onClick={addClickedSkHandler} />
            <FiCheckCircle
              style={iconStyle}
              onClick={() => {
                addSkill();
                addClickedSkHandler();
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;

const SkillItem = styled.span`
  background-color: #5c78a0;
  border-radius: 6px;
  padding: 5px 20px;
  color: white;
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #334e73;
  border-radius: 6px;
  padding: 5px 20px;
  color: white;
  margin: 0.5rem;
  border: none;
  cursor: pointer;
`;
