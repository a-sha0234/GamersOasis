import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter";

function filterHelper(filter: any, dispatcher: any) {
  dispatcher(setFilter(filter.target.id));
}

export { filterHelper };
