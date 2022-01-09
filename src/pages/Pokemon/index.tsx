import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { api } from "../../utils/api";
import style from "./style.module.scss";
import global from "../../styles/global.module.scss"
import { Button } from "../../components/Button";

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
  const [findPokemon, setFindPokemon] = useState<IPokemon>()
  const [notFound, setNotFound] = useState<Boolean>(false)
  const BASE_URL = import.meta.env.VITE_PUBLIC_URL as string

  const pokemon = new URLSearchParams(location.search).get('name') as string

  useEffect(() => {
    api.get<IPokemon>(pokemon.toLowerCase()).then(res => {
      setFindPokemon(res.data)
      console.log(res.data.types[0].type.name)
    }).catch(err => {
      setNotFound(true)
    })

  }, [])

  return (
    <div className={global.contentWrapper}>
      <div className={global.mainContent}>
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

          <div className={global.listPokemons}>
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
            <Button name="Back" click={() => window.location.href="/"}/>
          </div>
        </div>
      </div>
    </div>
  );
};
