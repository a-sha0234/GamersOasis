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
  background-color: #111111;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #3c3c3c;
  }
`;

const Sicon = styled.span`
  border-radius: 20%;
  margin-right: 2%;
  padding: 2%;

  &:hover {
    background-color: #3c3c3c;
  }
`;

const Sheading = styled.h1<Shead>`
  font-size: ${(props) => props.fontSize};
`;

const SfilterHeading = styled.h2`
  margin: 2%;
  color: white;
`;

const Slink = styled.a`
  margin: 2%;
  padding: 1%;
  background-color: red;
  width: 80%;
  text-align: center;
`;
export { Button, SFilter, Sicon, Sheading, SfilterHeading, Slink };
