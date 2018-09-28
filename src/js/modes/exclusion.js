
function exclusion( context )
{
	this.init( context );
}

exclusion.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'exclusion';

	},

	
}


