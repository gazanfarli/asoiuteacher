import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const AddButton = ({ onclick, addClicked }) => {
  return (
    <Container onClick={onclick}>
        <span>Əlavə et</span>
        <AiOutlinePlus color='#38547B' fontSize='1.5rem' />
    </Container>
  )
}


export default AddButton;

const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: white;
    cursor: pointer;
    color: #8996A9;
    font-weight: 600;
`