import styled from 'styled-components';

import colors from '../../../assets/colors';

export const StyledContent = styled.div`
  padding: 40px;
  display: grid;
  grid-template-rows: min-content min-content 140px;
  align-content: space-between;
  grid-row-gap: 15px;
`;

export const StyledTopInfo = styled.div`
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-column-gap: 50px;
`;

export const StyledDfeInfo = styled.div`
  display: grid;
  align-content: center;
  grid-row-gap: 15px;
  white-space: nowrap;

  > .nfe {
    color: ${({ status }) => status === 'delivered' ? colors.mainBlue : colors.lightGreen};
    font-weight: 700;
    font-size: 19px;
  }

  > .cte {
    color: ${colors.grayText};
    font-weight: 700;
    font-size: 17px;
  }
`;

export const TopInfoSeparator = styled.div`
  width: 3px;
  background: ${({ status }) => status === 'delivered' ? colors.mainBlue : colors.lightGreen};
`;

export const StyledDeliveryInfo = styled.div`
  padding: 5px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  font-size: 12px;
  color: ${colors.grayText};

  > div {
    > span {
      font-weight: 700;
    }

    > p {
      font-weight: 500;
      word-break: break-all;
    }
  }

  > .document {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-column-gap: 5px;
    white-space: nowrap;
  }
`;

export const StyledContentSeparator = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  grid-column-gap: 10px;

  > p {
    color: ${({ status }) => status === 'delivered' ? colors.mainBlue : colors.lightGreen};
    font-weight: 600;
    font-size: 16px;
  }
`;

export const GraySeparator = styled.div`
  height: 2px;
  background: ${colors.lightGray};
`;

export const StyledBottomContent = styled.div`
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-column-gap: 25px;
`;

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 140px) ;
  grid-column-gap: 15px;
  grid-auto-flow: column;
`;

export const StyledImage = styled.a`
  box-shadow: 0 0 3px 0px #ababab;
  width: 140px;
  height: 140px;
  background: linear-gradient(
    90deg,
    rgb(232, 232, 232) 0%,
    rgb(255, 255, 255) 50%,
    rgb(232, 232, 232) 100%
  );
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -150% 0%;
    }
  }
  background-size: 400% 400%;
  animation: pulse 1s ease-in-out infinite;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const BottomSeparator = styled.div`
  background: ${colors.lightGray};
  width: 2px;
`;

export const StyledNote = styled.div`
  display: grid;
  align-content: space-between;

  > span {
    color: ${colors.mainBlue};
    font-weight: 600;
    font-size: 13px;
  }

  > p {
    font-weight: 500;
    font-size: 12px;
    height: 115px;
    padding: 7px;
    color: ${colors.grayText};
    border: 2px solid ${colors.lightGray};
    overflow-y: scroll;
  }
`;