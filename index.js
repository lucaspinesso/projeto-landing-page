const verificaFormulário = () =>{
    let nomeCompleto = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("CPF").value
    let cep = document.getElementById("CEP").value
    let telefone = document.getElementById("telefone").value
    if(nomeCompleto === ""){
        alert("não identificamos o seu Nome, pode verificar ?")
    }else if(email === ""){
        alert("não identificamos o seu E-mail, pode verificar ?")
    }else if(cpf === ""){
        alert("não identificamos o seu CPF, pode verificar ?")
    }else if(cep === ""){
        alert("não identificamos o seu CEP, pode verificar ?")
    }else if(telefone === ""){
        alert("não identificamos o seu Telefone, pode verificar ?")
    }else{
        alert(`Muito obrigado pela confiança!\nEntraremos em contato através do e-mail:\n`+email)
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("CPF").value = ""
        document.getElementById("CEP").value = ""
        document.getElementById("telefone").value = ""
    }
}

const mudarCursor = () =>{
    let botao = document.getElementById("enviar")
    botao.style.cursor = "pointer"
}