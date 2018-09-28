
function hard_light( context )
{
	this.init( context );
}

hard_light.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'hard_light';

	},

	
}


