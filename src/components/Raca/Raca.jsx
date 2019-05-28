import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import RacaSelecionadaContext from '../../context/racaSelecionada'


const Raca = () => (
  <RacaSelecionadaContext.Consumer>
    {
        racaFoiSelecionada =>
         (
          { racaFoiSelecionada }
          ?
          <RacaSelecionada />
          :
          <RacaNaoSelecionada />
        )
    }
  </RacaSelecionadaContext.Consumer>
)

export default Raca