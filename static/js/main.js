const numero_a = document.getElementById('numero-a')
const numero_b = document.getElementById('numero-b')
const mensagem = document.querySelector('.mensagem')
const form = document.getElementById('form-comparacao')

let formValido = false;
let a = 0;
let b = 0;

form.addEventListener('submit', function(e){
    e.preventDefault();

    a = numero_a.value
    b = numero_b.value
    formValido = b > a;
    
        if (formValido){
            mensagem.innerHTML = 'Muito bem! Número <b> B </b> é maior que número <b> A </b> ';
            mensagem.style.background = '#4df01c';
            mensagem.style.color = '#144ea0'
            mensagem.style.display = 'block'
        } else {
            mensagem.innerHTML = 'Ops! Número <b> B </b> é menor que número <b> A </b> ';  
            mensagem.style.background = 'red'; 
            mensagem.style.color = '#ecf1f1'
            mensagem.style.display = 'block'
        } 
    
    if (a == b)  {
        mensagem.innerHTML = 'Ops! Número <b> B </b> é igual que número <b> A </b> ';  
        mensagem.style.background = 'red'; 
        mensagem.style.color = '#ecf1f1'
        mensagem.style.display = 'block'
    }
})

numero_a.addEventListener('keyup', function(e){
    a = e.target.value;
    b = numero_b.value;

   formValido = b > a;

    if (formValido){
      numero_a.classList.remove('error')
    } else {
        numero_a.classList.add('error')
    }
})


numero_b.addEventListener('keyup', function(e){
    b= e.target.value;
    a = numero_a.value;

    formValido = b > a;

    if (formValido){
      numero_b.classList.remove('error')
    } else {
        numero_b.classList.add('error')
    }
})

