function ribbon( context )
{
	this.init( context );
}

ribbon.prototype =
{
	context: null,

	mouseX: null, mouseY: null,

	painters: null,

	interval: null,

	init: function( context )
	{
		var scope = this;
		
		this.context = context;

		this.mouseX = SCREEN_WIDTH / 2;
		this.mouseY = SCREEN_HEIGHT / 2;

		this.painters = new Array();
		
		for (var i = 0; i < 100; i++)
		{
			this.painters.push({ dx: SCREEN_WIDTH / 2, dy: SCREEN_HEIGHT / 2, ax:0, ay: 0, div:0.5, ease: 1});
		}
		
		this.interval = setInterval( update, 40/4444 );
		
		function update()
		{
			var i;
			
			this.context.lineWidth = BRUSH_SIZE *3;			
			this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", "+ 0.3 * BRUSH_PRESSURE + ")";
			
			for (i = 0; i < scope.painters.length; i++)
			{
				scope.context.beginPath();
				scope.context.moveTo(scope.painters[i].dx, scope.painters[i].dy);		

				scope.painters[i].dx -= scope.painters[i].ax = (scope.painters[i].ax + (scope.painters[i].dx - scope.mouseX)/2*scope.painters[i].div)*0.8*scope.painters[i].ease*0.68;
				scope.painters[i].dy -= scope.painters[i].ay = (scope.painters[i].ay + (scope.painters[i].dy - scope.mouseY)/2*scope.painters[i].div)*0.8*scope.painters[i].ease*0.68;
				scope.context.lineTo(scope.painters[i].dx, scope.painters[i].dy);
				scope.context.stroke();
			}
		}
	},
	
	destroy: function()
	{
		clearInterval(this.interval);
	},

	strokeStart: function( mouseX, mouseY )
	{
		this.mouseX = mouseX;
		this.mouseY = mouseY

		for (var i = 0; i < this.painters.length; i++)
		{
			this.painters[i].dx = mouseX;
			this.painters[i].dy = mouseY;
		}

		this.shouldDraw = true;
	},

	stroke: function( mouseX, mouseY )
	{
		this.mouseX = mouseX;
		this.mouseY = mouseY;
	},

	strokeEnd: function()
	{
	
	}
}
