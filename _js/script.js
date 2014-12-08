$(document).ready(function() {
	var url = "";
	videojs.options.flash.swf = "video-js.swf";
	
	var appData = new Firebase("https://creepyweb.firebaseio.com");
	//LISTEN FOR REALTIME URL CHANGES
	appData.on("value", function(data) {
	  url = data.val() ? data.val().url : "";
	  console.log(url);
	  loadvid(url)
	});
})

function loadvid(url) {
	videojs("creepy-video").ready(function(){
	  var myPlayer = this;

	  if (url == 'www.cnn.com') {
	  	myPlayer.src({ type: "video/mp4", src: "_videos/v2-cnn.mp4" });	
	  }
	  else if (url == 'www.huffingtonpost.com' || url == "live.huffingtonpost.com"){
	  	myPlayer.src({ type: "video/mp4", src: "_videos/v3-huffpo.mp4" });	
	  }
	  else if (url == "www.yelp.com") {
	  	myPlayer.src({ type: "video/mp4", src: "_videos/v4-yelp.mp4" });	
	  }
	  else if (url == "www.wikipedia.org" || url == "en.wikipedia.org") {
	  	myPlayer.src({ type: "video/mp4", src: "_videos/v5-wiki.mp4" });	
	  }
	  else {
	  	myPlayer.src({ type: "video/mp4", src: "_videos/v1-trees.mp4" });
	  }
	  
	  myPlayer.play();

	});
}

