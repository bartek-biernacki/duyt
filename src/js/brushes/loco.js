// Loco brush.
// Script is based on  Neighbour Points Connection Concept - created by Zefrank http://www.zefrank.com/scribbler/about.html
// Included in Harmony created by Mr.mrdoob https://mrdoob.com/projects/harmony/
// You should know that. I just moved or broke few things in the process ;>
// Enjoy.

// It's not even alpha version but it works.
// globalCompositOperation - destination-out makes great eraser from it.


function loco( context )
{
	this.init( context );
}

loco.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'destination-out';

		this.points = new Array();
		this.count = 0;
	},

	destroy: function()
	{
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
		this.context.strokeStyle = "rgba(255, 255, 255, " + 0.5 * BRUSH_PRESSURE + ")";

		this.context.beginPath();
		this.context.moveTo(this.prevMouseX, this.prevMouseY);
		this.context.lineTo(mouseX, mouseY);
		this.context.stroke();

		for (i = 0; i < this.points.length; i++)
		{
			dx = this.points[i][0] - this.points[this.count][0];
			dy = this.points[i][1] - this.points[this.count][1];
			d = dx * dx + dy * dy;

			if (d < 1000 && Math.random() > (d / 9000))
			{
				this.context.beginPath();
				this.context.moveTo( this.points[this.count][0] + (dx * 0.2), this.points[this.count][1] + (dy * 0.28));
				this.context.lineTo( this.points[i][0] - (dx * 0.09), this.points[i][1] - (dy * 0.1));
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
