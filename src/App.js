import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import Start from "./components/Start/Start";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;
const StyledH1 = styled.h1`
  color: rgb(42, 42, 42);
  margin: 2rem, 2rem, 2rem, 5rem;
  text-align: center;
  align-self: center;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 600;
  /* width: 400px; */

  /* border: 2px solid white; */
`;

const StyledH2 = styled.h2`
  color: rgb(42, 42, 42);
  margin: 0.5rem;
  text-align: center;
  align-self: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const StyledP = styled.p`
  color: rgb(42, 42, 42);
  margin: 0.5rem, 0.5rem, 8rem, 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
`;
const ButtonContainer = styled.div`
  display: grid;
  /* position: inherit; */
  grid-column-start: auto;
  grid-template-columns: 2fr, 2fr, 2fr, 2fr, 2fr;
  grid-template-rows: 2fr;
  grid-auto-flow: row;
  margin: 0.5rem;
  border: 2px solid white;
`;

const StyledButton = styled.button`
  background-color: rgb(42, 42, 42);
  color: black;
  font-size: 1.2rem;
  line-height: 1.2rem;
  box-shadow: none;
  /* align-self: center; */
  margin: 0.5rem;
  width: 16rem;
`;

const StyledMessage = styled.p`
  color: rgb(42, 42, 42);
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  align-self: center;
  margin: 1rem, 1rem, 1rem, 2rem;
`;

function App() {
  const darkness = "D A R K N E S S";

  const initialMode = {
    mode: "start",
    lightmodebutton: true,
    lettherebelightbutton: false,
  };
  const [mode, setMode] = useState(initialMode);
  const [message, setMessage] = useState(darkness);
  //delayed message:"Push a button!"
  function getTotalDarkness() {
    setMode({ ...mode, mode: "totaldarkness" });
    setMessage("You will get total darkness... soon...");
    console.log(mode);
  }

  return (
    <main>
      {mode.mode === "start" ? <Start setMode={setMode} /> : null}
      <StyledHeader>
        <StyledH1>DARKNESS</StyledH1>
        <StyledP>A TRIBUTE TO THE GODS OF THE EVERLASTING NIGHT</StyledP>
      </StyledHeader>

      <div className="button-container">
        <StyledButton
          onClick={() =>
            setMessage(
              "You really thought there was a light mode? Poor fool ..."
            )
          }
        >
          LIGHT MODE
        </StyledButton>
        <div>
          {mode.lettherebelightbutton === true ? (
            <StyledButton onClick={() => setMessage("No ...")}>
              LET THERE BE LIGHT!
            </StyledButton>
          ) : null}
        </div>
        <StyledButton onClick={() => setMessage("Kill the flame!")}>
          YOU WANT IT DARKER?
        </StyledButton>
        <StyledButton onClick={getTotalDarkness}>TOTAL DARKNESS</StyledButton>
      </div>
      {/* No user story color scheme? Slider for darkness until more darkness */}
      <StyledSection>
        <StyledMessage>{message}</StyledMessage>
      </StyledSection>
      <TestSection>
        <StyledH2>testing only</StyledH2>
        <button>reset all states</button>
      </TestSection>
    </main>
  );
}

export default App;
