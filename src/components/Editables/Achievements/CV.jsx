import styled from "styled-components";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const CV = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const saveCV = () => {
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("fileName", selectedFile?.name);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    // axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <>
      <CVContainer>
        <IoDocumentTextOutline
          style={{
            fontSize: "2rem",
            WebkitTextStroke: "5px #38547B",
            marginRight: "0.5rem",
          }}
        />
        <div>
          <Label htmlFor="cv_input">
            <InputFile
              id="cv_input"
              name="cv_input"
              type="file"
              accept="application/pdf,application/msword,
              application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={changeHandler}
            />
            <span style={{ cursor: "pointer", fontWeight: "600" }}>
              CV əlavə edin
            </span>
          </Label>
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            Fayl .pdf və ya .doc formatında olmalıdır.
          </span>
        </div>
      </CVContainer>
      <div
        style={{
          padding: "0 1rem 1rem 1rem",
          color: "#38547b",
          fontSize: "0.9rem",
        }}
      >
        {isFilePicked && selectedFile && (
          <>
            <span>{selectedFile?.name}</span>
            <SaveButton
              onClick={() => {
                saveCV();
                setSelectedFile((prev) => !prev);
              }}
            >
              CV'ni yadda saxla
            </SaveButton>
          </>
        )}
      </div>
    </>
  );
};

export default CV;

const CVContainer = styled.div`
  display: flex;
  color: #38547b;
  padding: 1rem;
`;

const Label = styled.label`
  display: flex;
`;

const InputFile = styled.input`
  display: none;
`;

const SaveButton = styled.button`
  padding: 0.5rem;
  margin-left: 1rem;
  background-color: transparent;
  color: #38547b;
  border: 1px solid lightgray;
  font-weight: 700;
  cursor: pointer;
  transition: 0.9s all;
  &:hover {
    opacity: 0.7;
  }
`;
