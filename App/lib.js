
var Sketch = {};

Sketch.create = function( options ) {
	var w = window.innerWidth;
	var h = window.innerHeight;
	var interval = 16;
	if(options && options.width){
		w = options.width;
	}
	if(options && options.height){
		h = options.height;
	}
	if(options && options.interval){
		interval = options.interval;
	}
	var canvas = document.getElementById('canvas');
	canvas.MSAAEnabled = true;
	
	var ctx = canvas.getContext('2d');

	// defaults
	ctx.draw = function(){};
	ctx.onTouchMove = function(){};
	ctx.onTouch = function(){};
	ctx.onTouchEnd = function(){};

	ctx.drawInterval = function(){
		ctx.draw();
	};

	setInterval( ctx.drawInterval, interval);

	document.addEventListener('touchmove', function( ev ) {
        ctx.onTouchMove(ev.touches[0].pageX, ev.touches[0].pageY);
    }, false );

    document.addEventListener('touchstart', function( ev ) {
    	ctx.onTouch(ev.touches[0].pageX, ev.touches[0].pageY);
	}, false );

	document.addEventListener('touchend', function( ev ) {
		ctx.onTouchEnd(ev.touches[0].pageX, ev.touches[0].pageY);
	}, false );
	
	Sketch.helpers(ctx);

	return ctx;

};

Sketch.helpers = function(ctx){

	ctx.color = function(r, g, b, a){
		return 'rgba(' + r + ',' + g + ',' + b + ',' + a  + ')';
	};

	/* Fill color rgb(r,g,b,a)
	* 	a is optional
	*/
	ctx.fillColor = function(r, g, b, a){
		if(!a){
			a = 1;
		}
		ctx.fillStyle = ctx.color(r,g,b,a);
	};

	ctx.rect = function(x, y, w, h){
		ctx.fillRect(x,y,w,h);
	}

	ctx.background = function(r, g, b, a){
		if(!a){
			a = 1;
		}
		ctx.fillStyle = ctx.color(r,g,b,a);
		ctx.rect(0,0,ctx.width,ctx.height);
	}

	ctx.backgroundColor = function(color){
		ctx.fillStyle = color;
		ctx.rect(0,0,ctx.width,ctx.height);
	}

	ctx.circle = function(x, y, r){
		ctx.beginPath();
    	ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    	ctx.fill();
	}

	ctx.triangle = function(x1, y1, x2, y2, x3, y3){
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.lineTo(x3, y3);
		ctx.lineTo(x1, y1);
		ctx.fill();
	}

	ctx.random = function(r1,r2){
		return Math.random()*(r2-r1) + r1;
	}

	ctx.arrow = function(x1, y1, w, h, dir){
		if(dir){
			ctx.triangle(x1,y1,x1+w,y1+h/5,x1-w,y1+h/5);
			ctx.rect(x1-w/2,y1+h/5,w,h*4/5);
		}else{
			ctx.triangle(x1,y1+h,x1+w,y1+h*4/5,x1-w,y1+h*4/5);
			ctx.rect(x1-w/2,y1,w,h*4/5);
		}
	}



};




              
              

