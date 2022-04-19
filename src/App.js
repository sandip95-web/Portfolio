import './App.css';
import About from './components/about/About';
import Info from './components/Info/Info'
import ProductList from './components/productlist/ProductList';
function App() {
  return (
    <div className="App">
      <>
      <Info/>
      <About/>
      <ProductList/>
      </>
    </div>
  );
}

export default App;
