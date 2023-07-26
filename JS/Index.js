$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".nav-item").removeClass("active");
        $(this).parent().addClass("active");
    })
    $(".Info-Cards").click(function(){
        $(".Info-Cards").removeClass("active");
        $(this).addClass("active");
    })
})

