import styled from "styled-components";
import styles from "./mainpanel.module.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 3%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5%;
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

export default function MainMenu() {
  return (
    <Container>
      <Heading>GamersOasis</Heading>
      <p>
        Welcome to GamersOasis, your one-stop destination for all your gaming
        needs! With a vast collection of games spanning multiple genres and
        platforms, we have something for every gamer.{" "}
        <Link to="/store" className={styles.browse}>
          Browse{" "}
        </Link>
        through our store using out seamless UI/UX.
      </p>
    </Container>
  );
}
