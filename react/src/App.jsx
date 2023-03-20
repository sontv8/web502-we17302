import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import React, { useEffect, useState } from 'react'
import { addProduct, deleteProduct, getAllProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProducts(products.filter((item) => item.id !== id)))
    deleteProduct(id).then(() => setProducts(products.filter((item) => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleUpdate = (product) => { }
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />

          </Route>
        </Route>
        {/* /admin */}
        {/* 
          / - HomePage
          /products - ProductsPage
          /products/:id - ProductDetailPage
        */}
      </Routes>
    </div >
  )
}

export default App
