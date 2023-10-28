import Home from './Home';
import Header from './componentes/Header';
import './App.css';

function App() {
  return (
    // Para poder generar un color degradante usar  bg-gradient-to-b from-slate-700
    <div className="App">
      <Header/>
     <Home />
    </div>
  );
}

export default App;
