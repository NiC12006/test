require.config({
    //设置文件根目录
    // baseUrl:"../lib",

    paths: {

        "jquery": "../lib/jquery-1.12.3",
        "bootstrap":"../lib/bootstrap",
        "underscore": "../lib/underscore",
        "backbone": "../lib/backbone",
        "text": "../lib/text",
        "css":"../lib/css",  
        "router": "./router",
        "homeJs":"./home",
        "leyuanJs":"./leyuan",
        "cardJs":"./card",
        "myJs":"./my"

    }
})

require(["router", "backbone", "jquery"], function (router, backbone, $) {
   
    //监听地址栏变化
    backbone.history.start();
})
