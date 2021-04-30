import { Box } from "../Box";
import styled from "styled-components";

const Arrow= styled(Box)`
  cursor: pointer;
`;

Arrow.defaultProps = {
  color: "text",
  fontSize: 2,
  fontWeight: 2,
  p: 2
};
export default Arrow