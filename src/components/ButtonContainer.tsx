import styled, { css } from 'styled-components';

import {
  glowColor,
  notSelectedBottomGradientEndColor,
  notSelectedBottomGradientStartColor,
  notSelectedMiddleColor,
  notSelectedTopGradientEndColor,
  notSelectedTopGradientStartColor,
  selectedBottomGradientEndColor,
  selectedBottomGradientStartColor,
  selectedMiddleColor,
  selectedTopGradientEndColor,
  selectedTopGradientStartColor,
} from '@/constants';

interface ButtonContainerProps {
  selected?: boolean;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-block;
  padding: 5px;
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(to bottom, ${selectedTopGradientStartColor} 0%, ${selectedTopGradientEndColor} 45%, ${selectedMiddleColor} 55%, ${selectedBottomGradientStartColor} 55%, ${selectedBottomGradientEndColor} 100%)`
      : `linear-gradient(to bottom, ${notSelectedTopGradientStartColor} 0%, ${notSelectedTopGradientEndColor} 45%, ${notSelectedMiddleColor} 55%, ${notSelectedBottomGradientStartColor} 55%, ${notSelectedBottomGradientEndColor} 100%)`};
  border: none;
  border-radius: 1px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      box-shadow:
        0 0 2px ${glowColor},
        0 0 4px ${glowColor},
        0 0 6px ${glowColor};
    `}
`;

export default ButtonContainer;
