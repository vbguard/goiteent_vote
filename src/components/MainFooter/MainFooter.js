import React from "react";
import styled from "styled-components";

import { ReactComponent as FacebookIcon } from "../../assets/images/icons/facebook.svg";
import { ReactComponent as InstaIcon } from "../../assets/images/icons/instagram.svg";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 121px;

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

const StyledSocialLink = styled.a`
  color: none;
`;

const StyledListSocialItem = styled.li`
  &:first-child {
    margin-right: 16px;
  }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  height: 42px;
  width: 42px;
`;

const StyledInstaIcon = styled(InstaIcon)`
  height: 42px;
  width: 42px;
`;

const MainFooter = () => {
  return (
    <Footer>
      <Text>слідкуйте за нами</Text>
      <StyledListSocial>
        <StyledListSocialItem>
          <StyledSocialLink href="#">
            <StyledFacebookIcon />
          </StyledSocialLink>
        </StyledListSocialItem>
        <StyledListSocialItem>
          <StyledSocialLink href="#">
            <StyledInstaIcon />
          </StyledSocialLink>
        </StyledListSocialItem>
      </StyledListSocial>
    </Footer>
  );
};

export default MainFooter;
