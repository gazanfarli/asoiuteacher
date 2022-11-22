import { useSelector } from "react-redux";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import { mobile } from "../../responsive";
import PersonEdit from "./PersonEdit";
import { useState } from "react";
import ImgNotFound from "./ImgNotFound";

const Person = () => {
  const teacher = useSelector((state) => state.teacher);
  const [editPerson, setEditPerson] = useState(false);
  const [resetImg, setResetImg] = useState(false);

  const onClickHandler = (set) => {
    set((prev) => !prev);
  };

  const tbEditIconStyle = {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    cursor: "pointer",
    width: "25px",
    height: "25px",
    opacity: "0.8",
  };

  return (
    <Container>
      <Wrapper>
        {editPerson ? (
          <>
            <PersonEdit onClickHandler={onClickHandler} set={setEditPerson} />
            <ButtonContainer>
              <Button color="red" onClick={() => onClickHandler(setEditPerson)}>
                Ləğv et
              </Button>
              <Button color="#1abb00">Yadda saxla</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <ProfileImageContainer>
              <ProfileImage>
                {teacher?.imageUrl?.fullName?.length > 0 ? (
                  <>
                    {!resetImg ? (
                      <Image
                        src={teacher?.imageUrl?.download}
                        onError={() => setResetImg(true)}
                      />
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
                  </>
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
                    <ImgNotFound />
                  </div>
                )}
              </ProfileImage>
              <PersonName>{teacher?.fullName}</PersonName>
              <Position>{teacher?.position}</Position>
            </ProfileImageContainer>
            <InfoContainer>
              <Info>
                <Title>Elmi dərəcəsi</Title>
                <Subtitle>{teacher?.academicDegree}</Subtitle>
              </Info>
              <Info>
                <Title>Tədqiqat sahəsi</Title>
                <Subtitle>{teacher?.researchArea}</Subtitle>
              </Info>
              <Info>
                <Title>E-poçt</Title>
                <Subtitle>{teacher?.email}</Subtitle>
              </Info>
            </InfoContainer>
            <TbEdit
              style={tbEditIconStyle}
              onClick={() => onClickHandler(setEditPerson)}
            />
          </>
        )}
      </Wrapper>
    </Container>
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
  object-fit: cover;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 48%;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border: none;
  border-radius: 6px;
  background-color: ${(el) => el.color};
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
`;
