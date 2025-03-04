function calcularMassa() {
    let quantidadeMassa = parseInt(document.getElementById("quantidadeMassa").value);
    let pesoUnidade = parseFloat(document.getElementById("pesoUnidade").value);
    let hidratacao = parseFloat(document.getElementById("hidratacao").value) / 100;
    let sal = parseFloat(document.getElementById("sal").value) / 100;
    let fermento = parseFloat(document.getElementById("fermento").value) / 100;

    if (isNaN(quantidadeMassa) || isNaN(pesoUnidade) || isNaN(hidratacao) || isNaN(sal) || isNaN(fermento)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cálculo da quantidade total de massa necessária
    let massaTotal = quantidadeMassa * pesoUnidade;

    // Cálculo da farinha
    let farinha = massaTotal / (1 + hidratacao + sal + fermento);
    let agua = farinha * hidratacao;
    let salCalculado = farinha * sal;
    let fermentoCalculado = farinha * fermento;

    document.getElementById("resultado").innerHTML = `
        Massa total necessária: ${massaTotal.toFixed(2)} g<br>
        Farinha: ${farinha.toFixed(2)} g<br>
        Água: ${agua.toFixed(2)} g<br>
        Sal: ${salCalculado.toFixed(2)} g<br>
        Fermento: ${fermentoCalculado.toFixed(2)} g
    `;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js') // Tente "./" ao invés de "/"
        .then((reg) => {
            console.log('Service Worker registrado!', reg);

            // Forçar atualização do SW
            if (reg.waiting) {
                reg.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
        })
        .catch((err) => console.log('Erro no registro:', err));
}