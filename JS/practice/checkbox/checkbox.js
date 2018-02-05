var checkboxes = document.getElementsByName('additives');

function toggle(source) {
  
   var clear = document.getElementById("clear"); 
    
     for(var i=0; i < checkboxes.length; i++) {
   
        checkboxes[i].checked = true;
        clear.checked = false;
     }
}

function uncheck() {
   
   var all = document.getElementById("all");
    
   if (clear.checked=true){
    
      for(var i=0; i< checkboxes.length;i++) {
   
         checkboxes[i].checked = false;
         all.checked = false;
      }
       
   }
}

document.addEventListener('DOMContentLoaded', function(){
  
   var checkboxes = document.getElementsByName('additives'); 
   var price = document.getElementById("price");
        
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].onchange = function(){
       
          get_total();
        }
    }
    function get_total() {
		
		var sum = 0;
        
		for (i=0;i<checkboxes.length;i++) {
            
		  if (checkboxes[i].checked) {
		  	sum = sum + parseFloat(checkboxes[i].value);
		  }
		}
		price.innerHTML = sum;
	}
});