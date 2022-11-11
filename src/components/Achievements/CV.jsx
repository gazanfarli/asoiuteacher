import { BsPrinter } from "react-icons/bs";
import styled from "styled-components";

const CV = ({ teacher }) => {
  return (
    <>
      {teacher?.cvEndpoint?.download?.length > 0 ? (
        <a
          href={teacher?.cvEndpoint?.download}
          download
          style={{ textDecoration: "none" }}
        >
          <CVContainer style={{ cursor: "pointer" }}>
            <BsPrinter style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
            <span>CV çap edin</span>
          </CVContainer>
        </a>
      ) : (
        <CVContainer>
          CV mövcud deyil, zəhmət olmasa, tənzimləmələri aktiv edib CV yükləyin.
        </CVContainer>
      )}
    </>
  );
};

export default CV;

const CVContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #38547b;
  font-weight: 700;
`;
