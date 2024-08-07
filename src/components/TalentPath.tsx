import React, { useState } from 'react';
import styled from 'styled-components';

import ResponsiveContainer from '@/components/ResponsiveContainer';
import PathTitle from '@/components/PathTitle';
import Separator from '@/components/Separator';
import TalentButton from '@/components/TalentButton';
import CenteredContainer from '@/components/CenteredContainer';

const TalentPathContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

interface TalentPathProps {
  numberOfSteps: number;
  pathIndex: number;
  onPointsChange: (change: number) => void;
  hasAvaliablePoints: boolean;
}

const TalentPath: React.FC<TalentPathProps> = ({ numberOfSteps, pathIndex, hasAvaliablePoints, onPointsChange }) => {
  const [selectedSteps, setSelectedSteps] = useState<boolean[]>(Array(numberOfSteps).fill(false));

  const handleLeftClick = (index: number): boolean => {
    if (hasAvaliablePoints && !selectedSteps[index] && (index === 0 || selectedSteps[index - 1])) {
      const newSelectedSteps = [...selectedSteps];
      newSelectedSteps[index] = true;
      setSelectedSteps(newSelectedSteps);
      onPointsChange(1);
      return true;
    }
    return false;
  };

  const handleRightClick = (index: number): boolean => {
    if (
      selectedSteps[index] &&
      (index === 0 || index === numberOfSteps || (index + 1 <= numberOfSteps && !selectedSteps[index + 1]))
    ) {
      const newSelectedSteps = [...selectedSteps];
      newSelectedSteps[index] = false;
      setSelectedSteps(newSelectedSteps);
      onPointsChange(-1);
      return true;
    }
    return false;
  };

  return (
    <TalentPathContainer>
      <CenteredContainer>
        <PathTitle>Talent Path {pathIndex}</PathTitle>
      </CenteredContainer>

      <ResponsiveContainer>
        {[...Array(numberOfSteps)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <TalentButton
              step={index}
              selected={selectedSteps[index]}
              onLeftClick={() => handleLeftClick(index)}
              onRightClick={() => handleRightClick(index)}
            />
            {index < numberOfSteps - 1 && (
              <Separator nextToSelected={selectedSteps[index] || selectedSteps[index + 1]} />
            )}
          </React.Fragment>
        ))}
      </ResponsiveContainer>
    </TalentPathContainer>
  );
};

export default TalentPath;
