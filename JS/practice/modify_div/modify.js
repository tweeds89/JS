var elements = document.getElementsByName('select');
var div = document.getElementById('modify');

function set(){
     
    for (var i = 0; i < elements.length; i++){
        
        var attr = elements[i].getAttribute('id');
        var value = elements[i].value;
               
        div.style[attr] = value;
    }
}

document.getElementById('set').addEventListener('click', set);