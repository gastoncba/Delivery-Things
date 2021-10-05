import React, {useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Presentation from './Components/Presentation/Presentation';
import Products from './views/Products/Products';
import './App.css';

import { useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//vistas
import Shops from './views/Shops/Shops';
import Order from './views/Order/Order';

//contexto
import {CartProvider} from './Context/Context';

const useRoute= ()=> {
  const location = useLocation()
  useEffect(()=>{
    console.log(location)
  }, [location])
}

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>        
      <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={<Presentation loc={useRoute}></Presentation>}></Route>
          <Route path='/comercios' exact component={Shops}></Route>
          <Route path='/productos/:comercio' exact component={Products}></Route>
          <Route path='/order' exact component={Order}></Route>
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}
export default App;
