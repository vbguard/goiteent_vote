import React from "react";
import styled from "styled-components";

const ListStoryItem = props => (
  <li key={props.id}>
    <p>{props.text}</p>
  </li>
);
