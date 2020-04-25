import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  /* height: 35rem; */
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100vw;
  min-width: 100vw;
  z-index: -1;
  margin: 0px;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    min-width: 100%;
    top: 50%;
    left: 0px;
    transform: translateY(-50%) scale(2);
    filter: blur(20px);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.55);
  }
`;

const Index = ({ data, children }) => {
  return (
    <HeaderContainer className="relative flex justify-center py-24">
      <div className="z-10 flex flex-col items-center justify-center mx-auto max-w-7xl">
        {children}
      </div>
      <BackgroundContainer>
        <img src={data.cover_image.url} alt="podcast logo" />
      </BackgroundContainer>
    </HeaderContainer>
  );
};

export default Index;
