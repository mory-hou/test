//当前页
var nowpage = 0;

$(document).ready(function() {
//取一下窗口的宽和高
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	$('.content').width(width);
	$('.content').height(7*height);
	
	$('.page').width(width);
	$('.page').height(height);
	
	$('.content').swipe({swipe:function(event,direction,distance,duration,fingerCount){				//swipe (事件，滑动的方向，滑动的距离，一次滑动的时间 , 几根手指)
		if(direction == 'up'){
			nowpage++;
		}
		else if (direction == 'down'){
			nowpage--;
		}
		if (nowpage > 6){
			nowpage = 6;
		}
		if (nowpage < 0){
			nowpage = 0;
		}
		$('.content').animate({top:nowpage * -100 + '%'},{duration:400,complete:animationOfPage()});
	}});
	
		setTimeout(function(){
			$('.page1-3').fadeIn(2000,function(){
				$('.page1-7').animate({top:'40%',opacity:1},1000,'linear',function(){
				$('.page1-6').animate({bottom:'30%',opacity:1},1000,'linear',function(){
					$('.page1-1').fadeIn(1200);
					$('.page1-2').fadeIn(1200);
					$('.page1-5').fadeIn(1200);
				});
			});
			});
		},1000);
	
	
	$('.musicBtn').click(function(){
		var music = document.getElementById("music");
		if(music.paused){
			this.src = 'img/musicBtn.png';
			music.play();
		}
		else{
			this.src = 'img/musicBtnOff.png';
			music.pause();
		}
	});
	
	$('.page5-2').click(function(){
			$('.page5-3').css('display','block');
	});
	
	lightMove('.toplight');
	lightMove('.bottomlight');
});

function animationOfPage () {
	if(nowpage == 1) {
		$('.page2-1').animate({opacity:1,width:'50%',height:'50%',top:'10%',left:'25%'},1000,'linear');
		$('.page2-3').animate({opacity:1,width:'90%',height:'60%',left:'8%',top:'5%'},1000,'linear',function(){
			$('.page2-2').fadeIn(1000,function(){
				$('.page2-4').fadeIn(1000);
			});
		});
	}
	if(nowpage == 2){
		$('.page3-4').animate({opacity:1,left:'5%'},2000,'linear',function(){
			$('.page3-3').fadeIn(1000,function(){
				$('.page3-1').fadeIn(1000,function(){
					$('.page3-2').animate({opacity:1,top:'7%'},1000,'linear');
				});
			});
		});
	}
	
	if(nowpage == 3){
		$('.page4-1').fadeIn(2000,function(){
			$('.page4-2').fadeIn(1000,function(){
				$('.page4-3').fadeIn(1000,function(){
					$('.page4-5').fadeIn(1000,function(){
						$('.page4-4').fadeIn(1000);
					});
				});
			});
		});
	}
	if(nowpage == 4){
		$('.page5-1').animate({top:'0%',opacity:1},1500,'linear',function(){
			$('.page5-4').animate({right:'0%',opacity:1},1500,'linear');
		});
	}
	if(nowpage == 5){
		$('.page6-1').animate({top:'0%',opacity:1},1500,'linear',function(){
			$('.page6-2').fadeIn(1000,function(){
				$('.page6-3').fadeIn(1000,function(){
					$('.page6-4').fadeIn(1000,function(){
						$('.page6-5').fadeIn(1000);
					});
				});
			});
		});
	}
	
	if(nowpage == 6){
		setTimeout(function(){
			$('.page7-2').fadeIn(2000,function(){
			$('.page7-1').animate({top:'5%',opacity:1},1500,'linear',function(){
				$('.author').fadeIn(2000);
			});
		});
		},1000);
	}
}

function lightMove(obj){
	$(obj).animate({'left':'-1%'},3000,'linear',function(){
		$(obj).animate({'left':'-100%'},0);
		lightMove(obj);
	});
}
