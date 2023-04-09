import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  SafetyCertificateOutlined,
  PoweroffOutlined,
  RocketOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Menu } from 'antd';

export default function Layout() {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();
  const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);

  const styles = {
    container: {
      maxWidth: '1600px',
      margin: '0 auto'
    },
    menu: {
      padding: '0 1rem'
    }
  };

  const onClick = (e) => {
    if (e.key === '/logout') {
      logOut();
    } else {
      setCurrent(e.key);
      navigate(e.key);
    }
  };

  function logOut() {
    signOut();
    navigate('/login');
  }

  const items = [
    {
      label: 'Home',
      key: '/',
      icon: <HomeOutlined />
    },
    {
      label: 'Admin',
      key: '/admin',
      icon: <SafetyCertificateOutlined />
    },
    {
      label: 'Example',
      key: '/example',
      icon: <RocketOutlined />
    },
    {
      label: route !== 'authenticated' ? 'Login' : 'Logout',
      key: route !== 'authenticated' ? '/login' : '/logout',
      icon: route !== 'authenticated' ? <LoginOutlined /> : <PoweroffOutlined />,
      danger: route === 'authenticated'
    }
  ];

  return (
    <div className="container" style={styles.container}>
      <Menu
        style={styles.menu}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div style={{ padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
}
