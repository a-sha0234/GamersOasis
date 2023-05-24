import Filters from "./filters/Filters";
import Genres from "./genres/Genres";
import styles from "./sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Filters />
      <Genres />
    </div>
  );
}
