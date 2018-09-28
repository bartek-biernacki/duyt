const REV = 13,
      MODES = ["source_over", "source_atop","destination_over", "destination_out", "lighter", "copy", "xor", "multiply","screen", "overlay", "darken", "lighten","color_dodge","color_burn","hard_light","soft_light","difference","exclusion","hue","saturation","color","luminosity"],
      BRUSHES = ["skelet", "mark", "ribbon", "sketchy", "simpler", "loco", "loco2", "colo", "web", "web2", "yigzag", "colo2", "beks"],
      USER_AGENT = navigator.userAgent.toLowerCase();

var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    CANVAS_WIDTH = SCREEN_WIDTH,
    CANVAS_HEIGHT =  SCREEN_HEIGHT,
    BRUSH_SIZE = 1,
    BRUSH_PRESSURE = 1,
    COLOR = [0, 0, 0],
    
    BACKGROUND_COLOR = [255, 255, 255, 50],
    STORAGE = window.localStorage,
    brush,
    mode,
    logo,
    about,
    info,
    saveTimeOut,
    wacom,
    i,
    mouseX = 0,
    mouseY = 0,
    container,
    foregroundColorSelector,
    backgroundColorSelector,
    menu,
    duyt,
    yigzag,
    about,
    ender,
    loco,
    web,
    web2,
    beks,
    web,
    colo2,
    canvas,
    flattenCanvas,
    context,
	source_over,
	source_in,
	source_out,
	source_atop,
	destination_over,
	destination_in,
	destination_out,
	destination_atop,
	lighter,
	copy,
	xor,
	multiply,
	screen,
	overlay, 
	darken,
	lighten,
	color_dodge,
	color_burn,
	hard_light,
	soft_light,
	difference,
	exclusion,
	hue,
	saturation,
	color,
	luminosity,


    isFgColorSelectorVisible = false,
    isBgColorSelectorVisible = false,
    isAboutVisible = false,
    isMenuMouseOver = false,
    shiftKeyIsDown = false,
    altKeyIsDown = false;

init();

function init()
{
	var hash, palette, embed, localStorageImage;
	
	if (USER_AGENT.search("android") > -1 || USER_AGENT.search("iphone") > -1)
		BRUSH_SIZE = 2;	
		
	if (USER_AGENT.search("safari") > -1 && USER_AGENT.search("chrome") == -1) // Safari
		STORAGE = false;
	
	document.body.style.backgroundRepeat = 'repeat';
	document.body.style.backgroundPosition = 'top left';

	
	container = document.createElement('div');
	document.body.appendChild(container);


	canvas = document.createElement("canvas");
	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;
	canvas.style.cursor = 'crosshair';

	container.appendChild(canvas);
	context = canvas.getContext("2d");
	
	flattenCanvas = document.createElement("canvas");
	flattenCanvas.width = SCREEN_WIDTH;
	flattenCanvas.height = SCREEN_HEIGHT;

	palette = new Palette();
	
	foregroundColorSelector = new ColorSelector(palette);
	foregroundColorSelector.addEventListener('change', onForegroundColorSelectorChange, false);
	container.appendChild(foregroundColorSelector.container);

	
	backgroundColorSelector = new ColorSelector(palette);
	backgroundColorSelector.addEventListener('change', onBackgroundColorSelectorChange, false);
	container.appendChild(backgroundColorSelector.container);	
	
	
	menu = new Menu();
	
	menu.foregroundColor.addEventListener('click', onMenuForegroundColor, false);
	menu.foregroundColor.addEventListener('touchend', onMenuForegroundColor, false);
	menu.backgroundColor.addEventListener('click', onMenuBackgroundColor, false);
	menu.backgroundColor.addEventListener('touchend', onMenuBackgroundColor, false);
	menu.selector.addEventListener('change', onMenuSelectorChange, false);
	menu.mode.addEventListener('change', onMenuModeChange, false)
	//menu.about.addEventListener('click', onMenuAbout, false);
	//menu.about.addEventListener('touchend', onMenuAbout, false);
	menu.container.addEventListener('mouseover', onMenuMouseOver, false);
	menu.container.addEventListener('mouseout', onMenuMouseOut, false);
	container.appendChild(menu.container);

	if (STORAGE)
	{
		if (localStorage.canvas)
		{
			localStorageImage = new Image();
		
			localStorageImage.addEventListener("load", function(event)
			{
				localStorageImage.removeEventListener(event.type, arguments.callee, false);
				context.drawImage(localStorageImage,0,0);
			}, false);
			
			localStorageImage.src = localStorage.canvas;			
		}
		
		if (localStorage.brush_color_red)
		{
			COLOR[0] = localStorage.brush_color_red;
			COLOR[1] = localStorage.brush_color_green;
			COLOR[2] = localStorage.brush_color_blue;
		}



		if (localStorage.background_color_red)
		{
			BACKGROUND_COLOR[0] = localStorage.background_color_red;
			BACKGROUND_COLOR[1] = localStorage.background_color_green;
			BACKGROUND_COLOR[2] = localStorage.background_color_blue;
		}
	}

	foregroundColorSelector.setColor( COLOR );
	backgroundColorSelector.setColor( BACKGROUND_COLOR );
	
	

	if (!brush)
	{
		brush = eval("new " + BRUSHES[0] + "(context)");
	}
	
    logo = new Logo();
	
	logo.logo.addEventListener('click', onLogo, false);
	logo.logo.addEventListener('touchend', onLogo, false);
	container.appendChild(logo.container);

	about = new About();
	container.appendChild(about.container);

	info = new Info();
	info.info.addEventListener('click', onInfo, false);
	info.info.addEventListener('touchend', onInfo, false);

	container.appendChild(info.container);
	
	duyt = new Duyt();

	duyt.duyt.addEventListener('click', onDuyt, false);
	duyt.duyt.addEventListener('touchend', onDuyt, false);
	container.appendChild(duyt.container);

    
	ender = new Ender();
	
	ender.ender.addEventListener('click', onEnder, false);
	ender.ender.addEventListener('touchend', onEnder, false);
	container.appendChild(ender.container);
	
	window.addEventListener('mousemove', onWindowMouseMove, false);
	window.addEventListener('resize', onWindowResize, false);
	window.addEventListener('keydown', onWindowKeyDown, false);
	window.addEventListener('keyup', onWindowKeyUp, false);
	
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('mouseout', onDocumentMouseOut, false);
	
	canvas.addEventListener('mousedown', onCanvasMouseDown, false);
	canvas.addEventListener('touchstart', onCanvasTouchStart, false);
	
	onWindowResize(null);
	

}


