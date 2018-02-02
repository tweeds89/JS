document.addEventListener('DOMContentLoaded', function(){

  function changeCounter(){
     var counter = document.getElementById('counter');
     var count = this.value.length;
     counter.innerHTML = count + "/100";
    
  }

  function changeColor(){
     var count = this.value.length;
     var green = 33;
     var orange = 66;
    
     if (count <= green){
        this.style.color= "green";
        
     }else if
        (count > green && count <=orange){
        this.style.color= "yellow";
        
     }else{
        this.style.color= "red";
     }
   }
   
     var textarea = document.getElementById('textarea');
    
     textarea.addEventListener('keyup', changeCounter);
     textarea.addEventListener('keydown', changeCounter);
     textarea.addEventListener('keyup', changeColor);
     textarea.addEventListener('keydown', changeColor);
});