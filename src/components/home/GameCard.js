import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';

function GameCard({ game }) {
  const { enqueueSnackbar } = useSnackbar();

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
        enqueueSnackbar(`Sucessfully deleted ${gameObject.name}`, { variant: 'error' });
      });
  }

  return (
    <Card sx={{ maxWidth: '300px', margin: '.5rem', padding: '.5rem' }}>
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
        <Button
          size="small"
          sx={{ marginTop: '1rem' }}
          variant="contained"
          color="error"
          onClick={() => handleDeleteGame(game)}>
          Delete game
        </Button>
      </CardContent>
    </Card>
  );
}

export default GameCard;
