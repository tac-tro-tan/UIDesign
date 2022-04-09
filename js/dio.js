let left= document.querySelector('.left');
let conten= document.querySelector('.conten');
let photos= document.querySelectorAll('.photo');
left.addEventListener('mousemove',(event)=>{
    let move1=(event.clientX *0.05)+4;
    let move2=(event.clientX *0.005);
    conten.style.transform = `translateX(10%)`;
    conten.style.transform = `translateX(-${move2}%)`;

    photos.forEach((photo) =>{
        photo.style.transform = `translateX(${move1}%)`;
    })

})