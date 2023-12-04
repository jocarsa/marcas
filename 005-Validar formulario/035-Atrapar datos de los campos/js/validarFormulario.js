var campos = document.getElementsByClassName("control")

for(var i = 0;i<campos.length;i++){
    campos[i].onblur = function(){
        console.log("Has salido de un campo")
    }
}