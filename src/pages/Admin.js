import CreateGame from '../components/admin/CreateGame';
import { useUser } from '../helper-components/Context';

function Admin() {
  const { userGroups } = useUser();

  return (
    <>
      <h3>User groups</h3>
      {userGroups ? (
        <ul>
          {userGroups.map((group, index) => {
            return <li key={index}>{group}</li>;
          })}
        </ul>
      ) : null}
      <CreateGame />
    </>
  );
}

export default Admin;
