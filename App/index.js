
ejecta.require('lib.js');
ejecta.require('sylvester.js');

var ctx = Sketch.create();

//const
var fontSize = Math.floor(ctx.width/6.5);
ctx.font =  fontSize + 'pt Helvetica';
ctx.textAlign = 'center';
ctx.textBaseline = 'center';
var textColor = ctx.color(240,240,240,.8);
var opacity = .8;
var circleRadius = ctx.width/15;
var bkg;
var lightGray = ctx.color(80,80,80,.2);
var darkGray = ctx.color(40,40,40,.2);
var playerOutlineRad = circleRadius*1.6;
var menuX = ctx.width/15;
var menuY = ctx.width/80;
var menuPadding = ctx.width/7;
var bkgCols;
var levelsPerSet = 6;
var blockWidth = (ctx.width-menuPadding*2)/2;
var blockHeight = (ctx.height-menuPadding*2)/3;

//load levels after ctx is created
ejecta.require('levels.js');

var colorScheme = levels[0].colorScheme;
var ballTypes;
var level;
var bestLevel;
var player;
var playerStart;
var playerSpeed = 3.0;
var circleSpeed = playerSpeed/2;
var balls;
var resets = 0; //number of tries for current level;
var numHits;
var hitsRequired;

//phases
var shootPhase;
var advancePhase;
var started = true;
var startedPullDown = false;
var menuPhase;

var globalSetup = function(){
	initLevel();
	//console.log(bestLevel);
	setup();
};

var setup = function(){

	bkgCols = [];
	for(var i=0; i<bkgs.length; i++){
		bkgCols[i] = ctx.color(bkgs[i].r,bkgs[i].g,bkgs[i].b,1);
	}

	ballTypes = {
		"BrickBall": BrickBall,
		"StickyBall": StickyBall,
		"MoveBall" : MoveBall
	};
	shootPhase = false;
 	advancePhase = false;
 	menuPhase = false;

 	//always show hint at level 1;
 	if(level == 0){
 		started = false;
 	}

 	var levelObj = levels[level];

 	//get color scheme
 	var baseLevel = Math.floor(level / levelsPerSet) * levelsPerSet;
 	colorScheme = levels[baseLevel].colorScheme;
 	
	var currPlayer = levelObj.player;

	var bkgCol = colorScheme.bkg;
	bkg = ctx.color(bkgCol.r,bkgCol.g,bkgCol.b,1);

	playerStart = $V([currPlayer.x,currPlayer.y]);
	player = new Player(currPlayer.x,
		currPlayer.y,circleRadius, colorScheme.player.r,
		colorScheme.player.g,colorScheme.player.b);
	var oldBallArray = balls;
	balls = [];
	var currBalls = levelObj.circles;
	numHits = 0;
	hitsRequired = currBalls.length;
	var currColor = 0;
	for(var i=0; i<currBalls.length; i++){
		var curr = currBalls[i];
		var rad = circleRadius;
		if(curr.rad){
			rad = curr.rad;
		}
		var randomColor = colorScheme.circles[currColor];
		currColor++;
		if(currColor >= colorScheme.circles.length){
			currColor = 0;
		}
		if(curr.type){
			//Bricks cannot be hit
			if(curr.type === 'BrickBall' || curr.type === 'StickyBall'){
				hitsRequired--;
			}
			balls.push(new ballTypes[curr.type](curr.x, curr.y, rad, randomColor.r,
				randomColor.g, randomColor.b, curr)); //also pass config object
		}else{
			var wasActive = true;
			if(oldBallArray && oldBallArray[i] && !oldBallArray[i].active){
				wasActive = false;
			}
			balls.push(new Ball(curr.x, curr.y, rad, randomColor.r,
				randomColor.g, randomColor.b, wasActive));
		}
		//console.log(curr.y);
		
	}
};

ctx.draw = function(){

	ctx.backgroundColor(bkg);

	if(!started && !advancePhase){
		drawStart();
	}

	player.render();
	for(var i=0; i<balls.length; i++){
		balls[i].render();
	}

	//draw advance text, or current level number
	ctx.font =  fontSize + 'pt Helvetica';
	if(advancePhase){
		ctx.fillStyle = textColor;
		ctx.textAlign = 'center';
		ctx.font =  (fontSize+20) + 'pt Helvetica';
		ctx.fillText('tap to', ctx.width/2, ctx.height/4);
		ctx.font =  fontSize + 'pt Helvetica';
		ctx.fillText('advance.', ctx.width/2, ctx.height/4 + fontSize*1.5);
	}else{
		ctx.textAlign = 'left';
		ctx.fillStyle = textColor;
		ctx.fillText((level+1)+"", fontSize/6, fontSize*1.1);
	}

	drawMenu();
	

};

