
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Form from './form';
import AddressApp from './address';
import Dice from './diceRoll';
import Header from './Header';


function App() {
  return (
    <div className="App">
          
          <Header/>
          <img src={logo} className="App-logo" alt="logo" />
          <Heading/>
          <Form/>
          <Form/>
          <AddressApp/>
          <Dice/>

    </div>
  );
}

export default App;

