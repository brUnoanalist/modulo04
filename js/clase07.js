$("h1").text("Nuevo j query")

$("p").text("texto cambiado del lorem")

$("#segundo p").text("texto segundo")
$("#segundo p").css("color","black")
$("#titulo2").css("color","red");

$("#titulo2").click(function(){
    $("#titulo2").css("color","lightgreen")
})

$("#lista").children().css("background-color","yellow")
$("#segundo").children().css("background-color","yellow")
$("li").even().css("background-color","blue")


