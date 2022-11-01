import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { iconStyle, Tr, Td, Input } from "./AchievementsEdit";

const Education = ({
  teacher,
  editListId,
  degreeInput,
  universityInput,
  specialtyInput,
  categoryInput,
  setEditId,
  saveInfo,
  deleteInfo
}) => {
  return (
    <>
      {teacher?.achievements?.map((item, index) =>
        index === editListId.index && editListId.name === "achievements" ? (
          // WHEN EDIT ICON CLICKED  - ACHIEVEMENTS
          <Tr key={index}>
            <Td>
              <Input
                name="degree"
                type="text"
                defaultValue={item.degree}
                ref={degreeInput}
                style={{
                  width: "100%",
                  height: "5rem",
                  marginRight: "1rem",
                }}
              />
            </Td>
            <Td>
              <Input
                name="university"
                type="text"
                defaultValue={item.university}
                ref={universityInput}
                style={{ width: "100%", height: "5rem", overflow: "auto" }}
              />
            </Td>
            <Td>
              <Input
                name="specialty"
                type="text"
                defaultValue={item.specialty}
                ref={specialtyInput}
                style={{
                  width: "100%",
                  height: "5rem",
                  marginRight: "1rem",
                }}
              />
            </Td>
            <Td style={{ display: "flex" }}>
              <Input
                name="category"
                type="text"
                defaultValue={item.category}
                ref={categoryInput}
                style={{ width: "70%", height: "5rem" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <FaRegTimesCircle
                  onClick={() => setEditId(null)}
                  style={iconStyle}
                />
                <FiCheckCircle
                  onClick={() => saveInfo(index, "achievements")}
                  style={iconStyle}
                />
              </div>
            </Td>
          </Tr>
        ) : (
          // DEFAULT EDIT LIST VIEW - ACHIEVEMENTS
          <Tr key={index}>
            <Td>{item.degree}</Td>
            <Td>{item.university}</Td>
            <Td>{item.specialty}</Td>
            <Td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.category}
                <div>
                  <FiEdit
                    onClick={() => setEditId(index, "achievements")}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "0.6rem",
                    }}
                  />
                  <RiDeleteBin6Line
                    onClick={() => deleteInfo(index, "achievements")}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      marginLeft: "0.5rem",
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </Td>
          </Tr>
        )
      )}
    </>
  );
};

export default Education;
