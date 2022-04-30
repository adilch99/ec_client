import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/success";
import Cancle from "./pages/cancel";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "./redux/userRedux";
import { useEffect } from "react";
import Subscribed from "./pages/subscribed";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (localUser) {
      dispatch(loginSuccess({ user: localUser }));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductsList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment/success" element={<Success />} />
      <Route path="/payment/cancel" element={<Cancle />} />
      <Route path="/payment/subscribe" element={<Subscribed />} />
    </Routes>
  );
}

export default App;
