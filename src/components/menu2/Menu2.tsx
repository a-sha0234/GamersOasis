import styled from "styled-components";
import { Button } from "../../style/style";

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Scomponent = styled.div`
  background-color: blue;
`;

export default function Menu2() {
  return (
    <Scomponent>
      <h2>Quick Navigation</h2>
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
