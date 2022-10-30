var container=document.querySelector('.container')
window.onload=function(){
    container.innerHTML=''
    for(let i=0;i<62;i++){
        container.innerHTML+=`<div class="card">
        <div class="fake">
          <div class="img"></div>
          <div class="title"></div>
        </div>
        <div class='text'>
            <div></div>
            <div></div>
        </div> 
    </div>`
    }
}
setTimeout(()=>{
    container.innerHTML=''
        fetch('https://www.breakingbadapi.com/api/characters')
        .then(res=>res.json()).
        then(data=>data.forEach(element => {
            container.innerHTML+=`<div class="card">
            <div class="card-head">
              <img src=${element.img} alt=""> 
              <h4>${element.name}</h4> 
            </div>
                <p>${element.occupation[0]}</p>
            </div>`
        }))
},1500)
var progress=document.querySelector('.progress')


window.addEventListener('scroll',()=>{
    var point=document.documentElement.scrollHeight-document.documentElement.clientHeight
    var test=document.documentElement.scrollTop
    var res=(test*100)/point
    progress.style.width=`${res}%`
})