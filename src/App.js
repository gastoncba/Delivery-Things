import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Presentation from './Components/Presentation/Presentation';
import Products from './views/Products/Products';

import {Switch, Route} from 'react-router-dom';

//vistas
import Shops from './views/Shops/Shops';
import Order from './views/Order/Order';

//contexto
import {CartProvider} from './Context/Context';

function App() {

  return (
    <div className="App">
      <CartProvider>     
      <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={Presentation}></Route>
          <Route path='/comercios' exact component={Shops}></Route>
          <Route path='/productos/:comercio' exact component={Products}></Route>
          <Route path='/order' exact component={Order}></Route>
        </Switch>
      </CartProvider>
    </div>
  );
}
export default App;
