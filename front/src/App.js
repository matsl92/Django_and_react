import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Test from './pages/Test';
import { AppProvider } from './context/AppContext';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/store/product/:id' element={<ProductDetailPage />}></Route>
        <Route path='/test' element={<Test />}></Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
