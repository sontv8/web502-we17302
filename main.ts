export { }

// const a: number = 10
// const b: number = 20

// let user: string;
// user = 123;
// user = "123";
// console.log(a + b);
// const isAdmin: boolean = true;

// const arrNumber: number[] = [1, 2, 3]
// const arrStr: string[] = ["1224234", 'b']
// const arrMix: Array<number | string | boolean> = [1, "abc", true]
// console.log(arrMix);

// const user: { id: number, username: string } = {
//     id: 1,
//     username: "datdeptrai"
// }
// console.log(user);
// const a = 10;
// const b = 20;
// console.log(a + b);

// function sum(a: number, b: number): number {
//     let result = a + b
//     return result
// }
// sum(10, 20)

const project: { id: number, name: string } = {
    id: 1,
    name: "Du an 1"
}
const getData = (props: { id: number, name: string }): { id: number, name: string } => {
    console.log(props);
    return props
}
getData(project)
