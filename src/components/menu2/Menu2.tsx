import styled from "styled-components";
import { Button, Slink } from "../../style/style";

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 10%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Scomponent = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

const Sheading = styled.h1`
  text-align: center;
`;

export default function Menu2() {
  return (
    <Scomponent>
      <Sheading>Quick Navigation</Sheading>
      <SContainer>
        <Slink href="https://github.com/a-sha0234/GamersOasis">
          Performance
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis">
          Technolgies
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis/graphs/commit-activity">
          Commit Log
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis">
          Front-End{" "}
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis-server">
          Back-End{" "}
        </Slink>
      </SContainer>
    </Scomponent>
  );
}
