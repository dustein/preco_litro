
const latas = document.querySelectorAll(".latas");
const unidades = document.querySelectorAll('.unidade');
const resultado = document.querySelector(".tipos");
const precos = [];



//pop up pega preço
unidades.forEach( item => {
  let valorDoInput = 0;
  item.addEventListener("click", () => {

    valorDoInput = Number(window.prompt(`Preço da unidade ${item.dataset.key}ml :`, "0.00"));

    precoLitro = valorDoInput * 1000 / item.dataset.key
    
    item.style.border = "solid 0.4rem rgb(23, 239, 95)";
    const textoInput = item.querySelector("#input")
    textoInput.innerText = `R$ ${valorDoInput}`
    

    console.log(valorDoInput, precoLitro, item.dataset.key, item.dataset.tipo)

    
    //valida input
    if(typeof(valorDoInput != NaN)) {
      precos.push([valorDoInput, Number(item.dataset.key), precoLitro, item.dataset.tipo])
    } else {
      console.log("Nao eh um numero")
    }
    //------------

    nomeUnidade.style.color = "green"
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
  // let resultado = [...maisBarato]
  console.log("mais barato : ")
  console.log(maisBarato)
  const tamanhoBarato = maisBarato[1];
  const litroBarato = (maisBarato[2]).toFixed(2);
  const tipoBarato = maisBarato[3];
  
  
  console.log(`A ${tipoBarato} de ${tamanhoBarato}ml é a mais barata, saindo a R$${litroBarato} o litro`)

  const resultModal = document.querySelector("#result-modal");
  const resultTipo = document.querySelector("#melhorTipo")
  const resulUnidade = document.querySelector("#melhorUnidade");
  const resultPrecoLitro = document.querySelector("#melhorPrecoLitro");
  resultTipo.innerText = tipoBarato;
  resulUnidade.innerText = tamanhoBarato;
  resultPrecoLitro.innerText = litroBarato;
  resultModal.style.display = "block"
}