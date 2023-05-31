import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../../../redux/filter";
import { filterHelper } from "../../../util/filter/filter";
import { SlPresent } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { SFilter, Sicon, SfilterHeading } from "../../../style/style";

const Scomponent = styled.main``;

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export default function Filters() {
  const dispatch = useDispatch();

  // const currentFilter = useSelector(selectFilter);

  // console.log(currentFilter);
  return (
    <Scomponent>
      <Scontainer>
        <SfilterHeading>Filters</SfilterHeading>
        <SFilter id="wishlist" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            {" "}
            <SlPresent color="white" fontSize={30} />
          </Sicon>
          Wish List
        </SFilter>
        <SFilter id="rating" onClick={(e) => filterHelper(e, dispatch)}>
          <Sicon>
            {" "}
            <AiFillStar color="white" fontSize={30} />
          </Sicon>{" "}
          Rating
        </SFilter>
      </Scontainer>
    </Scomponent>
  );
}
