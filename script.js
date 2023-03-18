
const l250 = document.querySelector("#l250");
const l269 = document.querySelector("#l269");
const l310 = document.querySelector("#l310");
const l355 = document.querySelector("#l355");
const l473 = document.querySelector("#l473");
const l500 = document.querySelector("#l500");

const latas = document.querySelectorAll(".latas");
const resultado = document.querySelector(".tipos");
const precos = [];

function calcular() {
  let tamanho;
  let preco;
  let precoLitro;
  let barato = 0;
  let maisBarato;

  latas.forEach( item => {

    if(item.value != "") {

      tamanho = Number(item.dataset.key)
      preco = Number(item.value)
      precoLitro = preco * 1000 / tamanho

      if(barato == 0) {
        barato = precoLitro
      } else if (barato > precoLitro) {
        barato = precoLitro
      }

      precos.push([precoLitro, tamanho])
      
    }
    
    maisBarato = precos.filter( item => item[0] == barato)

  })

  // precos.sort((a, b) => a - b);
  // console.log(precos)
  // console.log(barato)
  console.log(maisBarato)
  console.log(`Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`)
  resultado.innerHTML = `Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`;
}

