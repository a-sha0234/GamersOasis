import { Button } from "../../style/style";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 3%;
  justify-content: center;
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
