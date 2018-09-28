function Ender()
{	
	this.init();
}

Ender.prototype = 
{
	container: null,
	ender: null,
	
	
	init: function()
	{
		var option, space, separator, color_width = 64, color_height = 64;

		this.container = document.createElement("div");
		this.container.className = 'ender';
		
		this.ender = document.createElement("div");
		this.ender.className = 'ender';
		this.ender.innerHTML = '';
		this.container.appendChild(this.ender);
		
	},
	

}
