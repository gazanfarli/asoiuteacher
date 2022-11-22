import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Input, RowEdit, iconStyle, DateEdit, InfoEdit } from "./About";
import AddButton from '../AddButton';

const ExperienceEdit = ({ 
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
        {teacher?.workExperiences?.map((item, index) =>
          index === editListId.index && editListId.name === "workExperiences" ? (
            <RowEdit key={index}>
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
                onClick={() => saveInfo(index, "workExperiences")}
              />
            </RowEdit>
          ) : (
            // DEFAULT EDIT MODE VIEW
            <RowEdit key={index}>
              <DateEdit>{item.date}</DateEdit>
              <InfoEdit>{item.position}</InfoEdit>
              <FiEdit
                onClick={() => setEditId(index, "workExperiences")}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  color: "blue",
                  cursor: "pointer",
                }}
              />
              <RiDeleteBin6Line
                onClick={() => deleteInfo(index, "workExperiences")}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  marginLeft: "0.5rem",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </RowEdit>
          )
        )}

        {addClickedEx ? (
          <AddButton onclick={addClickedExHandler} />
        ) : (
          // WHEN ADD BUTTON CLICKED
          <RowEdit>
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
                addInfo("workExperiences");
              }}
            />
          </RowEdit>
        )}
    </>
  )
}

export default ExperienceEdit