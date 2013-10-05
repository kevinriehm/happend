document.addEventListener('deviceready',function() {
	setTimeout(function() {alert('Looking for location.');
		navigator.geolocation.getCurrentPosition(function(pos) {
			alert('geolocation success: ' + pos.coords.latitude);
		},function(error) {
			alert('geolocation error: ' + error);
		},{
			enableHighAccuracy: true
		});
	},1000);
},false);

function handleAndroidPush(push) {
	$('#push_messages').append('<li>' + JSON.stringify(push) + '</li>');
}
