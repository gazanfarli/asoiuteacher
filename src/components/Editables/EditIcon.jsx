import styled from 'styled-components';
import editIcon from '../../assets/icons/editIcon.png';

const EditIcon = ({ handleFocus, style }) => {
  return (
    <Icon
    src={editIcon}
    onClick={handleFocus}
    style={style}
    />
  )
}

export default EditIcon;

const Icon = styled.img`
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    cursor: pointer;
    ${props => props.style};
`