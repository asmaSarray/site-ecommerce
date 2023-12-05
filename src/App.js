import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/login";
import Registre from "./pages/registre";

// import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registre">
            <Registre />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/products/:id" children={<SingleProductPage />} />

          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
