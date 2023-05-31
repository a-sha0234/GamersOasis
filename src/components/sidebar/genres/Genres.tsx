import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../../../redux/filter";
import type { RootState } from "../../../redux/store";
import { filterHelper } from "../../../util/filter/filter";
// import styles from "./genres.module.css";
import { SFilter, Sicon, SfilterHeading } from "../../../style/style";
import styled from "styled-components";
import { RiBoxingFill } from "react-icons/ri";
import { HiPuzzle } from "react-icons/hi";
import { FaFlagCheckered } from "react-icons/fa";
import {
  GiChessKnight,
  GiCrossedSwords,
  GiPistolGun,
  GiMountainRoad,
} from "react-icons/gi";
import { BiFootball } from "react-icons/bi";

export default function Genres() {
  const dispatch = useDispatch();

  // const currentFilter = useSelector(selectFilter);

  // console.log(currentFilter);

  const Smain = styled.main``;
  const Scontainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;
  `;
  // const Sicon = styled.span`
  //   background-color: black;
  //   border-radius: 20%;
  //   margin-right: 2%;
  //   padding: 2%;
  // `;

  return (
    <Smain>
      <Scontainer>
        <SfilterHeading>Genres</SfilterHeading>
        <SFilter id="action" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <RiBoxingFill color="white" fontSize={30} />
          </Sicon>{" "}
          Action
        </SFilter>
        <SFilter id="stratagy" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <GiChessKnight color="white" fontSize={30} />
          </Sicon>
          strategy
        </SFilter>
        <SFilter id="rpg" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <GiCrossedSwords color="white" fontSize={30} />
          </Sicon>
          RPG
        </SFilter>
        <SFilter id="Shooter" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <GiPistolGun color="white" fontSize={30} />
          </Sicon>
          Shooter
        </SFilter>
        <SFilter id="adventure" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            {" "}
            <GiMountainRoad color="white" fontSize={30} />
          </Sicon>
          Adventure
        </SFilter>
        <SFilter id="puzzle" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <HiPuzzle color="white" fontSize={30} />
          </Sicon>
          Puzzle
        </SFilter>
        <SFilter id="racing" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            <FaFlagCheckered color="white" fontSize={30} />
          </Sicon>
          Racing
        </SFilter>
        <SFilter id="sports" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            {" "}
            <BiFootball color="white" fontSize={30} />
          </Sicon>
          Sports
        </SFilter>
      </Scontainer>
    </Smain>
  );
}
