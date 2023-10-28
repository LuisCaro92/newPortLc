import Home from './Home';
import Header from './componentes/Header';
import './App.css';

function App() {
  return (
    // Para poder generar un color degradante usar  bg-gradient-to-b from-slate-700
    <div className="App bg-cover text-white"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/4995090/pexels-photo-4995090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    }}>
      <Header/>
     <Home />
    </div>
  );
}

export default App;
