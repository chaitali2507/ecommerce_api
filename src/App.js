import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Checkout from './redux/Checkout';


function App() {
  return (
     <>
    <Provider store={store}>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/product/:id' element={<Product/>}/>
     </Routes>
     </Provider>
    
     </>
   
  );
}
export default App;
