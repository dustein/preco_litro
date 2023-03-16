
const l250 = document.querySelector("#l250");
const l269 = document.querySelector("#l269");
const l310 = document.querySelector("#l310");
const l355 = document.querySelector("#l355");
const l473 = document.querySelector("#l473");
const l500 = document.querySelector("#l500");

const latas = document.querySelectorAll(".latas");
const precos = [];

function calcular() {
  let tamanho;
  let preco;
  let precoLitro;

  latas.forEach( item => {

    if(item.value != "") {

      tamanho = Number(item.dataset.key)
      preco = Number(item.value)
      precoLitro = preco * 1000 / tamanho


      precos.push(precoLitro)

    }
    
  })

  precos.sort((a, b) => a - b);
  console.log(precos)

}

