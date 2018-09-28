// Colo2 brush.

// Included in Harmony created by Mr.mrdoob https://mrdoob.com/projects/harmony/
// You should know that. I just moved or broke few things in the process ;>
// Enjoy.

// It's not even alpha version but it works.
// This one is quite specific. Good for furs etc.

function colo2( context )
{
	this.init( context );
}

colo2.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'source-over';
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
		var dx, dy, angle, px, py;
		
		dx = mouseX - this.prevMouseX;
		dy = mouseY - this.prevMouseY;
		angle = -60;
		px = Math.cos(angle) * 1.3 * dx - Math.sin(angle) * dy ;
		py = Math.sin(angle) * 1.3 * dx + Math.cos(angle) * dy ;

		this.context.lineWidth = BRUSH_SIZE;
		this.context.fillStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE + ")";
		this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE + ")";
		
		this.context.beginPath();
		this.context.moveTo(this.prevMouseX - px, this.prevMouseY - py);
		this.context.lineTo(this.prevMouseX - px, this.prevMouseY - py);
		this.context.lineTo(mouseX + px *3 , mouseY + py *3);
		//this.context.lineTo(mouseX + px, mouseY + py);
		//this.context.lineTo(this.prevMouseX - px, this.prevMouseY - py);
		//this.context.fill();
		this.context.stroke();

		this.prevMouseX = mouseX;
		this.prevMouseY = mouseY;
	},

	strokeEnd: function()
	{
		
	}
}
