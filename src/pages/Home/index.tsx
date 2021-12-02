import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../utils/api";

import style from "./style.module.scss";
import global from "../../styles/global.module.scss";

type Pokemon = {
  results:[{
    name: string,
    url: string
  }]
  next: string
  previous: string
}
export const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [next, setNext] = useState<string>()
  const [previous, setPrevius] = useState<string>()
  const [searchPokemon, setSearchPokemon] = useState<string>('')

  useEffect(() => {
    api.get<Pokemon>(`/?offset=0&limit=5`).then(res => {
      setPokemon(res.data)
      setNext(res.data.next)
      setPrevius(res.data.previous)
    })
  }, []);

  function nextPage() {
    if(next) {
      api.get<Pokemon>(next).then(res => {
        setPokemon(res.data)
        setNext(res.data.next)
        setPrevius(res.data.previous)
      })
    }

  } 

  function previusPage() {
    if(previous) {
      api.get<Pokemon>(previous).then(res => {
        console.log(res.data.results)
        setPokemon(res.data)
        setNext(res.data.next)
        setPrevius(res.data.previous)
      })
    }
  }


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

        <div className={global.listPokemons}>
          {pokemon?.results.map((item, index) => {
            return (
              <div key={index} className={style.pokemonItem}>
                <h1>{item.name}</h1>
                <a href={`${process.env.PUBLIC_URL}}/pokemon?name=${item.name}`}>Saiba mais</a>
              </div>
            )
          })}
        </div>

        <div className={style.bannerfooter}>
          <div className={style.buttonGroup}>
            <Button name="Back" click={() =>previusPage()}/>
            <Button name="Next" click={() =>nextPage()}/>
          </div>
        </div>
      </div>
    </div>
  );
};
