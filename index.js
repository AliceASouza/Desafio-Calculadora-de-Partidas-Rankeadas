let saldoDoHeroi = calcularRanking(200, 20);
verificarNivelHeroi();

function calcularRanking(vitorias, derrotas) {
    let ordemRanking = vitorias - derrotas;
    return ordemRanking;
}

function verificarNivelHeroi() {
    let nivelHeroi = "";

    switch (saldoDoHeroi) {
        case saldoDoHeroi < 10:
            nivelHeroi = "Ferro";
            break;
        case saldoDoHeroi < 20:
            nivelHeroi = "Bronze";
            break;
        case saldoDoHeroi < 50:
            nivelHeroi = "Prata";
            break;
        case saldoDoHeroi < 80:
            nivelHeroi = "Ouro";
            break;
        case saldoDoHeroi < 90:
            nivelHeroi = "Diamante";
            break;
        case saldoDoHeroi <= 100:
            nivelHeroi = "Lendário";
            break;
        default:
            nivelHeroi = "Imortal";
            break;
 }

    console.log(`O Herói tem o saldo de ${saldoDoHeroi}, e está no nível de ${nivelHeroi}`);
}
    