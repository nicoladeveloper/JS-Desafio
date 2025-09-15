const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o nome do herói
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
  rl.question("Digite a quantidade de XP: ", (xpInput) => {
    let xp = Number(xpInput);
    let nivel;

    if (xp <= 1000) {
      nivel = "Ferro";
    } else if (xp <= 2000) {
      nivel = "Bronze";
    } else if (xp <= 5000) {
      nivel = "Prata";
    } else if (xp <= 6000) {
      nivel = "Ouro";
    } else if (xp <= 8000) {
      nivel = "Platina Diamante";
    } else if (xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    console.log(`\nO herói de nome ${nomeHeroi} está no nível de ${nivel}!\n`);

    rl.close();
  });
});
