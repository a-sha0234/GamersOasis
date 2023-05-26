import styled from "styled-components";

const Button = styled.button`
  border: none;
  margin: 3%;
  cursor: pointer;
`;

const SFilter = styled.button`
  border: none;
  font-size: 1.3rem;
  margin: 2%;
  padding: 2%;
  cursor: pointer;
  display: flex;
`;

const Sicon = styled.span`
  background-color: black;
  border-radius: 20%;
  margin-right: 2%;
  padding: 2%;
`;

const Sheading = styled.h1`
  font-size: 4rem;
`;

const SfilterHeading = styled.h2`
  margin: 2%;
`;

export { Button, SFilter, Sicon, Sheading, SfilterHeading };
