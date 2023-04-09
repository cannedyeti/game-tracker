import { Authenticator } from '@aws-amplify/ui-react';
import MyRoutes from './routes';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Authenticator.Provider>
      <SnackbarProvider>
        <MyRoutes />
      </SnackbarProvider>
    </Authenticator.Provider>
  );
}

export default App;
