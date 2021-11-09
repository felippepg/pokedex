import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { api } from "../../utils/api";
import style from "./style.module.scss";

type IPokemon = {
  height: number
  name: string
  types: [{
    type: {
      name: string
    }
  }]
  weight: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export const Pokemon = () => {
  const location = useLocation()
  const [searchPokemon, setSearchPokemon] = useState<string>('')
  const [pokemon, setPokemon] = useState<string>(new URLSearchParams(location.search).get('name') as string)
  const [findPokemon, setFindPokemon] = useState<IPokemon>()
  const [notFound, setNotFound] = useState<Boolean>(false)

  useEffect(() => {
    api.get<IPokemon>(pokemon.toLowerCase()).then(res => {
      setFindPokemon(res.data)
      console.log(res.data.types[0].type.name)
    }).catch(err => {
      setNotFound(true)
    })

  }, [])

  return (
    <div className={style.contentWrapper}>
      <div className={style.banner}>
        <div className={style.titleBackground}>
          <h3>pokedex</h3>
        </div>
      </div>

      <div className={style.mainContent}>
        <form action="/pokemon" method="get">
          <input
            type="text"
            name="name"
            id="pokemonName"
            placeholder="Digite o nome do Pokemon"
            value={searchPokemon}
            onChange={(e) => setSearchPokemon(e.target.value)}
          />
          <button type="submit">Ir</button>
        </form>
        {!!notFound ? <h1>Pokemon Não encontrado</h1>:

          <div className={style.listPokemons}>
            <div className={style.backgroundText}>
              <h1>{findPokemon?.name}</h1>
            </div>
            <img src={findPokemon?.sprites.other.dream_world.front_default} alt={findPokemon?.name} />
            <br/>
            <div className={style.infoPokemon}>
              <h4>{`Type:  ${findPokemon?.types[0].type.name}`}</h4>
              <h4>{`Weight:  ${findPokemon?.weight}`}</h4>
            </div>

        </div>
        }


        <div className={style.bannerfooter}>
          <div className={style.buttonGroup}>
            <button type="button" onClick={() => window.location.href="http://localhost:3000"}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};
