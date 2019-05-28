import React from 'react'
import './styles.scss'

import RacasContext from '../../context/racas'

const ListaRacas = () => (
  <RacasContext>
  {
    racasContext => (
      <ul className="lista-racas">
        {
          racasContext.racas.map(raca => (
            <li
              className="lista-racas__item"
              key={raca.id}
              onClick={() => racasContext.selecionaRaca(raca.name)}
            >
              {raca.name}
            </li>
          ))
        }
      </ul>
    )
  }
  </RacasContext>
)

export default ListaRacas