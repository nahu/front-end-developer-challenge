import styled from 'styled-components';

const ContainerOnMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default ContainerOnMobile;
