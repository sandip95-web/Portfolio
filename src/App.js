import './App.css';
import About from './components/about/About';
import Info from './components/Info/Info'
import ProductList from './components/productlist/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './Context';

function App() {
  const theme=useContext(ThemeContext);
  const darkmode=theme.state.darkmode;
  return (
    <div className="App" style={{background:darkmode ? '#222' : 'white',color:darkmode ? 'white':'#222'}}>
      <>
      <Toggle/>
      <Info/>
      <About/>
      <ProductList/>
      <Contact/>
      </>
    </div>
  );
}

export default App;
