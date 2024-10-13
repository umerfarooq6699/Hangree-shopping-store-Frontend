import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ChangePassword from './Pages/ChangePassword'
import Navbar from './Components/Navbar'
import AddProduct from './Dashboard/AddProduct'
import Home from './Pages/Home'
import DashboardHome from './Dashboard/DashboardHome'
import Products from './Dashboard/Products'
import UpdateProduct from './Dashboard/UpdateProduct'
import AllUsers from './Dashboard/AllUsers'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/dashboard' element={<DashboardHome/>}/>
          <Route path='/dashboardProducts' element={<Products/>}/>
          <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
          <Route path='dashboardUsers' element={<AllUsers/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App