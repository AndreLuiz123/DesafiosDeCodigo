function ElementoOrdenado(exemplo = {})
{

    var{
       posicao = 10,
       
       w = 10,

       cor = "blue",

       valor = 20 

    } = exemplo;

    this.posicao = posicao;
    
    this.w = w;

    this.cor = cor;

    this.valor = valor;
    this.altura = valor*-1;

}
ElementoOrdenado.prototype = new ElementoOrdenado({});
ElementoOrdenado.constructor = ElementoOrdenado;

ElementoOrdenado.prototype.desenhar = function(ctx, canvas){
    this.altura = this.valor*-1;
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.posicao*this.w, canvas.height,this.w, this.altura);
    ctx.strokeRect(this.posicao*this.w, canvas.height,this.w, this.altura);
}