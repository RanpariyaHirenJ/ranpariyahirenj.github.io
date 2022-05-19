! function(o) {
    "use strict";

    function e() {
        this.$body = o("body"), this.charts = []
    }
    e.prototype.initCharts = function() {

        var e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            t = o("#revenue-chart").data("colors");
        t && (e = t.split(","));
        var r = {
            chart: {
                height: 390,
                type: "line",
                dropShadow: {
                    enabled: !0,
                    opacity: .2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                curve: "smooth",
                width: 4
            },
            series: [{
                name: "Previous Week",
                data: [0, 80, 50, 150, 80, 120, 140]
            }],
            colors: e,
            zoom: {
                enabled: !1
            },
            legend: {
                show: !1
            },
            xaxis: {
                type: "string",
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                tooltip: {
                    enabled: !1
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    formatter: function(e) {
                        return e + ""
                    },
                    offsetX: -15
                }
            }
        };
        new ApexCharts(document.querySelector("#revenue-chart"), r).render();
        
        var e = ["#FF903E"],
            t = o("#revenue-chart1").data("colors");
        t && (e = t.split(","));
        var r = {
            chart: {
                height: 276,
                type: "line",
                dropShadow: {
                    enabled: !0,
                    opacity: .2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                curve: "smooth",
                width: 4
            },
            series: [{
                name: "Previous Week",
                data: [0, 80, 50, 150, 80, 120, 140]
            }],
            colors: e,
            zoom: {
                enabled: !1
            },
            legend: {
                show: !1
            },
            xaxis: {
                type: "string",
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                tooltip: {
                    enabled: !1
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    formatter: function(e) {
                        return e + ""
                    },
                    offsetX: -15
                }
            }
        };
        new ApexCharts(document.querySelector("#revenue-chart1"), r).render();

    }, e.prototype.init = function() {
        o("#dash-daterange").daterangepicker({
            singleDatePicker: !0
        }), this.initCharts(), this.initMaps()
    }, o.Dashboard = new e, o.Dashboard.Constructor = e
}(window.jQuery),

function(t) {
    "use strict";
    t(document).ready(function(e) {
        t.Dashboard.init()
    })
}(window.jQuery);





var briteChartApp = window.briteChartApp || {};
! function(i, e) {
    "use strict";
    var c = ["#727cf5", "#0acf97", "#6c757d", "#fa5c7c", "#ffbc00", "#39afd1", "#e3eaef"];
    e.createHorizontalBarChart = function(e, t) {
        var a = i(e).data("colors"),
            l = a ? a.split(",") : c.concat(),
            n = new britecharts.bar,
            u = d3.select(e),
            o = !!u.node() && u.node().getBoundingClientRect().width,
            r = !!u.node() && u.node().getBoundingClientRect().height;
        n.colorSchema(l).isAnimated(!0).isHorizontal(!0).width(o).margin({
            top: 10,
            left: 50,
            bottom: 20,
            right: 10
        }).enableLabels(!0).percentageAxisToMaxRatio(1.3).labelsNumberFormat(1).height(r), u.datum(t).call(n)
    }, i(function() {
        var e = [{
                name: "Mon",
                value: 29
            }, {
                name: "Tue",
                value: 54
            }, {
                name: "Wed",
                value: 72
            }, {
                name: "Thu",
                value: 87
            }, {
                name: "Fri",
                value: 132
            }, {
                name: "Sat",
                value: 161
            }, {
                name: "Sun",
                value: 179
            }];

        function u() {
            0 < i(".bar-container-horizontal").length && briteChartApp.createHorizontalBarChart(".bar-container-horizontal", e)
        }
        i(window).on("resize", function(e) {
            e.preventDefault(), setTimeout(u, 200)
        }), u()
    })
}(jQuery, briteChartApp);



options = {
    chart: {
        height: 230,
        type: "radialBar",
        toolbar: {
            show: !0
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: "60%",
                background: "#fff",
                image: void 0,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: !0,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: .24
                }
            },
            track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0,
                dropShadow: {
                    enabled: !0,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: .35
                }
            },
            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: -5,
                    show: !0,
                    color: "#888",
                    fontSize: "14px"
                },
                value: {
                    formatter: function(o) {
                        return o+"%"
                    },
                    offsetY: 10,
                    color: "#111",
                    fontSize: "32px",
                    show: !0,
                }
            }
        }
    },
    colors: ["#FBE947"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#33B132"],
            stops: [0, 100]
        }
    },
    series: [71],
    stroke: {
        lineCap: "round"
    },
    labels: ["Boady"]
};
(chart = new ApexCharts(document.querySelector("#gradient-chart"), options)).render();


