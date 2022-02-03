window.onload = function(){
    var stage = document.getElementById('stage'); // Buscando o documento "stage"
    var ctx = stage.getContext("2d"); // "ctx"  = contexto
    document.addEventListener("keydown", KeyPush)

    setInterval(game,60); // define um intervalo para cada funçao ser chamada varias vezes, com esse intervalo de "60"


    const vel = 1; // velocidade da cobrinha,quantas casas ela anda quando o game for atualizado

    var vx = vy = 0; // vx = velocidade x / vy = velocidaded y
    var px = 10 // ponto x
    var py = 15; // ponto y 
    var lp = 20; // largura
    var qp = 20; // quantidade de peças 
    var ax=ay=15; //  posiçao da maça

    var trail = []; // trail = rastro da cobra
    tail = 5; // tail =  rabo
    
    
    function game(){
        px += vx;  // ponto x (maior igual) a velocidade x
        py += vy;  // ponto y (maior igual) a velocidade y
        if(px < 0) {  // se o (ponto x) for menor que 0
            px = qp-1; // ponto x é igual a quantidade de peças com decremento
        }
        if(px > qp-1){ // se o (ponto x) for "maior" que quantidade de peças com decremento
            px = 0; // ponto x igual a "0" 
        }
        if(py < 0 ){  // =======================//================================//
            py = qp-1; // ============================//=========================//
        }
        if(py > qp-1){ // ===========================//========================//
            py = 0; //=============================// =================//=======//
        }

        ctx.fillStyle = "purple"; // Aqui é a cor de fundo do game
        ctx.fillRect(0,0, stage.width, stage.height); // Comando para pintar a cor de fundo

        ctx.fillStyle = "red"; // Pintura da maçã
        ctx.fillRect(ax*lp, ay*lp, lp,lp);
           
        ctx.fillStyle = "green"; // cor da cobra e seu rastro 
        for(var i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*lp, trail[i].y*lp, lp,lp);
            if(trail[i].x == px && trail[i].y == py)
            {
                vx = vy=0;
            }

        }
        trail.push({x:px,y:py})
        while (trail.length > tail){
            trail.shift();
        }
        if (ax == px && ay == py){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);

        }


    }
    
    function KeyPush(event){      // Funçao tecla com parametro "event"
        switch (event.keyCode){  // Chave (event.codigochave)
            case 37: //left  // caso 
                 vx = -vel;  
                 vy = 0;
                 break;  // pausa
            case 38: //up
                 vx = 0;
                 vy = -vel;
                 break;  // pausa
            case 39: // right
                 vx = vel;
                 vy = 0;
                 break; // pausa
            case 40: //down
                 vx = 0;
                 vy = vel;
                 break; // pausa
            default:           
             
                  
        }
    }
}





        

