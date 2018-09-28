function Info()
{	
	this.init();
}

Info.prototype = 
{
	container: null,
	info: null,
	
	
	init: function()
	{
		var option, space, separator, color_width = 64, color_height = 64;

		this.container = document.createElement("div");
		this.container.className = 'info';
		
		this.info = document.createElement("div");
		this.info.className = 'info';
		this.info.innerHTML = '';
		this.container.appendChild(this.info);
		
	},
	

}
