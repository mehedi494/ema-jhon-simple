
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Review from './Components/OrderReview/Review/Review';

import Shop from './Components/Products/Shop/Shop';
import Inventroy from './Components/Inventory/Inventroy';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/Placeorder/PlaceOrder';
import SingIn from './Components/LogIn/SignIn&logIn';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
          <Route path='/inventory' element={<Inventroy></Inventroy>}></Route>
          <Route path='/signin' element={<SingIn></SingIn>}></Route>
          <Route path='/PlaceOrder' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
