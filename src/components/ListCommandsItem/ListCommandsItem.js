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

  &:nth-child(2n) {
    background-color: #1d232d;
  }
`;

const Image = styled.img`
  width: 225px;
  height: 180px;
  box-shadow: 1.5px 2.6px 10px 0 rgba(1, 1, 0, 0.2);
  background-color: #00b6f5;
  object-fit: contain;
`;

const Title = styled.h3`
  color: #a7b7c8;
  letter-spacing: 0.24px;
  line-height: 1.5;
  text-align: left;
  font-size: 12px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 12px;
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
`;

const ListTeam = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

const ListTeamItem = styled.li``;

const ListTeamItemText = styled.h5`
  margin: 0;
  color: #00b6f5;
  letter-spacing: 0.6px;
  line-height: 1.2;
  text-align: center;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 300;
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
`;

const ListCommandsItem = props => {
  return (
    <ListItem key={props._id}>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
      <SubTitle>{props.projectName}</SubTitle>
      <ListTeam>
        {props.teams.map(member => (
          <ListTeamItem key={member}>
            <ListTeamItemText>{member}</ListTeamItemText>
          </ListTeamItem>
        ))}
      </ListTeam>
      <StyledButton
        type="button"
        onClick={e => props.handlerOnClickVote(e, props._id)}
      >
        {"проголосувати та отримати квиток"}
      </StyledButton>
      <VoteText>{props.voted} голоса</VoteText>
    </ListItem>
  );
};

export default ListCommandsItem;
