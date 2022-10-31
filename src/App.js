import { useState,useEffect } from 'react';

import "./App.css";

// Use of props and components
// const Person=(props)=>{
//   return (
//     <>
//       <h1>Name: { props.name}</h1>
//       <h2>Last Name: { props.lastName}</h2>
//       <h2>Age: { props.age}</h2>
//     </>

//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    alert("You have change the counter to " + counter)
  }, [counter]);

  return (
    <div className="App">
      {/* <Person name={'John'} lastName={'Doe'} age={30} />
      <Person name="Peter" lastName="Maina" age={ 75} />
      <Person/>
    <h1>Hello, React</h1> */}
      

      <button onClick={() => setCounter((prevCount) =>prevCount -1)}>-</button>
      <h1>{ counter}</h1>
      <button onClick={() => setCounter((prevCount) =>prevCount +1)}>+</button>

  </div>
  );
};

export default App;
