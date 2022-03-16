import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import {useState} from 'react';

function App() {
  // I want to be able to set which element is active page.
  const [activePage, setActivePage] = useState("Home")
    
    const changeActivePage = (newPage) => {
      setActivePage(newPage)
    }

  return (
    <div>
        {/* <button onClick= { () => changeActivePage("Products") }>Byt sida till Products</button>
        <button onClick= { () => changeActivePage("Home") }>Byt sida till Home</button> */}
        <Header animal="Cat" activePage={activePage} onPageMenuClick={changeActivePage} />
        <Main activePage={activePage} /> 
        <Footer />
    </div>   
  );
}

export default App;


