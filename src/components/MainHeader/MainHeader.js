import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";

// import img from "../../assets/images/gameOfTeens.png";
// import img2x from "../../assets/images/gameOfTeens@2x.png";
// import img3x from "../../assets/images/gameOfTeens@3x.png";
// import imgText from "../../assets/images/fireTextPodiya.png";
// import imgText2x from "../../assets/images/fireTextPodiya@2x.png";
// import imgText3x from "../../assets/images/fireTextPodiya@3x.png";
import textOverlay from "../../assets/images/fireTextPodiya.jpg";

// import img720 from "../../assets/images/720/game-of-teens720.png";
// import img720_2x from "../../assets/images/720/game-of-teens720@2x.png";
// import img720_3x from "../../assets/images/720/game-of-teens720@3x.png";

import imgText1200 from "../../assets/images/1200/Game of Teens logo1200@3x.png";

const Header = styled.header`
  width: 100%;
  background: #061117;
  padding-bottom: 36px;
  padding-top: 32px;
  padding-left: 34px;
  padding-right: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding-bottom: 20px;
    background: transparent;
  }

  @media (min-width: 1200px) {
    width: 1060px;
    margin: 0 auto;
    padding: 30px 0;
    position: relative;
  }
`;

const MainHeaderTitle = styled.h1`
  margin-top: 34px;
  margin-bottom: 34px;
  padding: 0;
  text-align: center;

  @media (min-width: 1200px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

const MainHeaderTitleImage = styled.img.attrs({
  src: imgText1200,
  // srcSet: `${img} 1x, ${img2x} 2x, ${img3x} 3x`,
  alt: "Game Of Teens"
})`
  @media (min-width: 768px) {
    width: 530px;
    height: 90px;
  }

  @media (min-width: 1200px) {
    width: 590px;
    height: 90px;
    margin-top: 0;
  }
`;

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
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 260px;
    height: 25px;
    text-align: center;
    font-size: 23px;
  }

  @media (min-width: 1200px) {
    width: 260px;
    height: 25px;
    text-align: center;
    font-size: 23px;
  }
`;

const Text = styled.p`
  color: #a7b7c8;
  letter-spacing: 1.26px;
  line-height: 1.79;
  text-align: center;
  font-size: 14px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 526px;
    text-align: center;
    font-size: 14px;
    margin: 30px 0 30px 0;
  }

  @media (min-width: 1200px) {
    width: 526px;
    text-align: center;
    font-size: 14px;
    margin: 35px 0 25px 0;
  }
`;

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (min-width: 1200px) {
    width: 1060px;
    flex-direction: row;
    justify-content: space-between;
  }
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

  @media (min-width: 768px) {
    max-width: 530px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    &:nth-child(1) {
      width: 270px;
    }

    &:nth-child(2) {
      width: 455px;
    }

    &:nth-child(3) {
      width: 175px;
    }
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
    <MainHeaderSubTitle>подія близько</MainHeaderSubTitle>
    <Text>
      Вже 1 червня розпочнеться грандіозна битва 4-х королівств та розіграш
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
