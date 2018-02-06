document.addEventListener('DOMContentLoaded', function(){
        
var checkboxes = document.getElementsByName('additives'); 
var price = document.getElementById("price");
var toggle = document.getElementById("all");  
var clear = document.getElementById("clear");    
var button = document.getElementById('btn');

//zaznaczenie wszystkich dodatków    
function check() {
  
     for(var i=0; i < checkboxes.length; i++) {
   
        checkboxes[i].checked = true;
        clear.checked = false;       
     }
     get_total();
}

//odznaczenie wszystkich dodatków    
function remove() {
   
   var all = document.getElementById("all");
    
   if (clear.checked=true){
    
      for(var i=0; i< checkboxes.length;i++) {
   
         checkboxes[i].checked = false;
         all.checked = false;
      }      
   }
    get_total();
}

//podliczenie całkowitej kwoty    
function get_total() {
		
   var sum = 0;
        
   for (i=0;i<checkboxes.length;i++) {
            
      if (checkboxes[i].checked) {
		  	sum = sum + parseFloat(checkboxes[i].value);       
      }
   }
    price.innerHTML = sum;
   
    button.onclick = function(){
        alert('Do zapłaty za dodatki: ' + sum + 'zł');
    };
    return sum;
}
 
    
    
    for(var i = 0; i < checkboxes.length; i++){
        
        checkboxes[i].addEventListener('change', get_total);     
    }
         
      toggle.addEventListener('click', check);   
      clear.addEventListener('click', remove); 
});