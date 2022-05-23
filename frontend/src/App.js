import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter >
<div className="grid-container">

<header className="row">

<div>
<a classnName="brand" href="/">Amazona</a>
</div>
<div>
    <a href="/cart">Cart</a>
<a href="/Signin">Sign In</a>

</div>

</header>

<main>
  <Route path="/products/:id" component={ProductScreen} ></Route>
  <Route path="/" component={HomeScreen} exact></Route>


</main>

<footer className="row center">

all rights reserved
</footer>

</div>
</BrowserRouter>
  );
}

export default App;
