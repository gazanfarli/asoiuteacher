import { FaRegTimesCircle, FaTimes } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import styled from 'styled-components';
import { iconStyle, Input } from './AboutEdit';

const Skills = ({
    teacher,
    deleteSkill,
    addClickedSk,
    addClickedSkHandler,
    newSkill,
    setNewSkill,
    addSkill
}) => {
  return (
    <>
        {/* DEFAULT EDIT MODE VIEW */}
        {teacher?.skills?.length > 0 &&
          teacher?.skills?.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "white",
                padding: "0.5rem",
              }}
            >
              <h3
                style={{
                  padding: "0 2rem 0 1rem",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.label}:
              </h3>
              {item.skill.map((skillItem, i) => (
                <SkillItem key={i}>
                  {skillItem}{" "}
                  <FaTimes
                    onClick={() => deleteSkill(index, i)}
                    style={{ marginLeft: "0.4rem", cursor: "pointer" }}
                  />
                </SkillItem>
              ))}

              {addClickedSk ? (
                <Button onClick={addClickedSkHandler}>
                  <span style={{ fontSize: "1.3rem", lineHeight: "80%" }}>
                    +
                  </span>{" "}
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
                    style={{ width: "8rem", height: "2rem" }}
                  />
                  <FaRegTimesCircle
                    style={iconStyle}
                    onClick={addClickedSkHandler}
                  />
                  <FiCheckCircle
                    style={iconStyle}
                    onClick={() => {
                      addSkill(index);
                      addClickedSkHandler();
                    }}
                  />
                </div>
              )}
            </div>
          ))}
    </>
  )
}

export default Skills

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