// WINDOW



function onWindowMouseMove( event )
{
	mouseX = event.clientX;
	mouseY = event.clientY;
}

function onWindowResize()
{
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;


	about.container.style.left = ((SCREEN_WIDTH - about.container.offsetWidth) / 2) + 'px';
	about.container.style.top = ((SCREEN_HEIGHT - about.container.offsetHeight) / 2) + 'px';
}

function onWindowKeyDown( event )
{
	if (shiftKeyIsDown)
		return;
		
	switch(event.keyCode)
	{
		case 16: // Shift
			shiftKeyIsDown = true;
			foregroundColorSelector.container.style.left = mouseX - 125 + 'px';
			foregroundColorSelector.container.style.top = mouseY - 125 + 'px';
			foregroundColorSelector.container.style.visibility = 'visible';
			break;
			
		case 18: // Alt
			altKeyIsDown = true;
			break;
			
		case 68: // d
			if(BRUSH_SIZE > 1) BRUSH_SIZE --;
			break;
		
		case 70: // f
			BRUSH_SIZE ++;
			break;	

		case 69: // e
		    BRUSH_SIZE = 10;
			break;		
	}
}

function onWindowKeyUp( event )
{
	switch(event.keyCode)
	{
		case 16: // Shift
			shiftKeyIsDown = false;
			foregroundColorSelector.container.style.visibility = 'hidden';			
			break;
			
		case 18: // Alt
			altKeyIsDown = false;
			break;

		case 90: // z
			
			brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
			break;
		case 66: // b
			document.body.style.backgroundImage = null;
			break;
	}
	
	context.lineCap = BRUSH_SIZE == 1 ? 'butt' : 'round';	
}




// DOCUMENT

function onDocumentMouseDown( event )
{
	if (!isMenuMouseOver)
		event.preventDefault();
}

function onDocumentMouseOut( event )
{
	onCanvasMouseUp();
}




// COLOR SELECTORS

function onForegroundColorSelectorChange( event )
{
	COLOR = foregroundColorSelector.getColor();
	
	menu.setForegroundColor( COLOR );

	if (STORAGE)
	{
		localStorage.brush_color_red = COLOR[0];
		localStorage.brush_color_green = COLOR[1];
		localStorage.brush_color_blue = COLOR[2];		
	}
}


function onBackgroundColorSelectorChange( event )
{
	BACKGROUND_COLOR = backgroundColorSelector.getColor();
	
	menu.setBackgroundColor( BACKGROUND_COLOR );
	
	document.body.style.backgroundColor = 'rgb(' + BACKGROUND_COLOR[0] + ', ' + BACKGROUND_COLOR[1] + ', ' + BACKGROUND_COLOR[2] + ')';
	
	if (STORAGE)
	{
		localStorage.background_color_red = BACKGROUND_COLOR[0];
		localStorage.background_color_green = BACKGROUND_COLOR[1];
		localStorage.background_color_blue = BACKGROUND_COLOR[2];				
	}
}


// MENU

