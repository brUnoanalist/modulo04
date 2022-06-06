
const urlBase="https://reqres.in/api/";
async function leerUsiario(){
    let respuesta = await fetch("https://reqres.in/api/users/10")
    console.log(respuesta)
    
    if (respuesta.ok){
        let datos = await respuesta.json()
        console.log(datos);
    
    }else{
        console.log("error" );
    }
}
//leerUsiario()
async function leerUsiario(user){
    urlFinal=urlBase+"users/"+user;
    let respuesta = await fetch(urlFinal);
    console.log(respuesta)
    
    if (respuesta.ok){
        let datos = await respuesta.json()
        console.log(datos);
    
    }else{
        console.log("error" )
}}
//leerUsiario(10)

async function leerUsiario(id){
    urlFinal=urlBase+"unknow/"+id;
    let respuesta = await fetch(urlFinal);
    ///console.log(respuesta)
    
    if (respuesta.ok){
        let datos = await respuesta.json()
        console.log(datos);
    
    }else{
        console.log("error" )
}}
///leerUsiario(10)

async function actualizarUser(user){
    let urlFinal=urlBase+"users/"+user.id;
    let respuesta = await fetch(urlFinal,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user),

    })
    let datos=await respuesta.json();
    console.log(datos)

}
let user1={
    id:8,
    name:"Bruno",
    Job:"DEV"
}
console.log("usuario original:");
leerUsiario(10);
console.log("usuario modificado:");
actualizarUser(user1)