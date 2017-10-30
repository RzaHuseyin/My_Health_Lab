
$(".js_open_nav").click(function(){
    $(".main_navbar").addClass("active_nav")
        .removeClass("deactive_nav")
    
});
$(".js_close_nav").click(function(){
    $(".main_navbar").addClass("deactive_nav")
        .removeClass("active_nav")
});


$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    item: 1,
    dots: true,
    margin: 10,
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
            dots: false

        },
        600: {
            items: 1,
            nav: false,
            dots: false
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