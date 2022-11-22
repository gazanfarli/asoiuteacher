import Person from "../components/Person/Person";
import Info from "../components/Info/Info";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import apiUrl from "../api/apiUrl";
// import axios from "axios";
// import { getTeacher } from "../features/Teacher";
import { mobile } from "../responsive";
// import { getTeacherAsync } from "../features/Teacher";

const Home = () => {
  const [editMode, setEditMode] = useState(false);
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTeacherAsync())
  }, [dispatch]);

  return (
    <>
      {teacher?.fullName?.length > 0 && (
        <Container>
          <Person editMode={editMode} setEditMode={setEditMode} />
          <Info editMode={editMode} setEditMode={setEditMode} />
        </Container>
      )}
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;
