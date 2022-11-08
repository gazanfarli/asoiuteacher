import { useRef } from "react";
import styled from "styled-components";
import ProfileImg from "../../../assets/images/profile.jpg";
import Input from "../Input";
import { MdOutlineModeEdit } from "react-icons/md";
import EditIcon from '../EditIcon';
import { useDispatch, useSelector } from "react-redux";
import { updateTeacherData } from "../../../features/Teacher";
import { mobile } from "../../../responsive";

const PersonEdit = () => {
  const teacher = useSelector(state => state.teacher.teacher);
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
    let fs = new FileReader();
    let file = [...inputEdit.current.files][0];
    fs.readAsDataURL(file);
    
    fs.onload = () => {
      imgEdit.current.src = fs.result;
      console.log(fs.result);
    };
  }

  const handleChange = (e) => {
    dispatch(updateTeacherData({data: e.target.value, type: e.target.name}));
  };

  return (
    <Container>
      <Wrapper>

        <ProfileImageContainer>
          <ProfileImage>
            <Img ref={imgEdit} src={ProfileImg} alt="profile_image" />
            <Label htmlFor="imgEdit">
              <InputImg
                id="imgEdit"
                name="imgEdit"
                type="file"
                accept="jpg jpef png"
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
              style={{ fontSize: "22px", marginBottom: "1rem" }}
            />
            <Input
              name="position"
              type="text"
              value={teacher?.position}
              onChange={(e) => handleChange(e)}
              style={{ fontSize: "20px" }}
            />
            <EditIcon style={{top: 'auto', bottom: 'auto', width: '1rem', height: '1rem'}} />
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
  ${mobile({position: 'relative', width: '100%', height: 'auto'})}
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
  ${mobile({position: 'relative', width: '100%', height: 'auto'})}
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

const Img = styled.img`
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
