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
});


