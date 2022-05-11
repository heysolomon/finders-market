import { BrowserRouter, Routes, route } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
