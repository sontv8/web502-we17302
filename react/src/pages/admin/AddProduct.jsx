import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate()
    const addNewProduct = () => {
        const newProduct = {
            "name": document.querySelector("#prdName").value,
        }
        try {
            props.onAdd(newProduct)
            navigate('/admin/products')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form action="" onSubmit={() => addNewProduct()}>
                <input type="text" placeholder='Product Name' id='prdName' />
                <button type='submit'>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage