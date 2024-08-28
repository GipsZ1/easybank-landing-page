document.addEventListener("DOMContentLoaded",()=>{
let open=document.getElementById("open")
let close=document.getElementById("close")
let pop=document.getElementById('list')
close.style.display="none"
open.addEventListener('click',()=>{
    pop.style.display="block"
    open.style.display='none'
    close.style.display='flex'
})
close.addEventListener('click',()=>{
    pop.style.display="none"
    open.style.display='flex'
    close.style.display='none'
})

})