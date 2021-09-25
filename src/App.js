import './App.css';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Synthesize from './components/Synthesize.js';

function App() {
  

  return (
    <div className="App bg-dark h-screen ">
      <div className='lg:block xl:block md:hidden sm:hidden '>
        <Header/>
        <Synthesize/>
        <Footer/>
      </div>
      <div className='w-1/2 justify-center items-center text-white mx-auto h-screen lg:hidden xl:hidden md:flex sm:flex  '>
        I was too excited to publish this to make it mobile responsive, please open your laptops, pcs :)
      </div>
    </div>
  );
}

export default App;
