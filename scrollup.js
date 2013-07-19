// JavaScript Document
$(document).ready(function(){
var ScrollUpInit = $('body').hasClass('scrollUp');

 // Initiate  scrollUp.
if(ScrollUpInit) {
	var scrollTab = $('<div class="scroll-tab">scroll tab</div>');
	$('body').append(scrollTab);
	
	// Show scrollTab.
	$(window).scroll(function(){
		var scrollOffset = $('body').scrollTop();
		
		if(scrollOffset < 100){
			scrollTab.slideUp();
		}
		else {
			scrollTab.slideDown();
		}
	});
	
	scrollTab.on("click", function() {
		$("body").animate({ scrollTop: 0 });
	});
}
	
});
