



let hourDiv = document.querySelector('.hour');
let minDiv = document.querySelector(".min")
let secDiv = document.querySelector(".sec")


setInterval(()=>{

let date = new Date();
hourDiv.innerHTML = (date.getHours() < 10 ?"0" : '' )+ date.getHours();
minDiv.innerHTML = date.getMinutes();
secDiv.innerHTML = (date.getSeconds() < 10 ?"0" : '' )+ date.getSeconds();
}, 1000  )