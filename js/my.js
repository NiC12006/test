define(["text!../view/my.html","css!../css/my.css"], function(content) {
	// var a=1;
    function myJs() {
    	
        $("#content").html(content);
    }
    return {
        myJs: myJs
      
    }
})
