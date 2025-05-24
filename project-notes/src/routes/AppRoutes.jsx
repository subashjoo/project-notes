import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../pages/NotFound'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Layout from '../BasicLayout/Layout'
export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/Home" element={<Home></Home>} />
          <Route path="/Login" element={<Login></Login>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
        <Route path="/SignUp" element={<SignUp></SignUp>} />
      </Route>
    </Routes>
  );
}
