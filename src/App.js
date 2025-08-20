import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App" style={{ background: "#121212", minHeight: "100vh", color: "white" }}>
      <Header />
      
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#1e90ff", marginBottom: "20px" }}>Minha ATV</h1>
        <Cartao
          foto="https://staticg.sportskeeda.com/editor/2024/08/11486-17250344458347-1920.jpg?w=640"
          nome="Mega Cavaleiro"
          profissao="Lendário mais cabaço do Clash Royale"
          descricao="mega ..."
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
