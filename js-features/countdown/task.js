const s = document.getElementById('timer');

function count(){
    s.textContent = Number(s.textContent - 1);
    if(s.textContent == 0){
        alert('Вы победили в конкурсе');
        clearInterval(interval);
    }
}

const interval = setInterval(count, 1000);