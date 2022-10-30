$(document).ready(function(){
	var fontSize = 16;

	/* Increase Text */
	$("#increase-text").click(function(){

		if(fontSize >= 24) {
			return false;
		 }else {
		 fontSize = fontSize + 2;
		 $(".main-content").css("font-size", fontSize + "px");

		 console.log('+ ' + fontSize);
		 }
	});

	/* Decrease Text */
	$("#decrease-text").click(function(){

		if(fontSize <= 10) {
		  return false;
		 }else {
			fontSize = fontSize - 2;
		 $(".main-content").css("font-size", fontSize + "px");
		 console.log('+ ' + fontSize);
		 }
	});

	/* Default */
	$("#normal-text").click(function(){
		var fontSize = 16;

		$(".main-content").css("font-size", fontSize + "px");
		$('body').removeClass("contrast-white");
        $('.accordion-item').removeClass("contrast-white");
		$('body').removeClass("contrast-black");
        $('.accordion-item').removeClass("bg-dark");
	});

	/* Contrast Black */
	$("#contrast-b").click(function(){
		$('body').addClass("contrast-black");
		$('body').removeClass("contrast-white");
        $('.accordion-item').addClass("bg-dark");
		$('.accordion-item').removeClass("contrast-white");
	});

	/* Contrast White */
	$("#contrast-w").click(function(){
		$('body').addClass("contrast-white");
		$('body').removeClass("contrast-black");
        $('.accordion-item').addClass("contrast-white");
		$('.accordion-item').removeClass("bg-dark");
	});

    /* Text to speech */
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    var $variable = $('.content').text(); 
    $("#talk").click(()=>{
        let utterance = new SpeechSynthesisUtterance($variable);
        speechSynthesis.speak(utterance);
        console.log("talk");
    })
    $("#pause").click(() =>{
        speechSynthesis.pause();
        console.log("pause");
    })
    $("#resume").click(() =>{
        speechSynthesis.resume();
        console.log("resume");
    })
    $("#cancel").click(() =>{
        speechSynthesis.cancel();
        console.log("cancel");
    })
});