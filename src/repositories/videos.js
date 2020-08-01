import config from '../config';

const URL_VIDEOS = `${config.API_URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível listar as videos :(');
  });
}

export default {
  create,
};
