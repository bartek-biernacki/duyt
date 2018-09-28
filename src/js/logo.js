function Logo()
{	
	this.init();
}

Logo.prototype = 
{
	container: null,
	logo: null,
	
	
	init: function()
	{
		var option, space, separator, color_width = 64, color_height = 64;

		this.container = document.createElement("div");
		this.container.className = 'logo';
		
		
		this.logo = document.createElement("div");
		this.logo.className = 'logo';
		this.logo.innerHTML = '';
		this.container.appendChild(this.logo);
		
	},
	

}
