function send(){
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("telefone").value;

    var array_cadastro = [nome, cpf, endereco, telefone]
    console.log(array_cadastro)

}