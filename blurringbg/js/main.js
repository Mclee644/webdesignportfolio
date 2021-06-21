function toggle(){
    console.log('your boss is coming ..........')
    var blur=document.getElementById('blur');
    var popup=document.getElementById('popup');

    blur.classList.toggle('active');
    popup.classList.toggle('active');
}