options = {
    chart: {
        height: 230,
        type: "radialBar",
        toolbar: {
            show: !0
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: "60%",
                background: "#fff",
                image: void 0,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: !0,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: .24
                }
            },
            track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0,
                dropShadow: {
                    enabled: !0,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: .35
                }
            },
            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: -5,
                    show: !0,
                    color: "#888",
                    fontSize: "14px"
                },
                value: {
                    formatter: function(o) {
                        return o+"%"
                    },
                    offsetY: 10,
                    color: "#111",
                    fontSize: "32px",
                    show: !0,
                }
            }
        }
    },
    colors: ["#FBE947"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#33B132"],
            stops: [0, 100]
        }
    },
    series: [57],
    stroke: {
        lineCap: "round"
    },
    labels: ["Mental Health"]
};
(chart = new ApexCharts(document.querySelector("#gradient-chart1"), options)).render();

options = {
    chart: {
        height: 230,
        type: "radialBar",
        toolbar: {
            show: !0
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: "60%",
                background: "#fff",
                image: void 0,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: !0,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: .24
                }
            },
            track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0,
                dropShadow: {
                    enabled: !0,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: .35
                }
            },
            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: -5,
                    show: !0,
                    color: "#888",
                    fontSize: "14px"
                },
                value: {
                    formatter: function(o) {
                        return o+"%"
                    },
                    offsetY: 10,
                    color: "#111",
                    fontSize: "32px",
                    show: !0,
                }
            }
        }
    },
    colors: ["#FBE947"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#33B132"],
            stops: [0, 100]
        }
    },
    series: [83],
    stroke: {
        lineCap: "round"
    },
    labels: ["Lifestyle"]
};
(chart = new ApexCharts(document.querySelector("#gradient-chart2"), options)).render();










! function(r) {
    "use strict";

    function t() {}
    t.prototype.init = function() {
        this.initCurrencyBTC(), 
        this.initCurrencyBTC1(),
        this.initCurrencyBTC2(),
        this.initCurrencyCNY(), 
        this.initCurrencyCNY1(), 
        this.initCurrencyCNY2(), 
        this.initCurrencyETH(),
        this.initCurrencyETH1(), 
        this.initCurrencyETH2(), 
        this.initDayBalance(), 
        this.initWeekBalance(), 
        this.initMonthBalance(), 
        this.initYearBalance()
    }, 
    t.prototype.initCurrencyBTC = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-btc-chart").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-btc-chart"), e).render()
    },
    t.prototype.initCurrencyBTC1 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-btc-chart1").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-btc-chart1"), e).render()
    },
    t.prototype.initCurrencyBTC2 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-btc-chart2").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-btc-chart2"), e).render()
    }, 
    t.prototype.initCurrencyETH = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-eth-chart").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-eth-chart"), e).render()
    }, 
    t.prototype.initCurrencyETH1 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-eth-chart1").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-eth-chart1"), e).render()
    }, 
    t.prototype.initCurrencyETH2 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-eth-chart2").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "line",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: t,
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-eth-chart2"), e).render()
    }, 
    t.prototype.initCurrencyCNY = function() {
       var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
           a = r("#currency-cny-chart").data("colors");
       a && (t = a.split(","));
       var e = {
           chart: {
               type: "bar",
               height: 60,
               sparkline: {
                   enabled: !0
               }
           },
           plotOptions: {
               bar: {
                   columnWidth: "60%"
               }
           },
           colors: t,
           series: [{
               data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
           }],
           labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
           xaxis: {
               crosshairs: {
                   width: 1
               }
           },
           tooltip: {
               fixed: {
                   enabled: !1
               },
               x: {
                   show: !1
               },
               y: {
                   title: {
                       formatter: function(t) {
                           return ""
                       }
                   }
               },
               marker: {
                   show: !1
               }
           }
       };
       new ApexCharts(document.querySelector("#currency-cny-chart"), e).render()
   },
     t.prototype.initCurrencyCNY1 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-cny-chart1").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "bar",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "60%"
                }
            },
            colors: t,
            series: [{
                data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-cny-chart1"), e).render()
    },
    t.prototype.initCurrencyCNY2 = function() {
        var t = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            a = r("#currency-cny-chart2").data("colors");
        a && (t = a.split(","));
        var e = {
            chart: {
                type: "bar",
                height: 60,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "60%"
                }
            },
            colors: t,
            series: [{
                data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(t) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#currency-cny-chart2"), e).render()
    },
     r.DashboardWallet = new t, r.DashboardWallet.Constructor = t, r.DashboardWallet.init()
}(window.jQuery);

