
const formularioHotel = document.getElementById("formHotel");

formularioHotel.addEventListener("submit", function(event) {

    event.preventDefault();

    const cidade = document.getElementById("cidade").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const hospedes = document.getElementById("hospedes").value;
    const quartos = document.getElementById("quartos").value;

    const entrada = new Date(checkin + "T00:00:00");
    const saida = new Date(checkout + "T00:00:00");

    if (saida <= entrada) {
        alert("A data de saída precisa ser depois da entrada!");
        return;
    }

    const resultado = document.getElementById("resultado-hotel");

    resultado.innerHTML = `
        <h3>Pesquisa realizada!</h3>
        <p>Destino: ${cidade}</p>
        <p>Entrada: ${entrada.toLocaleDateString("pt-BR")}</p>
        <p>Saída: ${saida.toLocaleDateString("pt-BR")}</p>
        <p>Hóspedes: ${hospedes}</p>
        <p>Quartos: ${quartos}</p>
        <p>Obrigado por escolher a Queen Viagens!</p>
    `;

});

function escolherHotel(nome) {

    alert(
        "Você escolheu: " + nome +
        "\n\nObrigado por escolher a Queen Viagens!"
    );

}
