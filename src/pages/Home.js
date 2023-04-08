import { useState } from "react";

function Home({ user, signOut }) {
  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(number + 1);
  }

  return (
    <>
      <h1>Homepage</h1>
      <h3>{number}</h3>
      <button onClick={handleClick}>Click me</button>
      <h2 level={1}>Hello {user.username}</h2>
      <button onClick={signOut}>Sign out</button>
      <h2>Get this shit done boyos</h2>
    </>
  )
}

export default Home;
