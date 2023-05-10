let p = document.querySelector('p') 
    let email = document.querySelector('#iemail')
    let submit = document.querySelector('#sub')

    function clicou(){

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1){
            window.alert('preencha os dados corretamente')
        }else{
           p.innerHTML=('email cadatrado com sucesso')
           email.classList.toggle('invisible')
           submit.classList.toggle('invisible')
        }
    }