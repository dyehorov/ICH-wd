import styles from "./styles.module.css"

export default function MainContent({ currentTheme }) {
  return (
    <main
      id={styles.main}
      className={currentTheme ? styles.mainLight : styles.mainDark}
    >
      <div className={styles.container}>
        <h2 className={styles.paragraphTitle}>First paragraph</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab sit
          excepturi deserunt consectetur tenetur facilis, numquam maxime fugit
          voluptates repudiandae mollitia, atque reiciendis quasi nulla
          exercitationem ea voluptatibus libero dolorum vel ducimus delectus
          deleniti aliquam qui! Ipsum maxime repellendus sint enim possimus
          commodi atque quis voluptatum accusamus architecto. Temporibus.
        </p>
        <h2 className={styles.paragraphTitle}>Second paragraph</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab sit
          excepturi deserunt consectetur tenetur facilis, numquam maxime fugit
          voluptates repudiandae mollitia, atque reiciendis quasi nulla
          exercitationem ea voluptatibus libero dolorum vel ducimus delectus
          deleniti aliquam qui! Ipsum maxime repellendus sint enim possimus
          commodi atque quis voluptatum accusamus architecto. Temporibus. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Similique, velit?
        </p>
      </div>
    </main>
  )
}