ctx.onTouch = function(x,y){
	if(!started){
		startedPullDown = true;
	}
	if(!menuPhase){
		if(!shootPhase && !advancePhase){
			restart();
			var dist = playerStart.distanceFrom($V([x,y]));
			if(dist < playerOutlineRad){
				shootPhase = true;
			}
		}
		if(x > ctx.width - menuX*2 && y < menuY*11){
			menuPhase = true;
		}
	}else{
		//menu action
		var sMouseY = y - menuPadding;
		var sMouseX = x - menuPadding;
		var numY = Math.floor(sMouseY/blockHeight);
		var numX = Math.floor(sMouseX/blockWidth);
		if(numY >= 0 && numY < 3 && numX >= 0 && numX < 2){
			var levelNum = (numX + 2*numY)*levelsPerSet;
			//console.log(numX + " " + numY);
			if(levels[levelNum] && bestLevel >= levelNum){
				loadLevel(levelNum);
			}
		}
		menuPhase = false;
	}
	
};

ctx.onTouchMove = function(x,y){
	if(shootPhase && !advancePhase){
		var px = player.circle.pos.elements[0];
		var py = player.circle.pos.elements[1];
		var diffX = x-px;
		var diffY = y-py;
		var pow = 3/4;
		if(diffX<0){
			diffX = -Math.pow(-diffX,pow);
		}else{
			diffX = Math.pow(diffX,pow);
		}
		if(diffY<0){
			diffY = -Math.pow(-diffY,pow);
		}else{
			diffY = Math.pow(diffY,pow);
		}
		player.circle.pos.elements[0] = playerStart.elements[0] + diffX;
		player.circle.pos.elements[1] = playerStart.elements[1] + diffY;
	}
};

ctx.onTouchEnd = function(x,y){
	if(shootPhase){
		var dist = playerStart.distanceFrom($V([x,y]));
		if(dist > playerOutlineRad){
			shootPhase = false;
			var px = player.circle.pos.elements[0];
			var py = player.circle.pos.elements[1];

			var newV = $V([px-x, py-y]);
			newV = newV.toUnitVector();
			newV = newV.multiply(playerSpeed);
			player.v = newV;
		}else{
			player.circle.pos = $V([playerStart.elements[0],
				playerStart.elements[1]]);
		}
	}
	if(advancePhase){
		advance();
	}	
};

var getLevel = function(){
	return parseInt(localStorage.getItem('level'),10);
}

var setLevel = function(lev){
	localStorage.setItem('level',lev);
}

//initializes level variable on setup
var initLevel = function(){
	var lastLevel = getLevel();
	if(lastLevel){
		level = lastLevel;
		bestLevel = level;
	}else{
		setLevel(0);
		level = 0;
		bestLevel = 0;
	}
}

//does not increment level variable, persists it
var incLevel = function(){
	var currLevel = getLevel();
	if(level > currLevel){
		localStorage.setItem('level', level);
		bestLevel = level;
	}
}

var drawMenu = function(){
	//draw menu icon
	if(!menuPhase){
		ctx.fillStyle = textColor;
		for(var i=0; i<3; i++){
			ctx.rect(ctx.width-menuX-10, 10 + i*(menuY*5/2), menuX, menuY);
		}
	}else{
		//draw menu
		ctx.fillStyle = textColor;
		ctx.rect(menuPadding*3/4,menuPadding*3/4,ctx.width-menuPadding*3/2,
			ctx.height-menuPadding*3/2);
		ctx.font =  fontSize/2 + 'pt Helvetica';
		var counter = 0;

		for(var y=0; y<3; y++){
			for(var x=0; x<2; x++){
				var pX = menuPadding + blockWidth*x;
				var pY = menuPadding + blockHeight*y;
				var num = x+2*y;
				if(counter <= bestLevel){
					ctx.fillStyle = bkgCols[num];
				}else{
					ctx.fillStyle = lockedBkg;
				}
				ctx.rect(pX,pY,blockWidth,blockHeight);
				ctx.fillStyle = textColor;
				ctx.fillText((counter + 1) + "-" + (counter + levelsPerSet),
				 pX+blockWidth/15, pY+blockHeight*14/15);
				counter += levelsPerSet;
			}
		}
		
		
	}
		
};

