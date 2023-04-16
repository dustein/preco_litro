
const latas = document.querySelectorAll(".latas");
const unidades = document.querySelectorAll('.unidade');
const resultado = document.querySelector(".tipos");
const precos = [];



//pop up pega preço
unidades.forEach( item => {
  let valorDoInput = 0;
  item.addEventListener("click", () => {

    valorDoInput = Number(window.prompt(`Preço da unidade ${item.dataset.key}ml`, "0.00"))

    console.log(valorDoInput)

    
    //valida input
    if(typeof(valorDoInput != NaN)) {
      console.log("gravando push")
      precos.push([valorDoInput, Number(item.dataset.key)])
    }
    //------------

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
    console.log(precos[i])
    //   let precoItem = precos[i]

  //   precoLitro = precoItem[0] * 100 / precoItem[1]

  //   if(barato == 0) {
  //     barato = precoLitro
  //   } else if (barato > precoLitro) {
  //     barato = precoLitro
  //   } 
  // }

    
  //   maisBarato = precos.filter( item => item[0] == barato)


  // console.log(`Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`)
  // resultado.innerHTML = `Tamaho mais barato: ${maisBarato[0][1]}. R$ ${(maisBarato[0][0]).toFixed(2)} por litro.`;
}
}