import "./App.css";

const Person=(props)=>{
  return (
    <>
      <h1>Name: { props.name}</h1>
      <h2>Last Name: { props.lastName}</h2>
      <h2>Age: { props.age}</h2>
    </>

  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} lastName={'Doe'} age={30} />
      <Person name="Peter" lastName="Maina" age={ 75} />
      <Person/>
    <h1>Hello, React</h1>
  </div>
  );
};

export default App;
