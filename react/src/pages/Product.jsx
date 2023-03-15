

const ProductPage = ({ products }) => {
    const removeProduct = (id) => {
        fetch('http://localhost:3000/products/' + id, {
            method: 'DELETE'
        })
    }
    return (
        <div>
            <h1>ProductPage</h1>
            <div>
                {products.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => removeProduct(item.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage