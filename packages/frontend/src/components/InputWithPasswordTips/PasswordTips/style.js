import styled from 'styled-components';
import colors from '../../../assets/colors';

const StyledPasswordTips = styled.div`
  width: 100%;
  height: 100%;
  font-size: 11px;
  color: ${colors.darkGray};
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 2px 6px;

  font-weight: 500;
  align-items: center;

  span.tip {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-column-gap: 2px;
    font-weight: 600;
    color: ${colors.red};
    > svg {
      fill: ${colors.red};
      width: 20px;
    }
    &.checked {
      color: ${colors.mainGreen};
      > svg {
        fill: ${colors.mainGreen};
      }
    }
  }
`;

export default StyledPasswordTips;
