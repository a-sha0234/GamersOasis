import styles from "../menu2/menu2.module.css";

export default function Menu2() {
  return (
    <main className={styles.container}>
      <h2>Quick Navigation</h2>
      <div className={styles.links}>
        <button>Performance</button>
        <button>Technolgies</button>
        <button>Commit Log</button>
        <button>Sources</button>
        <button>Front-End </button>
        <button>Back-End </button>
      </div>
    </main>
  );
}
