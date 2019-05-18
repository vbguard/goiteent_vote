import React from "react";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const StyledContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
`;

const StyledTitle = styled.h1`
  color: #00b6f5;
  letter-spacing: 0.54px;
  line-height: 1.39;
  text-align: center;
  font-size: 18px;
  font-family: GetVoIPGrotesque;
  font-weight: 400;
`;

const StyledSubTitle = styled.h2`
  color: #000000;
  letter-spacing: 0.45px;
  line-height: 1.2;
  text-align: center;
  font-size: 15px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
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

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const VoteForm = ({
  handleSubmitVoteForm,
  handleOnChangeFormFields,
  name,
  email,
  tel,
  chosenCommand,
  successVote
}) => (
  <Wrapper>
    <StyledContainer>
      <StyledTitle>{chosenCommand.title}</StyledTitle>
      <StyledSubTitle>{chosenCommand.projectName}</StyledSubTitle>
      <form onSubmit={handleSubmitVoteForm}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Iм'я та прізвище</InputLabel>
          <Input
            onChange={handleOnChangeFormFields("name")}
            name="name"
            type="name"
            id="name"
            autoComplete="name"
            autoFocus
            value={name}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <Input
            onChange={handleOnChangeFormFields("email")}
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            inputProps={{
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="tel">Номер телефону </InputLabel>
          <Input
            value={tel}
            onChange={handleOnChangeFormFields("tel")}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          голосувати та отримати безкоштовний квиток
        </StyledButton>
      </form>
    </StyledContainer>
  </Wrapper>
);

export default VoteForm;