var restart = function(){
	shootPhase = true;
	resets++;
	setup();
};

var loadLevel = function(toLevel){
	started = true;
	startedPullDown = false;
	level = toLevel;
	resets = 0;
	setup();
};

var advance = function(){
	started = true;
	startedPullDown = false;
	level++;
	resets = 0;
	incLevel();
	setup();
};

var drawStart = function(){
	ctx.textAlign = 'center';
	ctx.font =  fontSize + 'pt Helvetica';
	if(!startedPullDown){
		ctx.fillStyle = textColor;
		ctx.fillText('pull down', ctx.width/2, ctx.height/2);
		ctx.fillStyle = darkGray;
		ctx.arrow(playerStart.elements[0],playerStart.elements[1] + circleRadius/2
			,ctx.width/10, ctx.height/5,false);
	}else{
		ctx.fillStyle = textColor;
		ctx.fillText('release', ctx.width/2, ctx.height/2 - circleRadius);
		ctx.fillStyle = lightGray;
	}
};

var Circle = function(x, y, rad, r, g, b){
	this.c = ctx.color(r,g,b,opacity);
	this.rad = rad;
	this.pos = $V([x,y]);
	if(resets == 0){
		this.tweens = {
			c: this.c,
			rad: 0,
			pos: $V([x,0-ctx.random(circleRadius*2, circleRadius*20)])
		};
	}else{
		this.tweens = {
			c: this.c,
			rad: this.rad,
			pos: $V([x,y])
		};
	}
	
	//basic rendering, without tweening
	this.render = function(){
		ctx.fillStyle = this.c;
		ctx.circle(this.pos.elements[0], this.pos.elements[1], this.rad);
	};

	//tween radius and position
	this.tween = function(){
		this.tweens.rad += (this.rad - this.tweens.rad)*.1;
		//tweening x position is not necessary
		//this.tweens.pos.elements[0] += (this.pos.elements[0] - 
		//		this.tweens.pos.elements[0])*.1;
		this.tweens.pos.elements[1] += (this.pos.elements[1] - 
				this.tweens.pos.elements[1])*.1;
		ctx.fillStyle = this.c;
		ctx.circle(this.tweens.pos.elements[0], 
			this.tweens.pos.elements[1], this.tweens.rad);
	};

	//only tween radius
	this.tweenRad = function(){
		this.tweens.rad += (this.rad - this.tweens.rad)*.1;
		ctx.fillStyle = this.c;
		ctx.circle(this.pos.elements[0], 
			this.pos.elements[1], this.tweens.rad);
	}
};

var Player = function(x, y, rad, r, g, b){
	this.circle = new Circle(x,y,rad,r,g,b);
	this.v = $V([0,0]);

	this.render = function(){
		var posX = this.circle.pos.elements[0];
		var posY = this.circle.pos.elements[1];
		if(!advancePhase && (posX > ctx.width + this.circle.rad + 50 || 
			posX + this.circle.rad + 50 < 0 ||
			posY + this.circle.rad + 50 < 0 ||
			posY > ctx.height + this.circle.rad + 50)){

			restart();
		}
		this.bounceCheck();
		this.circle.pos = this.circle.pos.add(this.v);
		ctx.fillStyle = lightGray;
		ctx.circle(playerStart.elements[0], playerStart.elements[1], playerOutlineRad);
		this.circle.render();
	};

	this.bounceCheck = function(){
		for(var i=0; i<balls.length; i++){
			if(balls[i].affect(this)){
				return;
			}
		}
	};
};

