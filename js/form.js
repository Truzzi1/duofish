function submitForm() {
    var form = document.forms["FormContato"];
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                console.log("Dados enviados com sucesso!");
                var inputEmail = document.getElementById("email")
                //Muda a escrita do campo
                inputEmail.placeholder= "Cadastrado com Sucesso!";
                // Muda a cor
                inputEmail.classList.add('focado')
                // Limpa o campo de e-mail
                document.getElementById("email").value = "";
            } else {
                console.error("Erro no envio dos dados. Código de status: " + xhr.status);
                // Se desejar, adicione lógica para lidar com erros de envio.
            }
        }
    };

    xhr.send(formData);

    // Impede o envio padrão do formulário
    return false;
}