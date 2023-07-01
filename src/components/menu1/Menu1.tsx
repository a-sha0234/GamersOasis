import { Button } from "../../style/style";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import styles from "./menu1.module.css";

const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 3%;
  justify-content: center;
  border-radius: 10px;
`;

export default function Menu1() {
  return (
    <Container>
      <Link to="/store" className={styles.link}>
        Browse
      </Link>
      <a href="https://github.com/a-sha0234" className={styles.button}>
        Github
      </a>
      <a
        href="www.linkedin.com/in/arun-sharma-compsci"
        className={styles.button}
      >
        {" "}
        LinkedIn
      </a>
    </Container>
  );
}
