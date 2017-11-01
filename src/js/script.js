
$(".js_open_nav").click(function(){
    $(".main_navbar").addClass("active_nav")
        .removeClass("deactive_nav")
    
});
$(".js_language").click(function(){
    $(this).toggleClass("active_lang").toggleClass("fa-caret-up")
}); 

$(".js_close_nav").click(function(){
    $(".main_navbar").addClass("deactive_nav")
        .removeClass("active_nav")
});
// modal login and supported    main bage
$(".js_log_modal").click(function () {
    $("#commonModal").removeClass("supportModal").addClass("loginModal")
})
$(".js_sup_modal").click(function () {
    $("#commonModal").removeClass("loginModal").addClass("supportModal")
})
// modal login  and product    main bage
$(".js_log_modal").click(function () {
    $("#commonModal").removeClass("product_modal").addClass("loginModal")
})
$("#product .box_shadow").click(function () {
    $("#commonModal").removeClass("loginModal").addClass("product_modal")
})

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    item: 1,
    dots: true,
    margin: 10,
    mouseDrag: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    autoplay: true,
    autoplayTimeout: 100,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            mouseDrag: true
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
            mouseDrag: true
        },
        1000: {
            items: 1
        }
    }
})
// $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY > 0) {
//         $('.owl-carousel').trigger('next.owl');
//     } else {
//         $('.owl-carousel').trigger('prev.owl');
//     }
//     e.preventDefault();
// });


AmCharts.makeChart("chartdiv",
{
    "type": "pie",
    "angle": 46.8,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "depth3D": 8,
    "innerRadius": "50%",
    "labelRadius": 19,
    "colors": [
        "#83bc00",
        "#e6e6e6"
    ],
    "gradientRatio": [],
    "labelColorField": "#0000FF",
    "labelTickAlpha": 1,
    "outlineColor": "#000000",
    "outlineThickness": 22,
    "titleField": "category",
    "valueField": "column-1",
    "color": "#008000",
    "fontSize": 15,
    "handDrawScatter": 0,
    "handDrawThickness": 0,
    "theme": "default",
    "allLabels": [],
    "balloon": {},
    "legend": {
        "enabled": true,
        "align": "center",
        "markerType": "circle"
    },
    "titles": [],
    "dataProvider": [
        {
            "category": "75%",
            "column-1": "7.5"
        },
        {
            "category": "25%",
            "column-1": "2.5"
        }
    ]
}
);

// js button 
$(".js_button").click(function(){
    $(this).parent().children("button").removeClass("active_button");
    $(this).addClass("active_button") ;

    $(".js_admin_pages").css("display","none");
    $( "#"+ $(this).data("target")).fadeIn();
})
