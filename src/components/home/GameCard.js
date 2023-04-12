import { Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  const { enqueueSnackbar } = useSnackbar();

  // Only Admins should be able to delete -- or only non-guided games can be deleted by non Admins
  async function handleDeleteGame(gameObject) {
    await API.graphql({
      query: mutations.deleteGame,
      variables: {
        input: {
          id: gameObject.id
        }
      }
    })
      .then(() => {
        enqueueSnackbar(`Sucessfully deleted ${gameObject.name}`, { variant: 'success' });
      })
      .catch((err) => {
        console.log({ err });
        enqueueSnackbar(`Error deleting game: ${gameObject.name}`, { variant: 'error' });
      });
  }

  return (
    <Card sx={{ maxWidth: '300px', margin: '.5rem', padding: '.5rem', minHeight: '500px' }}>
      {game.image ? (
        <CardMedia
          component="img"
          sx={{ width: 250, margin: '0 auto', padding: '1rem' }}
          image={game.image}
        />
      ) : null}
      <CardContent sx={{ padding: '0 16px' }}>
        <Typography variant="overline">{game.name}</Typography>
        {game.description ? <div>{game.description}</div> : null}
        <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="small"
            sx={{ marginTop: '1rem' }}
            variant="contained"
            color="error"
            onClick={() => handleDeleteGame(game)}>
            Delete Game
          </Button>
          <Link to="/GameSetup">
            <Button size="small" sx={{ marginTop: '1rem' }} variant="contained" color="success">
              Start Game
            </Button>
          </Link>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default GameCard;
