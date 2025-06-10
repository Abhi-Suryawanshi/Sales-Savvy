import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Product_manage() {
  return (
    <>
        <h3>Manage your products here:</h3>
        <NavLink to = "/addProd">Add new product</NavLink><br/>
        <NavLink to = "/updateProd">Update existing product</NavLink><br/>
        <NavLink to = "/deleteProd">Delete product</NavLink><br/>
        <NavLink to = "/searchProd">Search product</NavLink><br/>
    </>
  )
}