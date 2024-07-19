import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

function Searchitem({cart,setCart}) {
  const {term} =useParams();
  const [filterData,setFilterData]=useState([]);

  useEffect(()=>{
    const filteredData=items.filter((pdt)=>pdt.title.toLowerCase().includes(term.toLowerCase()));
    setFilterData(filteredData)
  },[term])


  return (
    <Product cart={cart} setCart={setCart} items={filterData} />
  )
}

export default Searchitem
