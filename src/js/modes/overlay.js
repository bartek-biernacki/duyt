
function overlay( context )
{
	this.init( context );
}

overlay.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'overlay';

	},

	
}


