
function reservar(carro, valor) {

    let confirmar = confirm(
        "Você escolheu: " + carro +
        "\nValor da diária: R$ " + valor.toFixed(2) +
        "\n\nDeseja continuar com a reserva?"
    );

    if (confirmar) {

        alert(
            "Reserva selecionada com sucesso! " +
            "\nCarro: " + carro +
            "\nValor: R$ " + valor.toFixed(2) +
            "\n\nEntre em contato com a Queen Viagens para finalizar."
        );

    } else {

        alert("Tudo bem! Escolha outro veículo. ");

    }

}
