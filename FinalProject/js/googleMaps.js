	function init_map() {
		var var_location = new google.maps.LatLng(41.633505,-71.471759);

		var var_mapoptions = {
	  		center: var_location,
	  		zoom: 14
		};

		var var_marker = new google.maps.Marker({
			position: var_location,
	    	map: var_map,
			title:"Grandmaster Hong's World Class Taekwondo Center"});

		var var_map = new google.maps.Map(document.getElementById("map-container"),
	    	var_mapoptions);

		var_marker.setMap(var_map);	
	}

//prevent loading on every page
	google.maps.event.addDomListener(window, 'load', init_map);