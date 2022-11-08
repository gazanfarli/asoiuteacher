import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Input, Row, iconStyle, Date, Info } from "./AboutEdit";
import AddButton from '../AddButton';

const Education = ({
  teacher,
  edDate,
  specialty,
  saveInfo,
  deleteInfo,
  editListId,
  setEditId,
  addInfo,
  addClickedEd,
  addClickedEdHandler
}) => {
  return (
    <>
    {/* WHEN EDIT ICON CLICKED */}
      {teacher?.education?.map((item, index) =>
        index === editListId.index && editListId.name === "education" ? (
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
              style={iconStyle}
            />
            <FiCheckCircle
              style={iconStyle}
              onClick={() => saveInfo(index, "education")}
            />
          </Row>
        ) : (
          // DEFAULT EDIT MODE VIEW
          <Row key={index}>
            <Date>{item.date}</Date>
            <Info>{item.specialty}</Info>
            <FiEdit
              onClick={() => setEditId(index, "education")}
              style={{
                width: "1.2rem",
                height: "1.2rem",
                color: "blue",
                cursor: "pointer",
              }}
            />
            <RiDeleteBin6Line
              onClick={() => deleteInfo(index, "education")}
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

      {addClickedEd ? (
          <AddButton onclick={addClickedEdHandler} />
        ) : (
          // WHEN ADD BUTTON CLICKED
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
            <FaRegTimesCircle onClick={addClickedEdHandler} style={iconStyle} />
            <FiCheckCircle
              style={iconStyle}
              onClick={() => {
                addInfo("education");
              }}
            />
          </Row>
        )}
    </>
  );
};

export default Education;
