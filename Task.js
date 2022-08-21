let inpamt = document.getElementsByClassName("inpamt")[0]
let inpdesc = document.getElementsByClassName("inpdesc")[0]
let cats = document.getElementsByClassName("cats")[0]
document.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/b766260873764b1b866245848a639e9d/names').
    then(function(res){
        res.data.forEach(element => {
            let edtbtn = document.createElement('button');
        let delbtn = document.createElement('button');
        let lidiv = document.createElement('div');
        edtbtn.innerText='Edit'
        delbtn.style.marginLeft='20px'
        delbtn.innerText='Del'
        lidiv.innerHTML = `Amount : ${element.amt} Description : ${element.desc} Category : ${element.cat}`
        let lis = document.createElement('li');
        lis.id=element._id
        lis.appendChild(lidiv)
        lis.appendChild(edtbtn)
        lis.appendChild(delbtn)
        document.getElementsByClassName("escnd")[0].appendChild(lis)


        delbtn.addEventListener("click",()=>{
           axios.delete(`https://crudcrud.com/api/b766260873764b1b866245848a639e9d/names/${delbtn.parentElement.id}`).
           then(()=>{
            window.location.reload()
           })
        })

edtbtn.addEventListener("click",()=>{
   
    axios.put(`https://crudcrud.com/api/b766260873764b1b866245848a639e9d/names/${edtbtn.parentElement.id}`,{
        amt:inpamt.value,
        desc:inpdesc.value,
        cat:cats.value
    }).then(()=>{window.location.reload()})
})


        });

        

    })
})

document.getElementsByClassName("sub")[0].addEventListener("click",()=>{
    axios.post('https://crudcrud.com/api/b766260873764b1b866245848a639e9d/names',{
        amt:inpamt.value,
        desc:inpdesc.value,
        cat:cats.value
    }).then(()=>{window.location.reload()})
})