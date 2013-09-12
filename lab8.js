	var content = document.getElementById('content');
		var counter = 10;
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		var imgObj = new Image();
		imgObj.src = 'greenbox.png';
		imgObj.width = 224;
		imgObj.height = 224;
		
		imgObj.onload = function() {
			var x = 10;
				y = 20;
				width = 16;
				height = 16;
				context.clearRect(0,0,500,400);
				context.drawImage(imgObj,x,y,width,height);
		};
		
		var opacity = 1;
		var contentTimer;
		
		//fade in
		function fade() {
		
			opacity -= .10;
			content.style.opacity =  opacity;
		}
		function updateFade() {
			
			if ( opacity <= 0 ) {
			
				clearInterval(contentTimer);
			} else {
				fade();
			}
		}
		
		function kickoffFade(){
		
			contentTimer = setInterval(updateFade, "100");
		}
		
		//show / 
		function show(){
		
				opacity+=.10;
				content.style.opacity = opacity;
			}
		
		function updateShow() {
			
			if ( opacity >=1 ) {
				
				clearInterval(contentTimer);
			} else {
				
			}
			show();
		}
		
		function kickoffShow(){
		
			contentTimer = setInterval(updateShow, "100");
		}
		
		
		
	var fadeIn = document.getElementById('fadeIn'); 
		fadeIn.addEventListener("click", kickoffFade);
		
	var fadeOut = document.getElementById('fadeOut'); 
		fadeOut.addEventListener("click", kickoffShow);
		
		//displays alert msg in 10 seconds
		setTimeout( 
		function ( ) {
		
			alert( "You have been on for 10 seconds" ); 
			
			}, 10000); 	
