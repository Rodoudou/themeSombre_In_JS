const btn = document.querySelector("#mode");
const span = document.querySelector("span");
const body = document.body;

const modeSombre=()=>{
    body.className = 'dark';
    localStorage.setItem('theme','sombre');
    span.textContent = "Thème clair";

}

if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme')== 'sombre'){
        modeSombre()
    }
}


const btnOnClick=()=>{
if(body.classList.contains('dark')){
    body.className = '';
    localStorage.setItem('theme','clair');
    span.textContent = "Thème sombre";
}else{

    modeSombre()
}
}

btn.addEventListener('click',btnOnClick);
