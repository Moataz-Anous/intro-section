let main = document.getElementById("icon-one")
let secound = document.getElementById("icon-two")
let dirss = document.getElementById("ay")
let firss = document.getElementById("ae")
let clos = document.getElementById("close")
let res = document.querySelector("#container-logo-links")

clos.onclick = function(){
    res.classList.toggle("ul")
}

main.onclick = function(){
    console.log(dirss)
    dirss.classList.toggle("js")
}
secound.onclick = function(){
    console.log(dirss)
    firss.classList.toggle("jk")
}