'use strict'

function adicionarProduto() {
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const lista = document.getElementById('lista')

    const codigospan = document.createElement('codigo')
    const produtospan = document.createElement('span')
    const quantidadespan = document.createElement('span')

    codigospan.textContent = codigo.value 
    codigospan.className = 'bg-blue-200 px-8 py-2'

    produtospan.textContent = produto.value
    produtospan.className = 'bg-blue-200 px-8 py-2'

    quantidadespan.textContent = quantidade.value
    quantidadespan.className = 'bg-blue-200 px-8 py-2'

    lista.appendChild(codigospan)
    lista.appendChild(produtospan)
    lista.appendChild(quantidadespan)



}