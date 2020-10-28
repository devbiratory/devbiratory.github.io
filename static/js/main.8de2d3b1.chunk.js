(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[3],{101:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"b",(function(){return i})),o.d(t,"d",(function(){return a})),o.d(t,"f",(function(){return c})),o.d(t,"e",(function(){return u}));var n="ADD_TO_WISHLIST",r="DELETE_FROM_WISHLIST",i="DELETE_ALL_FROM_WISHLIST",a=function(e,t){return function(o){t&&t("Added To Wishlist",{appearance:"success",autoDismiss:!0}),o({type:n,payload:e})}},c=function(e,t){return function(o){t&&t("Removed From Wishlist",{appearance:"error",autoDismiss:!0}),o({type:r,payload:e})}},u=function(e){return function(t){e&&e("Removed All From Wishlist",{appearance:"error",autoDismiss:!0}),t({type:i})}}},103:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));var n="FETCH_PRODUCTS_SUCCESS",r=function(e){return function(t){t(function(e){return{type:n,payload:e}}(e))}}},107:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return a}));var n="ADD_TO_COMPARE",r="DELETE_FROM_COMPARE",i=function(e,t){return function(o){t&&t("Added To Compare",{appearance:"success",autoDismiss:!0}),o({type:n,payload:e})}},a=function(e,t){return function(o){t&&t("Removed From Compare",{appearance:"error",autoDismiss:!0}),o({type:r,payload:e})}}},148:function(e,t,o){"use strict";o.d(t,"f",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return c})),o.d(t,"d",(function(){return u})),o.d(t,"e",(function(){return l}));var n=o(32),r=function(e){return e=e.map((function(e){e.variation=[{color:"white",image:"/assets/img/product/fashion/1.jpg",size:[{name:"x",stock:3},{name:"m",stock:2},{name:"xl",stock:5}]}];var t=e.images;return delete e.images,e.image=t,e.image.length||e.image.push("/assets/img/product/comingSoon.jpg"),e}))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"usd",o=e.prices.find((function(e){return e.currency===t}));return o?o.unit_amount/100:50},a=function(e,t){return t&&t>0?e-e*(t/100):null},c=function(e,t,o,n){var r=e.filter((function(e){return e.id===t.id&&(!e.selectedProductColor||e.selectedProductColor===o)&&(!e.selectedProductSize||e.selectedProductSize===n)}))[0];return e.length>=1&&r?t.variation?e.filter((function(e){return e.id===t.id&&e.selectedProductColor===o&&e.selectedProductSize===n}))[0].quantity:e.filter((function(e){return t.id===e.id}))?e.filter((function(e){return t.id===e.id}))[0].quantity:1:0},u=function(e,t,o){if(e&&t&&o){if("category"===t)return e.filter((function(e){return e.category.filter((function(e){return e===o}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===o}))[0]}));if("color"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===o}))[0]}));if("size"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===o}))[0]}))[0]}));if("filterSort"===t){var r=Object(n.a)(e);if("default"===o)return r;if("priceHighToLow"===o)return r.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===o)return r.sort((function(e,t){return e.price-t.price}))}}return e},l=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")}},153:function(e,t,o){"use strict";var n=o(81),r=o.n(n),i=o(108),a=o(44),c=o.n(a),u=o(56),l={getCanadaTaxes:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(u.testing.apiUrl,"/v1/stripe/taxes")).then((function(e){if(e&&e.data&&e.data.data)return{taxes:e.data.data,error:null}})).catch((function(e){return{taxes:null,error:e}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getCountries:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(u.testing.apiUrl,"/v1/stripe/countries")).then((function(e){if(e.data.data)return{countries:e.data.data,countriesFetchErr:null}})).catch((function(e){return{countries:null,countriesFetchErr:e}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getProduct:function(e){return new Promise((function(t,o){c.a.get("".concat(u.testing.apiUrl,"/v1/stripe/").concat(e,"/products")).then((function(e){t(e)})).catch((function(e){o(e)}))}))},getProductsList:function(){return new Promise((function(e,t){c.a.get("".concat(u.testing.apiUrl,"/v1/stripe/products")).then((function(t){e(t)})).catch((function(e){t(e)}))}))},updatePluginInfo:function(e){return new Promise((function(t,o){c.a.post("".concat(u.testing.apiUrl,"/v1/payment/complete-plugin-purchase"),{email:e.email,stripeResponse:e.stripeResponse,stripeBillingDetails:e.stripeBillingDetails,tax:e.tax,paymentMethod:e.paymentMethod,paymentIntent:e.paymentIntent,customerId:e.customerStripeId}).then((function(e){t(e)})).catch((function(e){o(e)}))}))},checkValidUser:function(e){return new Promise((function(t,o){c.a.get("".concat(u.testing.apiUrl,"/v1/payment/verify-plugin-purchaser?email=").concat(e.email)).then((function(e){t(e)})).catch((function(e){o(e)}))}))},getPaymentSecret:function(e,t,o){return new Promise((function(n,r){c.a.get("".concat(u.testing.apiUrl,"/v1/payment/stripe-payment-secret?currency=").concat(e,"&tax=").concat(t,"&email=").concat(o)).then((function(e){n(e)})).catch((function(e){r(e)}))}))}};t.a=l},225:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));var n="SET_LOADER",r=function(e){return function(t){t({type:n,payload:{active:e}})}}},238:function(e,t,o){e.exports=o(481)},461:function(e){e.exports=JSON.parse("{}")},477:function(e){e.exports=JSON.parse('{"home":"Home","home_group_one":"Home Group One","home_group_two":"Home Group Two","home_group_three":"Home Group Three","home_fashion":"Home Fashion","home_fashion_two":"Home Fashion Two","home_fashion_three":"Home Fashion Three","home_fashion_four":"Home Fashion Four","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Home Kids Fashion","home_cosmetics":"Home Cosmetics","home_furniture":"Home Furniture","home_furniture_two":"Home Furniture Two","home_furniture_three":"Home Furniture Three","home_furniture_four":"Home Furniture Four","home_furniture_five":"Home Furniture Five","home_furniture_six":"Home Furniture Six","home_furniture_seven":"Home Furniture Seven","home_electronics":"Home Electronics","home_electronics_two":"Home Electronics Two","home_electronics_three":"Home Electronics Three","home_book_store":"Home Book Store","home_book_store_two":"Home Book Store Two","home_plants":"Home Plants","home_flower_shop":"Home Flower Shop","home_flower_shop_two":"Home Flower Shop Two","home_organic_food":"Home Organic Food","home_organic_food_two":"Home Organic Food Two","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Home Grid Banner","home_auto_parts":"Home Auto Parts","home_cake_shop":"Home Cake Shop","home_handmade":"Home Handmade","home_pet_food":"Home Pet Food","home_medical_equipment":"Home Medical Equipment","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Product Page","shopNameForNavBar":"Shop","shop_layout":"Shop Layout","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop Grid Two Column","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop Grid Full Width","shop_grid_right_sidebar":"Shop Grid Right Sidebar","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Full Width","shop_list_two_column":"Shop List Two Column","product_details":"Product Details","product_tab_bottom":"Product Tab Bottom","product_tab_left":"Product Tab Left","product_tab_right":"Product Tab Right","product_sticky":"Product Sticky","product_slider":"Product Slider","product_fixed_image":"Product Fixed Image","product_simple":"Product Simple","product_variation":"Product Variation","product_affiliate":"Product Affiliate","collection":"Collection","pages":"Pages","cart":"Cart","checkout":"Checkout","wishlist":"Wishlist","compare":"Compare","my_account":"My Account","login_register":"Login / Register","about_us":"About Us","contact_us":"Contact Us","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Right Sidebar","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Slider"}')},478:function(e){e.exports=JSON.parse('{"home":"Accueil","home_group_one":"Home Group One","home_group_two":"Groupe de maison deux","home_group_three":"Groupe d\'accueil 3","home_fashion":"Mode maison","home_fashion_two":"Mode maison deux","home_fashion_three":"Accueil Mode Trois","home_fashion_four":"Accueil Fashion Four","home_fashion_five":"Accueil Fashion Five","home_fashion_six":"Accueil Fashion Six","home_fashion_seven":"Accueil Fashion Seven","home_fashion_eight":"Accueil Fashion Eight","home_kids_fashion":"Accueil Mode Enfants","home_cosmetics":"Cosm\xe9tiques \xe0 la maison","home_furniture":"Meubles de maison","home_furniture_two":"Meubles de maison deux","home_furniture_three":"Meubles de maison trois","home_furniture_four":"Meubles de maison four","home_furniture_five":"Meubles de maison five","home_furniture_six":"Meubles de maison six","home_furniture_seven":"Meubles de maison seven","home_electronics":"Electronique domestique","home_electronics_two":"\xc9lectronique grand Two","home_electronics_three":"\xc9lectronique grand Three","home_book_store":"Accueil librairie","home_book_store_two":"Accueil librairie two","home_plants":"Plantes d\'int\xe9rieur","home_flower_shop":"Maison Fleuriste","home_flower_shop_two":"Maison Fleuriste two","home_organic_food":"Accueil biologiques","home_organic_food_two":"Accueil Alimentation Deux","home_onepage_scroll":"Accueil Onepage Scroll","home_grid_banner":"Accueil Grid Banner","home_auto_parts":"Accueil automobiles","home_cake_shop":"Accueil P\xe2tisserie","home_handmade":"Maison \xe0 la main","home_pet_food":"Accueil pour animaux","home_medical_equipment":"\xe9quipement m\xe9dical \xe0 domicile","home_christmas":"Maison Christmas","home_black_friday":"Maison Black Friday","home_black_friday_two":"Maison Black Friday Two","home_valentines_day":"Maison Valentines Day","shop":"Boutique","shop_layout":"Disposition de magasin","shop_grid_standard":"Boutique Grid Standard","shop_grid_filter":"Filtre de grille d\'achat","shop_grid_two_column":"Boutique Grille Colonnes","shop_grid_no_sidebar":"Boutique Grid No Sidebar","shop_grid_full_width":"Grille de magasin largeur","shop_grid_right_sidebar":"Shop Grid Right lat\xe9rale","shop_list_standard":"Liste de magasin standard","shop_list_full_width":"Liste pleine largeur","shop_list_two_column":"Liste deux colonnes","product_details":"d\xe9tails du produit","product_tab_bottom":"Onglet Produit Bas","product_tab_left":"Onglet Produit \xe0 gauche","product_tab_right":"Onglet Produit Droite","product_sticky":"Produit collant","product_slider":"Produit slider","product_fixed_image":"Image fixe du produit","product_simple":"Produit simple","product_variation":"Variation du produit","product_affiliate":"Produit affili\xe9","collection":"Collection","pages":"Des pages","cart":"Chariot","checkout":"Checkout","wishlist":"Liste de souhaits","compare":"Comparer","my_account":"Mon compte","login_register":"Connexion / S\'inscrire","about_us":"\xc0 propos de nous","contact_us":"Contactez nous","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Barre lat\xe9rale droite","blog_details_standard":"D\xe9tails du blog Standard","blog_details_video":"Blog D\xe9tails Vid\xe9o","blog_details_slider":"D\xe9tails du blog"}')},479:function(e){e.exports=JSON.parse('{"home":"Zuhause","home_group_one":"Heimatgruppe Eins","home_group_two":"Heimatgruppe zwei","home_group_three":"Home Gruppe Drei","home_fashion":"Zuhause Mode","home_fashion_two":"Home Fashion Zwei","home_fashion_three":"Home Fashion Drei","home_fashion_four":"Hauptart und weise vier","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Startseite Kindermode","home_cosmetics":"Hauptkosmetik","home_furniture":"Haus m\xf6bel","home_furniture_two":"Wohnm\xf6bel Zwei","home_furniture_three":"Wohnm\xf6bel Drei","home_furniture_four":"Wohnm\xf6bel vier","home_furniture_five":"Wohnm\xf6bel Five","home_furniture_six":"Wohnm\xf6bel Six","home_furniture_seven":"Wohnm\xf6bel Seven","home_electronics":"Heimelektronik","home_electronics_two":"Heimelektronik Zwei","home_electronics_three":"Heimelektronik Drei","home_book_store":"Home Buchhandlung","home_book_store_two":"Home Buchhandlung Zwei","home_plants":"Home Pflanzen","home_flower_shop":"Hauptblumenladen","home_flower_shop_two":"Hauptblumenladen Zwei","home_organic_food":"Bio-Lebensmittel","home_organic_food_two":"Bio-Lebensmittel Zwei","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Hauptrasterfeld Fahne","home_auto_parts":"Home Autoteile","home_cake_shop":"Hauptkuchen-Gesch\xe4ft","home_handmade":"Haus handgemacht","home_pet_food":"Heimtierfutter","home_medical_equipment":"medizinische Heimausr\xfcstung","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Gesch\xe4ft","shop_layout":"Ladengestaltung","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop-Raster zwei Spalte","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop-Gitter in voller Breite","shop_grid_right_sidebar":"Shop-Gitter Seitenleiste","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Volle Breite","shop_list_two_column":"Shop-Liste zweispaltig","product_details":"Produktdetails","product_tab_bottom":"Produktregisterkarte Unten","product_tab_left":"Produktregisterkarte Links","product_tab_right":"Registerkarte Rechts","product_sticky":"Produkt klebrig","product_slider":"Produkt-Schieberegler","product_fixed_image":"Produktfixiertes Image","product_simple":"Produkt Einfach","product_variation":"Produktvariation","product_affiliate":"Produkt-Partner","collection":"Sammlung","pages":"Seiten","cart":"Wagen","checkout":"Auschecken","wishlist":"Wunschzettel","compare":"Vergleichen Sie","my_account":"Mein Konto","login_register":"Anmeldung Registrieren","about_us":"\xdcber uns","contact_us":"Kontaktiere uns","404_page":"404 Seite","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog keine Sidebar","blog_right_sidebar":"Blog rechte Seitenleiste","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Schieberegler"}')},480:function(e,t,o){},481:function(e,t,o){"use strict";o.r(t);o(239),o(248);var n=o(0),r=o.n(n),i=o(37),a=o.n(i),c=o(54),u=o(232),l=o(144),s=o(66),d=o(103),m=o(8),h=(o(44),{currencySymbol:"$",currencyName:"USD",currencyRate:1}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;if("SET_CURRENCY"===t.type){var o=t.payload.currencyName;if("USD"===o)return Object(m.a)(Object(m.a)({},e),{},{currencySymbol:"$",currencyRate:t.payload.currencyRate,currencyName:o});if("EUR"===o)return Object(m.a)(Object(m.a)({},e),{},{currencySymbol:"\u20ac",currencyRate:t.payload.currencyRate,currencyName:o});if("GBP"===o)return Object(m.a)(Object(m.a)({},e),{},{currencySymbol:"\xa3",currencyRate:t.payload.currencyRate,currencyName:o})}return e},p={products:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type===d.a?Object(m.a)(Object(m.a)({},e),{},{products:t.payload}):e},g=o(32),b=o(104),y=o.n(b),v=o(67),S=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,o=e,n=t.payload;if(t.type===v.a){if(1===o.length)return Object(g.a)(o);if(void 0===n.variation){var r=o.filter((function(e){return e.id===n.id}))[0];return void 0===r?[].concat(Object(g.a)(o),[Object(m.a)(Object(m.a)({},n),{},{quantity:n.quantity?n.quantity:1,cartItemId:y()()})]):o.map((function(e){return e.cartItemId===r.cartItemId?Object(m.a)(Object(m.a)({},e),{},{quantity:n.quantity?e.quantity+n.quantity:e.quantity+1}):e}))}var i=o.filter((function(e){return e.id===n.id&&n.selectedProductColor&&n.selectedProductColor===e.selectedProductColor&&n.selectedProductSize&&n.selectedProductSize===e.selectedProductSize&&(!n.cartItemId||n.cartItemId===e.cartItemId)}))[0];return void 0===i?[].concat(Object(g.a)(o),[Object(m.a)(Object(m.a)({},n),{},{quantity:n.quantity?n.quantity:1,cartItemId:y()()})]):void 0===i||i.selectedProductColor===n.selectedProductColor&&i.selectedProductSize===n.selectedProductSize?o.map((function(e){return e.cartItemId===i.cartItemId?Object(m.a)(Object(m.a)({},e),{},{quantity:n.quantity?e.quantity+n.quantity:e.quantity+1,selectedProductColor:n.selectedProductColor,selectedProductSize:n.selectedProductSize}):e})):[].concat(Object(g.a)(o),[Object(m.a)(Object(m.a)({},n),{},{quantity:n.quantity?n.quantity:1,cartItemId:y()()})])}if(t.type===v.b){if(1===n.quantity){var a=function(e,t){return e.filter((function(e){return e.cartItemId!==t.cartItemId}))};return a(o,n)}return o.map((function(e){return e.cartItemId===n.cartItemId?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity-1}):e}))}if(t.type===v.d){var c=function(e,t){return e.filter((function(e){return e.cartItemId!==t.cartItemId}))};return c(o,n)}return t.type===v.c?o.filter((function(e){return!1})):e},P=o(101),O=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,o=e,n=t.payload;if(t.type===P.a){var r=o.filter((function(e){return e.id===n.id}))[0];return void 0===r?[].concat(Object(g.a)(o),[n]):o}if(t.type===P.c){var i=function(e,t){return e.filter((function(e){return e.id!==t.id}))};return i(o,n)}return t.type===P.b?o.filter((function(e){return!1})):o},H=o(107),E=[],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,o=e,n=t.payload;if(t.type===H.a){var r=o.filter((function(e){return e.id===n.id}))[0];return void 0===r?[].concat(Object(g.a)(o),[n]):o}if(t.type===H.b){var i=function(e,t){return e.filter((function(e){return e.id!==t.id}))};return i(o,n)}return o},j=[],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,o=e,n=t.payload;if("DO_A_BIT"===t.type){var r=o.concat();return[].concat(Object(g.a)(r),[n])}return o},C=o(225),T={active:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type===C.a?Object(m.a)(Object(m.a)({},e),{},{active:t.payload.active}):e},I=o(65),A=Object(c.combineReducers)({multilanguage:Object(I.createMultilanguageReducer)({currentLanguageCode:"en"}),currencyData:_,productData:f,cartData:w,wishlistData:k,compareData:F,devData:D,loader:B}),x=(o(461),o(17)),q=Object(x.g)((function(e){return Object(n.useEffect)((function(){window.scrollTo(0,0)})),e.children})),R=o(105),L=o(150),z=o(149),M=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(1),o.e(12)]).then(o.bind(null,623))})),G=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(1),o.e(6),o.e(24)]).then(o.bind(null,621))})),U=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(1),o.e(2),o.e(10),o.e(23)]).then(o.bind(null,622))})),N=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(1),o.e(13),o.e(11)]).then(o.bind(null,620))})),W=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(9),o.e(17)]).then(o.bind(null,624))})),V=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(8),o.e(19)]).then(o.bind(null,612))})),Z=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(2),o.e(18)]).then(o.bind(null,613))})),J=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(14)]).then(o.bind(null,614))})),K=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(22)]).then(o.bind(null,615))})),$=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(16)]).then(o.bind(null,625))})),Y=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(15)]).then(o.bind(null,616))})),Q=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(7),o.e(20)]).then(o.bind(null,626))})),X=Object(n.lazy)((function(){return Promise.all([o.e(0),o.e(21)]).then(o.bind(null,617))})),ee=Object(n.lazy)((function(){return o.e(25).then(o.bind(null,618))})),te=Object(s.connect)()(Object(I.multilanguage)((function(e){return Object(n.useEffect)((function(){e.dispatch(Object(I.loadLanguages)({languages:{en:o(477),fn:o(478),de:o(479)}}))})),r.a.createElement(L.ToastProvider,{placement:"bottom-left"},r.a.createElement(z.BreadcrumbsProvider,null,r.a.createElement(R.a,null,r.a.createElement(q,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"flone-preloader-wrapper"},r.a.createElement("div",{className:"flone-preloader"},r.a.createElement("span",null),r.a.createElement("span",null)))},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"./",component:G}),r.a.createElement(x.a,{path:"./home-fashion",component:M}),r.a.createElement(x.a,{path:"./shop-grid-standard",component:G}),r.a.createElement(x.a,{path:"./product/:id",render:function(e){return r.a.createElement(U,Object.assign({},e,{key:e.match.params.id}))}}),r.a.createElement(x.a,{path:"./about",component:N}),r.a.createElement(x.a,{path:"./contact",component:W}),r.a.createElement(x.a,{path:"./my-account",component:V}),r.a.createElement(x.a,{path:"./login-register",component:Z}),r.a.createElement(x.a,{path:"./cart",component:J}),r.a.createElement(x.a,{path:"./wishlist",component:K}),r.a.createElement(x.a,{path:"./compare",component:$}),r.a.createElement(x.a,{path:"./checkout",component:Y}),r.a.createElement(x.a,{path:"./main-checkout",component:Q}),r.a.createElement(x.a,{path:"./not-found",component:X}),r.a.createElement(x.a,{path:"./TestPage",component:ee}),r.a.createElement(x.a,{exact:!0,component:X})))))))})));o(480),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=o(153),ne=o(148),re=o(235),ie=Object(c.createStore)(A,Object(l.load)(),Object(re.composeWithDevTools)(Object(c.applyMiddleware)(u.a,Object(l.save)())));oe.a.getProductsList().then((function(e){var t=Object(ne.f)(e.data.data);ie.dispatch(Object(d.b)(t))})).catch((function(e){console.log("error-",e)})),a.a.render(r.a.createElement(s.Provider,{store:ie},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e){e.exports=JSON.parse('{"development":{"baseUrl":"http://localhost:3000","apiUrl":"http://192.168.64.2/keeprbackend"},"testing":{"baseUrl":"http//shop.mykeeper.com","apiUrl":"https://young-coast-69706.herokuapp.com"},"staging":{"baseUrl":"http//shop.mykeeper.com","apiUrl":"http://api-test.iqeepr.com"},"production":{"baseUrl":"http//shop.mykeeper.com","apiUrl":"http://api-test.iqeepr.com"}}')},67:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return i})),o.d(t,"d",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"e",(function(){return u})),o.d(t,"f",(function(){return l})),o.d(t,"h",(function(){return s})),o.d(t,"g",(function(){return d}));var n=o(8),r="ADD_TO_CART",i="DECREASE_QUANTITY",a="DELETE_FROM_CART",c="DELETE_ALL_FROM_CART",u=function(e,t,o,i,a){return function(c){t&&t("Added To Cart",{appearance:"success",autoDismiss:!0}),c({type:r,payload:Object(n.a)(Object(n.a)({},e),{},{quantity:o,selectedProductColor:i||(e.selectedProductColor?e.selectedProductColor:null),selectedProductSize:a||(e.selectedProductSize?e.selectedProductSize:null)})})}},l=function(e,t){return function(o){t&&t("Item Decremented From Cart",{appearance:"warning",autoDismiss:!0}),o({type:i,payload:e})}},s=function(e,t){return function(o){t&&t("Removed From Cart",{appearance:"error",autoDismiss:!0}),o({type:a,payload:e})}},d=function(e){return function(t){e&&e("Removed All From Cart",{appearance:"error",autoDismiss:!0}),t({type:c})}}}},[[238,4,5]]]);
//# sourceMappingURL=main.8de2d3b1.chunk.js.map