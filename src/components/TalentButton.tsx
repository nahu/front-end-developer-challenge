import { ButtonHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';

import spritesheet from '@/assets/images/talent-icons-sprite.png';
import leftClickSound from '@/assets/sounds/left-click.wav';
import rightClickSound from '@/assets/sounds/right-click.wav';
import blockedSound from '@/assets/sounds/blocked.wav';

import { spriteHeight, spriteWidth, stepsPerRow } from '@/constants';
import ButtonContainer from '@/components/ButtonContainer';

// Helper function to get the background position
const getBackgroundPosition = (step: number, selected: boolean): string => {
  const y = selected ? 0 : spriteHeight;
  const x = step * spriteWidth;
  return `-${x}px -${y}px`;
};

export interface TalentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  step: number;
  selected: boolean;
  onLeftClick?: () => boolean;
  onRightClick?: () => boolean;
}

const SpriteButton = styled.div<TalentButtonProps>`
  width: ${spriteWidth}px;
  height: ${spriteHeight}px;
  background-image: url(${spritesheet});
  background-size: ${spriteWidth * stepsPerRow}px ${spriteHeight * 2}px;
  background-position: ${({ step, selected = false }) => getBackgroundPosition(step, selected)};
  background-repeat: no-repeat;
`;

const TalentButton: React.FC<TalentButtonProps> = ({ step, selected, onLeftClick, onRightClick, ...props }) => {
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleLeftClick = () => {
    if (onLeftClick) {
      const actionSucces = onLeftClick();
      if (actionSucces) {
        new Audio(leftClickSound).play();
      } else {
        new Audio(blockedSound).play();
      }
    }
  };

  const handleLeftClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (longPressTimeout.current) {
      e.preventDefault();
      return;
    }
    handleLeftClick();
  };

  const handleRightClick = () => {
    if (onRightClick) {
      const actionSucces = onRightClick();
      if (actionSucces) {
        new Audio(rightClickSound).play();
      } else {
        new Audio(blockedSound).play();
      }
    }
  };

  const handleRightClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleRightClick();
  };

  const handleTouchStart = () => {
    longPressTimeout.current = setTimeout(() => {
      handleRightClick();
    }, 500); // 500ms for a long press
  };

  const handleTouchEnd = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  return (
    <ButtonContainer
      selected={selected}
      onClick={handleLeftClickEvent}
      onContextMenu={handleRightClickEvent}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      <SpriteButton step={step} selected={selected} />
    </ButtonContainer>
  );
};

export default TalentButton;
