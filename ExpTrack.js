let count = 1;

document.addEventListener("DOMContentLoaded",()=>{
    for(let i=1;i<Infinity;i++){
        let objh =JSON.parse(localStorage.getItem(`si${i}`))
        if(objh==null){
            break;
        }
        else{
            let edit = document.createElement("button");
let del = document.createElement("button");
let spn = document.createElement("span");
const mlist = document.createElement("li");
            mlist.className=`si${count}`
            count++;
            mlist.style.marginLeft="10px"
            mlist.style.marginTop="10px"
            spn.innerText = `${objh.amount} - ${objh.desc} - ${objh.sel}`

            edit.style.marginLeft="5px"
            edit.style.marginRight="5px"
            del.innerText="Delete";
            edit.innerText="Edit ";



            mlist.appendChild(spn);
            mlist.appendChild(edit)
            mlist.appendChild(del);
            document.getElementsByClassName("variables")[0].appendChild(mlist);
            del.addEventListener("click",()=>{
                del.parentElement.remove();
                localStorage.removeItem(del.parentElement.className);
            })
        
            edit.addEventListener("click",()=>{
                let amt = document.getElementById("amt").value;
                let desc = document.getElementById("desc").value;
                let sel = document.getElementById("cat").value
                edit.parentElement.firstChild.innerHTML=`${amt} - ${desc} - ${sel}`
                let obj={
                    amount:amt,
                    desc:desc,
                    sel:sel
                }
                localStorage.setItem(edit.parentElement.className,JSON.stringify(obj))
                
            })
        }
    }
})
function add(){
    console.log("hai")
     let amt = document.getElementById("amt").value;
     let desc = document.getElementById("desc").value;
     let sel = document.getElementById("cat").value
let obj={
    amount:amt,
    desc:desc,
    sel:sel
}
localStorage.setItem(`si${count}`,JSON.stringify(obj))

     const mlist = document.createElement("li");
     mlist.style.marginLeft="10px"
     mlist.style.marginTop="10px"
    
    mlist.className=`si${count}`
    mlist.id="mlistg"
    count++;
    let edit = document.createElement("button");
     edit.id="edz"
     let del = document.createElement("button");
     del.id="delz"
     let spn = document.createElement("span");
     spn.innerText = `${amt} - ${desc} - ${sel}`

     edit.style.marginLeft="5px"
     edit.style.marginRight="5px"
     del.innerText="Delete";
     edit.innerText="Edit ";
     mlist.appendChild(spn);
     mlist.appendChild(edit)
     mlist.appendChild(del);


    del.addEventListener("click",()=>{
        del.parentElement.remove();
        localStorage.removeItem(del.parentElement.className);
    })

    edit.addEventListener("click",()=>{
        let amt = document.getElementById("amt").value;
        let desc = document.getElementById("desc").value;
        let sel = document.getElementById("cat").value
        edit.parentElement.firstChild.innerHTML=`${amt} - ${desc} - ${sel}`
        let obj={
            amount:amt,
            desc:desc,
            sel:sel
        }
        localStorage.setItem(edit.parentElement.className,JSON.stringify(obj))
        
    })




     document.getElementsByClassName("variables")[0].appendChild(mlist);
}

