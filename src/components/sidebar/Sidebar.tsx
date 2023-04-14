import Filters from "./filters/Filters";
import Genres from "./genres/Genres";
export default function Sidebar() {
  return (
    <div>
      <Filters />
      <Genres />
    </div>
  );
}
