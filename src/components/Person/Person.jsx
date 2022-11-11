import { useSelector } from "react-redux";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { mobile } from "../../responsive";
import PersonEdit from "../Editables/PersonEdit/PersonEdit";

const Person = ({ editMode, setEditMode }) => {
  const teacher = useSelector((state) => state.teacher.teacher);

  const setEditOn = () => {
    setEditMode((prev) => (prev = true));
  };

  return (
    <>
      {!editMode ? (
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
              </ProfileImage>
              <PersonName>{teacher?.name}</PersonName>
              <Position>{teacher?.position}</Position>
            </ProfileImageContainer>
            <InfoContainer>
              <Info>
                <Title>Elmi dərəcəsi</Title>
                <Subtitle>{teacher?.scientificDegree}</Subtitle>
              </Info>
              <Info>
                <Title>Tədqiqat sahəsi</Title>
                <Subtitle>{teacher?.researchArea}</Subtitle>
              </Info>
              <Info>
                <Title>E-poçt</Title>
                <Subtitle>{teacher?.contact}</Subtitle>
              </Info>
            </InfoContainer>
            <Button onClick={setEditOn}>Tənzimləmələr</Button>
          </Wrapper>
        </Container>
      ) : (
        <PersonEdit teacher={teacher} />
      )}
    </>
  );
};

export default Person;

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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid #1b3b67;
  border-radius: 50%;
  margin: 0 0 1.5rem 0;
`;

const PersonName = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const Position = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;

const InfoContainer = styled.div`
  margin: 2rem 0 1rem 0;
`;

const Info = styled.div`
  padding: 1.5rem 0;
  border-bottom: 0.5px solid lightgray;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  margin-top: 3rem;
  padding: 1rem 0;
  border: 0;
  border-radius: 5px;
  background-color: #1b3b67;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    opacity: 0.8;
  }
`;
