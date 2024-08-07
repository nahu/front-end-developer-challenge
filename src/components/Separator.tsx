import styled, { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';

interface SeparatorProps {
  nextToSelected?: boolean;
}

const SeparatorContainer = styled.div<SeparatorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 85px;
  height: 15px;
  opacity: 0.8;
  background-color: ${({ nextToSelected }) => (nextToSelected ? '#202123' : '#1A1A1A')};

  @media (max-width: 768px) {
    min-width: 15px;
    height: 35px;
  }

  & > div {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: ${({ nextToSelected }) => (nextToSelected ? '#2E2F31' : '#202123')};
  }
`;

const Separator: React.FC<SeparatorProps> = ({ nextToSelected }) => {
  return (
    <StyleSheetManager shouldForwardProp={(propName) => isValidProp(propName)}>
      <SeparatorContainer nextToSelected={nextToSelected}>
        <div />
      </SeparatorContainer>
    </StyleSheetManager>
  );
};

export default Separator;
