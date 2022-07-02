$(".decisionpuerta1").hide();
$(".decisionpuerta2").hide();
$(".atacazombie").hide();
$(".huyedezombie").hide();
$(".buscar").hide();
$(".refugio").hide();


$(".puerta1").click(function(){
    $(".decisión1").hide();
    $(".decisionpuerta1").show();
})

$(".puerta2").click(function(){
    $(".decisión1").hide();
    $(".decisionpuerta2").show();
})

$(".atacar").click(function(){
    $(".decisionpuerta1").hide();
    $(".atacazombie").show();
})

$(".correr").click(function(){
    $(".decisionpuerta1").hide();
    $(".huyedezombie").show();
})

$(".siguebuscando").click(function(){
    $(".decisionpuerta2").hide();
    $(".buscar").show();
})

$(".iraunrefugio").click(function(){
    $(".decisionpuerta2").hide();
    $(".refugio").show();
})

$(".inicio").click(function(){
    $(".atacazombie").hide();
    $(".decisión1").show();
})

$(".inicio").click(function(){
    $(".huyedezombie").hide();
    $(".decisión1").show();
})

$(".inicio").click(function(){
    $(".buscar").hide();
    $(".decisión1").show();
})

$(".inicio").click(function(){
    $(".refugio").hide();
    $(".decisión1").show();
})
