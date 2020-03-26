function AlgoritmosOrdenacao(exemplo = {})
{
}
AlgoritmosOrdenacao.prototype = new AlgoritmosOrdenacao({});
AlgoritmosOrdenacao.constructor = AlgoritmosOrdenacao;

AlgoritmosOrdenacao.prototype.trocarElementos = function(array, elemento1, elemento2){
    //array[elemento1].cor = "red";
    //array[elemento2].cor = "green";

    var elementoAux = array[elemento1].posicao;
    array[elemento1].posicao = array[elemento2].posicao;
    array[elemento2].posicao = elementoAux;

    var elementoAux = array[elemento1];
    array[elemento1] = array[elemento2];
    array[elemento2] = elementoAux;
    //array[elemento2] = elementoAux;
    //console.log("Trocou!"); 
} 

//Bubble Sort
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
       
    //continua = false;

   // this.trocarElemetos(elementosOrdenados[1], elementosOrdenados[0]);
}
//Bubble Sort

//Insertion Sort
AlgoritmosOrdenacao.prototype.inserirElemento = function(elementosOrdenados, elementoInserido){

    while(elementoInserido>=1 && elementosOrdenados[elementoInserido].valor < elementosOrdenados[elementoInserido-1].valor){
        this.trocarElementos(elementosOrdenados,elementoInserido,elementoInserido-1);
        elementoInserido--;
    }    

}

AlgoritmosOrdenacao.prototype.insertionSort = function(elementosOrdenados){

    for(var i = 0; i<elementosOrdenados.length; i++)
    this.inserirElemento(elementosOrdenados, i);

}

AlgoritmosOrdenacao.prototype.insertionSortAnimation = function(elementosOrdenados, passoAnimacao){

    if(passoAnimacao<elementosOrdenados.length)
    this.inserirElemento(elementosOrdenados, passoAnimacao);

}
//Insertion Sort

//Merge Sort

/*
AlgoritmosOrdenacao.prototype.divideArray = function(elementosOrdenados, pontoInicial, pontoFinal, debug){
    
    var novoPontoInicial1, novoPontoFinal1;
    var novoPontoInicial2, novoPontoFinal2;
    var diferenca;
    diferenca = (pontoFinal - pontoInicial)/2;
    
    
    //Primeira Metade
    novoPontoInicial1 = Math.floor(pontoInicial);
    novoPontoFinal1 = Math.floor(pontoFinal/2)
    elementosOrdenados[novoPontoInicial1].cor = "yellow";
    elementosOrdenados[novoPontoFinal1].cor = "yellow";     
    //Segunda Metade
    novoPontoInicial2= Math.floor(pontoFinal - diferenca + 1);
    novoPontoFinal2 = Math.floor(pontoFinal);
    elementosOrdenados[novoPontoInicial2].cor = "purple";
    elementosOrdenados[novoPontoFinal2].cor = "purple"; 
    debug++;
    
    if(pontoFinal != pontoInicial+1 && pontoFinal!=pontoInicial)
    {
        this.divideArray(elementosOrdenados, novoPontoInicial1, novoPontoFinal1,debug);
        //console.log("Aqui que deu problema");
        this.divideArray(elementosOrdenados, novoPontoInicial2, novoPontoFinal2,debug);
    }
    
}*/

AlgoritmosOrdenacao.prototype.reuneArray = function(array,inicio1,fim1,inicio2,fim2){

    var i=inicio1, j=inicio2;
    var arrayAux = [];

    while(i<=fim1 && j<=fim2)
    {
        if(array[i].valor<array[j].valor)
        {
            arrayAux.push(array[i].valor);
            i++;
        }else
        {
            arrayAux.push(array[j].valor);
            j++;
        }
    }

    while(i<=fim1)
    {
        arrayAux.push(array[i].valor);
        i++;
    }

    while(j<=fim2)
    {
        arrayAux.push(array[j].valor);
        j++;
    }
    //console.log(arrayAux)

    
    for(var c=0; c<arrayAux.length; c++)
    {
        //this.trocarElementos(array,arrayAux[c],inicio1+c);
        //console.log("Antes: "+c+" "+arrayAux[c]);
        array[c+inicio1].valor = arrayAux[c];
        //console.log("Depois: "+c+" "+arrayAux[c].valor+" "+array[c].valor);
    }

}

AlgoritmosOrdenacao.prototype.mergeAux = function(array, inicio, fim, debug)
{
    //console.log(fim);
    var novaCor = "red";
    array[Math.floor(inicio)].cor = novaCor;
    array[Math.floor(fim)].cor = novaCor;
    
    var meio = Math.floor((inicio+fim)/2);
    //debug++;
    console.log("Tam: "+(-inicio+fim));
    if(inicio < fim)
    {
       // var meio = Math.floor((inicio+fim)/2);
        this.mergeAux(array, inicio, meio,0);
        this.mergeAux(array, meio+1, fim,0);
        this.reuneArray(array,inicio,meio,meio+1,fim);
    }
    else
    {
        var novaCor2 = "purple";
        array[Math.floor(inicio)].cor = novaCor;
        array[Math.floor(inicio)].cor = novaCor2;
    }
       // this.reuneArray(array,inicio,meio,meio+1,fim);

    //this.reuneArray(array,0,meio,meio+1,fim);

}

AlgoritmosOrdenacao.prototype.mergeSort = function(elementosOrdenados){
    //console.log(elementosOrdenados.length-1);
    this.mergeAux(elementosOrdenados,0,elementosOrdenados.length-1, 0);
}

AlgoritmosOrdenacao.prototype.mergeSortAnimation = function(elementosOrdenados, passoAnimacao){
    //console.log(elementosOrdenados.length-1);
    this.mergeAux(elementosOrdenados,0,elementosOrdenados.length-1, passoAnimacao);
}