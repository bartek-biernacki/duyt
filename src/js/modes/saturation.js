
function saturation( context )
{
	this.init( context );
}

saturation.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'saturation';

	},

	
}


