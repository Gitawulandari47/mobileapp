document.addEventListener('init', function(event) {
	var page = event.target;

	if (page.id === 'beranda'){
		page.querySelector('#tips').onclick = function(){
			document.querySelector('#myNavigator').pushPage(
				'pages/tips.html', 
				{
					data : {title: 'tips' }
				}

				);
		}

		page.querySelector('#peralatan').onclick = function(){
			document.querySelector('#myNavigator').pushPage(
				'pages/peralatan.html', 
				{
					data : {title: 'tips' }
				}

				);
		}

		page.querySelector('#informasi').onclick = function(){
			document.querySelector('#myNavigator').pushPage(
				'pages/informasi.html', 
				{
					data : {title: 'tips' }
				}

				);
		}
	}
});