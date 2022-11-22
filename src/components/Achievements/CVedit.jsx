import styled from "styled-components";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { updateTeacherData } from "../../features/Teacher";
import alertify from 'alertifyjs';

const CV = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const saveCV = () => {
    if (selectedFile == null) return;
    const id = v4();
    const cvRef = ref(storage, `files/${selectedFile.name + id}`);
    // IF CV EXISTS THEN DELETE OLD
    if (teacher?.cvEndpoint?.name?.length > 0) {
      const deleteRef = ref(storage, `files/${teacher?.cvEndpoint?.name}`);

      // Delete the file
      deleteObject(deleteRef)
        .then(() => console.log("Köhnə CV silindi"))
        .catch((error) => console.error(error));
    }

    uploadBytes(cvRef, selectedFile).then(() => {
      getDownloadURL(cvRef).then((url) => {
        dispatch(
          updateTeacherData({
            data: { name: selectedFile.name + id, download: url },
            type: "cvEndpoint",
          })
        );
        alertify.success('CV əlavə olundu');
      });
    });
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
