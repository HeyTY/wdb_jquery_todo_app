// Check off by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

// Adding a new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	// grabbing todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + todoText+ "</li>")
	}
});


$(".fa-pencil").on("click", function(){
	$("input[type='text']").fadeToggle();
});

