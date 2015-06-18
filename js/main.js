var sliderInt = 1;
var sliderNext = 2;
$(function(){
    $(".section_animation>div#1").fadeIn(1000);
    startSlider();
    playSlider();
    playComents();
    $(".section_link").click(function() {
        var sectionid = $(this).attr('data-section'),
        sectionHeight =  $("#"+sectionid).height() / 2,
        win = $( window ).height() / 2 - sectionHeight,
        docImg = $("#img_biografia").height();
            if(sectionid === "section_2"){
                $('html, body').animate({
                    scrollTop: $("#"+sectionid).offset().top - win -10
                }, 900);
            }
            else if (sectionid === "section_5"){
                $('html, body').animate({
                    scrollTop: $("#"+sectionid).offset().top - win - docImg
                }, 900);
            } 
            else if (sectionid === "section_7"){
                $('html, body').animate({
                    scrollTop: $("#"+sectionid).offset().top - win - 130
                }, 900); 
            }
            else {
                $('html, body').animate({
                    scrollTop: $("#"+sectionid).offset().top - win - 70
                }, 900);
            }
        return false
    });
});
function startSlider() {
    count = $(".section_animation>div").size();
    loop = setInterval(function() {
        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1
        }
        $(".section_animation > div").fadeOut(600);
        $(".section_animation > div#" + sliderNext).fadeIn(600);
        sliderInt = sliderNext;
        sliderNext = sliderNext + 1
    }, 4000)
}
function prev() {
    var newSlide = sliderInt - 1;
    showSlide(newSlide)
}
function next() {
    var newSlide = sliderInt + 1;
    showSlide(newSlide)
}
function stopLoop() {
    window.clearInterval(loop)
}
function showSlide(id) {
    stopLoop();
    if (id > count) {
        id = 1
    } else if (id < 1) {
        id = count
    }
    $(".section_animation > div").fadeOut(600);
    $(".section_animation > div#" + id).fadeIn(600);
    sliderInt = id;
    sliderNext = id + 1
}
$(".section_animation>div").hover(function() {
    stopLoop()
}, function() {
    startSlider()
});
function playSlider(){
    var ask = 5,
    answ = 5,
    $selectorAsk = $('p[class=preguntas]'),
    $selectorAnsw = $('p[class=respuestas]'),
    interval = 15000;
    setInterval(function(){
        $($selectorAsk[ask]).fadeOut(1500);
        $($selectorAnsw[answ]).fadeOut(1500);
        if(ask === 0 && answ === 0){
            ask = 6;
            answ = 6;  
        }
        ask --;
        answ --;
        $($selectorAsk[ask]).fadeIn(1500);
        $($selectorAnsw[answ]).fadeIn(1500);
       
    }, interval);         
};
// SEction Comentarios
function playComents(){
    var interval = 15000;
    var foo = 1;
       setInterval(function(){
            var interval = 3000;
            $('#comentario_'+foo).fadeOut(500);  
            if(foo === 3){
                foo = 0;
            }   
            foo ++;
            $('#comentario_'+foo).fadeIn(500); 
        }, interval);   
};





