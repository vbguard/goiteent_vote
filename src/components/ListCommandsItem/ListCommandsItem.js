import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ListItem = styled.li`
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 34px;
  padding-right: 34px;
  background-color: #013c4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  &:nth-child(2n) {
    background-color: #1d232d;
  }

  @media (min-width: 768px) {
    width: 530px;
    margin: 0 auto;
    padding: 14px;
    flex-direction: row;
    justify-content: space-between;
    border: 1px rgb(0, 183, 248) solid;
    border-bottom: none;

    &:nth-child(4n) {
      border-bottom: 1px rgb(0, 183, 248) solid;
    }
  }

  @media (min-width: 1200px) {
    width: 530px;
    margin: 0 auto;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    border: 1px rgb(0, 183, 248) solid;
    border-bottom: none;

    &:nth-child(4n) {
      border-bottom: 1px rgb(0, 183, 248) solid;
      background-color: #013c4e;
    }

    &:nth-child(3n) {
      border-bottom: 1px rgb(0, 183, 248) solid;
    }

    &:nth-child(1) {
      border-right: none;
    }

    &:nth-child(3) {
      border-right: none;
      background-color: #1d232d;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-left: 18px;
    align-self: stretch;
  }
`;

const Image = styled.img`
  width: 225px;
  height: 180px;
  box-shadow: 1.5px 2.6px 10px 0 rgba(1, 1, 0, 0.2);
  background-color: #00b6f5;
  object-fit: cover;

  @media (min-width: 768px) {
    flex: 0 0 180px;
    width: 180px;
    height: 145px;
    align-self: flex-start;
  }
`;

const Title = styled.h3`
  color: #a7b7c8;
  letter-spacing: 0.24px;
  line-height: 1.5;
  text-align: center;
  font-size: 12px;
  font-family: "GetVoIPGrotesque", sans-serif;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex: 0 0 100%;
    margin: 0 0 0.3rem 0;
    text-align: left;
  }
`;

const SubTitle = styled.h4`
  color: #fec240;
  letter-spacing: 0.36px;
  line-height: 1.25;
  text-align: center;
  font-size: 12px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  margin: 0;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    flex: 0 0 100%;
    margin: 0 0 0.5rem 0;
    text-align: left;
  }
`;

const ListTeam = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    justify-self: flex-start;
    align-self: flex-start;
    margin-bottom: 0;
  }
`;

const ListTeamItem = styled.li``;

const ListTeamItemText = styled.h5`
  margin: 0;
  color: #00b6f5;
  letter-spacing: 0.3px;
  line-height: 1.2;
  text-align: center;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const StyledButton = styled(({ color, ...other }) => (
  <Button classes={{ label: "label" }} {...other} />
))`
  background: linear-gradient(45deg, #fec240 30%, #fec240 90%);
  border: 0;
  color: white;
  width: 150px;
  height: 48px;
  padding: 0 30px;
  box-shadow: 4px 6.9px 16px 0 rgba(29, 35, 45, 0.38);

  & .label {
    font-family: "GetVoIPGrotesque";
    font-size: 9px;
    font-weight: 400;
    color: #080f13;
    letter-spacing: 0.81px;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    flex: 0 0 48px;
    display: inline-block;
  }
`;

const VoteText = styled.p`
  margin: 0;
  margin-top: 12px;
  color: #ffffff;
  line-height: 1.29;
  text-align: center;
  font-size: 14px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;

  @media (min-width: 768px) {
    flex: 0 0 20px;
    margin: 0;
    margin-top: 14px;
  }
`;

const StyledControl = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 100px;
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

const ListCommandsItem = props => {
  return (
    <ListItem key={props._id}>
      <Image src={props.image} alt={props.title} />
      <TextContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.projectName}</SubTitle>
        <ListTeam>
          {props.teams.map(member => (
            <ListTeamItem key={member}>
              <ListTeamItemText>{member}</ListTeamItemText>
            </ListTeamItem>
          ))}
        </ListTeam>
        <StyledControl>
          <StyledButton
            type="button"
            onClick={e => props.handlerOnClickVote(e, props._id)}
          >
            {"проголосувати та отримати квиток"}
          </StyledButton>
          <VoteText>{props.voted} голосів</VoteText>
        </StyledControl>
      </TextContainer>
    </ListItem>
  );
};

export default ListCommandsItem;
