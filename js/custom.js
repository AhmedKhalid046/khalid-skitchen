// Sticky Navber Function =====================
let navbar = document.getElementById('navigation');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    navbar.classList.add("scrollnav");
    speed = 2.05;
  } else if (window.scrollY <= 100) {
    navbar.classList.remove("scrollnav");
  }
});

//slick slider================
$(document).ready(function(){
  $('.test').slick({
    dots: false,
    infinite: true,
    // speed: 00,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade:false,
    autoplay:true,
    autoplaySpeed:300,
  })
});



/* jslint browser: true*/
/*global $*/

// https://github.com/jasonmoo/t.js
(function () {
    function c(a) { this.t = a } function l(a, b) { for (var e = b.split("."); e.length;) { if (!(e[0] in a)) return !1; a = a[e.shift()] } return a } function d(a, b) {
        return a.replace(h, function (e, a, i, f, c, h, k, m) { var f = l(b, f), j = "", g; if (!f) return "!" == i ? d(c, b) : k ? d(m, b) : ""; if (!i) return d(h, b); if ("@" == i) { e = b._key; a = b._val; for (g in f) f.hasOwnProperty(g) && (b._key = g, b._val = f[g], j += d(c, b)); b._key = e; b._val = a; return j } }).replace(k, function (a, c, d) {
            return (a = l(b, d)) || 0 === a ? "%" == c ? (new Option(a)).innerHTML.replace(/"/g, "&quot;") :
                a : ""
        })
    } var h = /\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g, k = /\{\{([=%])(.+?)\}\}/g; c.prototype.render = function (a) { return d(this.t, a) }; window.t = c
})();
// end of 't';

Number.prototype.to_$ = function () {
    return "$" + parseFloat(this).toFixed(2);
};
String.prototype.strip$ = function () {
    return this.split("$")[1];
};

var app = {

    shipping: 5.00,
    products: [
        {
            "name": "tomato",
            "price": "1.95",
            "img": "https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
            "desc": "Red as blood,good for heart ...Purely organic."
        },
        {
            "name": "Salad",
            "price": "10.99",
            "img": "https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDUwfHx2ZWdldGFibGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "desc": "Salad filled with cream and spices"
        },
        {
            "name": "Mixed Veggiesss",
            "price": "40.00",
            "img": "https://images.unsplash.com/photo-1590301155505-471f05cd02db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDc1fHx2ZWdldGFibGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "desc": "You got It, !"
        },
        {
            "name": "Avacado Smoothy",
            "img": "https://images.unsplash.com/photo-1543648973-1eb94629e7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZXMlMjBqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            "price": "12.35",
            "desc": "I Bet your gonna oredr this again!"
        }
    ],

    removeProduct: function () {
        "use strict";

        var item = $(this).closest(".shopping-cart--list-item");

        item.addClass("closing");
        window.setTimeout(function () {
            item.remove();
            app.updateTotals();
        }, 500); // Timeout for css animation
    },

    addProduct: function () {
        "use strict";

        var qtyCtr = $(this).prev(".product-qty"),
            quantity = parseInt(qtyCtr.html(), 10) + 1;

        app.updateProductSubtotal(this, quantity);
    },

    subtractProduct: function () {
        "use strict";

        var qtyCtr = $(this).next(".product-qty"),
            num = parseInt(qtyCtr.html(), 10) - 1,
            quantity = num <= 0 ? 0 : num;

        app.updateProductSubtotal(this, quantity);
    },

    updateProductSubtotal: function (context, quantity) {
        "use strict";

        var ctr = $(context).closest(".product-modifiers"),
            productQtyCtr = ctr.find(".product-qty"),
            productPrice = parseFloat(ctr.data("product-price")),
            subtotalCtr = ctr.find(".product-total-price"),
            subtotalPrice = quantity * productPrice;

        productQtyCtr.html(quantity);
        subtotalCtr.html(subtotalPrice.to_$());

        app.updateTotals();
    },

    updateTotals: function () {
        "use strict";

        var products = $(".shopping-cart--list-item"),
            subtotal = 0,
            shipping;

        for (var i = 0; i < products.length; i += 1) {
            subtotal += parseFloat($(products[i]).find(".product-total-price").html().strip$());
        }

        shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

        $("#subtotalCtr").find(".cart-totals-value").html(subtotal.to_$());
        $("#taxesCtr").find(".cart-totals-value").html((subtotal * 0.06).to_$());
        $("#totalCtr").find(".cart-totals-value").html((subtotal * 1.06 + shipping).to_$());
        $("#shippingCtr").find(".cart-totals-value").html(shipping.to_$());
    },

    attachEvents: function () {
        "use strict";

        $(".product-remove").on("click", app.removeProduct);
        $(".product-plus").on("click", app.addProduct);
        $(".product-subtract").on("click", app.subtractProduct);
    },

    setProductImages: function () {
        "use strict";

        var images = $(".product-image"),
            ctr,
            img;

        for (var i = 0; i < images.length; i += 1) {
            ctr = $(images[i]),
                img = ctr.find(".product-image--img");

            ctr.css("background-image", "url(" + img.attr("src") + ")");
            img.remove();
        }
    },

    renderTemplates: function () {
        "use strict";

        var products = app.products,
            content = [],
            template = new t($("#shopping-cart--list-item-template").html());

        for (var i = 0; i < products.length; i += 1) {
            content[i] = template.render(products[i]);
        }

        $("#shopping-cart--list").html(content.join(""));
    }

};

app.renderTemplates();
app.setProductImages();
app.attachEvents();