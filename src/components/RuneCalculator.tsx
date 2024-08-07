import { useState } from 'react';
import styled from 'styled-components';

import PageTitle from '@/components/PageTitle';
import PathsContainer from '@/components/PathsContainer';
import TalentPath from '@/components/TalentPath';
import ContainerHiddenOnMobile from '@/components/ContainerHiddenOnMobile';
import ContainerOnMobile from '@/components/ContainerOnMobile';
import PointsIndicator from '@/components/PointsIndicator';

const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

interface RuneCalculatorProps {
  maxPoints: number;
}

// Example array containing the number of steps for each TalentPath
// Could be replaced with a more complex configuration object like specific sprite paths, etc.
const pathsConfiguration = [5, 5];

const RuneCalculator: React.FC<RuneCalculatorProps> = ({ maxPoints }) => {
  const [currentPoints, setCurrentPoints] = useState(0);

  const handlePointsChange = (change: number) => {
    setCurrentPoints((prevPoints) => prevPoints + change);
  };

  return (
    <>
      <PageTitle>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</PageTitle>
      <ContainerOnMobile>
        <PointsIndicator currentPoints={currentPoints} maxPoints={maxPoints} />
      </ContainerOnMobile>
      <StateContainer>
        <PathsContainer>
          {pathsConfiguration.map((steps, index) => (
            <TalentPath
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              numberOfSteps={steps}
              pathIndex={index + 1}
              onPointsChange={handlePointsChange}
              hasAvaliablePoints={maxPoints > currentPoints}
            />
          ))}
        </PathsContainer>
        <ContainerHiddenOnMobile>
          <div style={{ marginTop: '40px', marginLeft: '30px' }}>
            <PointsIndicator currentPoints={currentPoints} maxPoints={maxPoints} />
          </div>
        </ContainerHiddenOnMobile>
      </StateContainer>
    </>
  );
};

export default RuneCalculator;
