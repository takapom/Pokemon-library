import { useEffect, useState } from "react";
import { getAllPokemon } from "./utils/pokemon"; 
import { getPokemon } from "./utils/pokemon"; 
import Card from "./components/Card";

function App(){
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const[loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
  const fetchPokemonData = async () => {
    //全てのポケモンデータを取得
    let res = await getAllPokemon(initialURL);
    //各ポケモンの詳細なデータを取得
    loadPokemon(res.results);
    // console.log(res);
    setLoading(false);
  };
  fetchPokemonData();
},[])

  const loadPokemon = async(data) => {
    let _pokemonDate = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon)
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonDate);
  };

  return(
    <div className="App">
    {loading ? (
      <h1>ロード中.....</h1>
    ) : (
      <>
      <div className="pokemonCardContaier">
        {pokemonData.map((pokemon, i) => {
          return <Card key = {i} pokemon={pokemon} />;
           })}
      </div>
      </>
    )}
  </div>
  );
}

export default App;