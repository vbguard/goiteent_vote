import React from "react";
import ListStoryItem from "../ListStoryItem/ListStoryItem";

const ListStory = props => (
  <ul>
    {props.stories.map(story => (
      <ListStoryItem story={story} />
    ))}
  </ul>
);

export default ListStory;
