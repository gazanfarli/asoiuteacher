import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Input, Row } from "./Achievements";

const NewEducation = ({
  addAchClicked,
  newEdu,
  setNewEdu,
  degreeInput,
  universityInput,
  specialtyInput,
  categoryInput,
  handleChange,
  addClickHandler,
  setAchAddClicked,
  emptyAchState,
  saveNew
}) => {
  const iconStyle = {
    margin: "auto auto auto 0.5rem",
    color: "#1b3b67",
    width: "1.4rem",
    height: "1.4rem",
    cursor: "pointer",
  };
  return (
    <>
      {!addAchClicked && (
        <Row>
          <Input
            name="degree"
            type="text"
            value={newEdu.degree}
            ref={degreeInput}
            placeholder="Elmi dərəcə"
            onChange={(e) => handleChange(e, newEdu, setNewEdu)}
            style={{ width: "25%", marginRight: "1rem" }}
          />
          <Input
            name="university"
            type="text"
            value={newEdu.university}
            ref={universityInput}
            placeholder="Universitet"
            onChange={(e) => handleChange(e, newEdu, setNewEdu)}
            style={{ width: "25%", marginRight: "1rem" }}
          />
          <Input
            name="specialty"
            type="text"
            value={newEdu.specialty}
            ref={specialtyInput}
            placeholder="İxtisas"
            onChange={(e) => handleChange(e, newEdu, setNewEdu)}
            style={{ width: "25%", marginRight: "1rem" }}
          />
          <Input
            name="category"
            type="text"
            value={newEdu.category}
            ref={categoryInput}
            placeholder="Kateqoriya"
            onChange={(e) => handleChange(e, newEdu, setNewEdu)}
            style={{ width: "25%" }}
          />
          <FaRegTimesCircle
            onClick={() => {
              addClickHandler(setAchAddClicked);
              emptyAchState();
            }}
            style={iconStyle}
          />
          <FiCheckCircle
            onClick={() => saveNew("achievements")}
            style={iconStyle}
          />
        </Row>
      )}
    </>
  );
};

export default NewEducation;
