function affichelastfact()
{
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;nb:20')
        .then
        (
            function(reponse)
            {
                return reponse.json()
            }
        )
        .then
        (
            function (rep)
        {
            for(i=0;i<20;i++)
            {
                var div20fact=document.getElementById("lastfact");
                var element = document.createElement("p");
                element.innerHTML=rep[i].fact;
                div20fact.appendChild(element);
            }
        }
        )
}

affichelastfact();