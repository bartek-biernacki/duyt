function Duyt()
{	
	this.init();
}

Duyt.prototype = 
{
	container: null,
	duyt: null,

	
	
	init: function()
	{
		var option, space, separator, color_width = 64, color_height = 64;

		this.container = document.createElement("div");
		this.container.className = 'duyt';
		this.container.cursor = "crosshair";

		
		this.duyt = document.createElement("button");
		this.duyt.className = 'duyt';
		this.duyt.innerHTML = '';
		this.container.appendChild(this.duyt);
		
	},
	

}
