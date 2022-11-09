//scrool da pag

function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"});
}

document.querySelector("#home").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#inicio");
});
document.querySelector("#sobre").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#diferencial");
});
document.querySelector("#alunos").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#card-aluno");
});
document.querySelector("#local").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#localizacao");
});

//Slide
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},4000);

function nextImage(){
    count++;
    if(count > 4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;

}