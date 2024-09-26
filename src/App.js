import { Route, Routes } from "react-router";
import Cart from "./Customer/Components/Cart/Cart";
import CheckOut from "./Customer/Components/Cart/CheckOut";
import Footer from "./Customer/Components/HomeCarousel/Footer";
import Navigation from "./Customer/Components/Navbar/Navigation";
import Order from "./Customer/Components/Order/Order";
import OrderDetails from "./Customer/Components/Order/OrderDetails";
import Product from "./Customer/Components/Product/Product";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import CustomerRouters from "./Customer/Components/Routers/CustomerRouters";
import AdminRouter from "./Customer/Components/Routers/AdminRouter/AdminRouter";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<CustomerRouters/>}/>
        <Route path="/admin/*" element={<AdminRouter/>} />
      </Routes>
   
    </div>
  );
}

export default App;
