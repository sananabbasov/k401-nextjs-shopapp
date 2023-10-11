import React, { useEffect, useState } from 'react'

export default  function index({products}) {

  return (
    <div>
      {
        products.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
          </div>
        ))
      }
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()
  console.log(products);
 
  // Pass data to the page via props
  return { props: { products } }
}
