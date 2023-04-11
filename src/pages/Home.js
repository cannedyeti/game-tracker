import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import GameCard from '../components/home/GameCard';

function Home() {
  const [number, setNumber] = useState(0);
  const [allGames, setAllGames] = useState([]);

  function handleClick() {
    setNumber(number + 1);
  }

  const styles = {
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    card: {
      margin: '.5rem'
    }
  };

  async function getAllGames() {
    const games = await API.graphql({ query: queries.listGames })
      .then((data) => data.data.listGames.items)
      .catch((err) => {
        console.log({ err });
        return [];
      });
    setAllGames(games);
  }

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <h3>{number}</h3>
      <button onClick={handleClick}>Click me</button>
      <div style={styles.cardContainer}>
        {allGames.map((game, index) => {
          return <GameCard style={styles.card} key={index} game={game} />;
        })}
      </div>
    </>
  );
}

export default Home;
