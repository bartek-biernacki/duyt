function Strokender()
{	
	this.init();
}

Strokender.prototype = 
{
	container: null,
	
	destroy: null,
	
	
	init: function()
	{
		var option, space, separator, color_width = 64, color_height = 64;

		this.container = document.createElement("div");
		this.container.className = 'strokecontainer';
		this.container.style.position = 'absolute';
		this.container.style.top = '100px';
		this.container.style.left = '100px';
		
		
		
		
		this.destroy = document.createElement("Destroy");
		this.destroy.className = 'button';
		this.destroy.innerHTML = 'Destroy';
		this.container.appendChild(this.destroy);
		
	},
	

}
