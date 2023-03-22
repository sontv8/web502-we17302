import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    // const addNewProduct = () => {
    //     // const newProduct = {
    //     //     "name": document.querySelector("#prdName").value,
    //     // }
    //     // try {
    //     //     props.onAdd(newProduct)
    //     //     navigate('/admin/products')
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    // }
    const [inputValue, setInputValue] = useState({}) // khởi tạo state để lưu giá trị input
    const onHandleChange = (e) => { // hàm xử lý sự kiện khi thay đổi giá trị input
        const name = e.target.name; // lấy name của input
        setInputValue({ ...inputValue, [name]: e.target.value }); // cập nhật giá trị mới cho state
        // setInputValue({ name: e.target.value });
    }
    const onHandleSubmit = (e) => { // hàm xử lý sự kiện khi submit form
        e.preventDefault(); // ngăn chặn sự kiện submit mặc định của form
        // console.log(inputValue);
        props.onAdd(inputValue); // gọi hàm onAdd từ props để thêm mới sản phẩm
        navigate('/admin/products') // điều hướng đến trang quản lý sản phẩm
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' id='prdName' onChange={onHandleChange} name='name' />
                <input type="number" onChange={onHandleChange} name='price' />
                <button type='submit'>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage