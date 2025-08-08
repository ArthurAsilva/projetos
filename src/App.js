import './App.css';
import HelloWorld from './components/helloworld';
import Frases from './components/Frases';  
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>MEU APP REACT</h1>
      <HelloWorld />
      <Frases /> 
      <DigaMeuNome nome="roblox" /> 
      <Pessoa
        nome="Mega Cavaleiro"
        idade="35"
        foto="https://i.pinimg.com/originals/02/0e/49/020e49a739bbbd7d7a7ef3e1a40f4234.png"
      />
    </div>
  );
}

export default App;
