import React, { Component } from "react";
import styled from "styled-components";
import MainHeader from "../../components/MainHeader/MainHeader";
import ListCommands from "../../components/ListCommands/ListCommands";
import MainFooter from "../../components/MainFooter/MainFooter";
import VoteForm from "../../components/VoteForm/VoteForm";
import api from "../../service/api";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import bgImage3x from "../../assets/images/bgImage@3x.png";
import bgOverlay from "../../assets/images/bgOverlay.png";

const StyledMainPage = styled.div``;

const MainWrapper = styled.div`
  background: url(${bgOverlay}), url(${bgImage3x});
  background-blend-mode: overlay, normal;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: cover, cover;
  position: relative;
`;

class MainPage extends Component {
  state = {
    commands: [],
    chosenCommand: {},
    isModalOpen: false,
    name: "",
    email: "",
    tel: "",
    successVote: false
  };

  componentDidMount() {
    console.log(api);
    api.getCommands().then(data => {
      this.setState({
        commands: data.commands
      });
    });
  }

  handlerOnClickVote = (e, id) => {
    e.preventDefault();
    this.setState(
      state => {
        const chosen = state.commands.filter(command => id === command._id);
        return {
          ...state,
          chosenCommand: { ...chosen[0] },
          isModalOpen: !state.isModalOpen
        };
      },
      () => console.log(this.state.chosenCommand)
    );
  };

  handleOnChangeFormFields = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmitVoteForm = e => {
    e.preventDefault();

    const { name, email, tel, chosenCommand } = this.state;
    const data = {
      name,
      email,
      tel,
      vote: chosenCommand._id
    };
    console.log(data);
    api.vote(chosenCommand._id, data).then(res => {
      this.setState(
        {
          name: "",
          email: "",
          tel: "",
          isModalOpen: false,
          successVote: res.data.success,
          commands: res.data.commands
        },
        () => setTimeout(() => {}, 2000)
      );
    });
  };

  handleCloseSnack = () => {
    this.setState({
      successVote: false
    });
  };

  render() {
    const {
      commands,
      isModalOpen,
      chosenCommand,
      name,
      email,
      tel,
      successVote
    } = this.state;
    return (
      <StyledMainPage>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={successVote}
          autoHideDuration={3000}
          onClose={this.handleCloseSnack}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar">{"Ви успішно проголосували!"}</span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                onClick={this.handleCloseSnack}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
        {isModalOpen ? (
          <VoteForm
            successVote={successVote}
            chosenCommand={chosenCommand}
            handleSubmitVoteForm={this.handleSubmitVoteForm}
            handleOnChangeFormFields={this.handleOnChangeFormFields}
          />
        ) : (
          <MainWrapper>
            <MainHeader />
            <ListCommands
              commands={commands}
              handlerOnClickVote={this.handlerOnClickVote}
            />
            <MainFooter />
          </MainWrapper>
        )}
      </StyledMainPage>
    );
  }
}

export default MainPage;
