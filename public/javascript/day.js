// each day is a new Day 
function Day(){
	this.hotel; 
	this.res;
	this.things;
	this.markers = [];
	this.coordinates = [];
};

Day.prototype.itinerary = function(){
	return templates.getItin(this.hotel, this.res, this.things);
};

Day.prototype.saveErrThang = function(){
	var hotel = $("#hotel-ul").html().trim();
	var res = $("#res-ul").html().trim();
	var things = $('#things-ul').html().trim();

	this.hotel = hotel; // [] array of hotel
	this.res = res;
	this.things = things;
};

Day.prototype.removeMarkers = function(){
//	this.markers.forEach(function(mark){
//		mark.setMap(null);
//	});
    for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
    }
};

Day.prototype.showMarkers = function(){
	this.coordinates.forEach(function(coo){

        var location = drawLocation(coo)
        location.setMap(map);
	});
};