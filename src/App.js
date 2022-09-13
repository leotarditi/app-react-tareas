import './App.css';
import ListTareas from './components/ListTareas';
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
  return (
    <div className='app-tareas'>
      <div className='freecodecamp-logo-div'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo freeCodeCamp' />
      </div>
      <div className='tareas-list-principal'>
        <h1>Mis Tareas</h1>
        <ListTareas />
      </div>
    </div>
  );
}

export default App;
