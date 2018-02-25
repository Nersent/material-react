import styled from "styled-components";

import { withProps } from "../../utils/with-props";

interface IProps {}

const StyledRipples = withProps<IProps>()(styled.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
`;

export default StyledRipples;