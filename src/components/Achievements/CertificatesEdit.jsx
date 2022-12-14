import { FaRegTimesCircle } from "react-icons/fa";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tr, Th, Td, Input, Table, Thead, Tbody } from "./Achievements";
import AddButton from "./AddButton";

const CertificatesEdit = ({
  teacher,
  editListId,
  setEditId,
  certificateName,
  certificateLink,
  saveInfo,
  deleteInfo,
  addClickHandler,
  addCeClicked,
  setCeAddClicked
}) => {
  const iconStyle = {
    margin: "auto auto auto 0.5rem",
    color: "#1b3b67",
    width: "1.4rem",
    height: "1.4rem",
    cursor: "pointer",
  };
  return (
      <Table style={{ overflow: "auto" }}>
        <Thead>
          <Tr>
            <Th style={{ minWidth: "12rem" }}>Sertifikatın adı</Th>
            <Th>Sertifikatın linki</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teacher?.certificates?.map((item, index) =>
            index === editListId.index && editListId.name === "certificates" ? (
              <Tr key={index}>
                <Td>
                  <Input
                    name="name"
                    type="text"
                    defaultValue={item.name}
                    ref={certificateName}
                    style={{ height: "5rem", width: "100%" }}
                  />
                </Td>
                <Td style={{ display: "flex" }}>
                  <Input
                    name="link"
                    type="text"
                    defaultValue={item.link}
                    ref={certificateLink}
                    style={{ height: "5rem", width: "100%" }}
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
                      onClick={() => saveInfo(index, "certificates")}
                      style={iconStyle}
                    />
                  </div>
                </Td>
              </Tr>
            ) : (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ width: "80%", wordWrap: "break-word" }}>
                      {item.link}
                    </p>
                    <div>
                      <FiEdit
                        onClick={() => setEditId(index, "certificates")}
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          color: "blue",
                          cursor: "pointer",
                          marginLeft: "0.6rem",
                        }}
                      />
                      <RiDeleteBin6Line
                        onClick={() => deleteInfo(index, "certificates")}
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
          {/* CERTIFICATES ADD BUTTON */}
          <AddButton
            section="certificates"
            addClickHandler={addClickHandler}
            addClicked={addCeClicked}
            setAddClicked={setCeAddClicked}
          />
        </Tbody>
      </Table>
  );
};

export default CertificatesEdit;
