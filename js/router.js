define(["backbone"], function(backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            "":"homeF",
            "home": "homeF",
            "leyuan": "leyuanF",
            "card": "cardF",
            "my": "myF"
        },
        homeF: function() {
            require(["homeJs"], function(c) {
                console.log(1111);
                c.homeJs();
                 c.data();

            })
        },
        leyuanF: function() {
            require(["leyuanJs"], function(c) {
                console.log(2222)
                c.leyuanJs();
            })
        },
        cardF: function() {
            require(["cardJs"], function(c) {
                console.log(3333)
                c.cardJs();
            })
        },
        myF: function() {
            require(["myJs"], function(c) {
                console.log(4444)
                c.myJs();
            })
        }

    });
    var router = new Router();
})
