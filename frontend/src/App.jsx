import React from 'react'
import  { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import AddProduct from './pages/AddProduct';


export default function App() {

  // const Homepage= lazy(() => import("./pages/Homepage.js"));
  return (
    <div>
     
     
      <AddProduct/>
     
      
    </div>
  )
}
