
const latas = document.querySelectorAll(".latas");
const unidades = document.querySelectorAll('.unidade');
const resultado = document.querySelector(".tipos");
const precos = [];



//pop up pega preço
unidades.forEach( item => {
  let valorDoInput = 0;
  item.addEventListener("click", () => {

    valorDoInput = Number(window.prompt(`Preço da unidade ${item.dataset.key}ml :`, "0.00"))
    precoLitro = valorDoInput * 1000 / item.dataset.key
    
    console.log(valorDoInput, precoLitro, item.dataset.key)

    
    //valida input
    if(typeof(valorDoInput != NaN)) {
      precos.push([valorDoInput, Number(item.dataset.key), precoLitro])
    } else {
      console.log("Nao eh um numero")
    }
    //------------

  })
})
// -----------------


function calcular() {

  let barato = 0;
  let maisBarato;

  console.log("Preços: ")
  console.log(precos)

  for(let i=0; i<precos.length; i++) {

    if(barato == 0) {
      barato = precos[i][2]
      maisBarato = precos[i]
    } else if (barato > precos[i][2]) {
      maisBarato = precos[i]
    }    

    console.log(precos[i])
    
  }
  let resultado = [...maisBarato]
  console.log("mais barato : ")
  console.log(maisBarato)
  
  
  console.log(`A unidade de ${maisBarato[1]}ml é a mais barata, saindo a R$${maisBarato[2]} por litro`)

  const resultModal = document.querySelector("#result-modal");
  const resulUnidade = document.querySelector("#melhorUnidade");
  const resultPrecoLitro = document.querySelector("#melhorPrecoLitro");
  resulUnidade.innerText = maisBarato[1];
  resultPrecoLitro.innerText = maisBarato[2];
  resultModal.style.display = "block"
}