import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './helper-components/RequireAuth';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ExamplePage from './pages/ExamplePage';
import { Login } from './components/Login';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/example"
            element={
              <RequireAuth>
                <ExamplePage />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth requiresAdmin={true}>
                <Admin />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
