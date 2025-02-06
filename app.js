let listaAmigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigoNome = amigoInput.value.trim();
    const listaAmigosContainer = document.getElementById("listaAmigos");

    if (amigoNome === "") {
        alert("O nome do amigo não pode estar vazio.");
        return;
    }

    if (listaAmigos.includes(amigoNome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(amigoNome);
    atualizarListaAmigos();
    amigoInput.value = "";
}

function atualizarListaAmigos() {
    const listaAmigosContainer = document.getElementById("listaAmigos");
    listaAmigosContainer.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(btnRemover);
        listaAmigosContainer.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarListaAmigos();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione amigos antes de fazer o sorteio.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    document.getElementById("resultadoSorteio").textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}
