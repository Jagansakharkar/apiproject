let txt=document.querySelector(".text")
let c=document.querySelector(".container")
let a=document.querySelector(".author")
let btn=document.querySelector(".btn")
fetch('https://type.fit/api/quotes').then(data=>{
  return data.json();
})
.then(post=>{  
  let i =0;
 btn.addEventListener("click",()=>{
  txt.innerText=post[i].text;
    a.innerText=post[i].author;
    i++
 })
  } 
)