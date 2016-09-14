define(["text!../view/card.html","css!../css/card.css"], function(content) {
	// var a=1;
    function cardJs() {
    	
        $("#content").html(content);
    }
    return {
       cardJs: cardJs
      
    }
})
