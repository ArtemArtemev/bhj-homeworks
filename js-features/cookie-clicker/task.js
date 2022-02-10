let counter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');


img.onclick = () => {
    if(Number(counter.textContent) % 2 == 0){
        counter.textContent = Number(counter.textContent) + 1;
        img.width += 4;
        img.height +=4;
    }else{
        counter.textContent = Number(counter.textContent) + 1;
        img.width -= 4;
        img.height -=4; 
    }
}