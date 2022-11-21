import { useRef } from "react";
import styled from "styled-components";
import EditIcon from "./EditIcon";

const Input = ({ name, type, value, defaultValue, onChange, placeholder, style, ref }) => {
  const InputRef = useRef(null);
  const handleFocus = () => {
    InputRef.current.focus();
  }

  return (
    <Container>
      <InputComponent
        name={name}
        id={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        ref={!['name', 'position'].includes(name) ? InputRef : ref}
      />
      {!['name', 'position'].includes(name) && <EditIcon handleFocus={handleFocus} />}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const InputComponent = styled.input`
  
  background-color: transparent;
  color: white;
  border: none;
  text-align: center;
  ${(props) => props.style};
  &:focus {
    outline: none;
  }
`;
