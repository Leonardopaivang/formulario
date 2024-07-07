document.getElementById('enviar').addEventListener('click', enviar);

function enviar() {
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let senha1 = document.getElementById('senha1').value;
    let senha2 = document.getElementById('senha2').value;
    let cidade = document.getElementById('cidade').value;

    if (senha1 === senha2) {
        localStorage.setItem('nome', nome);
        localStorage.setItem('dataNascimento', dataNascimento);
        localStorage.setItem('senha', senha1);
        localStorage.setItem('cidade', cidade);

        alert("Formulário enviado com sucesso! \nnome: "+nome+"\nData De Nascimento: "+dataNascimento+"\nsenha: "+senha1+"\ncidade: "+cidade);
    } 
    else {
        alert("As senhas não são iguais.");
    }
}