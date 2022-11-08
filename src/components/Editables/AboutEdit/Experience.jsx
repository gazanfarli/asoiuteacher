import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Input, Row, iconStyle, Date, Info } from "./AboutEdit";
import AddButton from '../AddButton';

const Experience = ({ 
    teacher, 
    editListId,
    setEditId,
    exDate,
    position,
    saveInfo,
    deleteInfo,
    addInfo,
    addClickedEx,
    addClickedExHandler
 }) => {
  return (
    <>
        {/* WHEN EDIT ICON CLICKED */}
        {teacher?.experience?.map((item, index) =>
          index === editListId.index && editListId.name === "experience" ? (
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
                style={iconStyle}
              />
              <FiCheckCircle
                style={iconStyle}
                onClick={() => saveInfo(index, "experience")}
              />
            </Row>
          ) : (
            // DEFAULT EDIT MODE VIEW
            <Row key={index}>
              <Date>{item.date}</Date>
              <Info>{item.position}</Info>
              <FiEdit
                onClick={() => setEditId(index, "experience")}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  color: "blue",
                  cursor: "pointer",
                }}
              />
              <RiDeleteBin6Line
                onClick={() => deleteInfo(index, "experience")}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  marginLeft: "0.5rem",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </Row>
          )
        )}

        {addClickedEx ? (
          <AddButton onclick={addClickedExHandler} />
        ) : (
          // WHEN ADD BUTTON CLICKED
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
            <FaRegTimesCircle onClick={addClickedExHandler} style={iconStyle} />
            <FiCheckCircle
              style={iconStyle}
              onClick={() => {
                addClickedExHandler();
                addInfo("experience");
              }}
            />
          </Row>
        )}
    </>
  )
}

export default Experience