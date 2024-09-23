import { useEffect } from 'react';
import './App.css';

function App() {
  const fetchProducts = ()=>{
    fetch('http://40.90.240.250/products')
      .then(response => response.json())
      .then(data => console.log("data=======", data));

  }

  useEffect(()=>{
    fetchProducts();
  }, [])
  return (
    <div className="App">
      <h1>Hello ALl, from Azure Static app</h1>
    </div>
  );
}

export default App;
