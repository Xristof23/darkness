import styled from "styled-components";
import "./App.css";
import { useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;
const StyledH1 = styled.h1`
  color: rgb(36, 36, 36);
  margin: 2rem, 2rem, 2rem, 5rem;
  text-align: center;
  align-self: center;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 600;
  /* width: 400px; */

  /* border: 2px solid white; */
`;
const StyledP = styled.p`
  color: rgb(36, 36, 36);
  margin: auto;
  padding: 0.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  border: 2px solid white;
`;

const StyledButton = styled.button`
  background-color: rgb(36, 36, 36);
  color: black;
  font-size: 1.2rem;
  line-height: 1.2rem;
  box-shadow: none;
  align-self: center;
  margin: auto;
`;

const StyledMessage = styled.p`
  color: rgb(36, 36, 36);
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  align-self: center;
  margin: 1rem, 1rem, 1rem, 2rem;
`;

function App() {
  const [mode, setMode] = useState("dark");
  const [message, setMessage] = useState("Push a button!");

  function getTotalDarkness() {
    console.log("Darkness");
    setMode("totaldarkness");
    setMessage("You will get total darkness... soon...");
  }

  return (
    <section>
      <StyledHeader>
        <StyledH1>DARKNESS</StyledH1>
        <StyledP>A TRIBUTE TO THE GODS OF THE EVERLASTING NIGHT</StyledP>
      </StyledHeader>
      <ButtonContainer>
        <StyledButton
          onClick={() =>
            setMessage(
              "You really thought there was a light mode? Poor fool ..."
            )
          }
        >
          LIGHT MODE
        </StyledButton>
        <StyledButton onClick={() => setMessage("Kill the flame!")}>
          YOU WANT IT DARKER?
        </StyledButton>
        <StyledButton onClick={getTotalDarkness}>TOTAL DARKNESS</StyledButton>
      </ButtonContainer>
      <StyledMessage>{message}</StyledMessage>
    </section>
  );
}

export default App;