var Ball = function(x, y, rad, r, g, b, wasActive){
	this.circle = new Circle(x,y,rad,r,g,b);
	//only tween radius if the ball was taken out
	if(wasActive == false){
		this.circle.tweens.rad = 0;
	}
	this.active = true;

	this.render = function(){
		this.circle.tween();
	};

	this.affect = function(ball){

		if(!this.active){
			return false;
		}

		var d = this.circle.pos.distanceFrom(ball.circle.pos);
		var posX = this.circle.pos.elements[0];
		var posY = this.circle.pos.elements[1];
		var bPosX = ball.circle.pos.elements[0];
		var bPosY = ball.circle.pos.elements[1];

		if(d < (this.circle.rad + ball.circle.rad)){
			var averagePos = $V([(posX+bPosX)/2,(posY+bPosY)/2]);
			var bdX = ball.circle.pos.subtract(this.circle.pos);
			var v = ball.v.add(bdX)
			v = v.toUnitVector();
			v = v.multiply(playerSpeed);
			ball.v = v;

			//remove ball
			this.active = false;
			this.circle.rad = 0;

			//advance hits
			numHits++;
			if(numHits >= hitsRequired){
				advancePhase = true;
			}
			return true;
		}
		return false;
	}
};

var BrickBall = function(x, y, rad, r, g, b){
	this.circle = new Circle(x,y,rad,50,50,50);
	this.active = true;

	this.render = function(){
		this.circle.tween();
	};

	this.affect = function(ball){

		if(!this.active){
			return false;
		}

		var d = this.circle.pos.distanceFrom(ball.circle.pos);
		var posX = this.circle.pos.elements[0];
		var posY = this.circle.pos.elements[1];
		var bPosX = ball.circle.pos.elements[0];
		var bPosY = ball.circle.pos.elements[1];

		if(d < (this.circle.rad + ball.circle.rad)){
			var averagePos = $V([(posX+bPosX)/2,(posY+bPosY)/2]);
			var bdX = ball.circle.pos.subtract(this.circle.pos);
			var v = ball.v.add(bdX)
			v = v.toUnitVector();
			v = v.multiply(playerSpeed);
			ball.v = v;
			return true;
		}
		return false;
	}

};

var StickyBall = function(x, y, rad, r, g, b){
	this.circle = new Circle(x,y,rad,240,240,240);
	this.active = true;

	this.render = function(){
		this.circle.tween();
	};

	this.affect = function(ball){

		if(!this.active){
			return false;
		}
		var d = this.circle.pos.distanceFrom(ball.circle.pos);
		var posX = this.circle.pos.elements[0];
		var posY = this.circle.pos.elements[1];
		var bPosX = ball.circle.pos.elements[0];
		var bPosY = ball.circle.pos.elements[1];

		if(d < (this.circle.rad + ball.circle.rad)){
			ball.v = $V([0,0]);
			return true;
		}
		return false;
	}
};

var MoveBall = function(x, y, rad, r, g, b, config){
	this.circle = new Circle(x,y,rad,r,g,b);
	this.circle.tweens.rad = 0;
	this.active = true;
	this.moveAmount = ctx.width/5;
	this.moved = 0;
	this.from = $V([x,y]);
	this.to = $V([config.toX,config.toY]);

	this.v = this.to.subtract(this.circle.pos);
	this.v = this.v.toUnitVector();
	this.v.multiply(circleSpeed);
	this.dir = true; //going in first direction

	this.render = function(){
		var dist;
		if(this.dir){
			dist = this.circle.pos.distanceFrom(this.to);

		}else{
			dist = this.circle.pos.distanceFrom(this.from);
		}
		//reverse velocity
		if(dist < circleSpeed){
				this.dir = !this.dir;
				this.v = this.v.multiply(-1);
		}
		this.circle.pos = this.circle.pos.add(this.v);
		this.circle.tweenRad();

	};

	this.affect = function(ball){

		if(!this.active){
			return false;
		}

		var d = this.circle.pos.distanceFrom(ball.circle.pos);
		var posX = this.circle.pos.elements[0];
		var posY = this.circle.pos.elements[1];
		var bPosX = ball.circle.pos.elements[0];
		var bPosY = ball.circle.pos.elements[1];

		if(d < (this.circle.rad + ball.circle.rad)){
			var averagePos = $V([(posX+bPosX)/2,(posY+bPosY)/2]);
			var bdX = ball.circle.pos.subtract(this.circle.pos);
			var v = ball.v.add(bdX)
			v = v.toUnitVector();
			v = v.multiply(playerSpeed);
			//add extra velocity
			v = v.add(this.v);
			ball.v = v;

			//remove ball
			this.active = false;
			this.circle.rad = 0;

			//advance hits
			numHits++;
			if(numHits >= hitsRequired){
				advancePhase = true;
			}
			return true;
		}
		return false;
	};

};

globalSetup();
