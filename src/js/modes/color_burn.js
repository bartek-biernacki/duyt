
function color_burn( context )
{
	this.init( context );
}

color_burn.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'color_burn';

	},

	
}


