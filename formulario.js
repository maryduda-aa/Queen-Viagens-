
const formulario = document.getElementById("formReserva");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const servico = document.getElementById("servico").value;
    const destino = document.getElementById("destino").value;
    const pessoas = document.getElementById("pessoas").value;

    alert(
        "Reserva solicitada com sucesso! " +
        "\nCliente: " + nome +
        "\nE-mail: " + email +
        "\nServiço: " + servico +
        "\nDestino: " + destino +
        "\nViajantes: " + pessoas +
        "\n\nAgradecemos por escolher a Queen Viagens!"
    );

    formulario.reset();

});

