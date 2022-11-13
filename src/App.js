import "./styles/App.css";
import "./styles/PostForm.css";
import "./styles/Feed.css";

import paperPlaneIcon from "./images/paper-plane.svg";
import { useState } from "react";
import Feed from "../src/components/Feed";
import userIcon from './images/user.svg';


export default function App() {
  const [history, setHistory] = useState("");
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);

    setHistory('')
    setUserName('')
  }

  return (
    <div className="wrapper">
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          value={history}
          placeholder="Escreva uma nova história..."
          onChange={(event) => setHistory(event.target.value)}
        />
        <div>
          <img src={userIcon} alt="user"
          />
          <input
          value={userName}
            placeholder="Digite seu nome..."
            onChange={(event) => setUserName(event.target.value)}
          />
          <button type="submit">
            <img src={paperPlaneIcon} alt="Paper plane"
            />
            Publicar
          </button>
        </div>
      </form>

      <main>
        <Feed posts={posts}/>
      </main>
    </div>
  );
}
