import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { addProduct, deleteProduct, getAllProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'


function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id)
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' >
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
