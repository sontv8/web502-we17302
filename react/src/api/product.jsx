import instance from "./instance";

const getAllProduct = () => {
    return instance.get("/products");
}
const getOneProduct = (id) => {
    return instance.get('/products/' + id)
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id)
}
const addProduct = (product) => {
    return instance.post('/products', product)
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product)
}
export { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct }