
function lighter( context )
{
	this.init( context );
}

lighter.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'lighter';

	},

	
}


