import Drapefit from "./Drapefit";
import Cargo from "./cargo";
import Jeans from "./jeans";
import Linenpant from "./linenpant";
import Tshirt from "./T-shirt";
import Shirt from "./shirt";
import Wishlist from "./wishlist";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Cart from "./cart";

import LoginPage from "./loginPage";
import Jacket from "./jacket";
import Signup from "./signup-page";


function App() {
  return (
    <>

    {/* <div> <LoginPage /> </div> */}


                           <div>
                              <Router>
                                <Header />
                               <Routes>
                                        <Route path='/' element={<Drapefit />} />
                                        <Route path='/shirt' element={<Shirt/>}/>
                                        <Route path='/T-shirt' element={<Tshirt/>}></Route>
                                        <Route path='/jacket' element={<Jacket />}></Route>
                                        <Route path='/jeans' element={<Jeans/>}></Route>
                                        <Route path='/cargo' element={<Cargo/>}></Route>
                                        <Route path='/linenpant' element={<Linenpant/>}></Route>
                                        <Route path='/Wishlist' element={<Wishlist/>}></Route>
                                        <Route path='/cart' element={<Cart/>}></Route>
                                        <Route path='/loginPage' element={<LoginPage/>}></Route> 
                                        <Route path="/search" element={<Drapefit />} />
                                        <Route path='/signup-page' element={<Signup/>}></Route>
                                           
                                    </Routes>
                                  </Router>
                          </div> 


{/* <Signup /> */}

        

    </>
  );
}

export default App;
