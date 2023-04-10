import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export async function fetchAllGames() {
  return await API.graphql({ query: queries.listGames });
}

export async function createGame(gameObject) {
  await API.graphql({
    query: mutations.createGame,
    variables: { input: gameObject }
  });
}
