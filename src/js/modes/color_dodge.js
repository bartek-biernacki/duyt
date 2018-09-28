
function color_dodge( context )
{
	this.init( context );
}

color_dodge.prototype =
{
	context: null,

	prevMouseX: null, prevMouseY: null,

	points: null, count: null,

	init: function( context )
	{
		this.context = context;
		this.context.globalCompositeOperation = 'color_dodge';

	},

	
}


