import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <Nav />
    <Header page="home" />
    <HomePage />
    </>
    
  );
  
}

export default App
