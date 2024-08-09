let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let botaoAdicionarProduto = document.querySelector("#btn-adicionar-produto-01");
let inputQuantidadeProduto = document.querySelector("#quantidade-produto-01");
let botaoSubtrairProduto = document.querySelector("#btn-subtrair-produto-01");


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarInterface(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  inputQuantidadeProduto.value = subtotalInfo.quantidade;
}
atualizarInterface();

function incrementarQuantidadeProduto(){
  subtotalInfo.quantidade++;
  subtotalInfo.valor += 11.66;
  atualizarInterface();
}
botaoAdicionarProduto.addEventListener("click", incrementarQuantidadeProduto);

function decrementarQuantidadeProduto(){
  if(subtotalInfo.quantidade > 0){
    subtotalInfo.quantidade--;
    subtotalInfo.valor -= 11.66;
    atualizarInterface();
  }
}
botaoSubtrairProduto.addEventListener("click", decrementarQuantidadeProduto);