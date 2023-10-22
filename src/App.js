import Home from './Home';
import Header from './componentes/Header';
import './App.css';

function App() {
  return (
    // Para poder generar un color degradante usar  bg-gradient-to-b from-slate-700
    <div className="App bg-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abc.es%2Fbienestar%2Fpsicologia-sexo%2Fpsicologia%2Fabci-personas-creativas-siete-habitos-para-desarrollar-mente-202112150049_noticia.html&psig=AOvVaw3_5G0VT0uWXKF7ntG2Insq&ust=1698094585135000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD797bFioIDFQAAAAAdAAAAABAG')
     w-full h-screen bg-cover">
      <Header/>
    <Home />
    </div>
  );
}

export default App;
