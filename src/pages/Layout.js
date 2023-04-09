import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function Layout() {
  const styles = {
    container: {
      maxWidth: '1600px',
      margin: '0 auto'
    },
    menu: {
      padding: '0 1rem'
    }
  };

  return (
    <div className="container" style={styles.container}>
      <Navigation />
      <div style={{ padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
}
