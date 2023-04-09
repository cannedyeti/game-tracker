import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Layout from './pages/Layout';

const Admin = lazy(
  () => import(/* webpackChunkName: 'Admin' */ './pages/Admin')
);

const ExamplePage = lazy(
  () => import(/* webpackChunkName: 'Admin' */ './pages/ExamplePage')
);

const Home = lazy(
  () => import(/* webpackChunkName: 'Admin' */ './pages/Home')
);

export default function RoutesComp() {
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <RequireAuth>
          <Layout>
            <Home />
          </Layout>
        </RequireAuth>
      </Route>
      <Route path="/admin">
        <RequireAuth requiresAdmin={true}>
          <Layout>
            <Admin />
          </Layout>
        </RequireAuth>
      </Route>
      <Route path="/example">
        <RequireAuth>
          <Layout>
            <ExamplePage />
          </Layout>
        </RequireAuth>
      </Route>
    </Routes>
  </BrowserRouter>
}
