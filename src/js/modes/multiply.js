
function multiply( context )
{
	this.init( context );
}

multiply.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'multiply';

	},

	
}


