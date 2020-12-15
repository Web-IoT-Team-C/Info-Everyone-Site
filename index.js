$(function(){

    /**
     * 施設感染危険度
     * データ表示
     */
    $(".dataInfo").each(function() {
        var $bar = $(this).find(".dataInfo_bar"),
            $pct = $(this).find(".dataInfo_parcent"),
            data = $bar.data("bar");
        
        setTimeout(function() {
          $bar
            .css("background-color", data.color)
            .animate({
              "width": $bar.data("parcent")
          }, data.speed || 2000, function() {
            $pct.css({
              "color": data.color,
              "opacity": 1
            });
          });
        }, data.delay || 0);
      });





      $(document).ready(function(){
        $(".widget-meter").addClass("meter-status");
        var Mrotate1 = $("#nxt-meter-status").attr("data-meter");
        var Mrotate = 1.33 * Mrotate1;
        $("#nxt-need-tocomplete").text(100 - Mrotate1);
      var statusStep = 0;
        function statusfunction(){
        $("#nxt-meter-status span").text(statusStep);
            if( statusStep < Mrotate1 ){
                statusStep = ( statusStep + 1);
                setTimeout(function(){
                    statusfunction();
                },2000/ Mrotate1 );
            }
        }
        statusfunction();
            $(document).ready(function () {
            $('#MyDiv2').animate(
                { deg: 133 },
                {
                  duration: 1000,
                  step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                }
              );
            $('#MyDiv2').animate(
                { deg: Mrotate },
                {
                  duration: 2000,
                  step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                }
              );		
            });
        });









        function generateNumber(min, max) {
            min = typeof min !== "undefined" ? min : 1;
            max = typeof max !== "undefined" ? max : 100;
        
            return Math.floor(Math.random() * max + min);
          }
        
          var chart,
            categories = [
              "Categorie 1",
              "Categorie 2",
              "Categorie 3",
              "Categorie 4",
              "ategorie 5",
              "Categorie 6",
              "ategorie 7",
              "Categorie 8",
              "Categorie 9",
              "Categorie 10",
              "Categorie 11",
              "Categorie 12",
              "Categorie 13",
              "Categorie 14",
              "Categorie 15",
              "Categorie 16",
              "Categorie 17",
              "Categorie 18",
              "Categorie 19",
              "Categorie 20",
              "Categorie 21",
              "Categorie 22",
              "Categorie 23",
              "Categorie 24",
              "Categorie 25",
              "Categorie 26",
              "Categorie 27",
              "Categorie 28",
              "Categorie 29",
              "Categorie 30"
            ],
            serie1 = [
              13,
              13,
              46,
              61,
              23,
              12,
              24,
              16,
              14,
              12,
              12,
              24,
              19,
              13,
              11,
              11,
              14,
              11,
              11,
              11,
              11,
              13,
              22,
              10,
              18,
              15,
              24,
              31,
              19,
              10
            ],
            serie2 = [
              52,
              41,
              58,
              63,
              55,
              46,
              45,
              41,
              38,
              54,
              50,
              39,
              48,
              70,
              63,
              60,
              58,
              63,
              83,
              89,
              83,
              79,
              83,
              100,
              104,
              108,
              52,
              46,
              83,
              89
            ],
            $aapls;
        
          $(document).ready(function () {
            chart = new Highcharts.Chart({
              chart: {
                renderTo: "graph",
                type: "column",
                backgroundColor: "transparent",
                height: 151,
                marginLeft: 3,
                marginRight: 3,
                marginBottom: 0,
                marginTop: 0
              },
              title: {
                text: ""
              },
              xAxis: {
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                  enabled: false
                },
                categories: categories
              },
              yAxis: {
                labels: {
                  enabled: false
                },
                gridLineWidth: 0,
                title: {
                  text: null
                }
              },
              series: [
                {
                  name: "Awesomness",
                  data: serie1
                },
                {
                  name: "More Awesomness",
                  color: "#fff",
                  type: "line",
                  data: serie2
                }
              ],
              credits: {
                enabled: false
              },
              legend: {
                enabled: false
              },
              plotOptions: {
                column: {
                  borderWidth: 0,
                  color: "#3d9e68",
                  shadow: false
                },
                line: {
                  marker: {
                    enabled: false
                  },
                  lineWidth: 3
                }
              },
              tooltip: {
                enabled: false
              }
            });
        
            setInterval(function () {
              chart.series[0].addPoint(generateNumber(), true, true);
              chart.series[1].addPoint(generateNumber(50, 150), true, true);
            }, 1000);
        
            setInterval(function () {
              $(".info-aapl span").each(function (index, elem) {
                $(elem).animate({
                  height: generateNumber(1, 40)
                });
              });
            }, 3000);
          });
});


