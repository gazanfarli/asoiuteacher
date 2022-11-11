import { useRef } from "react";
import styled from "styled-components";
import Input from "../Input";
import { MdOutlineModeEdit } from "react-icons/md";
import EditIcon from "../EditIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacherData } from "../../../features/Teacher";
import { mobile } from "../../../responsive";
import { storage } from "../../../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
import { CgProfile } from "react-icons/cg";

const PersonEdit = () => {
  const teacher = useSelector((state) => state.teacher.teacher);
  const dispatch = useDispatch();

  const imgEdit = useRef(null);
  const inputEdit = useRef(null);

  const inputStyle = {
    width: "100%",
    fontSize: "1rem",
    backgroundColor: "#1b3b67",
    padding: "10px 40px 10px 20px",
    borderRadius: "8px",
  };

  function changeProfileImg() {
    // CHANGE PROFILE IMAGE TO UPLOADED IMAGE
    let fs = new FileReader();
    let file = [...inputEdit.current.files][0] || null;
    if (file === null) return;
    fs.readAsDataURL(file);

    fs.onload = () => {
      if (imgEdit?.current !== null) imgEdit.current.src = fs.result;
    };
    // DELETE LAST IMAGE FROM FIREBASE
    if (teacher?.profilePhotoUrl?.name?.length > 0) {
      const deleteRef = ref(
        storage,
        `images/${teacher?.profilePhotoUrl?.name}`
      );

      // Delete the file
      deleteObject(deleteRef)
        .then(() => console.log("Köhnə şəkil silindi"))
        .catch((error) => console.error(error));
    }

    // UPLOAD IMAGE TO FIREBASE
    const id = v4();
    const cvRef = ref(storage, `images/${file.name + id}`);
    uploadBytes(cvRef, file).then(() => {
      getDownloadURL(cvRef).then((url) => {
        dispatch(
          updateTeacherData({
            data: { name: file.name + id, download: url },
            type: "profilePhotoUrl",
          })
        );
        console.log("Profil şəkli əlavə olundu");
      });
    });
  }

  const handleChange = (e) => {
    dispatch(updateTeacherData({ data: e.target.value, type: e.target.name }));
  };

  return (
    <Container>
      <Wrapper>
        <ProfileImageContainer>
          <ProfileImage>
            {teacher?.profilePhotoUrl?.name?.length > 0 ? (
              <Image src={teacher?.profilePhotoUrl?.download} />
            ) : (
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CgProfile style={{ width: "100%", height: "100%" }} />
              </div>
            )}
            <Label htmlFor="imgEdit">
              <InputImg
                id="imgEdit"
                name="imgEdit"
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                ref={inputEdit}
                onChange={changeProfileImg}
              />
              <MdOutlineModeEdit
                style={{
                  fontSize: "1.5rem",
                  backgroundColor: "#1b3b67",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  padding: "0.5rem",
                }}
              />
            </Label>
          </ProfileImage>
          <PersonInfo>
            <Input
              name="name"
              type="text"
              value={teacher?.name}
              onChange={(e) => handleChange(e)}
              placeholder='Ad və soyad'
              style={{ fontSize: "22px", marginBottom: "1rem" }}
            />
            <Input
              name="position"
              type="text"
              value={teacher?.position}
              onChange={(e) => handleChange(e)}
              placeholder='Vəzifə'
              style={{ fontSize: "20px" }}
            />
            <EditIcon
              style={{
                top: "auto",
                bottom: "auto",
                width: "1rem",
                height: "1rem",
              }}
            />
          </PersonInfo>
        </ProfileImageContainer>

        <InfoContainer>
          <Info>
            <Title>Elmi dərəcəsi</Title>
            <Input
              name="scientificDegree"
              type="text"
              value={teacher?.scientificDegree}
              onChange={(e) => handleChange(e)}
              style={inputStyle}
            />
          </Info>
          <Info>
            <Title>Tədqiqat sahəsi</Title>
            <Input
              name="researchArea"
              type="text"
              value={teacher?.researchArea}
              onChange={(e) => handleChange(e)}
              style={inputStyle}
            />
          </Info>
          <Info>
            <Title>E-poçt</Title>
            <Input
              name="contact"
              type="text"
              value={teacher?.contact}
              onChange={(e) => handleChange(e)}
              style={inputStyle}
            />
          </Info>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default PersonEdit;

const Container = styled.div`
  position: relative;
  width: 33.33333%;
  height: 100vh;
  color: #fff;
  ${mobile({ position: "relative", width: "100%", height: "auto" })}
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 33.3333333%;
  height: 100vh;
  background-color: rgb(56, 84, 123);
  padding: 2rem 3rem 1rem 3rem;
  overflow: auto;
  ${mobile({ position: "relative", width: "100%", height: "auto" })}
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  position: relative;
  width: 182px;
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1rem solid #1b3b67;
  border-radius: 50%;
  margin: 0 0 1.5rem 0;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  opacity: 0.7;
`;

const Label = styled.label`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  cursor: pointer;
`;

const InputImg = styled.input`
  display: none;
`;

const PersonInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b3b67;
  padding: 0.5rem 0;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  margin-top: 2rem;
`;

const Info = styled.div`
  padding: 1.1rem 0;
  border-bottom: 0.5px solid lightgray;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;
