import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default ResponsiveContainer;
