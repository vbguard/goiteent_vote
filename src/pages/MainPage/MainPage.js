import React, { Component } from "react";
import styled from "styled-components";
import MainHeader from "../../components/MainHeader/MainHeader";
import ListCommands from "../../components/ListCommands/ListCommands";
import MainFooter from "../../components/MainFooter/MainFooter";
import VoteForm from "../../components/VoteForm/VoteForm";
import api from "../../service/api";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Modal from "@material-ui/core/Modal";

import bgOverlay from "../../assets/images/bgOverlay.png";
import bgImag1200 from "../../assets/images/1200/bg1200.png";
import bgOverlay1200 from "../../assets/images/1200/overlay1200.png";

const StyledMainPage = styled.div``;

const MainWrapper = styled.div`
  @media (min-width: 768px) {
    background: url(${bgOverlay}), url(${bgImag1200});
    background-blend-mode: overlay, normal;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    position: relative;
  }
  @media (min-width: 1200px) {
    background: url(${bgOverlay1200}), url(${bgImag1200});
    background-blend-mode: overlay, normal;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    position: relative;
    min-height: 100vh;
  }
`;

const StyledFetchErrorText = styled.h3`
  font-family: GetVoIPGrotesque;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1.3px;
  text-align: center;
  color: #a7b7c8;
`;

class MainPage extends Component {
  state = {
    commands: [],
    chosenCommand: {},
    isModalOpen: false,
    name: "",
    email: "",
    tel: "",
    successVote: false,
    fetchError: null
  };

  componentDidMount() {
    api
      .getCommands()
      .then(data => {
        this.setState({
          commands: data.commands
        });
      })
      .catch(err => {
        this.setState({
          fetchError: err
        });
      });
  }

  handlerOnClickVote = (e, id) => {
    e.preventDefault();
    this.setState(state => {
      const chosen = state.commands.filter(command => id === command._id);
      return {
        ...state,
        chosenCommand: { ...chosen[0] },
        isModalOpen: !state.isModalOpen
      };
    });
  };

  handleOnChangeFormFields = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOnChangeTel = name => event => {
    this.setState({ [name]: event });
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
    api
      .vote(chosenCommand._id, data)
      .then(res => {
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
      })
      .catch(err => {
        this.setState({
          fetchError: err
        });
      });
  };

  handleCloseSnack = () => {
    this.setState({
      successVote: false
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false
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
      successVote,
      fetchError
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
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={fetchError}
          autoHideDuration={3000}
          onClose={this.handleCloseSnack}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={<span id="client-snackbar">{"Ви уже проголосували"}</span>}
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={this.handleCloseModal}
        >
          <VoteForm
            successVote={successVote}
            chosenCommand={chosenCommand}
            handleSubmitVoteForm={this.handleSubmitVoteForm}
            handleOnChangeFormFields={this.handleOnChangeFormFields}
            handleCloseModal={this.handleCloseModal}
            handleOnChangeTel={this.handleOnChangeTel}
          />
        </Modal>
        <MainWrapper>
          <MainHeader />
          {commands.length === 0 ? (
            <>
              <StyledFetchErrorText>
                Виникла проблемка при завантаженні данних 🤪. Перегрузіть
                сторінку Будь-Ласка
              </StyledFetchErrorText>
            </>
          ) : (
            <>
              <ListCommands
                commands={commands}
                handlerOnClickVote={this.handlerOnClickVote}
              />
            </>
          )}

          <MainFooter />
        </MainWrapper>
      </StyledMainPage>
    );
  }
}

export default MainPage;
