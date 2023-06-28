import styled from "styled-components";
import Shead from "../util/Styledcomponents/interfaces";

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
  align-items: center;
`;

const Sicon = styled.span`
  background-color: blue;
  border-radius: 20%;
  margin-right: 2%;
  padding: 2%;
`;

const Sheading = styled.h1<Shead>`
  font-size: ${(props) => props.fontSize};
`;

const SfilterHeading = styled.h2`
  margin: 2%;
`;

const Slink = styled.a`
  margin: 2%;
  padding: 1%;
  background-color: red;
  width: 80%;
  text-align: center;
`;
export { Button, SFilter, Sicon, Sheading, SfilterHeading, Slink };
