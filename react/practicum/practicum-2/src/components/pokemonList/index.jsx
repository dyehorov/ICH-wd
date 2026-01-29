import Pokemon from "../pokemon"

function PokemonList({ pokemonsData }) {
  return (
    <div>
      {pokemonsData.map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />
      })}
    </div>
  )
}

export default PokemonList
