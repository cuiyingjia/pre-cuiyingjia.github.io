// JavaScript Document
$(document).ready(function(){
	var bg_color=new Array("#ffb770","#f25b26","#f82b2b","#b187ca","#42a7e1","#fdc222","#5b7ee9","#ffccbf","#86c357","#88ace4","#4bccd4","#bfd44b","#ff8c19","#f25b26","#eb667c","#f57558","#00ce9b");
	
	$("#mainnav ul li a").hover(
	  function () { 
		var bg_id=$(this).parent().attr("id");
		//alert($(this).children());
		$("body").stop();		
	  	$("body").animate({backgroundColor:bg_color[bg_id-1]},"fast");		
		$(this).children().stop();			
	  	$(this).children().animate({marginLeft:10},"fast");			
		$(this).children().show();
		//bg
		$("#iconstyle").stop();				
		$("#iconstyle").css({"backgroundImage":"url(./img/bg"+bg_id+".png)"});	
		$("#iconstyle").animate({marginLeft:0,opacity:1},"fast","linear");
		//$("#iconstyle").animate({transform:'rotate(60deg)'},"fast");
		
	  },
	  function () { 
		$("body").stop();	
	  	$("body").animate({backgroundColor:"#f5f5f5"},"fast");		
		$(this).children().stop();				
		$(this).children().css({marginLeft:0});			
		$(this).children().hide();		
		//bg		
		$("#iconstyle").stop();		
		$("#iconstyle").animate({marginLeft:360,opacity:0},"fast","linear",function(){			
			$("#iconstyle").css({marginLeft:-360});
			});			
	  }
	); 
});