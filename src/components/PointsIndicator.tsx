import styled from 'styled-components';

import { bgPointContainer, borderPointContainer, colorTextPoints } from '@/constants';

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 195px;
  height: 100px;
  border: 1px solid ${borderPointContainer};
  border-radius: 1px;
  background-color: ${bgPointContainer};
  opacity: 0.9;
  font-family: 'Open Sans', sans-serif;
`;

const PointsText = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 300;
`;

const PointsSpentText = styled.div`
  color: ${colorTextPoints};
  font-size: 22px;
  font-weight: 300;
`;

interface PointsIndicatorProps {
  currentPoints: number;
  maxPoints: number;
}

const PointsIndicator: React.FC<PointsIndicatorProps> = ({ currentPoints, maxPoints }) => {
  return (
    <PointsContainer>
      <PointsText>
        {currentPoints}/{maxPoints}
      </PointsText>
      <PointsSpentText>Points Spent</PointsSpentText>
    </PointsContainer>
  );
};

export default PointsIndicator;
