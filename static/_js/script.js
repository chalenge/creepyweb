var vid = 1

$(document).ready(function() {
	var url = "";
	videojs.options.flash.swf = "video-js.swf";
	
	var appData = new Firebase("https://creepyweb.firebaseio.com");
	//LISTEN FOR REALTIME URL CHANGES
	appData.on("value", function(data) {
	  url = data.val() ? data.val().url : "";
	  alert("My name is " + url);
	  loadvid(url)
	});
})

function loadvid(url) {
	videojs("creepy-video").ready(function(){
	  var myPlayer = this;

	  if (url == 'cnn') {
	  	myPlayer.src({ type: "video/mp4", src: "../static/_videos/Google_ALS_Challenge.mp4" });	
	  }
	  else {
	  	myPlayer.src({ type: "video/mp4", src: "../static/_videos/yves.mp4" });
	  }
	  
	  myPlayer.play();

	});
}

// window.setInterval(function(){
//   vid++;

//   console.log(typ);
//   appData.set({ url: typ });
// }, 5000);
