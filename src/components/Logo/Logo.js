import React from "react";
import styled from "styled-components";
import { ReactComponent as ImageLogo } from "../../assets/images/logo/go-iteens-logo.svg";

const LogoLink = styled.a.attrs({
  href: "http://192.168.4.44:3000"
})`
  display: flex;
  justify-content: center;
  color: none;
  cursor: pointer;

  @media (min-width: 1200px) {
    position: absolute;
    top: 30px;
    left: 0;
  }
`;
const LogoImage = styled(ImageLogo)`
  width: 114px;
  height: 32px;
  filter: drop-shadow(0px 0px 20px #fec240);
  z-index: 1;
`;
const LogoText = styled.h1``;

const Logo = () => (
  <LogoLink>
    <LogoImage />
  </LogoLink>
);

export default Logo;
