import { Link } from 'react-router-dom';

function Layout({ children }) {
  return(
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
        <li><Link to='/example'>Example</Link></li>
      </ul>
      <h4>Layout container</h4>
      { children }
    </>
  )
}

export default Layout;