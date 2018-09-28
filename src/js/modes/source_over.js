
function source_over( context )
{
	this.init( context );
}

source_over.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'source-over';

	},

	
}


