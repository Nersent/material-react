import * as React from "react";
import styled, { keyframes, StyledComponentClass } from "styled-components";

const getSize = (x: number, y: number, width: number, height: number, icon: number) => {
  if (width === 0 || height === 0) { 
    return 0;
  }

  // Calculate points relative to the center of a component.
  const newX = x - (width / 2);
  const newY = y - (height / 2);

  return Math.max(width + 2 * Math.abs(newX), height + 2 * Math.abs(newY)) + (icon === 1 ? 0 : 10);
};

const easing = "cubic-bezier(0.215, 0.61, 0.355, 1)";

export interface IProps {
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
  opacity: number;
  rippleTime: number;
  fadeOutTime: number;
  icon: number;
}

export const StyledRipple = styled.div.attrs({
  style: (props: IProps) => {
    const x = Math.min(props.x, props.width);
    const size = getSize(x, props.y, props.width, props.height, props.icon);

    return {
      left: x,
      top: props.y,
      height: size,
      width: size,
      opacity: props.opacity
    };
  }
})`
  position: absolute;
  background-color: ${props => props.color};
  border-radius: 50%;
  transform: translate3d(-50.1%, -50.1%, 0);
  transition: ${(props: IProps) => props.rippleTime}s width ${easing},
    ${props => props.rippleTime}s height ${easing},
    ${props => props.fadeOutTime}s opacity, 0.3s background-color;
  overflow: hidden;
  pointer-events: none;
`;
