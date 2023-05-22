function Cadastrar() {
    var nome = document.getElementById("idNome").value;
    var email = document.getElementById("idEmail").value;
    var mensagem = document.getElementById("idText").value;

    var obj = {}
    obj.nome = nome;
    obj.email = email;
    obj.mensagem = mensagem;

    console.log(obj);

    inserirMensagem(obj);
}

function validarUsuario() {
    var emailAdmin = document.getElementById("EmailAdmin").value;
    var senhaAdmin = document.getElementById("senhaAdmin").value;

    var objadmin = {}
    objadmin.email = emailAdmin;
    objadmin.senhaAdmin = senhaAdmin;

    console.log(objadmin);

    if (verificarCredenciais(objadmin) == true) {
        location.href = "mensagens.html"
    } else {
        alert("Email ou senha incorretos!")
    }
}

function verificarCredenciais(objadmin) {
    if (objadmin.email == "admin@admin.com" && objadmin.senhaAdmin == "1234") {
        return true;
    } else {
        return false;
    }
}

function obterArray() {

    var tabela = document.getElementById("tabela");
    var mensagens = obterMensagens();

    for (var i = 0; i < mensagens.length; i++) {
        var linha = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.innerHTML = mensagens[i].nome;
        linha.appendChild(tdNome);

        var tdEmail = document.createElement("td");
        tdEmail.innerHTML = mensagens[i].email;
        linha.appendChild(tdEmail);

        var tdMensagem = document.createElement("td");
        tdMensagem.innerHTML = mensagens[i].mensagem;
        linha.appendChild(tdMensagem);

        tabela.appendChild(linha);
    }
}

