import styled from "styled-components";

const StyledIntroduction = styled.p`
  color: black;
  background-color: white;
  text-align: center;
  margin: 0rem 0rem 2rem 0rem;
  padding: 1rem;
  line-height: 1.5rem;
`;

const IntroductionSection = styled.section`
  color: black;
  background-color: white;
  text-align: center;
  width: 100%;
  height: 1200px;
  margin: 0rem 0rem 6rem 0rem;
  padding: 1rem;
`;

const StyledWarning = styled.h1`
  color: black;
  background-color: white;
  text-align: center;
  padding: 1rem;
`;

export default function Start({ mode, setMode }) {
  return (
    <IntroductionSection>
      <StyledWarning>a warning</StyledWarning>
      <StyledIntroduction>
        this side is not for everyone. this side does not follow the rule book.
        no high contrast, no clear navigation. <br></br>it is not informational
        but inceptional. it serves no real purpose some might say. <br></br>but
        some are wrong. its purpose is a tribute.
      </StyledIntroduction>
      <button onClick={() => setMode({ ...mode, mode: "dark" })}>start</button>
    </IntroductionSection>
  );
}
