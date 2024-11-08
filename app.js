 window.onload=() =>{
 
 function toUpperCase() {
            
            let element=document.getElementById("texto").value;
            document.getElementById("texto").value= element.toUpperCase();
        }
        function toUpperCasePropioElemento(element) {
           element.value=element.value,toUpperCase();
      }
      let element=document.getElementById("texto");

    /*   manera mala  chapuza element.addEventListener("keyup",function() {
        toUpperCase();*/
        element.addEventListener("keyup",(event) =>{
          event.target.value=event.target.value.toUpperCase();
      });
    }   
  
