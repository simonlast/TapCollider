
var bkgs = [
	{r:59,g:129,b:131},
	{r:211,g:100,b:59},
	{r:93,g:65,b:87},
	{r:255,g:78,b:80},
	{r:53,g:92,b:125},
	{r:110,g:158,b:134}

];

var lockedBkg = ctx.color(150,150,150,.8);

var levels = [
	{
		colorScheme: {
			bkg: bkgs[0],
			circles: [
				{r:245,g:99,b:74},
				{r:255,g:156,b:91},
				{r:250,g:208,b:137}
			],
			player: {r:255,g:156,b:91}
		},
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width/2, y:ctx.height*1/4}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1.5/7},
		{x:ctx.width*2/3, y:ctx.height*2.5/7}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height*1/3},
		{x:ctx.width*3/4, y:ctx.height*1/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/3},
		{x:ctx.width*2/3, y:ctx.height*1/3},
		{x:ctx.width*1/2, y:ctx.height*1/5}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height*1/5},
		{x:ctx.width*1/4, y:ctx.height*1/2},
		{x:ctx.width*3/4, y:ctx.height*1/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/5},
		{x:ctx.width*1/4, y:ctx.height*2/5},
		{x:ctx.width*2/3, y:ctx.height*1/5},
		{x:ctx.width*3/4, y:ctx.height*2/5}
		]
	},
	{
		colorScheme: {
			bkg: bkgs[1],
			circles: [
				{r:237,g:235,b:230},
				{r:214,g:225,b:199},
				{r:148,g:199,b:182}
			],
			player: {r:148,g:199,b:182}
		},
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/3},
		{x:ctx.width*2/3, y:ctx.height*1/3},
		{x:ctx.width*1/3, y:ctx.height*1/3, rad: circleRadius*2/3},
		{x:ctx.width*2/3, y:ctx.height*1/3, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/3},
		{x:ctx.width*2/3, y:ctx.height*1/3},
		{x:ctx.width*2/3, y:ctx.height*1/3, rad: circleRadius*2/3},
		{x:ctx.width*1/2, y:ctx.height*1/5},
		{x:ctx.width*1/2, y:ctx.height*1/5, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/3},
		{x:ctx.width*2/3, y:ctx.height*1/3},
		{x:ctx.width*1/2, y:ctx.height*3/4},
		{x:ctx.width*1/3, y:ctx.height*1/3, rad: circleRadius*2/3},
		{x:ctx.width*2/3, y:ctx.height*1/3, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/4},
		{x:ctx.width*1/4, y:ctx.height*1/2},
		{x:ctx.width*2/3, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*1/2},
		{x:ctx.width*2/3, y:ctx.height*1/4, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*3/4, y:ctx.height*1/4},
		{x:ctx.width*1/4, y:ctx.height*3/4},
		{x:ctx.width*1/4, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*3/4},
		{x:ctx.width*3/4, y:ctx.height*3/4, rad: circleRadius*2/3},
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/4, y:ctx.height*1/3},
		{x:ctx.width*3/4, y:ctx.height*1/3},
		{x:ctx.width*1/2, y:ctx.height*1/5},
		{x:ctx.width*1/2, y:ctx.height*1/5, rad: circleRadius*2/3},
		{x:ctx.width*1/2, y:ctx.height*3/4}
		]
	},
	{
		colorScheme: {
			bkg: bkgs[2],
			circles: [
				{r:168,g:202,g:186},
				{r:202,g:215,g:178},
				{r:235,g:227,g:170}
			],
			player: {r:235,g:227,g:170}
		},
		player: {x: ctx.width/2, y:ctx.height*3/4},
		circles: [
		{x:ctx.width*1/6, y:ctx.height*1/2, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/2, type:'BrickBall'},
		{x:ctx.width*5/6, y:ctx.height*1/2, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/5}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/2, type:'BrickBall'},
		{x:ctx.width*2/3, y:ctx.height*1/2, type:'BrickBall'},
		{x:ctx.width*1/4, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*1/4},
		{x:ctx.width*1/2, y:ctx.height*1/5}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*3/4},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*1/7, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/5, y:ctx.height*1/3},
		{x:ctx.width*4/5, y:ctx.height*1/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/3, y:ctx.height*1/2, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*2/3, y:ctx.height*1/2, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*2/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/4, y:ctx.height*3/4},
		{x:ctx.width*3/4, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*3/4}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*1/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*2/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*3/4, y:ctx.height*1/5},
		{x:ctx.width*1/4, y:ctx.height*2/3},
		{x:ctx.width*3/4, y:ctx.height*2/3},
		{x:ctx.width*3/4, y:ctx.height*2/3, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*1/4, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*3/4, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/4, y:ctx.height*1/2, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*3/4, y:ctx.height*1/2, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/4, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*1/4},
		{x:ctx.width*1/4, y:ctx.height*3/4},
		{x:ctx.width*3/4, y:ctx.height*3/4}
		]
	},
	{
		colorScheme: {
			bkg: bkgs[3],
			circles: [
				{r:252,g:145,b:58},
				{r:249,g:212,b:35},
				{r:237,g:229,b:116}
			],
			player: {r:249,g:212,b:35}
		},
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*1/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/6, y:ctx.height*2/3, type:'BrickBall'},
		{x:ctx.width*5/6, y:ctx.height*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/4},
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*3/4, y:ctx.height*2/5, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/4, y:ctx.height*2/5, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/2, y:ctx.height*1/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/6, y:ctx.height*2/3, type:'BrickBall'},
		{x:ctx.width*5/6, y:ctx.height*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/4},
		]
	},
	{
		player: {x: ctx.width*1/4, y:ctx.height*1/4},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*1/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/4, y:ctx.height*3/4},
		{x:ctx.width*3/4, y:ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*3/4}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/2, y:ctx.height*3/4, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/2, y:ctx.height*1/5},
		{x:ctx.width*1/2, y:ctx.height*1/5, rad: circleRadius*2/3},
		{x:ctx.width*1/4, y:ctx.height*3/4},
		{x:ctx.width*3/4, y:ctx.height*3/4}
		]
	},
	{
		player: {x: ctx.width*3/4, y:ctx.height*1/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*3/4, y:ctx.height/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/4, y:ctx.height*1/3},
		{x:ctx.width*1/4, y:ctx.height*2/3},
		{x:ctx.width*3/4, y:ctx.height*2/3}
		]
	},
	{
		player: {x: ctx.width*3/4, y:ctx.height*1/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*3/4, y:ctx.height/2, rad: circleRadius*2/3, type:'StickyBall'},
		{x:ctx.width*1/4, y:ctx.height*1/3},
		{x:ctx.width*1/4, y:ctx.height*2/3},
		{x:ctx.width*1/4, y:ctx.height*2/3, rad: circleRadius*2/3},
		{x:ctx.width*3/4, y:ctx.height*2/3},
		{x:ctx.width*3/4, y:ctx.height*2/3, rad: circleRadius*2/3}
		]
	},
	{
		colorScheme: {
			bkg: bkgs[4],
			circles: [
				{r:192,g:108,b:132},
				{r:246,g:114,b:128},
				{r:248,g:177,b:149}
			],
			player: {r:248,g:177,b:149}
		},
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height*1/4, type:'MoveBall', toX:ctx.width*3/4,
			toY: ctx.height*1/4}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/4, y:ctx.height*1/4, type:'MoveBall', toX:ctx.width*3/4,
			toY: ctx.height*1/4},
		{x:ctx.width*3/4, y:ctx.height*1/2, type:'MoveBall', toX:ctx.width*1/4,
			toY: ctx.height*1/2}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/5, y:ctx.height*1/4, type:'MoveBall', toX:ctx.width*2/5,
			toY: ctx.height*1/2},
		{x:ctx.width*3/5, y:ctx.height*1/2, type:'MoveBall', toX:ctx.width*4/5,
			toY: ctx.height*1/4},
		{x:ctx.width*1/2, y:ctx.height*1/6},
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height*2/3},
		circles: [
		{x:ctx.width*1/5, y:ctx.height*1/6, type:'MoveBall', toX:ctx.width*1/5,
			toY: ctx.height*2/6},
		{x:ctx.width*4/5, y:ctx.height*2/6, type:'MoveBall', toX:ctx.width*4/5,
			toY: ctx.height*1/6},
		{x:ctx.width*1/2, y:ctx.height*2/6, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/2, y:ctx.height*1/6, rad: circleRadius*2/3}
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*1/5, y:ctx.height*2/5, type:'MoveBall', toX:ctx.width*2/5,
			toY: ctx.height*1/5},
		{x:ctx.width*1/5, y:ctx.height*2/5, rad: circleRadius*2/3, type:'MoveBall',
			toX:ctx.width*2/5, toY: ctx.height*1/5},
		{x:ctx.width*4/5, y:ctx.height*2/5, type:'MoveBall', toX:ctx.width*3/5,
			toY: ctx.height*1/5},
		{x:ctx.width*4/5, y:ctx.height*2/5, rad: circleRadius*2/3, type:'MoveBall',
			 toX:ctx.width*3/5, toY: ctx.height*1/5},
		{x:ctx.width*1/2, y:ctx.height*4/5},
		]
	},
	{
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*2/5, y:ctx.height*1/5, type:'MoveBall', toX:ctx.width*3/5,
			toY: ctx.height*1/5},
		{x:ctx.width*3/5, y:ctx.height*4/5, type:'MoveBall', toX:ctx.width*2/5,
			toY: ctx.height*4/5},
		{x:ctx.width*1/5, y:ctx.height*2/5, type:'MoveBall', toX:ctx.width*1/5,
			toY: ctx.height*3/5},
		{x:ctx.width*4/5, y:ctx.height*3/5, type:'MoveBall', toX:ctx.width*4/5,
			toY: ctx.height*2/5},
		{x:ctx.width*1/5, y:ctx.height*1/5, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*1/5, y:ctx.height*4/5, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*4/5, y:ctx.height*1/5, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width*4/5, y:ctx.height*4/5, rad: circleRadius*2/3, type:'BrickBall'},
		]
	},
	{
		colorScheme: {
			bkg: bkgs[5],
			circles: [
				{r:231,g:231,b:157},
				{r:192,g:216,b:144},
				{r:216,g:168,b:120}
			],
			player: {r:216,g:168,b:120}
		},
		player: {x: ctx.width/2, y:ctx.height/2},
		circles: [
		{x:ctx.width*2/5, y:ctx.height*3/12, type:'MoveBall', toX:ctx.width*3/5,
			toY: ctx.height*1/12},
		{x:ctx.width*3/5, y:ctx.height*9/12, type:'MoveBall', toX:ctx.width*2/5,
			toY: ctx.height*11/12},
		{x:ctx.width*1/5, y:ctx.height*2/5, type:'MoveBall', toX:ctx.width*1/5,
			toY: ctx.height*3/5},
		{x:ctx.width*4/5, y:ctx.height*3/5, type:'MoveBall', toX:ctx.width*4/5,
			toY: ctx.height*2/5},
		{x:ctx.width/2, y:ctx.height*1/3, rad: circleRadius*2/3, type:'BrickBall'},
		{x:ctx.width/2, y:ctx.height*2/3, rad: circleRadius*2/3, type:'BrickBall'}
		]
	}

];