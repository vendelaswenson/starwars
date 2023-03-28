import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CharDetail.module.css";

const Card = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => setPost(response.data));
  });

  return (
    <>
      <div className={styles.heading__container}>
        <h1>Namn: {post?.name}</h1>
        <h2>Längd: {post?.height} cm</h2>
        <p>Vikt: {post?.mass} kg</p>
        <p>Hårfärg: {post?.hair_color}</p>
        <p>Ögonfärg: {post?.eye_color}</p>
      </div>
    </>
  );
};

export default Card;
