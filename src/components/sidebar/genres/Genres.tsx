import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../../../redux/filter";
import type { RootState } from "../../../redux/store";
import { filterHelper } from "../../../util/filter/filter";
export default function Genres() {
  const dispatch = useDispatch();

  // const currentFilter = useSelector(selectFilter);

  // console.log(currentFilter);

  return (
    <main>
      <h2>Genres</h2>
      <button id="action" onClick={(e) => filterHelper(e, dispatch)}>
        Action
      </button>
      <button id="stratagy" onClick={(e) => filterHelper(e, dispatch)}>
        strategy
      </button>
      <button id="rpg" onClick={(e) => filterHelper(e, dispatch)}>
        RPG
      </button>
      <button id="Shooter" onClick={(e) => filterHelper(e, dispatch)}>
        Shooter
      </button>
      <button id="adventure" onClick={(e) => filterHelper(e, dispatch)}>
        Adventure
      </button>
      <button id="puzzle" onClick={(e) => filterHelper(e, dispatch)}>
        Puzzle
      </button>
      <button id="racing" onClick={(e) => filterHelper(e, dispatch)}>
        Racing
      </button>
      <button id="sports" onClick={(e) => filterHelper(e, dispatch)}>
        Sports
      </button>
    </main>
  );
}
