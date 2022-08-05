let obj={
    num:2
}
function add(a){
    console.log(this.num+a)
}
add.call(obj,2)

let arr=[2,3]
function addapply(a,b){
    console.log(this.num+a+b)
}
addapply.apply(obj,arr)


function addbind(a,b,c){
    console.log(this.num+a+b+c)
}
let bounds=addbind.bind(obj)
bounds(2,3,4)

let Student={
    age:20
}
function hope(){

    console.log(this.age)
}
let bound = hope.bind(Student)
bound()

