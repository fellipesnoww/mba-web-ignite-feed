import { Header } from "./components/header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Fellipe Neves",
      avatarUrl: "https://avatars.githubusercontent.com/u/48105194?v=4",
      role: "Tech Lead"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-04-24 21:30:00'),
  },
  {
    id: 2,
    author: {
      name: "Joao das Neves",
      avatarUrl: "https://avatars.githubusercontent.com/u/48105194?v=4",
      role: "Dev Full Stack"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-04-01 21:30:00'),
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
