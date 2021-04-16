import styled from 'styled-components';
import { LabeledInput } from '@softcenter/react-basic-components';

import colors from '../../assets/colors';

const StyledLabeledInput = styled(LabeledInput)`
  > span {
    font-size: 13px;
    color: ${colors.darkGray};
    width: min-content;
    height: min-content;
    white-space: nowrap;
  }

  > div {
    width: 285px;
    height: auto;
    min-height: 36px;

    > div {
      > input {
        min-height: 36px;
        font-size: 12px;
        color: ${props => (props.disabled ? colors.grayText : colors.darkGray)};
        font-weight: ${props => (props.disabled ? 800 : 500)};
      }
    }
  }
`;

export default StyledLabeledInput;
