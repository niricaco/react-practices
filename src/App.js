/* import logo from "./logo.svg"; */
import "./App.css";
import ButtonText from "./buttonPlusText";

/* const buttonText = "Text for button!"; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ButtonText />
      </header>
    </div>
  );
}

export default App;

/* HÁZI:
Kell egy új komponens, 10x egymás után kirendeli ezt a button komponenst, amit csináltunk. Legyen ez ButtonList. 
A ButtonList hívja meg 10x az InsertText-et. Kikötés: nem 10x leírjuk, hanem ciklusba rendezve. */
