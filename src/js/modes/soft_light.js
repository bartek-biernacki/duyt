
function soft_light( context )
{
	this.init( context );
}

soft_light.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'soft_light';

	},

	
}


