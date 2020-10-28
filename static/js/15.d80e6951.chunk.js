(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[15],{483:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(482),c=t(105),o=function(e){var a=e.imageUrl,t=e.logoClass;return n.a.createElement("div",{className:"".concat(t||"")},n.a.createElement(c.b,{to:"./"},n.a.createElement("img",{alt:"",src:"."+a})))},m=t(65),s=Object(m.multilanguage)((function(e){var a=e.strings,t=e.menuWhiteClass,l=e.sidebarMenu;return n.a.createElement("div",{className:" ".concat(l?"sidebar-menu":"main-menu ".concat(t||"")," ")},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c.b,{to:"./shop-grid-standard"},a.shopNameForNavBar)),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/about-us/",target:"_blank",rel:"noopener noreferrer"},"About Us")))))})),i=t(66),u=t(150),d=t(148),E=function(e){var a=e.cartData,t=e.currency,l=e.deleteFromCart,r=Object(u.useToasts)().addToast;return n.a.createElement("div",{className:"shopping-cart-content"},a&&a.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",null,a.map((function(e,o){var m=Object(d.a)(e.price,e.discount),s=(e.price*t.currencyRate).toFixed(2),i=(m*t.currencyRate).toFixed(2);return null!=m?i*e.quantity:s*e.quantity,n.a.createElement("li",{className:"single-shopping-cart",key:o},n.a.createElement("div",{className:"shopping-cart-img"},n.a.createElement(c.b,{to:"./product/"+e.id},n.a.createElement("img",{alt:"",src:"."+e.image[0],className:"img-fluid"}))),n.a.createElement("div",{className:"shopping-cart-title"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"./product/"+e.id}," ",e.name," ")),n.a.createElement("h6",null,"Qty: ",e.quantity),n.a.createElement("span",null,null!==m?t.currencySymbol+i:t.currencySymbol+Object(d.c)(a[0]).toFixed(2)),(e.selectedProductColor&&e.selectedProductSize,"")),n.a.createElement("div",{className:"shopping-cart-delete"},n.a.createElement("button",{onClick:function(){return l(e,r)}},n.a.createElement("i",{className:"fa fa-times-circle"}))))}))),n.a.createElement("div",{className:"shopping-cart-total"},n.a.createElement("h4",null,"Total :"," ",n.a.createElement("span",{className:"shop-total"},t.currencySymbol+Object(d.c)(a[0]).toFixed(2)))),n.a.createElement("div",{className:"shopping-cart-btn btn-hover text-center"},n.a.createElement(c.b,{className:"default-btn",to:"./cart"},"view cart"),n.a.createElement(c.b,{className:"default-btn",to:"./main-checkout"},"checkout"))):n.a.createElement("p",{className:"text-center"},"No items added to cart"))},p=t(67),f=Object(i.connect)((function(e){return{currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData}}),(function(e){return{deleteFromCart:function(a,t){e(Object(p.h)(a,t))}}}))((function(e){var a=e.currency,t=e.cartData,l=(e.wishlistData,e.compareData,e.deleteFromCart),r=e.iconWhiteClass;return n.a.createElement("div",{className:"header-right-wrap ".concat(r||"")},n.a.createElement("div",{className:"same-style header-wishlist"}),n.a.createElement("div",{className:"same-style cart-wrap d-none d-lg-block"},n.a.createElement("button",{className:"icon-cart",onClick:function(e){return function(e){e.currentTarget.nextSibling.classList.toggle("active")}(e)}},n.a.createElement("i",{className:"pe-7s-shopbag"}),n.a.createElement("span",{className:"count-style"},t&&t.length?t.length:0)),n.a.createElement(E,{cartData:t,currency:a,deleteFromCart:l})),n.a.createElement("div",{className:"same-style cart-wrap d-block d-lg-none"},n.a.createElement(c.b,{className:"icon-cart",to:"./cart"},n.a.createElement("i",{className:"pe-7s-shopbag"}),n.a.createElement("span",{className:"count-style"},t&&t.length?t.length:0))),n.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-lg-none"},n.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},n.a.createElement("i",{className:"pe-7s-menu"}))))})),b=Object(m.multilanguage)((function(e){var a=e.strings;return n.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c.b,{to:"./"},a.home)),n.a.createElement("li",null,n.a.createElement(c.b,{to:"./shop-grid-standard"},a.shopNameForNavBar)),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/about-us/",target:"_blank",rel:"noopener noreferrer"},"About Us"))))})),g=function(){return n.a.createElement("div",{className:"offcanvas-widget-area"},n.a.createElement("div",{className:"off-canvas-contact-widget"},n.a.createElement("div",{className:"header-contact-info"},n.a.createElement("ul",{className:"header-contact-info__list"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-phone"})," ",n.a.createElement("a",{href:"tel://12452456012"},"(1245) 2456 012 ")),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-envelope"})," ",n.a.createElement("a",{href:"mailto:info@yourdomain.com"},"info@yourdomain.com"))))),n.a.createElement("div",{className:"off-canvas-widget-social"},n.a.createElement("a",{href:"//twitter.com",title:"Twitter"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"//instagram.com",title:"Instagram"},n.a.createElement("i",{className:"fa fa-instagram"})),n.a.createElement("a",{href:"//facebook.com",title:"Facebook"},n.a.createElement("i",{className:"fa fa-facebook"})),n.a.createElement("a",{href:"//pinterest.com",title:"Pinterest"},n.a.createElement("i",{className:"fa fa-pinterest"}))))},v=function(){Object(l.useEffect)((function(){for(var t=document.querySelector("#offcanvas-navigation"),l=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),r=0;r<l.length;r++)l[r].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var c=t.querySelectorAll(".menu-expand"),o=c.length,m=0;m<o;m++)c[m].addEventListener("click",(function(a){e(a)}));for(var s=0;s<n.length;s++)n[s].addEventListener("click",(function(){a()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},a=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return n.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},n.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return a()}},n.a.createElement("i",{className:"pe-7s-close"})),n.a.createElement("div",{className:"offcanvas-wrapper"},n.a.createElement("div",{className:"offcanvas-inner-content"},n.a.createElement(b,null),n.a.createElement(g,null))))},N=function(e){var a=e.layout,t=e.top,c=e.borderStyle,m=e.headerPaddingClass,i=e.headerPositionClass,u=e.headerBgClass,d=Object(l.useState)(0),E=Object(r.a)(d,2),p=E[0],b=E[1],g=Object(l.useState)(0),N=Object(r.a)(g,2),h=N[0],y=N[1];Object(l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){b(window.scrollY)};return n.a.createElement("header",{className:"header-area clearfix ".concat(u||""," ").concat(i||"")},n.a.createElement("div",{className:"".concat(m||""," ").concat("visible"===t?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===c?"border-none":"")},n.a.createElement("div",{className:"container-fluid"===a?a:"container"})),n.a.createElement("div",{className:" ".concat(m||""," sticky-bar header-res-padding clearfix ").concat(p>h?"stick":"")},n.a.createElement("div",{className:"container-fluid"===a?a:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},n.a.createElement(o,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),n.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},n.a.createElement(s,null)),n.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},n.a.createElement(f,null)))),n.a.createElement(v,null)))},h=t(487),y=function(e){var a=e.footerLogo,t=e.spaceBottomClass,l=e.colorClass;return n.a.createElement("div",{className:"copyright ".concat(t||""," ").concat(l||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(c.b,{to:"./"},n.a.createElement("img",{alt:"",src:"."+a}))),n.a.createElement("p",null,"\xa9 2020 Keeper .",n.a.createElement("br",null)," All Rights Reserved"))},w=function(e){var a=e.backgroundColorClass,t=e.spaceTopClass,c=e.spaceBottomClass,o=e.spaceLeftClass,m=e.spaceRightClass,s=e.containerClass,i=e.extraFooterClass,u=e.sideMenu,d=Object(l.useState)(0),E=Object(r.a)(d,2),p=E[0],f=E[1],b=Object(l.useState)(0),g=Object(r.a)(b,2),v=g[0],N=g[1];Object(l.useEffect)((function(){return N(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){f(window.scrollY)};return n.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(t||""," ").concat(c||""," ").concat(i||""," ").concat(o||""," ").concat(m||"")},n.a.createElement("div",{className:"".concat(s||"container")},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement(y,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),n.a.createElement("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement("div",{className:"footer-widget mb-30 ml-30"},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"ABOUT US")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/about-us/",target:"_blank",rel:"noopener noreferrer"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/",target:"_blank",rel:"noopener noreferrer"},"For Families")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/online-memorials-for-business/",target:"_blank",rel:"noopener noreferrer"},"For Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/features/",target:"_blank",rel:"noopener noreferrer"},"Features")))))),n.a.createElement("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement("div",{className:"".concat(u?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"Products")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/keeper-plus-features/",target:"_blank",rel:"noopener noreferrer"},"Keeper Plus")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.talkdeath.com/",target:"_blank",rel:"noopener noreferrer"},"Community")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/access-api/",target:"_blank",rel:"noopener noreferrer"},"Api Access")))))),n.a.createElement("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},n.a.createElement("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-50")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"USEFUL LINKS")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/faq/",target:"_blank",rel:"noopener noreferrer"},"Faq")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/terms/",target:"_blank",rel:"noopener noreferrer"},"Terms")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mykeeper.com/careers/",target:"_blank",rel:"noopener noreferrer"},"Careers")))))),n.a.createElement("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},n.a.createElement("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-50")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"FOLLOW US")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/KeeperMemorials/",target:"_blank",rel:"noopener noreferrer"},"Facebook")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/keepermemorials",target:"_blank",rel:"noopener noreferrer"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/keepermemorials/",target:"_blank",rel:"noopener noreferrer"},"Instagram")),n.a.createElement("li",null,n.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))))),n.a.createElement("button",{className:"scroll-top ".concat(p>v?"show":""),onClick:function(){h.animateScroll.scrollToTop()}},n.a.createElement("i",{className:"fa fa-angle-double-up"})))};a.a=function(e){var a=e.children,t=e.headerContainerClass,l=e.headerTop,r=e.headerPaddingClass,c=e.headerPositionClass;return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{layout:t,top:l,headerPaddingClass:r,headerPositionClass:c}),a,n.a.createElement(w,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},485:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(105),c=t(149);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},616:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(105),c=t(488),o=t.n(c),m=t(66),s=t(149),i=t(148),u=t(483),d=t(485);a.default=Object(m.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}))((function(e){var a=e.location,t=e.cartItems,l=e.currency,c=a.pathname,m=0;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,"Keeper Memorials - Online Store | Checkout"),n.a.createElement("meta",{name:"description",content:"Checkout page of Keeper Memorials - Online Store"})),n.a.createElement(s.BreadcrumbsItem,{to:"./"},"Product Page"),n.a.createElement(s.BreadcrumbsItem,{to:"."+c},"Checkout"),n.a.createElement(u.a,{headerTop:"visible"},n.a.createElement(d.a,null),n.a.createElement("div",{className:"checkout-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},t&&t.length>=1?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("div",{className:"billing-info-wrap"},n.a.createElement("h3",null,"Billing Details"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Company Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-select mb-20"},n.a.createElement("label",null,"Country"),n.a.createElement("select",null,n.a.createElement("option",null,"Select a country"),n.a.createElement("option",null,"Azerbaijan"),n.a.createElement("option",null,"Bahamas"),n.a.createElement("option",null,"Bahrain"),n.a.createElement("option",null,"Bangladesh"),n.a.createElement("option",null,"Barbados")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Street Address"),n.a.createElement("input",{className:"billing-address",placeholder:"House number and street name",type:"text"}),n.a.createElement("input",{placeholder:"Apartment, suite, unit etc.",type:"text"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Town / City"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"State / County"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Postcode / ZIP"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{type:"text"})))),n.a.createElement("div",{className:"additional-info-wrap"},n.a.createElement("h4",null,"Additional information"),n.a.createElement("div",{className:"additional-info"},n.a.createElement("label",null,"Order notes"),n.a.createElement("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message",defaultValue:""}))))),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"your-order-area"},n.a.createElement("h3",null,"Your order"),n.a.createElement("div",{className:"your-order-wrap gray-bg-4"},n.a.createElement("div",{className:"your-order-product-info"},n.a.createElement("div",{className:"your-order-top"},n.a.createElement("ul",null,n.a.createElement("li",null,"Product"),n.a.createElement("li",null,"Total"))),n.a.createElement("div",{className:"your-order-middle"},n.a.createElement("ul",null,t.map((function(e,a){var t=Object(i.a)(e.price,e.discount),r=(e.price*l.currencyRate).toFixed(2),c=(t*l.currencyRate).toFixed(2);return m+=null!=t?c*e.quantity:r*e.quantity,n.a.createElement("li",{key:a},n.a.createElement("span",{className:"order-middle-left"},e.name," X ",e.quantity)," ",n.a.createElement("span",{className:"order-price"},null!==t?l.currencySymbol+(c*e.quantity).toFixed(2):l.currencySymbol+(r*e.quantity).toFixed(2)))})))),n.a.createElement("div",{className:"your-order-bottom"},n.a.createElement("ul",null,n.a.createElement("li",{className:"your-order-shipping"},"Shipping"),n.a.createElement("li",null,"Free shipping"))),n.a.createElement("div",{className:"your-order-total"},n.a.createElement("ul",null,n.a.createElement("li",{className:"order-total"},"Total"),n.a.createElement("li",null,l.currencySymbol+m.toFixed(2))))),n.a.createElement("div",{className:"payment-method"})),n.a.createElement("div",{className:"place-order mt-25"},n.a.createElement("button",{className:"btn-hover"},"Place Order"))))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"item-empty-area text-center"},n.a.createElement("div",{className:"item-empty-area__icon mb-30"},n.a.createElement("i",{className:"pe-7s-cash"})),n.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart to checkout ",n.a.createElement("br",null)," ",n.a.createElement(r.b,{to:"./shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=15.d80e6951.chunk.js.map