
let win = document.getElementsByClassName("inpbtn")[0]
win.addEventListener("click",()=>{
    console.log("hai");
    axios.post("https://crudcrud.com/api/a3ba7f192d014601b08c17212924ca8a/names", {
        name: document.getElementsByClassName("inptxt")[0].value,
        email:document.getElementsByClassName("inpmail")[0].value
    })
    .then(function (response) {
        document.getElementsByClassName("inptxt")[0].value=''  
        document.getElementsByClassName("inpmail")[0].value=''
        // do whatever you want if console is [object object] then stringify the response
    })

})

document.getElementsByClassName("getuser")[0].addEventListener("click",()=>{
 
    while (   document.getElementsByClassName("listings")[0].lastElementChild) {
        myNode.removeChild(   document.getElementsByClassName("listings")[0].lastElementChild);
      }
   axios.get("https://crudcrud.com/api/a3ba7f192d014601b08c17212924ca8a/names").then(function(response){
     console.log(response.data[0].name)
   response.data.forEach(element => {
    let lis = document.createElement('li')
    lis.innerHTML=`<p>name : ${element.name} <p> email : ${element.email}</p></p>`
       document.getElementsByClassName("listings")[0].appendChild(lis)
   });
   })
})