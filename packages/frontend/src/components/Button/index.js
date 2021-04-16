import styled from 'styled-components';
import { Button } from '@softcenter/react-basic-components';
import colors from 'assets/colors';

const StyledButton = styled(Button)`
  font-size: 2px;
  border-radius: 30px;
  width: 30px;
  background: ${colors.mainGreen};
  border-color: ${colors.mainGreen};

  &:active {
    background: #1a4a3d94;
    border: 1px solid #1a4a3d94;
  }
`;

export default StyledButton;