function onMenuForegroundColor()
{
	cleanPopUps();
	
	foregroundColorSelector.show();
	foregroundColorSelector.container.style.left = ((SCREEN_WIDTH - foregroundColorSelector.container.offsetWidth) / 2) + 'px';
	foregroundColorSelector.container.style.top = ((SCREEN_HEIGHT - foregroundColorSelector.container.offsetHeight) / 2) + 'px';

	isFgColorSelectorVisible = true;
}


function onMenuBackgroundColor()
{
	cleanPopUps();

	backgroundColorSelector.show();
	backgroundColorSelector.container.style.left = ((SCREEN_WIDTH - backgroundColorSelector.container.offsetWidth) / 2) + 'px';
	backgroundColorSelector.container.style.top = ((SCREEN_HEIGHT - backgroundColorSelector.container.offsetHeight) / 2) + 'px';

	isBgColorSelectorVisible = true;
}

function onMenuSelectorChange()
{
	if (BRUSHES[menu.selector.selectedIndex] == "")
		return;


  brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
}

function onMenuModeChange()
{
	if (MODES[menu.mode.selectedIndex] == "")
		return;


  mode = eval("new " + MODES[menu.mode.selectedIndex] + "(context)");

}



function onMenuMouseOver()
{
	isMenuMouseOver = true;
}

function onMenuMouseOut()
{
	isMenuMouseOver = false;
}

	

function onMenuClear()
{
	if (!confirm("Are you sure?"))
		return;
		
	context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	saveToLocalStorage();

}





function onMenuAbout()
{
	cleanPopUps();

	isAboutVisible = true;
	about.show();
}






function onLogo()
{
	cleanPopUps();

	isAboutVisible = true;
	about.show();
	
}


function onInfo()
{
	cleanPopUps();

	isAboutVisible = true;
	about.show();
	
}


function onDuyt()
{


	if (!confirm("Reload?"))
		return;
	context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	//saveToLocalStorage();

}

// ENDER



function onEnder()
{
	
	
	brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
}

// CANVAS

function onCanvasMouseDown( event )
{
	var data, position;

	clearTimeout(saveTimeOut);
	cleanPopUps();
	
	if (altKeyIsDown)
	{
		flatten();
		
		data = flattenCanvas.getContext("2d").getImageData(0, 0, flattenCanvas.width, flattenCanvas.height).data;
		position = (event.clientX + (event.clientY * canvas.width)) * 4;
		
		foregroundColorSelector.setColor( [ data[position], data[position + 1], data[position + 2] ] );
		
		return;
	}
	
	BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
	
	brush.strokeStart( event.clientX, event.clientY );

	window.addEventListener('mousemove', onCanvasMouseMove, false);
	window.addEventListener('mouseup', onCanvasMouseUp, false);
}

function onCanvasMouseMove( event )
{
	BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
	
	brush.stroke( event.clientX, event.clientY );
}

function onCanvasMouseUp()
{
	brush.strokeEnd();
	
	window.removeEventListener('mousemove', onCanvasMouseMove, false);
	window.removeEventListener('mouseup', onCanvasMouseUp, false);
	
	if (STORAGE)
	{
		clearTimeout(saveTimeOut);
		saveTimeOut = setTimeout(saveToLocalStorage, 2000, true);
	}
}


//

function onCanvasTouchStart( event )
{
	cleanPopUps();		

	if(event.touches.length == 1)
	{
		event.preventDefault();
		
		brush.strokeStart( event.touches[0].pageX, event.touches[0].pageY );
		
		window.addEventListener('touchmove', onCanvasTouchMove, false);
		window.addEventListener('touchend', onCanvasTouchEnd, false);
	}
}

function onCanvasTouchMove( event )
{
	if(event.touches.length == 1)
	{
		event.preventDefault();
		brush.stroke( event.touches[0].pageX, event.touches[0].pageY );
	}
}

function onCanvasTouchEnd( event )
{
	if(event.touches.length == 0)
	{
		event.preventDefault();
		
		brush.strokeEnd();

		window.removeEventListener('touchmove', onCanvasTouchMove, false);
		window.removeEventListener('touchend', onCanvasTouchEnd, false);
	}
}

//

function saveToLocalStorage()
{
	localStorage.canvas = canvas.toDataURL('image/png');
}

function flatten()
{
	var context = flattenCanvas.getContext("2d");
	
	context.fillStyle = 'rgb(' + BACKGROUND_COLOR[0] + ', ' + BACKGROUND_COLOR[1] + ', ' + BACKGROUND_COLOR[2] + ')';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(canvas, 0, 0);
}

function cleanPopUps()
{
	if (isFgColorSelectorVisible)
	{
		foregroundColorSelector.hide();
		isFgColorSelectorVisible = false;
	}
		
	if (isBgColorSelectorVisible)
	{
		backgroundColorSelector.hide();
		isBgColorSelectorVisible = false;
	}
	
	
	if (isAboutVisible)
	{
		about.hide();
		isAboutVisible = false;
	}
}
