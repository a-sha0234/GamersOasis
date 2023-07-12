import styled from "styled-components";
import { Button, Slink } from "../../style/style";
import { motion } from "framer-motion";

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
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Performance
          </motion.div>
        </Slink>

        <Slink href="https://github.com/a-sha0234/GamersOasis">
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Technolgies
          </motion.div>
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis/graphs/commit-activity">
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Commit Log
          </motion.div>
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis">
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Front-End{" "}
          </motion.div>
        </Slink>
        <Slink href="https://github.com/a-sha0234/GamersOasis-server">
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Back-End{" "}
          </motion.div>
        </Slink>
      </SContainer>
    </Scomponent>
  );
}
