
function reservarCruzeiro(destino, valor) {

    let confirmar = confirm(
        "Você escolheu o Cruzeiro: " + destino +
        "\nValor do pacote: R$ " + valor.toFixed(2) +
        "\n\nDeseja continuar com a reserva?"
    );

    if (confirmar) {

        alert(
            "Cruzeiro selecionado com sucesso! " +
            "\nDestino: " + destino +
            "\nValor: R$ " + valor.toFixed(2) +
            "\n\nEntre em contato com a Queen Viagens para finalizar sua reserva."
        );

    } else {

        alert("Tudo bem! Escolha outro destino. ");

    }

}
