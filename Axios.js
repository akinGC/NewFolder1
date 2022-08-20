
let win = document.getElementsByClassName("inpbtn")[0]
win.addEventListener("click",()=>{
    console.log("hai");
    axios.post("https://crudcrud.com/api/ac2a530e12ce4eb0926a31bd15403fca/names", {
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
   axios.get("https://crudcrud.com/api/ac2a530e12ce4eb0926a31bd15403fca/names").then(function(response){
     console.log(response.data)
    
 response.data.forEach(element => {
    let lis = document.createElement('li')
    lis.id=element._id
    let del = document.createElement('button')
    del.innerText = 'DEL'
    let edt = document.createElement('button')
    edt.innerText = 'Edit'
del.style.marginLeft = '15px'

    let divine = document.createElement('div')
    divine.innerHTML = `<p>name : ${element.name} <p> email : ${element.email}</p></p>`
    lis.appendChild(divine)
    lis.appendChild(edt)
    lis.appendChild(del)
       document.getElementsByClassName("listings")[0].appendChild(lis)
    
       del.addEventListener("click",()=>{
        del.parentElement.remove();
        axios.delete(`https://crudcrud.com/api/ac2a530e12ce4eb0926a31bd15403fca/names/${del.parentElement.id}`)
     
    })
    edt.addEventListener("click",()=>{
        let editbtn = document.getElementsByClassName("edtbtn")[0]
        editbtn.style.display = 'block'
        document.getElementsByClassName("inpbtn")[0].style.display = 'none'
        axios.get(`https://crudcrud.com/api/ac2a530e12ce4eb0926a31bd15403fca/names/${edt.parentElement.id}`).
        then(function(res){
            document.getElementsByClassName("inptxt")[0].value=res.data.name
         document.getElementsByClassName("inpmail")[0].value  =res.data.email    
       
        })
        editbtn.addEventListener("click",()=>{
            console.log(edt.parentElement.id)
            axios.put(`https://crudcrud.com/api/ac2a530e12ce4eb0926a31bd15403fca/names/${edt.parentElement.id}`,{
              name:document.getElementsByClassName("inptxt")[0].value,
              email:document.getElementsByClassName("inpmail")[0].value
    
            }).then(function (res){
              editbtn.style.display = 'none'
              document.getElementsByClassName("inpbtn")[0].style.display = 'block'
            //   document.getElementsByClassName("getuser")[0].click()
            divine.parentElement.innerHTML=`<p>name : ${document.getElementsByClassName("inptxt")[0].value} <p> email : ${document.getElementsByClassName("inpmail")[0].value}</p></p>`
           
        
        })
          })
    })


   });



   })
})