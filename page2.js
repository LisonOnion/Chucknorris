function tenfacts()
{
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;nb:10')    

        .then
        (
            function(response) 
            {
                return response.json()        
            }    
        )  
        .then 
        (
            function(rep)
            {
                console.log(rep);
                for(i=0;i<10;i++)
                { 
                var div=document.getElementById("divfact");
                var element = document.createElement("p");
                element.innerHTML=rep[i].fact;
                div.appendChild(element);
                }

            }
        )
}

tenfacts();