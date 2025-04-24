import { Header } from "./components/header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Fellipe Neves"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius velit, sunt ex deleniti, vero magni explicabo animi voluptatum nisi nobis consectetur aliquam itaque natus nihil numquam, repudiandae sint eos ab!"
          />

          <Post 
            author="Joao"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius velit, sunt ex deleniti, vero magni explicabo animi voluptatum nisi nobis consectetur aliquam itaque natus nihil numquam, repudiandae sint eos ab!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
