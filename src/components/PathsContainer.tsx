import styled from 'styled-components';

const PathsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
export default PathsContainer;
