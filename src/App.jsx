import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ChangePassword from './Pages/ChangePassword'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App