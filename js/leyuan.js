define(["text!../view/leyuan.html","css!../css/leyuan.css"], function(content) {
	// var a=1;
    function leyuanJs() {
    	
        $("#content").html(content);
    }
    return {
        leyuanJs: leyuanJs
      
    }
})
