import styles from "./styles.module.css"

export default function CityCard({ selectedCity }) {
  console.log(selectedCity)

  return (
    <div className={styles.cityCardContainer}>
      <h2 className={styles.cityCardTitle}>{selectedCity.name}</h2>
      <div className={styles.cityCardImage}>
        <img src={selectedCity.imageUrl} alt={`${selectedCity.name} image`} />
      </div>
      <div className={styles.cityCardInfo}>
        <p>{selectedCity.description}</p>
        <h3>Interesting facts about {selectedCity.name}</h3>
        <ul>
          {selectedCity.facts.map(fact => (
            <li key={crypto.randomUUID()}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
