import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../../Pages/HomePage/HomePage'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import Navigation from '../Navbar/Navigation'
import Footer from '../HomeCarousel/Footer'
import ProductDetails from '../ProductDetails/ProductDetails'
import CheckOut from '../Cart/CheckOut'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'
import PaymentSuccess from '../Payment/PaymentSuccess'

const CustomerRouters = () => {
  return (
    <div>
      <div>
      <Navigation/>     
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<HomePage/>}/>
        <Route path='/register' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:topLavel/:secondLavel/:thirdLavel' element={<Product/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/account/order' element={<Order/>}/>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
        <Route path='/payment/:orderId' element={<PaymentSuccess/>}/>
        
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
