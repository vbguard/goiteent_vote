import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { logEvent } from "../../utils/analytic";
import facebookIcon from "../../assets/images/icons/facebook.png";
import instagramIcon from "../../assets/images/icons/instagram.png";

import bgImage from "../../assets/images/mobile_footer_bg.png";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 121px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 768px) {
    background-image: none;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #a7b7c8;
  letter-spacing: 1.89px;
  line-height: 2;
  text-align: left;
  font-size: 9px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 10.5px;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const StyledListSocial = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const StyledSocialLink = styled(ReactGA.OutboundLink)`
  color: none;
`;

const StyledListSocialItem = styled.li`
  &:first-child {
    margin-right: 16px;
  }
`;

const StyledImageIcon = styled.img`
  height: 42px;
  width: 42px;
`;

const handlerOnClickLink = () => {
  logEvent({
    category: "Social go",
    action: "Click on link to social"
  });
};

const MainFooter = () => {
  return (
    <Footer>
      <Text>слідкуйте за нами</Text>
      <StyledListSocial>
        <StyledListSocialItem>
          <StyledSocialLink
            eventLabel={"User Go to facebook GoITeens"}
            target="_blank"
            to="https://www.facebook.com/GoITeens/"
            onClick={() => handlerOnClickLink()}
          >
            <StyledImageIcon src={facebookIcon} alt="facebook icon link" />
          </StyledSocialLink>
        </StyledListSocialItem>
        <StyledListSocialItem>
          <StyledSocialLink
            eventLabel={"User Go to instagram GoITeens"}
            to="https://www.instagram.com/go_iteens/"
            target="_blank"
            onClick={() => handlerOnClickLink()}
          >
            <StyledImageIcon src={instagramIcon} alt="facebook icon link" />
          </StyledSocialLink>
        </StyledListSocialItem>
      </StyledListSocial>
    </Footer>
  );
};

export default MainFooter;
