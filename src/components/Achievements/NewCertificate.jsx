import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Input, Row, iconStyle } from "./Achievements";

const NewCertificate = ({
  addCeClicked,
  setCeAddClicked,
  newCertificate,
  setNewCertificate,
  certificateName,
  certificateLink,
  handleChange,
  addClickHandler,
  emptyCeState,
  saveNew
}) => {
  return (
    <>
      {!addCeClicked && (
        <Row>
          <Input
            name="name"
            type="text"
            value={newCertificate.name}
            ref={certificateName}
            placeholder="Sertifikatın adı"
            onChange={(e) => handleChange(e, newCertificate, setNewCertificate)}
            style={{ width: "40%", marginRight: "1rem" }}
          />
          <Input
            name="link"
            type="text"
            value={newCertificate.link}
            ref={certificateLink}
            onChange={(e) => handleChange(e, newCertificate, setNewCertificate)}
            placeholder="Sertifikatın linki"
            style={{ width: "60%" }}
          />
          <FaRegTimesCircle
            onClick={() => {
              addClickHandler(setCeAddClicked);
              emptyCeState();
            }}
            style={iconStyle}
          />
          <FiCheckCircle
            onClick={() => saveNew("certificates")}
            style={iconStyle}
          />
        </Row>
      )}
    </>
  );
};

export default NewCertificate;
