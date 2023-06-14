import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          <Post
            author="Rodrigo Baggio"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, fugit."
          />
          <Post
            author="Rocketseat"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, fugit. Ab, fugit."
          />
        </main>
      </div>
    </div>
  );
}
