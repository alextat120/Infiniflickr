$(document).ready(function() {
	var tag;
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	 $("#search").click(function() { //Using Jquery selector for ID search
	  tag = $(":text").val();
	  alert("Gonna load new pics: " + tag);
	$.getJSON( flickerAPI, {
		tags: tag,
		tagmode: "any",
		format: "json"
	})
	.done(function( data ) {
		$.each( data.items, function( i, item ) {
			$( "<img>" ).attr( "src", item.media.m ).appendTo( "#pics" );
			if ( i === 10 ) {
			return false;
			}
		});
		});
   });
   
   	 $("#delete").click(function() { //Using Jquery selector for ID delete
		$("#pics").empty(); //empties the child of the DOM ID pics
   });
})();


