
function destination_in( context )
{
	this.init( context );
}

destination_in.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'destination-in';

	},

	
}


