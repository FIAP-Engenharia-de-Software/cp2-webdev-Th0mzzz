// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  // TODO: implementar função
  formattedNumber = Number(valor)
  if(isNaN(formattedNumber)){
    return "Valor inválido"
  }else{
    return formattedNumber
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };