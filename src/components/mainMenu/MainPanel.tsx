import styled from "styled-components";

const Container = styled.div`
  margin: 3%;
  background-color: red;
  padding: 5%;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

export default function MainMenu() {
  return (
    <Container>
      <Heading>Game Store</Heading>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fu
      </p>
    </Container>
  );
}
