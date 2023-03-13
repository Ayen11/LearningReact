
import './App.css';

const Person = (props) => {
  return (
  <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: Doe</h2>
    <h2>Age: 30</h2>
  </>
  )
}


const App = () => {
 const name = null;


  return (
    <div className="App">
      <Person />
      <Person name={'John'} />
      <h1>Hello {2 + 2}!</h1>
      {name ? (
      <>
       test
      </>
      ): (
        <h1>test</h1>
      )}
    </div>
  );
}

export default App;
