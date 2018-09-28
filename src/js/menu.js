function Menu()
{	
	this.init();
}

Menu.prototype = 
{

	
	init: function()
	{
		var option, space, separator, color_width = 41, color_height = 41

		this.container = document.createElement("div");
		this.container.className = 'gui';

		
		this.foregroundColor = document.createElement("canvas");
	
		this.foregroundColor.style.borderRadius = '100%';
		this.foregroundColor.style.border = '1px inset rgba(99, 99, 99, 0.2)';
		this.foregroundColor.width = color_width;
		this.foregroundColor.height = color_height;
		this.container.appendChild(this.foregroundColor);
		
		this.setForegroundColor( COLOR );


		
		this.backgroundColor = document.createElement("canvas");
		this.backgroundColor.style.borderRadius = '100%'
		this.backgroundColor.style.border = '1px inset rgba(99, 99, 99, 0.32)';
		this.backgroundColor.width = color_width;
		this.backgroundColor.height = color_height;
		this.container.appendChild(this.backgroundColor);

		this.setBackgroundColor( BACKGROUND_COLOR );
		



		this.selector = document.createElement("select");
		
		for (i = 0; i < BRUSHES.length; i++)
		{
		option = document.createElement("option");
		option.id = i;
		option.innerHTML = BRUSHES[i];
		this.selector.appendChild(option);
	    }

		this.container.appendChild(this.selector);


		this.mode = document.createElement("select");
		for (i = 0; i < MODES.length; i++)
		{
			option = document.createElement("option");
			option.id = i;
			option.innerHTML = MODES[i];
			this.mode.appendChild(option);
		}
		this.container.appendChild(this.mode);


	},
	
	setForegroundColor: function( color )
	{
		var context = this.foregroundColor.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, this.foregroundColor.width, this.foregroundColor.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.1)';
		context.fillRect(0, 0, this.foregroundColor.width, 1);
	},
	

	setBackgroundColor: function( color )
	{
		var context = this.backgroundColor.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, this.backgroundColor.width, this.backgroundColor.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.1)';
		context.fillRect(0, 0, this.backgroundColor.width, 1);		
	}

}
