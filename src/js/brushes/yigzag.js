function yigzag( context )
{
	this.init( context );
}

yigzag.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	init: function( context )
	{
		
		this.context = context;
		this.context.globalCompositeOperation = 'screen';

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
		angle = 42.57079633;
		px = Math.cos(angle) * dx - Math.sin(angle) * dy;
		py = Math.sin(angle) * dx + Math.cos(angle) * dy;

		this.context.lineWidth = BRUSH_SIZE;
		this.context.fillStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE / 3 + ")";
		this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE /1  + ")";
		
		this.context.beginPath();
		this.context.moveTo(this.prevMouseX - px, this.prevMouseY - py);
		this.context.lineTo(this.prevMouseX + px, this.prevMouseY + py);
		this.context.lineTo(mouseX - px, mouseY - py);
		this.context.lineTo(mouseX + px, mouseY + py);
		
		this.context.fill();
		this.context.stroke();

		this.prevMouseX = mouseX;
		this.prevMouseY = mouseY;
	},

	strokeEnd: function()
	{
		
	}
}
