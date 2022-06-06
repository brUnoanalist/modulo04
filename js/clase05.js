var url = new URL ("pokemon"," https://pokeapi.co/api/v2/")
url.searchParams.append("limit","100")
url.searchParams.append("offset","0")
console.log(url)
var request = new XMLHttpRequest();

request.addEventListener("load",function(e){
    console.log("listo!")
    console.log("status code "+ request.status)
    console.log("status "+ request.status)
    console.log("response"+ request.response)
    console.log("texto response"+ request.responseText)
})


//implementtar el evento para cuando cmbie el estado del requesst
request.onreadystatechange=function(){
    if(request.readyState==3){
        console.log("loading");

    }else if (request.readyState==4){
        console.log("finalizado")
        console.log("response"+ request.response)
    }
}
request.open("GET","https://dog.ceo/api/breeds/image/random",true)
request.send();