import { Header } from "./components/header";
import { Post } from "./Post"
import './styles.css';

function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Fellipe Neves"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius velit, sunt ex deleniti, vero magni explicabo animi voluptatum nisi nobis consectetur aliquam itaque natus nihil numquam, repudiandae sint eos ab!"
      />

      <Post 
        author="Joao"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius velit, sunt ex deleniti, vero magni explicabo animi voluptatum nisi nobis consectetur aliquam itaque natus nihil numquam, repudiandae sint eos ab!"
      />
    </div>
  )
}

export default App
