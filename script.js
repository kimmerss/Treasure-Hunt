$("#secretimg").hide();
$(".yay").hide();

$("button").dblclick(function(){
    $("#clue").append("Now hover here...");
});
$("#clue").hover(function(){
    $("#secretimg").show();
    $("#clue").text("Click on the unicorn's sunglasses");
});
$("#secretimg").click(function(){
    $("#clue").text("In order to receive your next clue you must click on the little boy");
});
$("#gold").click(function(){
    $("body").css("background", "#FF7F50");
});
$("h1").dblclick(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".yay").show();
});