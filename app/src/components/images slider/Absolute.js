import styled from 'styled-components';
import { Box } from './Box';

import { compose, flexbox } from 'styled-system';

const composedHelpers = compose(flexbox);

export const Absolute = styled(Box)`
  position: absolute;

  ${composedHelpers}
`;

Absolute.defaultProps = {};