import React from "react";
import styled from "styled-components";

import img from "../../assets/images/gameOfTeens.png";
import img2x from "../../assets/images/gameOfTeens@2x.png";
import img3x from "../../assets/images/gameOfTeens@3x.png";

const MainHeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  z-index: 100;
`;
const MainHeaderTitleImage = styled.img``;

const MainHeader = () => (
  <header>
    <MainHeaderTitle>
      <img src={img} srcset={`${img2x}, ${img3x}`} alt="Game Of Teens" />
    </MainHeaderTitle>
  </header>
);

export default MainHeader;
