
function lighten( context )
{
	this.init( context );
}

lighten.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'lighten';

	},

	
}


