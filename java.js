
const formulario = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");
const aviso = document.getElementById("aviso");

let total = 0;
let concluidas = 0;

function atualizarContador() {
    contador.textContent =
        `Tarefas: ${total} | Concluídas: ${concluidas}`;
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        aviso.textContent = "Digite uma tarefa antes de adicionar!";
        input.focus();
        return;
    }

    aviso.textContent = "";

    const tarefa = document.createElement("li");
    const textoTarefa = document.createElement("span");
    const botaoRemover = document.createElement("button");

    textoTarefa.textContent = texto;
    textoTarefa.classList.add("texto-tarefa");

    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao-remover");

    textoTarefa.addEventListener("click", function() {
        const estavaConcluida =
            textoTarefa.classList.contains("concluida");

        textoTarefa.classList.toggle("concluida");

        if (estavaConcluida) {
            concluidas--;
        } else {
            concluidas++;
        }

        atualizarContador();
    });

    botaoRemover.addEventListener("click", function() {
        if (textoTarefa.classList.contains("concluida")) {
            concluidas--;
        }

        tarefa.remove();
        total--;

        atualizarContador();
    });

    tarefa.appendChild(textoTarefa);
    tarefa.appendChild(botaoRemover);
    lista.appendChild(tarefa);

    total++;
    atualizarContador();

    input.value = "";
    input.focus();
});
