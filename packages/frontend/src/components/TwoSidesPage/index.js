import React from 'react';

import Container, { StyledTitle } from './style';

import { GraySoftCenter, GreenPortalLogo } from '../../assets/logos';
import { LeftBackground } from '../../assets/png';

const TwoSidesPage = ({ left, right, className, imageBackground = true, logo = true, title }) => {
  return (
    <Container className={className} >
      {
        imageBackground &&
        <div className="bg">
          <img src={LeftBackground} alt="bg" />
        </div>
      }
      <div className="left">{left}</div>
      <div className="right">
        {
          logo && 
          <div className="header" > 
            <GraySoftCenter className="soft-logo" />
            <GreenPortalLogo />
          </div>
        }
        <div className="content" >
          {title && <Title title={title} />}
          {right}
        </div>
      </div>
    </Container>
  );
};

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <div/>
      <p>{title}</p>
    </StyledTitle>
  );
};

export default TwoSidesPage;