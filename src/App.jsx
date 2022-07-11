import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css'
import styles from './app.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jhowwn.png',
      name: 'Jhonatan',
      role: 'Estagiario'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-06-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jhowwn.png',
      name: 'Jhonatans',
      role: 'Estagiario'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraaaaaaaa👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-06-28 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {

            return (
              <Post
              key={post.id}
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

