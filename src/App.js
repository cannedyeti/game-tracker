import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Layout from './pages/Layout';
import { withAuthenticator } from '@aws-amplify/ui-react';
import RoutesComp from './routes';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ExamplePage from './pages/ExamplePage';

function App({ signOut, user }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Layout>
                <Home user={user} signOut={signOut} />
              </Layout>
            </RequireAuth>
          }/>
          <Route path="/admin" element={
            <RequireAuth requiresAdmin={true}>
              <Layout>
                <Admin />
              </Layout>
            </RequireAuth>} 
          />
          <Route path="/example" element={
            <RequireAuth>
              <Layout>
                <ExamplePage />
              </Layout>
            </RequireAuth>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);