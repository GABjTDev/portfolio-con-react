//Components
import { BrowserRouter as Router, } from 'react-router-dom';
import { Menu } from './components/Menu';


//Rutas
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="container">
      <Router>
        <header className="header">
          <Menu />
        </header>
        
        <AppRouter />
      </Router>


    </div>
  );
}

export default App;
