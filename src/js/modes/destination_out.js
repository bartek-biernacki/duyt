
function destination_out( context )
{
	this.init( context );
}

destination_out.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'destination-out';

	},

	
}


