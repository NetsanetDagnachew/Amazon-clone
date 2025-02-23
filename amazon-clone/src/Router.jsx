import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetails/ProductDetails'
import Auth from './Pages/Auth/Auth';
const Routing = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/auth' element={<Auth/>} />
                <Route path='/payments' element={<Payment/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/category/:categoryName' element={<Results/>} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart/>} />

            </Routes>            
        </Router>
    );



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       <Route path='/auth' element={<Signup/>} />
//       <Route path='/payment' element={<Payment/>} />
//       <Route path='/orders' element={<Orders/>} />
//       <Route path='/cart' element={<Cart/>} />
//     </Route>
//   )
// )
// function App({routes}) {
//   return (
//     <>
//       <RouterProvider router={router}/>
//     </>
//   );
// }
// export default App;

}

export default Routing;
