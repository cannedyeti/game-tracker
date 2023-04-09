import { Authenticator } from '@aws-amplify/ui-react';
import MyRoutes from './routes';

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;
