
function destination_atop( context )
{
	this.init( context );
}

destination_atop.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'destination-atop';

	},

	
}


