import './App.css';
import About from './components/about/About';
import Info from './components/Info/Info'
import ProductList from './components/productlist/ProductList';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
      <>
      <Info/>
      <About/>
      <ProductList/>
      <Contact/>
      </>
    </div>
  );
}

export default App;
