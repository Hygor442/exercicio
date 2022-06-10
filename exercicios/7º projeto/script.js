function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

function verificar(){
    const nome = document.querySelector('#nome');
    const sobreNome = document.querySelector('#sobrenome');
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');

    if(nome.value.length == 0 ||sobreNome.value.length == 0 || email.value.length == 0 || senha.value.length == 0){
        let p = document.querySelector("#text");
        let text = document.createTextNode("Preencha todos os campos corretamente!");
        p.appendChild(text);
        iniciaModal('modal-promocao');
        text = document.createTextNode("");
    }
    else{
        let text = document.createTextNode("");
        let p = document.querySelector("#text");
        text = document.createTextNode("Cadastro concluído");
        p.appendChild(text);
        iniciaModal('modal-promocao');
    }
}

