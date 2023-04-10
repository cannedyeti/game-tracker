import { useState } from 'react';
import { Card, Button, TextField, FormControl } from '@mui/material';
import * as mutations from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

function CreateGame() {
  const [newGame, setNewGame] = useState({
    name: '',
    description: '',
    image: ''
  });

  const styles = {
    input: {
      marginTop: '.5rem'
    }
  };

  function onHandleChange(e) {
    const { name, value } = e.target;
    setNewGame((pre) => ({
      ...pre,
      [name]: value
    }));
  }

  async function onHandleSubmit() {
    await API.graphql(graphqlOperation(mutations.createGame, { input: newGame }));
  }

  return (
    <Card sx={{ minWidth: 275, p: '2rem', maxWidth: '500px' }}>
      <FormControl fullWidth>
        <h2>Create new game</h2>
        <TextField required name="name" label="Game name" onChange={onHandleChange} />
        <TextField
          style={styles.input}
          name="description"
          label="Game description"
          onChange={onHandleChange}
          multiline
          rows={4}
        />
        <TextField
          style={styles.input}
          name="image"
          label="Game image url"
          onChange={onHandleChange}
        />
        <Button style={styles.input} onClick={onHandleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Card>
  );
}

export default CreateGame;
