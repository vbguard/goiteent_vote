import React from "react";
import ListCommandsItem from "../ListCommandsItem/ListCommandsItem";
import styled from "styled-components";

const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
  position: relative;

  @media (min-width: 1200px) {
    width: 1060px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListCommands = props => (
  <ListStyled>
    {props.commands.length === 0
      ? ""
      : props.commands.map(command => (
          <ListCommandsItem
            key={command._id}
            {...command}
            handlerOnClickVote={props.handlerOnClickVote}
          />
        ))}
  </ListStyled>
);

export default ListCommands;
