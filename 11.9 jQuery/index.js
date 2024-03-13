$("button").css("color","red");

// $("button").click(function(){
//     $("button").css("background","pink");
// });

//challenge

$(document).keydown(function(event){
    $("h1").text(event.key);
})

//on

// $("h1").on("mouseover",function(){
//     $("h1").css("background","red");
// })
// $("h1").on("mouseout",function(){
//     $("h1").css("background","orange");
// })


//animate
$("button").click(function(){
    $("h1").animate({margin:50});
});

//chain events using .slideup().slidedown()...