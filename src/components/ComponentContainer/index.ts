import styled from "styled-components";

import Cursors from "../../mixins/cursors";

const ComponentContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  ${Cursors.pointer()};
`;

export default ComponentContainer;
