import styled from 'styled-components';
import { HeadingStyle } from '../../Helpers/HeadingStyle';

const Others = ({ teacher, name }) => {
    const title = name === 'projects' 
    ? ['Proyekt', 'Proyektin'] 
    : name === 'inventions' 
    ? ['İxtira', 'İxtiranın'] 
    : ['Patent','Patentin'];
  return (
    <>
        {teacher?.[name]?.length > 0 ? (
            <>
              {teacher?.[name]?.map((item, index) => (
                <div key={item.name} >
                  <Name>
                    <span> </span>
                    <span style={HeadingStyle}>{title[1]} adı:</span> {item.name}
                  </Name>
                  <About>
                    <div style={HeadingStyle}>{title[0]} haqqında məlumat:</div>
                    <br />
                    {item.about}
                  </About>
                </div>
              ))}
            </>
          ) : (
            <div>
              <Name>
                <span> </span>
                <span style={HeadingStyle}>{title[1]} adı</span>
              </Name>
              <About>
                <div style={HeadingStyle}>{title[0]} haqqında məlumat</div>
                <br />
              </About>
            </div>
          )}
    </>
  )
}

export default Others;

const Name = styled.div`
  width: 100%;
  background-color: #f4f5fc;
  padding: 1rem;
  margin-bottom: 0.3rem;
  border-radius: 8px;
`;

const About = styled.div`
  padding: 1rem;
  background-color: #f4f5fc;
  border-radius: 8px;
  margin-bottom: 2rem;
`;