const btn=document.getElementById('btn');

const para=document.querySelector('p');

btn.addEventListener('click', ()=>{
    changeBg();
});

function changeBg(){
    const col1=colors();
    const col2=colors();
    const col3=colors();
    const colString=`rgb(${col1},${col2},${col3})`;
    document.body.style.background=colString;
    para.innerText=colString;

}

function colors(){
    return Math.floor(Math.random()*256)
}