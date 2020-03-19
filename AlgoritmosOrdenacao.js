function AlgoritmosOrdenacao(exemplo = {})
{
}
AlgoritmosOrdenacao.prototype = new AlgoritmosOrdenacao({});
AlgoritmosOrdenacao.constructor = AlgoritmosOrdenacao;

AlgoritmosOrdenacao.prototype.trocarElementos = function(array, elemento1, elemento2){
    array[elemento1].cor = "red";
    array[elemento2].cor = "green";

    var elementoAux = array[elemento1].posicao;
    array[elemento1].posicao = array[elemento2].posicao;
    array[elemento2].posicao = elementoAux;

    var elementoAux = array[elemento1];
    array[elemento1] = array[elemento2];
    array[elemento2] = elementoAux;
    //array[elemento2] = elementoAux;
    //console.log("Trocou!"); 
} 

AlgoritmosOrdenacao.prototype.encontraMaiorTrocaNoFinal = function(elementosOrdenados, quantidadePercorrida){

    var indice = 0;
    //console.log("Procurando maior elemento");
    //console.log(indice+" "+quantidadePercorrida);

    for(var i = 0; i<quantidadePercorrida; i++)
    {
        if(elementosOrdenados[i].valor>elementosOrdenados[indice].valor)
        {
            //elementosOrdenados[indice].cor = "green";
            indice = i;
        } 
    }

    //elementosOrdenados.swap(quantidadePercorrida-1,indice);
    elementosOrdenados[indice].cor = "red";
    elementosOrdenados[quantidadePercorrida-1].cor = "green";
    this.trocarElementos(elementosOrdenados,quantidadePercorrida-1, indice);
    //if(indice!=i)
    //console.log("trocou");
}

AlgoritmosOrdenacao.prototype.bubbleSort = function(elementosOrdenados){
    
    for(var i = 0; i<elementosOrdenados.length; i++)
        this.encontraMaiorTrocaNoFinal(elementosOrdenados, elementosOrdenados.length-i);
       
    //continua = false;

   // this.trocarElemetos(elementosOrdenados[1], elementosOrdenados[0]);
}


AlgoritmosOrdenacao.prototype.bubbleSortAnimation = function(elementosOrdenados, passoAnimacao){

        if(passoAnimacao<elementosOrdenados.length)
        this.encontraMaiorTrocaNoFinal(elementosOrdenados, elementosOrdenados.length-passoAnimacao);
       
    continua = false;

   // this.trocarElemetos(elementosOrdenados[1], elementosOrdenados[0]);
}