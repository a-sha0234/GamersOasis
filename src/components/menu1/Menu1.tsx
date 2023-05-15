import { Button } from "../../style/style";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: red;
`;

export default function Menu1() {
  return (
    <Container>
      <Button>Browse</Button>
      <Button>Dice</Button>
      <Button>Github</Button>
      <Button>LinkedIn</Button>
    </Container>
  );
}
