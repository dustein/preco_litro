
const l250 = document.querySelector("#l250");
const l350 = document.querySelector("#l269");
const l473 = document.querySelector("#l310");
const g250 = document.querySelector("#g250");
const g330 = document.querySelector("#g330");
const g600 = document.querySelector("#g600");

const latas = document.querySelectorAll(".latas");
const unidades = document.querySelectorAll('.unidade');
const resultado = document.querySelector(".tipos");
const precos = [];

//modal
const switchModal = () => {
  const modal = document.querySelector('.modal');
  const switchAtual = modal.style.display;
  if(switchAtual == 'block') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block'
  }
}
//-----------------
//pop up pega preço
unidades.forEach( item => {
  console.log(item)
  item.addEventListener("click", () => {
    console.log('clicou ' + item)
    switchModal()
    item.innerHTML = '<input type="text" class="latas" id="l250" data-key="250">'
  })
})
// -----------------

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

  console.log(maisBarato)
  console.log(`Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`)
  resultado.innerHTML = `Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`;
}

