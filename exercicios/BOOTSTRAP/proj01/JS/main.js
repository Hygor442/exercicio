jQuery(document).ready(function($){
    //Fixed header
    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $('#header').addClass('active');
        } else{
            $('#header').removeClass('active');
        }
    };

    //filter serviços
    let btns = $("#serviços .button-group button");

    btns.click(function(e){
        $("#serviços .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#serviços .grid").isotope({
            filter: selector
        });
    });

    $(window).on("load", function(){
        $("#serviços .grid").isotope({
            filter: '*'
        });    
    })

    //bluur
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled:true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%"
        },
    });
});
