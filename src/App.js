// mus Arquivo de CSS
import './App.css';

// mus Arquivo de COMPONENTS
import Main from './components/main'
import Header from './components/header'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main /> */}
      <Contact />
    </div>
  );
}

export default App;
