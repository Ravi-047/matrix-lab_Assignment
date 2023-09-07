import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import TokenAddress from './pages/Token/TokenAddress';
import PairAddress from './pages/Pair/PairAddress';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<TokenAddress />} />
        <Route path='/pair_address' element={<PairAddress />} />
      </Route>

    </Routes>
  );
}

export default App;
