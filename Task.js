let inpamt = document.getElementsByClassName("inpamt")[0]
let inpdesc = document.getElementsByClassName("inpdesc")[0]
let cats = document.getElementsByClassName("cats")[0]
document.addEventListener('DOMContentLoaded', async ()=>{
    try{
        let resDom = await  fetch('https://crudcrud.com/api/328ec8c9739647bfb9072023c87ac9b5/names')
       let js =await resDom.json()
       js.forEach(element => {
            let edtbtn = document.createElement('button');
            edtbtn.className='edtbtn'
            let delbtn = document.createElement('button');
            delbtn.className='delbtn'
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
            delzz(delbtn)
            editzz(edtbtn)
            });   
    }
    catch(err){
        console.error(err);
    }

})

document.getElementsByClassName("sub")[0].addEventListener("click", async ()=>{

try{
    let addbtn = await axios.post('https://crudcrud.com/api/328ec8c9739647bfb9072023c87ac9b5/names',{
        amt:inpamt.value,
        desc:inpdesc.value,
        cat:cats.value
    })
    
        console.log(addbtn.data._id)
        let edtbtn = document.createElement('button');
        edtbtn.className='edtbtn'
        let delbtn = document.createElement('button');
        let lidiv = document.createElement('div');
        edtbtn.innerText='Edit'
        delbtn.style.marginLeft='20px'
        delbtn.innerText='Del'
        lidiv.innerHTML = `Amount : ${inpamt.value} Description : ${inpdesc.value} Category : ${cats.value}`
        let lis = document.createElement('li');
        lis.id=addbtn.data._id
        lis.appendChild(lidiv)
        lis.appendChild(edtbtn)
        lis.appendChild(delbtn)
        document.getElementsByClassName("escnd")[0].appendChild(lis)
        delzz(delbtn)
        editzz(edtbtn)
}
catch(err){
    console.error(err)
}
})

//Edit and Delete functions

 function delzz(delbtn){
    delbtn.addEventListener("click",async()=>{
     try {
        await axios.delete(`https://crudcrud.com/api/328ec8c9739647bfb9072023c87ac9b5/names/${delbtn.parentElement.id}`)        
        delbtn.parentElement.remove()
     } catch (error) {
        console.error(error)
     }
       
     })
}

function editzz(edtbtn){
    edtbtn.addEventListener("click",async()=>{
    
       try {
        await axios.put(`https://crudcrud.com/api/328ec8c9739647bfb9072023c87ac9b5/names/${edtbtn.parentElement.id}`,{
            amt:inpamt.value,
            desc:inpdesc.value,
            cat:cats.value
        })
            let tar = edtbtn.parentElement.firstChild
            tar.innerHTML = `Amount : ${inpamt.value} Description : ${inpdesc.value} Category : ${cats.value}`
     
       } catch (error) {
        console.error(error)
       }
    })
}