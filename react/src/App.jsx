import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import React, { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage products={products} />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
        {/* /admin */}
        {/* 
          / - HomePage
          /products - ProductsPage
          /products/:id - ProductDetailPage
        */}
      </Routes>
    </div>
  )
}

export default App
