var clique= document.getElementById("bouton");
console.log (clique)
clique.addEventListener("click",function(){unefact()});
function unefact(){
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;nb:1')    

.then
(function(response) 
{
    return response.json()        
}    
)  
.then (function(rep)
{
    console.log(rep);
    var div=document.getElementById("divv");
    div.innerHTML=rep[0].fact;
}
)
}