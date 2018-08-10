// 轮播
        var moved=0,Wid=1226,setime=3000;
        var imgs=$("#big_banner_pic>li");
        var ul=$("#big_banner_pic");
        var as=$(".big_banner_idx>a");
         imgs.eq(0).removeClass('hidden').siblings('li').addClass('hidden')
            function autoPlay(){
                moved == imgs.length-1 ?moved= 0:moved++;
                qh(moved);
            }
            function qh(e){
                imgs.eq(e).fadeIn("slow").siblings().fadeOut("slow");
                as.eq(e).addClass('current').siblings().removeClass("current");
            }
            timer=setInterval(autoPlay,setime);
            $("#big_banner_pic_wrap").hover(
                function(){
                    clearInterval(timer);
                    timer=null;
                },
                function(){
                    timer=setInterval(autoPlay,setime);
               } )
            $(".big_banner_idx").on("click","a",function(){
                  var $a=$(this);
                  var i=$a.index();
                  moved=i;
                  qh(moved);  
            })
        // 轮播结束
    // 第二个轮播
        // 动态设置上边框颜色
        function colorchange(){
            return "rgb("+r+","+g+","+b+")";   
        }
        var ul=$("#head_hot_goods_content  ul");
        var lis=$("#head_hot_goods_content  li");
        for(var i=0;i<lis.length;i++){
            var r=parseInt(255*Math.random()+1);
            var g=parseInt(255*Math.random()+1);
            var b=parseInt(255*Math.random()+1);
            ul.children().eq(i).css("border-color",colorchange());
        }
        // 第二个轮播开始
                var xm=false;
            t= setInterval(function(){  
            
            if(xm==false){
                $("#head_hot_goods_content").children("ul").animate({
                left: "-1226px"
                }, 100);
                xm=true;
            }else if(xm==true){
                $("#head_hot_goods_content").children("ul").animate({
                left: "0"
            }, 100)
                xm=false;
            }
          },3000);
                $("#banner_mini_left").click(function(){
                    $("#head_hot_goods_content").children("ul").animate({
                        left: "0px"
                        },300)
                })
                $("#banner_mini_right").click(function(){
                    $("#head_hot_goods_content").children("ul").animate({
                        left: "-1226px"
                        },300)
                })
            // 轮播结束
        // 添加点击事件
        $("#head_right").focus(function(){
            var div=$(this).parent();
            div.css("border-color","#ff6700");
            div.children("a").css("border-color","#ff6700");
            div.children("ul").css("display","block");
            div.children('.item').fadeOut("linear");

        })
        $("#head_right").blur(function () {
            var div=$(this).parent();
           div.css("border-color","#ff6700");
            div.children("a").css("border-color","#ff6700");
            div.children('.item').fadeIn("linear");
            div.children("ul").css('display','none');
        })