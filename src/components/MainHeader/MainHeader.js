import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";

import img from "../../assets/images/gameOfTeens.png";
import img2x from "../../assets/images/gameOfTeens@2x.png";
import img3x from "../../assets/images/gameOfTeens@3x.png";
import imgText from "../../assets/images/fireTextPodiya.png";
import imgText2x from "../../assets/images/fireTextPodiya@2x.png";
import imgText3x from "../../assets/images/fireTextPodiya@3x.png";
import textOverlay from "../../assets/images/fireTextPodiya.jpg";

const Header = styled.header`
  width: 100vw;
  background: #061117;
  padding-bottom: 36px;
  padding-top: 32px;
  padding-left: 34px;
  padding-right: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeaderTitle = styled.h1`
  margin-top: 34px;
  margin-bottom: 34px;
  padding: 0;
  text-align: center;
  z-index: 100;
`;

const MainHeaderTitleImage = styled.img.attrs({
  src: img3x,
  srcSet: `${img} 1x, ${img2x} 2x, ${img3x} 3x`,
  alt: "Game Of Teens"
})``;

const MainHeaderSubTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  color: #000;
  letter-spacing: 2.16px;
  line-height: 1.38;
  text-align: left;
  font-size: 20px;
  font-family: "GetVoIPGrotesque";
  font-weight: 400;
  text-fill-color: transparent;
  background-image: url(${textOverlay});
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  mix-blend-mode: screen;
`;

const MainHeaderSubTitleImage = styled.img.attrs({
  src: imgText3x,
  srcSet: `${imgText} 1x, ${imgText2x} 2x, ${imgText3x} 3x`,
  alt: "Game Of Teens"
})``;

const Text = styled.p`
  color: #a7b7c8;
  letter-spacing: 1.26px;
  line-height: 1.79;
  text-align: center;
  font-size: 14px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;
  text-transform: uppercase;
`;

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const ListItemStyled = styled.li`
  max-width: 236px;
  font-family: "GetVoIPGrotesque";
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  letter-spacing: 0.4px;
  text-align: center;
  text-transform: uppercase;
  color: #00b6f5;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

/**
 * TODO:
 * - add background color or picture in mobile media!!!
 *! - on mobile header must be full screen!!!
 */

const MainHeader = () => (
  <Header>
    <Logo />
    <MainHeaderTitle>
      <MainHeaderTitleImage />
    </MainHeaderTitle>
    <MainHeaderSubTitle>
      подія близько
      {/* <MainHeaderSubTitleImage /> */}
    </MainHeaderSubTitle>
    <Text>
      Вже 1 червня розпочнеться грандіозна битва 4-х королівств та розіграш{" "}
      <span style={{ color: "#00b6f5" }}> play station 4</span>
    </Text>
    <ListStyled>
      <ListItemStyled>
        <span style={{ color: "#fefefe" }}>{"// "}</span>
        {"На полі брані зійдуться 4 команди, які презентують свої айті-проекти"}
      </ListItemStyled>
      <ListItemStyled>
        <span style={{ color: "#fefefe" }}>{"// "}</span>
        {
          "голосуйте за команду та отримайте безкоштовний квиток на подію та шанс отримати"
        }
        <span style={{ letterSpacing: "0.7px", color: "#fec240" }}>
          {" play station 4 у подарунок"}
        </span>
      </ListItemStyled>
      <ListItemStyled>
        <span style={{ color: "#fefefe" }}>{"// "}</span>
        {"подія буде цікава підліткам та їх батькам"}
      </ListItemStyled>
    </ListStyled>
  </Header>
);

export default MainHeader;
