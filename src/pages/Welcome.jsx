import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <div className={styles.post__title}>
        <div className={styles.post__title__container}>
          <div className={styles.post__title__heading}>
            <h1>Välkommen till Star Wars info!</h1>
          </div>
          <div className={styles.post__title__paragraph}>
            <p>
              Lorem ipsum dolor sit amet. Et sunt nulla fugit nisi et provident
              quia ea deserunt alias et magnam debitis id voluptates obcaecati.
              Aut fuga voluptate et voluptatem accusamus nam omnis voluptate qui
              aliquid voluptate est adipisci dolorem. Ab reprehenderit debitis
              aut deserunt nemo ad voluptates repellendus. Ut perferendis minus
              non voluptate temporibus eum dolor quasi et ducimus suscipit! Qui
              magni corrupti aut tenetur commodi ab officiis temporibus id neque
              beatae hic velit quidem. Et autem officiis et nostrum accusamus ad
              enim accusamus qui quis labore et beatae illum ut suscipit numquam
              et tenetur quisquam. Eum voluptatem voluptate hic sint pariatur
              non omnis minima sed inventore esse in incidunt sapiente sed
              exercitationem obcaecati rem fuga aliquid. Non aliquid accusamus
              et praesentium possimus At sunt unde.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
