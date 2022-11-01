import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Data from './Components/Data'

function App() {
  const arrPlaces = Data.map(keyData => {
    return (
      <Hero 
        key = {keyData.id}
        {...keyData}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {arrPlaces}
    </div>
    
  );
}

export default App;
