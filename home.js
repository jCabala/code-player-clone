//Main Vars
let onDisplay = {
    "html": true,
    "css": false,
    "js": false,
    "output": true,
}

let numberOnDisplay = 2;
//Initiall


$("#output-code").contents().find("html").html($("#html-code").val());
$(".toggle-button").hover(function(){
    $(this).addClass("highlated-button");
}, function() {
    $(this).removeClass("highlated-button");
})

$(".main-window").height($(window).height() - $("#top-bar").height());
$(".main-window").width($(window).height() - $("#top-bar").height());
$(".initially-hide").hide();
$(".initionally-displayed-button").addClass("clicked-button");

$("iframe").contents().find("style").html(
    "<html><head><style>" + $("#css-code").val() + "</style></head><body>" + $("#html-code").val()
    + "<script>" + $("#js-code").val() + "</scipt></body></html>");


// Displaying code-windows


$(".toggle-button").click(function(e) {
    let thisId = `${e.target.id}`;
    if(onDisplay[thisId] == false){
        $(`#${thisId}-code`).show();
        numberOnDisplay++;
        $(`#${thisId}`).addClass("clicked-button");
    } else {
        $(`#${thisId}-code`).hide(); 
        numberOnDisplay--;
        $(`#${thisId}`).removeClass("clicked-button");
    }
    
    $(".main-window").width(($(window).width() - 50)/numberOnDisplay);
    
    onDisplay[`${thisId}`] = !onDisplay[`${thisId}`];
})

//Updating output

$(".main-window").change(function(){
    $("iframe").contents().find("html").html(
        `<html><head><style type="text/css">` + $("#css-code").val() + "</style></head><body>" + $("#html-code").val()
        + "<script>" + $("#js-code").val() + "</scipt></body></html>");
        
});

