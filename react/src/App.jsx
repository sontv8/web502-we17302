import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
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
