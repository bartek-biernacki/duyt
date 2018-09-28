
function destination_over( context )
{
	this.init( context );
}

destination_over.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'destination-over';

	},

	
}


