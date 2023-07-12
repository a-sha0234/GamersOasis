import { Button } from "../../style/style";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import styles from "./menu1.module.css";
import { motion } from "framer-motion";

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
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={styles.link}
      >
        <Link to="/store" className={styles.link}>
          Browse
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={styles.button}
      >
        <a href="https://github.com/a-sha0234">Github</a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={styles.button}
      >
        <a href="www.linkedin.com/in/arun-sharma-compsci"> LinkedIn</a>
      </motion.div>
    </Container>
  );
}
