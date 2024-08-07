import styled from 'styled-components';

const ContainerHiddenOnMobile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ContainerHiddenOnMobile;
