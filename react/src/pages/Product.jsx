import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>ProductPage</h1>
            <div>
                {products.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage