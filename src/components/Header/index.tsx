import React, { useState } from "react";

import style from "./style.module.scss";

export const Header = () => {
  const [searchPokemon, setSearchPokemon] = useState<string>('')

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

      </div>
    </div>
  );
};
