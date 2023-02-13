var count=0
const addPlayer=()=>{
    const fName=document.getElementById("fName").value
    const lName=document.getElementById("lName").value
    var fullName=fName+" "+lName;
    const countryName=document.getElementById("countryName").value
    const pScore=document.getElementById("pScore").value
    if(fName==""||lName==""||countryName==""||pScore=="")
    {
        alert("⚠ Please Enter All Required Fields")
    }
    else
    {
        const lowersection=document.getElementById("lowersection")
        lowersection.innerHTML+=`<div class="card" id="card${count}">
        <div class="fullName">
            <h3>${fullName}</h3>
        </div>
        <div class="countryName" id="countryName">
            <h3>${countryName}</h3>
        </div>
        <div class="score">
            <h3 id="scoretag${count}">${pScore}</h3>
        </div>
        <div class="buttons" id="buttons">
            <button class="btn1"id="btn1" onclick="del(${count})"><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button class="btn1"id="btn2"onclick="plus(${count})">+5</button>
            <button class="btn1"id="btn3" onclick="minus(${count})">-5</button>
        </div>
     </div>`
     count++
    }
}
function del(count){
const card=document.getElementById(`card${count}`)
card.remove()
}
function plus(count)
{
    const scoretag=document.getElementById(`scoretag${count}`)
    scoretag.innerText=+scoretag.innerText+5
}
function minus(count)
{
    const scoretag=document.getElementById(`scoretag${count}`)
    scoretag.innerText=+scoretag.innerText-5
}

const add=document.getElementById("btn")
add.addEventListener("click", addPlayer)
