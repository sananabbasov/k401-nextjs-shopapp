'use client'
import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function index({ products }) {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([])

  const fetchData = async () => {
    await fetch(`https://localhost:7037/api/v1/Product/getall?page=${page}`).then(x => x.json()).then(x => setData(x))
  }


  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData()
  }, [page])

  console.log(data);

  return (
    <div>
      {
        data.products &&
        data.products.map((d, index) => (
          <div key={index}>
            <h1>{d.product_name}</h1>
          </div>
        ))
      }
      <Pagination count={data.page_size} page={page} onChange={handleChange} boundaryCount={2} variant="outlined" shape="rounded" />
 
      {/* <ProductCard title={products.title} /> */}
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const products = await res.json()
  console.log(products);
  // Pass data to the page via props
  return { props: { products } }
}
