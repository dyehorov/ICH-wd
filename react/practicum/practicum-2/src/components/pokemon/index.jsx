function Pokemon({ pokemon }) {
  return (
    <div>
      <h2>Pokemon #{pokemon.id}</h2>
      <h3>Name: {pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      <hr />
    </div>
  )
}

export default Pokemon
