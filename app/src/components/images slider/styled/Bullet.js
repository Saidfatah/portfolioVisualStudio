import { Box } from "../Box";
import styled from "styled-components";

const Bullet = styled(Box)`
  cursor: pointer;
`;
Bullet.defaultProps = {
  display: "inline-block",
  borderRadius: 1,
  height: 12,
  width: 12,
  m: 1
};

export default Bullet

