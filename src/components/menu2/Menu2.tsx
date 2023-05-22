import styled from "styled-components";
import { Button } from "../../style/style";

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 10%;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Scomponent = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;

const Sheading = styled.h1`
  text-align: center;
`;

export default function Menu2() {
  return (
    <Scomponent>
      <Sheading>Quick Navigation</Sheading>
      <SContainer>
        <Button>Performance</Button>
        <Button>Technolgies</Button>
        <Button>Commit Log</Button>
        <Button>Sources</Button>
        <Button>Front-End </Button>
        <Button>Back-End </Button>
      </SContainer>
    </Scomponent>
  );
}
