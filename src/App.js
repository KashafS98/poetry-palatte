import './App.css';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Synthesize from './components/Synthesize.js';

function App() {
  

  return (
    <div className="App bg-dark h-screen">
      <Header/>
      <Synthesize/>
      <Footer/>
    </div>
  );
}

export default App;
