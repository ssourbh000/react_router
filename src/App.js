import './App.css';
import {Home} from './components/Home'
import {About} from './components/About'
import {Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Ordersummary} from './components/Ordersummary'



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order-summary' element={<Ordersummary />} />
    </Routes>
    </>
  );
}

export default App;
