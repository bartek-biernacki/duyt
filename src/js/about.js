function About()
{
	this.init();	
}

About.prototype = 
{
	container: null,
	about: null,

	init: function()
	{
		var text, containerText;
		
		this.container = document.createElement("div");
		this.container.className = 'about';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';
		
		containerText = document.createElement("div");
		containerText.style.margin = '30px 30px';
		containerText.style.textAlign = 'center';
		this.container.appendChild(containerText);

		
		text = document.createElement("div");

		text.innerHTML = '<p><img src="img/duyt_w.svg" style="width: 100px;"></p><small>It was lying in a drawer for the past 5 years...  and it still is project in progress.</small><p>DUYT is an experimental procedural drawing tool.</p><p><b>SHIFT</b> brings up color wheel.</p><p><b>Z</b> resets brush. (<b>important!</b>)</p><p><b>Alt</b> picks up color from background.</p><p><b>D and F</b> change stroke size.</p></br><p><b><large>There is no undo and thats the point!</large></b></p><p>You can learn and create something new from your mistakes. ;></p><p><small>or use those new erasing brushes</small></p></br></br><p>Code base originally written by <a href="https://twitter.com/mrdoob">Mrdoob</a> for <a href="https://mrdoob.com/projects/harmony/">Harmony</a></p><p>I just added some functions, changed, moved or broke few things inside and made it work differently.</p></br><p>Needs a tests gallery, explanation and proper manual.</p></br><p>Most of brushes are based on Neighbour Points Connection Concept - created by <a href="https://twitter.com/zefrank">Zefrank</a> <a href="http://www.zefrank.com/scribbler/about.html" target="_blank">About.</a></p><p>Later included in Harmony created by <a href="https://twitter.com/mrdoob">Mrdoob</a> <a href="https://mrdoob.com/projects/harmony/" target="_blank">Project.</a></p></br><p>Not even Alpha version but it works.</p><p>Use screenshots and command/ctrl+ command/ctrl- ;></p><small>Its all in a browser. Play with it.</small></br></br><p>Enjoy!</p><p><a href="https://twitter.com/Biernacki">Bartek</a></p>';

		containerText.appendChild(text);
		
	},
	
	show: function()
	{
		this.container.style.visibility = 'visible';		
	},
	
	hide: function()
	{
		this.container.style.visibility = 'hidden';
	}
}
