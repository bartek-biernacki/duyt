// Web2 brush.
// Script is based on  Neighbour Points Connection Concept - created by Zefrank http://www.zefrank.com/scribbler/about.html
// Included in Harmony created by Mr.mrdoob https://mrdoob.com/projects/harmony/
// You should know that. I just moved or broke few things in the process ;>
// Enjoy.

// It's not even alpha version but it works.


function web2( context )
{
	this.init( context );
}

web2.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'screen';

		this.points = new Array();
		this.count = 0;
	},

	destroy: function()
	{
		clearInterval(this.interval);
	},

	strokeStart: function( mouseX, mouseY )
	{
		this.prevMouseX = mouseX;
		this.prevMouseY = mouseY;
	},

	stroke: function( mouseX, mouseY )
	{
		var i, dx, dy, d;

		this.points.push( [ mouseX, mouseY ] );

		this.context.lineWidth = BRUSH_SIZE;
		this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";

		this.context.beginPath();
		this.context.moveTo(this.prevMouseX, this.prevMouseY);
		this.context.lineTo(mouseX, mouseY);
		this.context.stroke();

		for (i = 0; i < this.points.length; i++)
		{
			dx = this.points[i][0] - this.points[this.count][0];
			dy = this.points[i][1] - this.points[this.count][1];
			d = dx * dx / 2 + dy * dy * 2 ;

			if (d < 8000 && Math.random() > (d / 11100))
			{
				this.context.beginPath();
				this.context.moveTo( this.points[this.count][0] + (dx * 1), this.points[this.count][1] + (dy * 1));
				this.context.lineTo( this.points[i][0] - (dx * 1), this.points[i][1] - (dy * 1));
				this.context.stroke();
			}
		}

		this.prevMouseX = mouseX;
		this.prevMouseY = mouseY;

		this.count ++;
	},

	strokeEnd: function()
	{
		
	}
}


