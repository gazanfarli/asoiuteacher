import { AiOutlinePlus } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";
import { Name, Input, About, Row } from "./AchievementsEdit";
import { iconStyle } from './AchievementsEdit';

const Inventions = ({
  teacher,
  editListId,
  HeadingStyle,
  inventiontName,
  inventionAbout,
  setEditId,
  saveInfo,
  deleteInfo,
  addInvClicked,
  addClickHandler,
  newInvention,
  setAddInvClicked,
  handleChange,
  setNewInvention,
  emptyInvState,
  saveNew
}) => {
  return (
    <>
      {teacher?.inventions?.length > 0 ? (
        <>
          {teacher?.inventions?.map((item, index) =>
            index === editListId.index && editListId.name === "inventions" ? (
              <div key={item.name}>
                <Name>
                  <span> </span>
                  <span style={HeadingStyle}>İxtiranın adı:</span>
                  <Input
                    name="name"
                    type="text"
                    defaultValue={item.name}
                    ref={inventiontName}
                    style={{ width: "50%", height: "2rem", marginLeft: "1rem" }}
                  />
                </Name>
                <About>
                  <div style={HeadingStyle}>İxtira haqqında məlumat:</div>
                  <br />
                  <Input
                    name="about"
                    type="text"
                    defaultValue={item.about}
                    ref={inventionAbout}
                    style={{ width: "100%", height: "5rem", flexWrap: "wrap" }}
                  />
                  <IconContainer>
                    <div
                      onClick={() => setEditId(null)}
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <FaRegTimesCircle
                        color="red"
                        style={{ "&:hover": { opacity: "0.8" } }}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setEditId(null);
                        saveInfo(index, "inventions");
                      }}
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <FiCheckCircle color="#1abb00" />
                    </div>
                  </IconContainer>
                </About>
              </div>
            ) : (
              <div key={item.name}>
                <Name style={{ display: "flex" }}>
                  <span style={HeadingStyle}>İxtiranın adı:</span>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "0.5rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {item.name}
                    <FiEdit
                      onClick={() => setEditId(index, "inventions")}
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        color: "blue",
                        cursor: "pointer",
                        marginLeft: "0.6rem",
                      }}
                    />
                  </div>
                </Name>
                <About>
                  <div style={HeadingStyle}>İxtira haqqında məlumat:</div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "0.5rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ width: "80%" }}>{item.about}</p>
                    <RiDeleteBin6Line
                      onClick={() => deleteInfo(index, "inventions")}
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        marginLeft: "0.5rem",
                        color: "red",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </About>
              </div>
            )
          )}
          {/* INVENTION ADD CLICKED */}
          {addInvClicked ? (
            <AddButtonContainer
              onClick={() => addClickHandler(setAddInvClicked)}
            >
              <span>Əlavə et</span>
              <AiOutlinePlus color="#38547B" fontSize="1.5rem" />
            </AddButtonContainer>
          ) : (
            <Row>
              <Input
                name="name"
                type="text"
                value={newInvention.name}
                ref={inventiontName}
                placeholder="İxtiranın adı"
                onChange={(e) => handleChange(e, newInvention, setNewInvention)}
                style={{ width: "30%", marginRight: "1rem" }}
              />
              <Input
                name="about"
                type="text"
                value={newInvention.about}
                ref={inventionAbout}
                placeholder="İxtira haqqında"
                onChange={(e) => handleChange(e, newInvention, setNewInvention)}
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
                  onClick={() => {
                    addClickHandler(setAddInvClicked);
                    emptyInvState();
                  }}
                  style={iconStyle}
                />
                <FiCheckCircle
                  onClick={() => saveNew("inventions")}
                  style={iconStyle}
                />
              </div>
            </Row>
          )}
        </>
      ) : (
        <div>
          <Name>
            <span> </span>
            <span style={HeadingStyle}>İxtiranın adı</span>
          </Name>
          <About>
            <div style={HeadingStyle}>İxtira haqqında məlumat</div>
            <br />
          </About>
        </div>
      )}
    </>
  );
};

export default Inventions;

const IconContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
`;

const AddButtonContainer = styled.div`
  width: 100%;
  padding: 20px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: #f4f5fc;
  cursor: pointer;
  color: #8996a9;
  font-weight: 600;
`;
