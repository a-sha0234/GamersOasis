import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../../../redux/filter";
import { filterHelper } from "../../../util/filter/filter";

export default function Filters() {
  const dispatch = useDispatch();

  // const currentFilter = useSelector(selectFilter);

  // console.log(currentFilter);
  return (
    <main>
      <h2>Filters</h2>
      <button id="wish list" onClick={(e) => filterHelper(e, dispatch)}>
        Wish List
      </button>
      <button id="rating" onClick={(e) => filterHelper(e, dispatch)}>
        Rating
      </button>
    </main>
  );
}
