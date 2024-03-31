import React from "react";

const App = () => {
  const name = 'John';
  const names = ['Brad', 'Merry', 'Joe', 'Sara'];
  const loggedIn = false;

  return (
    <div>
      <div className="text-5xl">App</div>
      <p style={{ color: 'red'}}>Hello {name}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1> Hello member </h1>: <h1>Hello Guest</h1>}
    </div>
  );
};

export default App;
