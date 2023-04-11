
const latas = document.querySelectorAll(".latas");
const unidades = document.querySelectorAll('.unidade');
const resultado = document.querySelector(".tipos");
const precos = [];



//pop up pega preço
unidades.forEach( item => {
  let valorDoInput = 0;
  item.addEventListener("click", () => {

    valorDoInput = window.prompt(`Preço da unidade ${item.dataset.key}ml`, "0.00")

    precos.push([valorDoInput, item.dataset.key])
    console.log(precos)
  })
})
// -----------------


function calcular() {
  let tamanho;
  let preco;
  let precoLitro;
  let barato = 0;
  let maisBarato;

  for(let i=0; i<precos.length; i++) {
    let precoItem = precos[i]
    console.log(precoItem)

    precoLitro = precoItem[0] * 100 / precoItem[1]
    console.log(precoLitro)

    if(barato == 0) {
      barato = precoLitro
    } else if (barato > precoLitro) {
      barato = precoLitro
    } 
  }

    console.log("precos : " + precos[1])
    console.log("barato : " + barato)

    
    maisBarato = precos.filter( item => item[0] == barato)


  console.log(maisBarato)
  console.log(`Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`)
  resultado.innerHTML = `Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`;
}

