
function luminosity( context )
{
	this.init( context );
}

luminosity.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'luminosity';

	},

	
}


