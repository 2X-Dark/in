function changeImage(){
    let displayImage =document.getElementById ('Image1')
    if(displayImage.src.match('bar.png')){
        displayImage.src = 'bar1.png'
    } else {
        displayImage.src = 'bar.png'
    }
}