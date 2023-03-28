import styles from "./CharList.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => setPosts(response.data));
  }, []);

  console.log(posts);

  return (
    <div>
      <div className={styles.post__title__container}>
        <h2>Karaktärer:</h2>
      </div>
      {posts.results?.map((post, i) => (
        <div key={i}>
          <Link id={i} to={`/characters/${i + 1}`} state={post}>
            <h3>{post.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Characters;
