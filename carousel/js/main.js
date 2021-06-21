const carousel=document.getElementById('carousel');
const imgx =document.querySelectorAll('#carousel img')
    i=0;
  console.log(i, imgx.length)
function caro(){
    i++;
    console.log(i);
    if(i>imgx.length-1){
        i=0;
    }
    carousel.style.transform=`translateX(${-i*350}px)`
}
setInterval(caro, 3000);