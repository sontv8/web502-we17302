"use strict";
// exports.__esModule = true;
var getData = function (props) {
    return props;
};
var project = {
    id: "1",
    name: "abc",
    image: "http://..."
};
getData(project);
/* Array - Mảng*/
// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]
// const get = (data: { id: number, name: string }[]): { id: number, name: string }[] => {
//     return data
// }
// interface IProjectList {
//     id: number,
//     name: string
// }
// const projectList: Array<ProjectList> = [
//     { id: 1, name: "abcd" }
// ]
// const projectList: IProjectList[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" },
//     { id: 3, name: "Du an tot nghiep" }
// ]
/*
    tạo 1 hàm để hiển thị
    sử dụng map và hiển thị dữ liệu của mảng (console.log)
*/
/* Function */
// interface SumFunction {
//     (a: number, b: number): number
// }
// const sum: SumFunction = (a, b) => {
//     return a + b
// }
// sum(1, 20)
// định nghĩa kiểu dữ liệu với type
/* Object */
// type Product = {
//     id: number,
//     name: string
// }
// const getProduct = (props: Product): Product => {
//     return props
// }
/* Array */
// type TProductList = number[]
// const productList: TProductList = [1, 2, 3]
// trong trường hợp này đang báo lỗi, vậy xử lý lỗi này như thế nào -> buổi sau sẽ nói ahihi
/* Function */
// type TAddFunc = (a: number, b: number) => number
// interface IPerson {
//     email: string
// }
// interface IPerson {
//     id: number,
//     name: string
// }
// const sontv: IPerson = {
//     id: 1,
//     name: "abc",
//     email: "abc"
// }
// interface IEmployee extends IPerson {
//     position: string,
//     language: string
// }
// const sontv8: IEmployee = {
//     id: 1,
//     name: "sontv",
//     email: "anc",
//     position: "nhan vien",
//     language: "tieng Viet"
// }
// type TPerson = {
//     id: number,
//     name: string
// }
// type TEmployee = {
//     email: string
// }
// // type TManager = TPerson & TEmployee
// const datlt: TPerson & TEmployee = {
//     id: 1,
//     name: "datlt",
//     email: "abc"
// }
var projectList = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" }
];
var listProject = function (projects) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n                Du an\n            ";
        }).join("");
    }
};
listProject(projectList);
