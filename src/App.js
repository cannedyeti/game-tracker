import Home from './pages/Home';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <div className="App">
      <Home user={user} signOut={signOut} />
    </div>
  );
}

export default withAuthenticator(App);