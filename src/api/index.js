import axios from 'axios';

const imagensApiUrl = 'https://dog.ceo/api';
const informacoesApiUrl = 'https://api.thedogapi.com/v1';

const buscaImagemPorRaca = raca => axios
  .get(`${imagensApiUrl}/breed/${raca}/images/random`)
  .then(resposta => resposta.data.message)

const buscaTodasInformacoes = () => axios
  .get(`${informacoesApiUrl}/breeds`)
  .then(resposta => resposta.data)

  export {
  buscaImagemPorRaca,
  buscaTodasInformacoes
}
