
     function insert(num){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero +num;
    }
    function clean()
    {
        document.getElementById('resultado').innerHTML = "";
    }
    function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
     }
    function calcular()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML  = eval(resultado);
        }
        else 
        {
            document.getElementById('resultado').innerHTML  = "nada para calcular";
        }
    }

    function Bhaskara(){
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;
        delta = eval(perseInt(Math,pow(b, 2) - 4*a*c));

        x1 = eval(parseInt(( -b + Math.sqrt(delta)) /2*a));
        x2 = eval(parseInt(( -b + Math.sqrt(delta)) /2*a));

        document.getElementById("resultado-x1").innerHTML = X1;
        document.getElementById("resultado-x2").innerHTML = X2;
      }

      function Bhaskara(){
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;
        
        delta = eval(parseFloat((b * b) -4 * a * c));
        document.getElementById("resultado-bhaskara1").innerHTML = "delta = " + delta;
      
        if(delta < 0){
        document.getElementById("resultado-bhaskara2").innerHTML = "O delta é negativo. Equação não possui raizes reais.";

        }else if(delta == 0){
          x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
          document.getElementById("resultado-bhaskara2").innerHTML = "X1 e X2 = " + x1;
            
        }else{
          x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
          x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
          document.getElementById("resultado-bhaskara2").innerHTML = "X1 = " + x1;
          document.getElementById("resultado-bhaskara3").innerHTML = "X2 = " + x2;
          
          
        }

       
        document.getElementById("resultado-bhaskara2").innerHTML = resultado1;
        document.getElementById("resultado-bhaskara3").innerHTML = resultado2;

      }
   