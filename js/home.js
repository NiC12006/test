define(["text!../view/home.html", "css!../css/home.css","jquery","bootstrap"], function(content) {
    // var a=1;
    function homeJs() {

        $("#content").html(content);
    };

    function data() {
        $.ajax({
            type: "get",
            url: "http://duif.applinzi.com/leyuan/home_data.php",
            async: true,
            success: function(data) {
             console.log(data);
             var json=JSON.parse(data);
             setData(json);
            }
        })
        function setData(arr){
        	//
        	var obj=arr.slider;
        	for (var i = 0;i<obj.length; i++) {
        	    $("#myCarousel img").eq(i).attr("src",obj[i].img);
        	};
        	if($("#myCarousel").length){
        		console.log(2333);
        		$('#myCarousel').carousel({
					interval: 2000
				})
        	}
        	//
        	var obj2=arr.arealist;
        	for (var i = 0; i < obj2.length; i++) {
        		 $("#section-top img").eq(i).attr("src",obj2[i].img);
                
        	};
        	//
        	var obj3=arr.reclist;
        	for (var i = 0; i < obj3.length; i++) {
        		 // $("#section-top img").eq(i).attr("src",obj3[i].img);
                
        	};
        	  
        }

    };
    return {
        homeJs: homeJs,
        data:data
    }
})
