//classificador de nivel do heroi

let nome = "Theo"
let quantidadeDeXP = 7500
let nivel

if (quantidadeDeXP <= 1000){
  nivel = "Ferro"
}

else if (quantidadeDeXP >= 1001 && quantidadeDeXP <= 2000){
  nivel = "Bronze"
 }

else if(quantidadeDeXP >= 2001 && quantidadeDeXP <= 5000){
  nivel = "Prata"
 }

else if (quantidadeDeXP >= 5001 && quantidadeDeXP <= 7000){
  nivel = "Ouro"
 }

else if(quantidadeDeXP >= 7001 && quantidadeDeXP <= 8000){
  nivel = "Platina"
}
 
else if(quantidadeDeXP >= 8001 && quantidadeDeXP <= 9000){
  nivel = "Imortal"
 }

else{
  nivel = "Radiante"
 }

console.log("O herói de nome " + nome + " está no nível de " + nivel)
