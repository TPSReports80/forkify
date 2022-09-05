import React from "react";
import { VscSmiley } from "react-icons/vsc";
import {
  MainContainer,
  Message,
  MessageText,
  IconHolder,
} from "../styled_components/StyledHome";
const Home = () => {
  return (
    <MainContainer>
      <Message className="message">
        <IconHolder className="icon-holder">
          <VscSmiley />
        </IconHolder>
        <MessageText>
          Start by searching for a recipe or an ingredient. Have fun!
        </MessageText>
      </Message>
    </MainContainer>
  );
};

export default Home;
